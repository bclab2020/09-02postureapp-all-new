/**
 * dashboard.js
 * ---------------------------------------------------------------------------
 * 測定完了後のダッシュボード/レポート画面の生成。api.js（Gemini AIまたは
 * オフラインルールベース）による臨床レポート文と、biomechanics.jsで
 * 算出した各種指標をカード形式で表示する。
 */

import { state, reportDataStore, getEffectiveArucoMidlineX, isStaticMode, STATIC_MODES } from '../core/state.js';
import { patientNameInput, heightInput, footSizeInput } from '../core/dom.js';
import apiManager from '../api.js';
import { saveExpertComment } from './specialist.js';
import biomechanics from '../biomechanics.js';
import { drawPoseOverlay } from './controls.js';
import { openCounselingModal } from './counseling.js';

/**
 * レポート本文(Markdown)を表示用HTMLへ変換する共通ヘルパー。
 * 既存の単一ポーズ向けAIレポートと、v4.6.16で追加した「4方向総合所見」
 * の両方から使う（元は前者用に個別実装されていたロジックをそのまま抽出）。
 */
function formatMarkdownToHtml(markdown) {
    return (markdown || "")
        .replace(/### (.*)/g, '<h2>$1</h2>')
        .replace(/## (.*)/g, '<h2>$1</h2>')
        .replace(/- \*\*(.*?)\*\*:/g, '<li><strong>$1</strong>: ')
        .replace(/- (.*)/g, '<li>$1</li>')
        .replace(/\n\n/g, '<p></p>')
        .replace(/\n/g, '<br>');
}

var _dataService = null;

export function initDashboard(dataService) {
    _dataService = dataService;
    window.saveExpertComment = function () { saveExpertComment(dataService); };

    // 「✖ 閉じる」は通常ただ閉じるだけでよいが、履歴の4面まとめ画面
    // （js/ui/batchReview.jsのhistoryモード）からレポートを開いた場合は、
    // 閉じたあとに元の4面まとめ画面へ戻す必要があるため、
    // state.dashboardReturnTargetを見て振り分ける。
    var dashboardCloseBtn = document.getElementById('dashboardCloseBtn');
    if (dashboardCloseBtn) {
        dashboardCloseBtn.onclick = function () {
            document.getElementById('dashboardOverlay').style.display = 'none';
            // 「4方向総合所見」用に一時的にセットされたmultiViewSessionIdsは、
            // レポートを閉じた時点で必ずクリアする。次に開くレポートが
            // 単独セッション由来なのか4面まとめ由来なのかは、その都度
            // 呼び出し側が明示的にセットし直す設計（js/ui/batchReview.js参照）。
            state.multiViewSessionIds = null;
            if (state.dashboardReturnTarget === 'historyBatch') {
                state.dashboardReturnTarget = null;
                if (window.__showHistoryBatchView) window.__showHistoryBatchView();
            } else if (state.dashboardReturnTarget === 'dynConfirmHistory') {
                // 動作解析の撮影確認画面(js/ui/dynConfirm.js)の履歴モードから
                // 「📄 レポートを見る」を開いた場合、閉じたら同じ確認画面へ
                // 戻す（historyBatchと同じ考え方、v4.6.24）。
                state.dashboardReturnTarget = null;
                if (window.__showDynConfirmHistoryView) window.__showDynConfirmHistoryView();
            }
        };
    }

    window.prepareAndPrintReport = async function () {
        // 2026-08-18追加: 静止4方向は本来、撮影完了直後に自動で出る「4面確認・
        // 修正画面」の「✅ この内容で確定してレポート作成」（js/ui/batchReview.js
        // のfinalizeBatch()）から確定するのが正規の経路で、これを通ると4方向が
        // status:'draft'→'final'になり、履歴一覧で1件の「4面測定」としてまとまる
        // （js/ui/history.jsのisGroupable判定）。しかし各ポーズ撮影直後の再生
        // ツールバーに常設されている「📄 レポート」ボタン（#printReportBtn、
        // 個々のポーズをその場で確認する用途）を、4面目（右側面）の直後に押すと、
        // 4面確認画面を経由せずレポートだけが表示され、裏の4セッションは
        // draftのまま確定されずに残ってしまう不具合があった（企画者からのご指摘、
        // 2026-08-18：「履歴一覧に4面がバラバラの未確定項目として並ぶ」）。
        // ここでは「ライブ撮影中（履歴閲覧・微調整中ではない）・静止4方向・
        // 4面すべて撮り終えている」場合に限り、レポート生成の直前に4セッションを
        // まとめて確定する。finalizeBatch()と同じ処理をここでも行うことで、
        // どちらのボタンからレポートを見ても履歴が正しく1件にまとまるようにする。
        // 4面が揃っていない途中経過での単独プレビュー（例: 前面だけ撮って
        // 気になって確認する）では発動しない（batchIds.lengthが4未満のため）。
        if (!state.isHistoryPlaybackSession && isStaticMode(state.currentTab) && _dataService) {
            var batchIds = STATIC_MODES.map(function (m) { return state.currentBatchSessionIds[m]; }).filter(Boolean);
            if (batchIds.length === STATIC_MODES.length) {
                try {
                    for (var bi = 0; bi < batchIds.length; bi++) {
                        await _dataService.finalizeSession(batchIds[bi]);
                    }
                } catch (e) {
                    console.error('[dashboard] Failed to auto-finalize static batch on report view', e);
                }
                var stillOpenBatchOverlay = document.getElementById('batchReviewOverlay');
                if (stillOpenBatchOverlay) stillOpenBatchOverlay.style.display = 'none';
                STATIC_MODES.forEach(function (m) { state.currentBatchSessionIds[m] = null; });
                if (typeof window.refreshHistoryList === 'function') window.refreshHistoryList();
            }
        }

        var overlay = document.getElementById('dashboardOverlay');
        var grid = document.getElementById('dashGrid');

        grid.innerHTML = '<div style="grid-column: 1/-1; color: var(--accent-blue); text-align:center; font-size:20px; padding:50px;">📄 レポート生成中...</div>';
        overlay.style.display = 'block';

        var patName = patientNameInput.value.trim() || "ゲスト";

        var activeSession = {
            mode: state.currentTab,
            timestamp: Date.now(),
            patientName: patName,
            height: parseFloat(heightInput.value) || 170,
            footSize: parseFloat(footSizeInput.value) || 25,
            pelvicTilt: state.estimatedPelvicTilt,
            pxToCmRatio: state.pxToCmRatio,
            // 2026-08-03追加: 重心動揺(sway)の実寸mm指標(js/api.js参照)に使う。
            // 撮影直後はライブの現在値、履歴からのレポート表示は
            // dynConfirm.jsのviewHistoryReport()がこのセッション撮影時点の
            // 値へ揃えてから呼ぶ（pxToCmRatioと同じ考え方）。
            floorHomography: state.floorHomography,
            // 2026-08-05追加: 研究機関向け「静止姿勢: アルコ正中線モード」。
            // 撮影直後はライブの現在値、履歴からのレポート表示はdynConfirm.js
            // のviewHistoryReport()/batchReview.jsの報告書生成箇所が、この
            // セッション撮影時点の値へ揃えてから呼ぶ（pxToCmRatioと同じ
            // 考え方）。js/api.jsのextractMetrics()が荷重左右比率の基準点
            // 差し替えに使う。getEffectiveArucoMidlineX()で「トグルON かつ
            // 静止4方向 かつ 校正済み」の場合だけ値を渡す（stateの
            // arucoMidlineX自体はuseArucoMidlineがOFFでも校正さえあれば
            // 値を保持し続けるため、ここでゲートしないとOFF時にも
            // 誤って使われてしまう）。
            capturedArucoMidlineX: getEffectiveArucoMidlineX(state.currentTab),
            capturedArucoMidlineY: (getEffectiveArucoMidlineX(state.currentTab) !== null) ? state.arucoMidlineY : null,
            // 2026-08-05追加（不具合修正）: 静止4方向のroll（端末傾き）補正
            // （v4.6.20）・アルコ正中線のroll補正（v4.9.0）が、js/api.jsの
            // extractMetrics()内で`session.capturedRollDeg`と
            // `session.canvasWidth/Height`の有無を見て発動する作りになって
            // いるにもかかわらず、このactiveSessionオブジェクトが元々この
            // 3項目を含んでいなかったため、レポート表示のどの経路からでも
            // roll補正が実質的に発動しない状態になっていた（発見・修正:
            // 2026-08-05）。capturedRollDegは「両足首中点の再定義」と違い
            // 撮影時点ごとに凍結される値（同じ理由でcontrols.jsの
            // saveEditsAndReturnTo*系が使っているstate.activeSessionCaptured
            // RollDeg等の「ステージング用フィールド」と全く同じ考え方）
            // なので、ここではstate.pxToCmRatio等と違い直接stateの生値では
            // なく、この専用ステージングフィールドを読む。呼び出し元
            // （js/ui/batchReview.js・js/ui/dynConfirm.js・js/ui/history.js・
            // js/ui/specialist.js）側で、レポート対象セッションの実際の
            // 値（静止4方向以外は常にnull）へ揃えてからprepareAndPrintReport()
            // を呼ぶ責任を持つ。
            capturedRollDeg: (typeof state.activeSessionCapturedRollDeg === 'number') ? state.activeSessionCapturedRollDeg : null,
            canvasWidth: state.activeSessionCanvasWidth || null,
            canvasHeight: state.activeSessionCanvasHeight || null,
            expertComment: state.activeExpertComment,
            expertExercises: state.activeExpertExercises,
            poseData: state.playbackDataMP.length > 0 ? state.playbackDataMP : (reportDataStore[state.currentTab] ? [{ time: Date.now(), mode: state.currentTab, keypoints: reportDataStore[state.currentTab] }] : [])
        };

        var metrics = apiManager.extractMetrics(activeSession);
        var apiKey = localStorage.getItem('gemini_api_key') || '';

        var reportMarkdown = "";
        try {
            reportMarkdown = await apiManager.generateReport(activeSession, apiKey);
        } catch (e) {
            reportMarkdown = "### エラー\nレポートの生成に失敗しました: " + e;
        }

        // --- 4方向総合所見 (multi-view synthesis, v4.6.16で追加) ---
        var multiViewMarkdown = null;
        try {
            var multiViewIds = state.multiViewSessionIds;
            var multiViewModes = multiViewIds ? ['front', 'l_side', 'back', 'r_side'].filter(function (m) { return !!multiViewIds[m]; }) : [];
            if (multiViewModes.length >= 2 && _dataService) {
                var metricsByMode = {};
                for (var mvi = 0; mvi < multiViewModes.length; mvi++) {
                    var mvMode = multiViewModes[mvi];
                    var mvSession = await _dataService.getSessionFull(multiViewIds[mvMode]);
                    if (mvSession) metricsByMode[mvMode] = apiManager.extractMetrics(mvSession);
                }
                if (Object.keys(metricsByMode).length >= 2) {
                    multiViewMarkdown = await apiManager.generateMultiViewReport(metricsByMode, apiKey);
                }
            }
        } catch (e) {
            console.error("[dashboard] 4方向総合所見の生成に失敗しました:", e);
            multiViewMarkdown = null;
        }

        var gridHtml = "";

        gridHtml += '<div class="dash-card"><h3>🧍 被測定者プロファイル</h3>' +
            '<div class="dash-metric"><span>氏名 / ID</span><span class="val">' + patName + ' 様</span></div>' +
            '<div class="dash-metric"><span>測定モード</span><span class="val">' + apiManager.getModeNameJp(metrics.mode) + '</span></div>' +
            '<div class="dash-metric"><span>身長</span><span class="val">' + metrics.height + ' cm</span></div>' +
            '<div class="dash-metric"><span>足のサイズ</span><span class="val">' + metrics.footSize + ' cm</span></div>' +
            '<div class="dash-metric"><span>スケール</span><span class="val">' + (metrics.pxToCmRatio ? (1 / metrics.pxToCmRatio).toFixed(1) + ' px/cm' : '未校正 (自動推定)') + '</span></div>' +
            '</div>';

        // 2026-08-24追加: レポートに載せる各方向の写真を、キャリブレーション
        // で分かっているカメラのroll角度ぶん回転させ、見た目の垂直を実際の
        // 垂直に近づける（js/biomechanics.jsのrenderUprightPhoto参照）。
        // 角度はreportDataStore[mode].capturedRollDegから読む（写真自体と
        // セットで、js/ui/controls.jsのcaptureSkeletonImage・
        // js/ui/batchReview.js・js/ui/history.jsの各読込/撮影箇所で
        // 保持している）。回転が無い/小さい場合は元画像がそのまま使われる。
        // 2026-08-25変更: reportDataStore[mode]が骨格点の配列（＝クリーンな
        // 写真＋その場で重ね描きできる骨格点データが揃っている）の場合は、
        // renderPhotoWithOverlay()で骨格オーバーレイを重ね描きしてから回転
        // させる。配列でない場合（旧形式データ、js/ui/batchReview.jsの
        // viewHistoryBatchReport参照）は、従来通り写真をそのまま（回転のみ）
        // 表示する。
        var rotatedImagesByMode = {};
        await Promise.all(['front', 'l_side', 'back', 'r_side'].map(async function (mode) {
            var entry = reportDataStore[mode];
            var srcBase64 = (entry && entry.capturedImage) ? entry.capturedImage : null;
            if (!srcBase64) return;
            var rollDeg = (entry && typeof entry.capturedRollDeg === 'number') ? entry.capturedRollDeg : null;
            var kps = (entry && Array.isArray(entry) && entry.length > 0) ? entry : null;
            rotatedImagesByMode[mode] = kps
                ? await biomechanics.renderPhotoWithOverlay(srcBase64, function (ctx, w, h) { drawPoseOverlay(ctx, kps, mode, w, h); }, rollDeg)
                : await biomechanics.renderUprightPhoto(srcBase64, rollDeg);
        }));

        var imageCardsHtml = "";
        var modeLabelsJp = { 'front': '前面', 'l_side': '左側面', 'back': '後面', 'r_side': '右側面' };
        ['front', 'l_side', 'back', 'r_side'].forEach(function (mode) {
            var base64 = rotatedImagesByMode[mode] || null;
            if (base64) {
                var subInfo = (mode === 'l_side' || mode === 'r_side') ? "ケンダル垂直基準線" : "荷重バランス比率対象";
                imageCardsHtml += '<div class="report-image-card"><img src="' + base64 + '" alt="' + modeLabelsJp[mode] + '">' +
                    '<div class="report-image-label">🧍 ' + modeLabelsJp[mode] + '</div>' +
                    '<div class="report-image-sub">' + subInfo + '</div></div>';
            } else {
                imageCardsHtml += '<div class="report-image-card" style="opacity: 0.4;">' +
                    '<div style="aspect-ratio:4/3; background:#0f1c3f; border: 1px dashed rgba(255,255,255,0.2); border-radius:4px; display:flex; align-items:center; justify-content:center; color:var(--text-secondary); font-size:11px;">未測定</div>' +
                    '<div class="report-image-label">🧍 ' + modeLabelsJp[mode] + '</div>' +
                    '<div class="report-image-sub">データなし</div></div>';
            }
        });

        gridHtml += '<div class="dash-card report-image-section" style="grid-column: 1 / -1;">' +
            '<div class="report-image-title">📸 静止姿勢アライメント 4方向分析画像</div>' +
            '<div class="report-image-grid">' + imageCardsHtml + '</div></div>';

        if (multiViewMarkdown) {
            gridHtml += '<div class="dash-card ai-eval-card" style="grid-column: 1 / -1;"><h3>🧭 4方向総合所見</h3>' +
                '<div class="ai-eval-box">' + formatMarkdownToHtml(multiViewMarkdown) + '</div>' +
                '<div style="color:var(--text-secondary); font-size:11px; margin-top:8px;">※ 複数方向の測定結果を横断して見た参考所見です。各方向ごとの詳細評価は下記をご確認ください。</div>' +
                '</div>';
        }

        if (metrics.weightBearing) {
            var wDiff = Math.abs(metrics.weightBearing.total.L - metrics.weightBearing.total.R);
            gridHtml += '<div class="dash-card"><h3>⚖️ 左右荷重バランス' + (metrics.usedArucoMidline ? '<span style="font-size:11px; color:#b388ff; font-weight:400;">（正中線: アルコマーカー基準）</span>' : '') + '</h3>' +
                '<div class="dash-metric"><span>全身荷重 (左 / 右)</span><span class="val ' + (wDiff > 5 ? 'warn' : 'good') + '">' + metrics.weightBearing.total.L.toFixed(1) + '% / ' + metrics.weightBearing.total.R.toFixed(1) + '%</span></div>' +
                '<div class="dash-metric"><span>上半身荷重 (左 / 右)</span><span class="val">' + metrics.weightBearing.upper.L.toFixed(1) + '% / ' + metrics.weightBearing.upper.R.toFixed(1) + '%</span></div>' +
                '<div class="dash-metric"><span>下半身荷重 (左 / 右)</span><span class="val">' + metrics.weightBearing.lower.L.toFixed(1) + '% / ' + metrics.weightBearing.lower.R.toFixed(1) + '%</span></div>' +
                '<div class="dash-metric"><span>アシンメトリー偏位</span><span class="val">' + wDiff.toFixed(1) + '% ' + (wDiff > 5 ? '⚠️' : '✅') + '</span></div></div>';
        }

        if (metrics.swayMetrics) {
            var sw = metrics.swayMetrics;
            var trajectoryImgSrc = biomechanics.renderCopTrajectoryImage(sw.trajectory, sw.precise);
            gridHtml += '<div class="dash-card"><h3>📈 COP重心動揺アセスメント' + (sw.precise ? '（4隅ArUco床面実測・実寸）' : '（参考値・mm近似換算）') + '</h3>' +
                (trajectoryImgSrc ? '<img src="' + trajectoryImgSrc + '" alt="COP軌跡" style="width:100%; max-width:320px; display:block; margin:0 auto 10px; border-radius:8px;">' : '') +
                '<div class="dash-metric"><span>動揺面積 (Ellipse)</span><span class="val ' + (sw.swayArea > 800 ? 'warn' : 'good') + '">' + sw.swayArea.toFixed(1) + ' mm²</span></div>' +
                '<div class="dash-metric"><span>総動揺軌跡長</span><span class="val">' + sw.pathLength.toFixed(1) + ' mm</span></div>' +
                '<div class="dash-metric"><span>平均動揺速度</span><span class="val">' + (sw.swaySpeed !== null ? sw.swaySpeed.toFixed(1) + ' mm/s' : '算出不可') + '</span></div>' +
                '<div class="dash-metric"><span>中心偏位 (X軸)</span><span class="val">' + sw.avgDeviationX.toFixed(1) + ' mm (' + (sw.avgDeviationX > 0 ? '右寄り' : '左寄り') + ')</span></div>' +
                (!sw.precise ? '<div style="color:var(--text-secondary); font-size:11px; margin-top:6px;">参考値です（4隅ArUco床面キャリブレーション未実施のため、pxToCmRatioによる近似換算値を表示しています）</div>' : '') +
                '</div>';
        }

        if (Object.keys(metrics.jointAngles).length > 0) {
            gridHtml += '<div class="dash-card"><h3>📐 測定関節角度・可動域</h3>';
            if (metrics.jointAngles.leftKneeAngle) gridHtml += '<div class="dash-metric"><span>左膝関節角度</span><span class="val">' + metrics.jointAngles.leftKneeAngle.toFixed(1) + '°</span></div>';
            if (metrics.jointAngles.rightKneeAngle) gridHtml += '<div class="dash-metric"><span>右膝関節角度</span><span class="val">' + metrics.jointAngles.rightKneeAngle.toFixed(1) + '°</span></div>';
            if (metrics.jointAngles.trunkLean) gridHtml += '<div class="dash-metric"><span>体幹前傾角度</span><span class="val">' + metrics.jointAngles.trunkLean.toFixed(1) + '°</span></div>';
            if (metrics.jointAngles.kneeFlexion) gridHtml += '<div class="dash-metric"><span>膝屈曲角度 (側面)</span><span class="val">' + metrics.jointAngles.kneeFlexion.toFixed(1) + '°</span></div>';
            if (metrics.jointAngles.shoulderArmAngle) gridHtml += '<div class="dash-metric"><span>上腕挙上角度</span><span class="val">' + metrics.jointAngles.shoulderArmAngle.toFixed(1) + '°</span></div>';
            if (metrics.jointAngles.hipFlexion) gridHtml += '<div class="dash-metric"><span>前屈/後屈股関節角度</span><span class="val">' + metrics.jointAngles.hipFlexion.toFixed(1) + '°</span></div>';
            gridHtml += '</div>';
        }

        // 側方データがある場合の代償筋骨格解析カード生成 (Janda & Kendall 連鎖モデル)
        var sideKps = null;
        var sideMode = 'l_side';

        if (reportDataStore['l_side'] && Array.isArray(reportDataStore['l_side']) && reportDataStore['l_side'].length > 0) {
            sideKps = reportDataStore['l_side'];
            sideMode = 'l_side';
        } else if (reportDataStore['r_side'] && Array.isArray(reportDataStore['r_side']) && reportDataStore['r_side'].length > 0) {
            sideKps = reportDataStore['r_side'];
            sideMode = 'r_side';
        } else if (activeSession.mode === 'l_side' || activeSession.mode === 'r_side') {
            sideMode = activeSession.mode;
            if (activeSession.poseData && activeSession.poseData.length > 0) {
                var lastFrame = activeSession.poseData[activeSession.poseData.length - 1];
                sideKps = lastFrame.keypoints || (Array.isArray(lastFrame) ? lastFrame : null);
            }
        } else if (state.playbackDataMP && state.playbackDataMP.length > 0 && (state.currentTab === 'l_side' || state.currentTab === 'r_side')) {
            sideMode = state.currentTab;
            sideKps = state.playbackDataMP[state.playbackDataMP.length - 1].keypoints;
        }

        var kendallOffsets = sideKps ? biomechanics.extractKendallOffsets(sideKps, sideMode, activeSession.pxToCmRatio) : null;
        // 側面データが未計測の場合でも、基準値(0,0,0)をベースにシミュレーターをフル活用可能にする
        if (!kendallOffsets) {
            kendallOffsets = { c2Cm: 0, th3Cm: 0, s2Cm: 0, isDefault: true };
        }

        var c2 = kendallOffsets.c2Cm;
        var th3 = kendallOffsets.th3Cm;
        var s2 = kendallOffsets.s2Cm;

        var patientAge = (activeSession && activeSession.patientAge) ? parseInt(activeSession.patientAge, 10) : null;
        var AGE_PROFILES = {
            child:  { headKg: 3.5, thoracicKg: 9.0,  lumbarKg: 15.0 }, // 6-9歳 (体重約25kg)
            junior: { headKg: 4.2, thoracicKg: 16.0, lumbarKg: 27.0 }, // 10-14歳 (体重約45kg)
            youth:  { headKg: 4.8, thoracicKg: 20.0, lumbarKg: 35.0 }, // 15-18歳 (体重約58kg)
            adult:  { headKg: 5.0, thoracicKg: 23.0, lumbarKg: 40.0 }, // 19-64歳 (体重約65kg)
            senior: { headKg: 4.6, thoracicKg: 20.0, lumbarKg: 35.0 }  // 65歳以上 (体重約58kg)
        };

        var profile = AGE_PROFILES.adult;
        if (patientAge) {
            if (patientAge <= 9) profile = AGE_PROFILES.child;
            else if (patientAge <= 14) profile = AGE_PROFILES.junior;
            else if (patientAge <= 18) profile = AGE_PROFILES.youth;
            else if (patientAge >= 65) profile = AGE_PROFILES.senior;
        }

        var cervicalLoadKg = profile.headKg * (1 + Math.max(0, c2) / 2.5 * 1.5);
        var cervicalMult = (cervicalLoadKg / profile.headKg).toFixed(1);

        var thoracicLoadKg = profile.thoracicKg * (1 + Math.max(0, th3) / 3.0 * 0.8);
        var thoracicMult = (thoracicLoadKg / profile.thoracicKg).toFixed(1);

        var lumbarLoadKg = profile.lumbarKg * (1 + Math.abs(s2) / 3.0 * 0.7);
        var lumbarMult = (lumbarLoadKg / profile.lumbarKg).toFixed(1);

        var overactive = [];
        var inhibited = [];
        if (c2 > 2.0) {
            overactive.push("後頭下筋群", "僧帽筋上部", "胸鎖乳突筋(短縮)");
            inhibited.push("頚部深層屈筋群");
        }
        if (th3 > 1.5) {
            overactive.push("小胸筋(短縮・巻き肩)", "僧帽筋上部(代償性過緊張)", "大胸筋");
            inhibited.push("菱形筋(背部脱力)", "前鋸筋", "僧帽筋下部");
        } else if (th3 < -1.5) {
            overactive.push("胸椎伸展筋群(過平背)");
            inhibited.push("胸椎生理的後弯機能");
        }
        if (s2 < -2.0) {
            overactive.push("ハムストリングス(過緊張)", "大腿筋膜張筋", "腰部椎間関節剪断");
            inhibited.push("大臀筋(不活性化)", "腸腰筋(伸張脱力)", "腹横筋(コア)");
        } else if (s2 > 2.0) {
            overactive.push("腸腰筋(短縮)", "大腿直筋", "腰背部脊柱起立筋");
            inhibited.push("腹直筋", "大臀筋");
        }
        if (overactive.length === 0) overactive.push("なし（正常協調）");
        if (inhibited.length === 0) inhibited.push("なし（正常活性）");

        gridHtml += '<div class="dash-card musculoskeletal-card" style="grid-column: 1 / -1; background:rgba(15,23,42,0.9); border:1px solid #1e293b; border-radius:12px; padding:16px;">' +
            '<div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:10px; margin-bottom:14px; flex-wrap:wrap; gap:8px;">' +
            '<div><h3 style="margin:0; font-size:15px; color:var(--text-primary); display:flex; align-items:center; gap:6px;">🧬 矢状面 代償筋骨格解析 <span style="font-size:11px; color:#94a3b8; font-weight:normal;">(Janda / Kendall / Hansraj / Plagenhoef 連鎖モデル)</span></h3>' +
            '<div style="font-size:11px; color:var(--text-secondary); margin-top:2px;">実測オフセット: C2 ' + (c2 > 0 ? '+' : '') + c2 + 'cm / Th3 ' + (th3 > 0 ? '+' : '') + th3 + 'cm / S2 ' + (s2 > 0 ? '+' : '') + s2 + 'cm' + (patientAge ? ' (年齢 ' + patientAge + '歳適応)' : '') + (kendallOffsets.isDefault ? ' <span style="color:#38bdf8;">(基準ニュートラル)</span>' : '') + '</div></div>' +
            '<button type="button" id="openCounselingFromReportBtn" class="btn" style="background:#0f172a; border:1px solid #38bdf8; color:#38bdf8; font-size:11px; padding:5px 12px; border-radius:6px; cursor:pointer;">シミュレーターで確認 ↗</button>' +
            '</div>' +
            '<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:16px; align-items:center;">' +
            '<div style="background:#060913; border:1px solid #1e293b; border-radius:10px; padding:10px; display:flex; flex-direction:column; align-items:center;">' +
            '<canvas id="dashMuscleCanvas" width="280" height="280" style="max-width:260px; width:100%; aspect-ratio:1/1;"></canvas>' +
            '<div style="width:100%; display:flex; justify-content:space-between; font-size:9px; color:#cbd5e1; background:rgba(15,23,42,0.8); padding:3px 8px; border-radius:4px; margin-top:4px;">' +
            '<span style="color:#e11d48;">■ 過緊張</span><span style="color:#64748b;">■ 正常</span><span style="color:#38bdf8;">-- サボり筋</span>' +
            '</div></div>' +
            '<div style="display:flex; flex-direction:column; gap:8px;">' +
            '<div style="background:rgba(15,23,42,0.8); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:8px 10px;">' +
            '<div style="font-size:11px; font-weight:600; color:var(--text-primary); margin-bottom:4px;">📊 脊柱3大セグメント連動負荷解析</div>' +
            '<div style="display:flex; justify-content:space-between; font-size:10.5px; margin-bottom:2px;"><span>🧠 頚椎実効負荷 (C2)</span><span style="color:#f8fafc; font-family:monospace; font-weight:bold;">' + cervicalLoadKg.toFixed(1) + ' kg (' + cervicalMult + '倍)</span></div>' +
            '<div style="display:flex; justify-content:space-between; font-size:10.5px; margin-bottom:2px;"><span>🫁 胸椎剪断負荷 (Th3)</span><span style="color:#f8fafc; font-family:monospace; font-weight:bold;">' + thoracicLoadKg.toFixed(1) + ' kg (' + thoracicMult + '倍)</span></div>' +
            '<div style="display:flex; justify-content:space-between; font-size:10.5px;"><span>🦴 腰椎(L5-S1)剪断力</span><span style="color:#f8fafc; font-family:monospace; font-weight:bold;">' + lumbarLoadKg.toFixed(1) + ' kg (' + lumbarMult + '倍)</span></div>' +
            '</div>' +
            '<div style="background:rgba(225,29,72,0.1); border:1px solid rgba(225,29,72,0.3); border-radius:6px; padding:8px 10px;">' +
            '<div style="font-size:10.5px; font-weight:600; color:#fb7185; margin-bottom:2px;">🔥 過剰作用（ヤンダ過緊張筋）:</div>' +
            '<div style="font-size:11px; color:#f1f5f9;">' + overactive.join("、") + '</div>' +
            '</div>' +
            '<div style="background:rgba(56,189,248,0.1); border:1px solid rgba(56,189,248,0.3); border-radius:6px; padding:8px 10px;">' +
            '<div style="font-size:10.5px; font-weight:600; color:#38bdf8; margin-bottom:2px;">💤 不活性化（ヤンダ弱化・サボり筋）:</div>' +
            '<div style="font-size:11px; color:#f1f5f9;">' + inhibited.join("、") + '</div>' +
            '</div>' +
            '<div style="font-size:10px; color:var(--text-secondary); line-height:1.4; margin-top:2px;">※ 側面の骨格幾何アライメントから、重心保持のために過負荷となっている筋群および機能低下している筋群を自動特定しています。</div>' +
            '</div></div></div>';

        if (state.isSpecialist) {
            gridHtml += '<div class="dash-card expert-card" style="grid-column: 1 / -1;">' +
                '<h3>📝 専門家・指導者カルテ評価入力（事業者専用）</h3>' +
                '<div class="input-field"><label for="expertCommentInput" style="color:var(--accent-orange);">指導者アセスメント・フィードバック</label>' +
                '<textarea id="expertCommentInput" style="width:100%; height:80px; background:#0f1c3f; border:1px solid var(--accent-orange); border-radius:8px; color:white; padding:10px; font-family:inherit; resize:none; outline:none; box-sizing:border-box;">' + state.activeExpertComment + '</textarea></div>' +
                '<div class="input-field"><label for="expertExercisesInput" style="color:var(--accent-orange);">処方ストレッチ・トレーニングリハビリメニュー</label>' +
                '<textarea id="expertExercisesInput" style="width:100%; height:80px; background:#0f1c3f; border:1px solid var(--accent-orange); border-radius:8px; color:white; padding:10px; font-family:inherit; resize:none; outline:none; box-sizing:border-box;">' + state.activeExpertExercises + '</textarea></div>' +
                '<div style="display:flex; justify-content:flex-end; margin-top:10px;">' +
                '<button onclick="saveExpertComment()" class="btn primary-btn" style="background:var(--accent-orange); color:black; font-weight:700;">📋 評価をカルテに保存</button></div></div>';
        }

        var formattedReport = formatMarkdownToHtml(reportMarkdown);

        gridHtml += '<div class="dash-card ai-eval-card" id="aiEvalCard"><h3>🧠 AI 臨床インサイト・アセスメント</h3>' +
            '<div class="ai-eval-box" id="aiEvalContent">' + formattedReport + '</div>' +
            '</div>';

        grid.innerHTML = gridHtml;

        // レポート描画後のCanvas描画およびイベント配線
        try {
            var dashCanvas = document.getElementById('dashMuscleCanvas');
            if (dashCanvas) {
                biomechanics.renderMusculoskeletalAvatar(dashCanvas, c2, th3, s2);
            }
            var openSimBtn = document.getElementById('openCounselingFromReportBtn');
            if (openSimBtn) {
                openSimBtn.onclick = function () {
                    openCounselingModal(c2, th3, s2);
                };
            }
        } catch (cardErr) {
            console.error("[dashboard] Canvas/Button binding error:", cardErr);
        }
    };
}
