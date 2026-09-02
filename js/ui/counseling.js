/**
 * counseling.js
 * ---------------------------------------------------------------------------
 * 独立カウンセリング領域（代償筋骨格シミュレーション・運動連鎖解析）
 * Janda（上下交差症候群）および Kendall（運動連鎖理論）に基づく力学解析エンジン
 */

import biomechanics from '../biomechanics.js';
import { openModal, closeModal, wireModal } from './modal.js';
import { reportDataStore } from '../core/state.js';

export function initCounselingUI() {
    var modal = document.getElementById('counselingModal');
    var closeBtn = document.getElementById('closeCounselingBtn');
    if (closeBtn && modal) {
        closeBtn.onclick = function () {
            modal.style.display = 'none';
        };
    }

    var homeBtn = document.getElementById('homeCounselingCard');
    if (homeBtn) {
        homeBtn.onclick = function () {
            openCounselingModal();
        };
    }

    var sliderC2 = document.getElementById('counselingSliderC2');
    var sliderTh3 = document.getElementById('counselingSliderTh3');
    var sliderS2 = document.getElementById('counselingSliderS2');
    var selectAge = document.getElementById('counselingSelectAgeGroup');

    if (sliderC2 && sliderTh3 && sliderS2) {
        sliderC2.oninput = updateCounselingSimulation;
        sliderTh3.oninput = updateCounselingSimulation;
        sliderS2.oninput = updateCounselingSimulation;
    }
    if (selectAge) {
        selectAge.onchange = updateCounselingSimulation;
    }

    // プリセットボタン配線
    var btnPre0 = document.getElementById('counselingPreset0');
    var btnPre1 = document.getElementById('counselingPreset1');
    var btnPre2 = document.getElementById('counselingPreset2');

    if (btnPre0) btnPre0.onclick = function () { setCounselingPreset(0, 0, 0); };
    if (btnPre1) btnPre1.onclick = function () { setCounselingPreset(5.0, 3.2, -3.8); };
    if (btnPre2) btnPre2.onclick = function () { setCounselingPreset(3.5, 3.0, 3.5); };
}

export function openCounselingModal(initialC2, initialTh3, initialS2) {
    var modal = document.getElementById('counselingModal');
    var sliderC2 = document.getElementById('counselingSliderC2');
    var sliderTh3 = document.getElementById('counselingSliderTh3');
    var sliderS2 = document.getElementById('counselingSliderS2');

    if (sliderC2 && sliderTh3 && sliderS2) {
        if (typeof initialC2 === 'number') {
            sliderC2.value = initialC2;
            sliderTh3.value = (typeof initialTh3 === 'number') ? initialTh3 : 0;
            sliderS2.value = (typeof initialS2 === 'number') ? initialS2 : 0;
        } else {
            sliderC2.value = 0;
            sliderTh3.value = 0;
            sliderS2.value = 0;
        }
    }

    if (modal) {
        modal.style.display = 'flex';
    }
    updateCounselingSimulation();
    setTimeout(updateCounselingSimulation, 50);
}

export function setCounselingPreset(c2, th3, s2) {
    var sliderC2 = document.getElementById('counselingSliderC2');
    var sliderTh3 = document.getElementById('counselingSliderTh3');
    var sliderS2 = document.getElementById('counselingSliderS2');

    if (sliderC2 && sliderTh3 && sliderS2) {
        sliderC2.value = c2;
        sliderTh3.value = th3;
        sliderS2.value = s2;
    }

    var b0 = document.getElementById('counselingPreset0');
    var b1 = document.getElementById('counselingPreset1');
    var b2 = document.getElementById('counselingPreset2');
    if (b0 && b1 && b2) {
        [b0, b1, b2].forEach(function (b) { b.className = "btn gray-btn"; });
        if (c2 === 0) b0.className = "btn primary-btn";
        else if (s2 < -2) b1.className = "btn orange-btn";
        else b2.className = "btn purple-btn";
    }

    updateCounselingSimulation();
}

export function updateCounselingSimulation() {
    var sliderC2 = document.getElementById('counselingSliderC2');
    var sliderTh3 = document.getElementById('counselingSliderTh3');
    var sliderS2 = document.getElementById('counselingSliderS2');
    var selectAge = document.getElementById('counselingSelectAgeGroup');
    var canvas = document.getElementById('counselingCanvas');

    if (!sliderC2 || !sliderTh3 || !sliderS2 || !canvas) return;

    var c2 = parseFloat(sliderC2.value) || 0;
    var th3 = parseFloat(sliderTh3.value) || 0;
    var s2 = parseFloat(sliderS2.value) || 0;

    var valC2 = document.getElementById('counselingValC2');
    var valTh3 = document.getElementById('counselingValTh3');
    var valS2 = document.getElementById('counselingValS2');

    if (valC2) valC2.innerText = (c2 > 0 ? '+' : '') + c2.toFixed(1) + ' cm';
    if (valTh3) valTh3.innerText = (th3 > 0 ? '+' : '') + th3.toFixed(1) + ' cm';
    if (valS2) valS2.innerText = (s2 > 0 ? '+' : '') + s2.toFixed(1) + ' cm';

    // 年代別発育・体重支持プロファイル（文部科学省・学校保健統計およびPlagenhoef人体計測）
    var AGE_PROFILES = {
        child:  { headKg: 3.5, thoracicKg: 9.0,  lumbarKg: 15.0 }, // 小児(6-9歳: 体重約25kg)
        junior: { headKg: 4.2, thoracicKg: 16.0, lumbarKg: 27.0 }, // ジュニア(10-14歳: 体重約45kg)
        youth:  { headKg: 4.8, thoracicKg: 20.0, lumbarKg: 35.0 }, // ユース(15-18歳: 体重約58kg)
        adult:  { headKg: 5.0, thoracicKg: 23.0, lumbarKg: 40.0 }, // 成人(19-64歳: 体重約65kg)
        senior: { headKg: 4.6, thoracicKg: 20.0, lumbarKg: 35.0 }  // シニア(65歳以上: 体重約58kg)
    };

    var ageKey = (selectAge && selectAge.value) ? selectAge.value : 'adult';
    var profile = AGE_PROFILES[ageKey] || AGE_PROFILES.adult;

    // 1. 頚部実効負荷（Hansrajモデル）
    var cervicalLoadKg = profile.headKg * (1 + Math.max(0, c2) / 2.5 * 1.5);
    var cervicalMultiplier = (cervicalLoadKg / profile.headKg).toFixed(1);
    var cervicalLoadEl = document.getElementById('counselingCervicalLoad');
    if (cervicalLoadEl) {
        cervicalLoadEl.innerHTML = cervicalLoadKg.toFixed(1) + ' kg <span style="font-size:9.5px; color:var(--text-secondary); font-weight:normal;">(' + cervicalMultiplier + '倍)</span>';
    }

    // 2. 胸椎剪断負荷（胸椎後弯モーメント）
    var thoracicLoadKg = profile.thoracicKg * (1 + Math.max(0, th3) / 3.0 * 0.8);
    var thoracicMultiplier = (thoracicLoadKg / profile.thoracicKg).toFixed(1);
    var thoracicLoadEl = document.getElementById('counselingThoracicLoad');
    if (thoracicLoadEl) {
        thoracicLoadEl.innerHTML = thoracicLoadKg.toFixed(1) + ' kg <span style="font-size:9.5px; color:var(--text-secondary); font-weight:normal;">(' + thoracicMultiplier + '倍)</span>';
    }

    // 3. 腰椎・骨盤部剪断ストレス（Nachemsonモデル）
    var lumbarLoadKg = profile.lumbarKg * (1 + Math.abs(s2) / 3.0 * 0.7);
    var lumbarMultiplier = (lumbarLoadKg / profile.lumbarKg).toFixed(1);
    var lumbarLoadEl = document.getElementById('counselingLumbarLoad');
    if (lumbarLoadEl) {
        lumbarLoadEl.innerHTML = lumbarLoadKg.toFixed(1) + ' kg <span style="font-size:9.5px; color:var(--text-secondary); font-weight:normal;">(' + lumbarMultiplier + '倍)</span>';
    }

    // ヤンダ過緊張筋・弱化筋の判定
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
    if (s2 < -2.0) { // スウェイバック
        overactive.push("ハムストリングス(過緊張)", "大腿筋膜張筋", "腰部椎間関節剪断");
        inhibited.push("大臀筋(不活性化)", "腸腰筋(伸張脱力)", "腹横筋(コア)");
    } else if (s2 > 2.0) { // 反り腰
        overactive.push("腸腰筋(短縮)", "大腿直筋", "腰背部脊柱起立筋");
        inhibited.push("腹直筋", "大臀筋");
    }

    if (overactive.length === 0) overactive.push("なし（正常協調）");
    if (inhibited.length === 0) inhibited.push("なし（正常活性）");

    var overactiveEl = document.getElementById('counselingOveractiveList');
    var inhibitedEl = document.getElementById('counselingInhibitedList');
    if (overactiveEl) overactiveEl.innerText = overactive.join("、");
    if (inhibitedEl) inhibitedEl.innerText = inhibited.join("、");

    var badgeEl = document.getElementById('counselingLoadBadge');
    if (badgeEl) {
        if (c2 > 3.5 || Math.abs(s2) > 3.0 || Math.abs(th3) > 3.0) {
            badgeEl.className = "badge warn";
            badgeEl.innerText = "重度代償ストレス";
        } else if (c2 > 1.5 || Math.abs(s2) > 1.5 || Math.abs(th3) > 1.5) {
            badgeEl.className = "badge";
            badgeEl.style.background = "rgba(245, 158, 11, 0.2)";
            badgeEl.style.color = "#fbbf24";
            badgeEl.innerText = "軽度代償";
        } else {
            badgeEl.className = "badge good";
            badgeEl.style.background = "";
            badgeEl.style.color = "";
            badgeEl.innerText = "負荷: 正常";
        }
    }

    // Canvas描画
    biomechanics.renderMusculoskeletalAvatar(canvas, c2, th3, s2);
}
