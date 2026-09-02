/**
 * (c) Athletecore Proprietary Biomechanical Engine
 * CONFIDENTIAL & PROTECTED - ALL RIGHTS RESERVED.
 */
var _0x$b=["Y291bnNlbGluZ01vZGFs","Y2xvc2VDb3Vuc2VsaW5nQnRu","aG9tZUNvdW5zZWxpbmdDYXJk","Y291bnNlbGluZ1NsaWRlckMy","Y291bnNlbGluZ1NsaWRlclRoMw==","Y291bnNlbGluZ1NsaWRlclMy","Y291bnNlbGluZ1NlbGVjdEFnZUdyb3Vw","Y291bnNlbGluZ1ByZXNldDA=","Y291bnNlbGluZ1ByZXNldDE=","Y291bnNlbGluZ1ByZXNldDI=","bnVtYmVy","YnRuIGdyYXktYnRu","YnRuIHByaW1hcnktYnRu","YnRuIG9yYW5nZS1idG4=","YnRuIHB1cnBsZS1idG4=","Y291bnNlbGluZ0NhbnZhcw==","Y291bnNlbGluZ1ZhbEMy","Y291bnNlbGluZ1ZhbFRoMw==","Y291bnNlbGluZ1ZhbFMy","IGNt","YWR1bHQ=","Y291bnNlbGluZ0NlcnZpY2FsTG9hZA==","IGtnIDxzcGFuIHN0eWxlPSJmb250LXNpemU6OS41cHg7IGNvbG9yOnZhcigtLXRleHQtc2Vjb25kYXJ5KTsgZm9udC13ZWlnaHQ6bm9ybWFsOyI+KA==","5YCNKTwvc3Bhbj4=","Y291bnNlbGluZ1Rob3JhY2ljTG9hZA==","Y291bnNlbGluZ0x1bWJhckxvYWQ=","5b6M6aCt5LiL562L576k","5YOn5bi9562L5LiK6YOo","6IO46Y6W5Lmz56qB562LKOefree4rik=","6aCa6YOo5rex5bGk5bGI562L576k","5bCP6IO4562LKOefree4ruODu+W3u+OBjeiCqSk=","5YOn5bi9562L5LiK6YOoKOS7o+WEn+aAp+mBjue3iuW8tSk=","5aSn6IO4562L","6I+x5b2i562LKOiDjOmDqOiEseWKmyk=","5YmN6Yu4562L","5YOn5bi9562L5LiL6YOo","6IO45qSO5Ly45bGV562L576kKOmBjuW5s+iDjCk=","6IO45qSO55Sf55CG55qE5b6M5byv5qmf6IO9","44OP44Og44K544OI44Oq44Oz44Kw44K5KOmBjue3iuW8tSk=","5aSn6IW/562L6Iac5by1562L","6IWw6YOo5qSO6ZaT6Zai56+A5Ymq5pat","5aSn6IeA562LKOS4jea0u+aAp+WMlik=","6IW46IWw562LKOS8uOW8teiEseWKmyk=","6IW55qiq562LKOOCs+OCoik=","6IW46IWw562LKOefree4rik=","5aSn6IW/55u0562L","6IWw6IOM6YOo6ISK5p+x6LW356uL562L","6IW555u0562L","5aSn6IeA562L","44Gq44GX77yI5q2j5bi45Y2U6Kq/77yJ","44Gq44GX77yI5q2j5bi45rS75oCn77yJ","Y291bnNlbGluZ092ZXJhY3RpdmVMaXN0","Y291bnNlbGluZ0luaGliaXRlZExpc3Q=","Y291bnNlbGluZ0xvYWRCYWRnZQ==","YmFkZ2Ugd2Fybg==","6YeN5bqm5Luj5YSf44K544OI44Os44K5","YmFkZ2U=","cmdiYSgyNDUsIDE1OCwgMTEsIDAuMik=","I2ZiYmYyNA==","6Lu95bqm5Luj5YSf","YmFkZ2UgZ29vZA==","6LKg6I23OiDmraPluLg="];
function _0x$d(i){try{return decodeURIComponent(escape(atob(_0x$b[i])));}catch(e){return atob(_0x$b[i]);}}
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
    var modalId = _0x$d(0);
    wireModal(modalId, _0x$d(1));

    var homeBtn = document.getElementById(_0x$d(2));
    if (homeBtn) {
        homeBtn.onclick = function () {
            openCounselingModal();
        };
    }

    var sliderC2 = document.getElementById(_0x$d(3));
    var sliderTh3 = document.getElementById(_0x$d(4));
    var sliderS2 = document.getElementById(_0x$d(5));
    var selectAge = document.getElementById(_0x$d(6));

    if (sliderC2 && sliderTh3 && sliderS2) {
        sliderC2.oninput = updateCounselingSimulation;
        sliderTh3.oninput = updateCounselingSimulation;
        sliderS2.oninput = updateCounselingSimulation;
    }
    if (selectAge) {
        selectAge.onchange = updateCounselingSimulation;
    }

    // プリセットボタン配線
    var btnPre0 = document.getElementById(_0x$d(7));
    var btnPre1 = document.getElementById(_0x$d(8));
    var btnPre2 = document.getElementById(_0x$d(9));

    if (btnPre0) btnPre0.onclick = function () { setCounselingPreset(0, 0, 0); };
    if (btnPre1) btnPre1.onclick = function () { setCounselingPreset(5.0, 3.2, -3.8); };
    if (btnPre2) btnPre2.onclick = function () { setCounselingPreset(3.5, 3.0, 3.5); };
}

export function openCounselingModal(initialC2, initialTh3, initialS2) {
    var sliderC2 = document.getElementById(_0x$d(3));
    var sliderTh3 = document.getElementById(_0x$d(4));
    var sliderS2 = document.getElementById(_0x$d(5));

    if (sliderC2 && sliderTh3 && sliderS2) {
        if (typeof initialC2 === _0x$d(10)) {
            sliderC2.value = initialC2;
            sliderTh3.value = (typeof initialTh3 === _0x$d(10)) ? initialTh3 : 0;
            sliderS2.value = (typeof initialS2 === _0x$d(10)) ? initialS2 : 0;
        } else {
            sliderC2.value = 0;
            sliderTh3.value = 0;
            sliderS2.value = 0;
        }
    }

    openModal(_0x$d(0));
    setTimeout(updateCounselingSimulation, 50);
}

export function setCounselingPreset(c2, th3, s2) {
    var sliderC2 = document.getElementById(_0x$d(3));
    var sliderTh3 = document.getElementById(_0x$d(4));
    var sliderS2 = document.getElementById(_0x$d(5));

    if (sliderC2 && sliderTh3 && sliderS2) {
        sliderC2.value = c2;
        sliderTh3.value = th3;
        sliderS2.value = s2;
    }

    var b0 = document.getElementById(_0x$d(7));
    var b1 = document.getElementById(_0x$d(8));
    var b2 = document.getElementById(_0x$d(9));
    if (b0 && b1 && b2) {
        [b0, b1, b2].forEach(function (b) { b.className = _0x$d(11); });
        if (c2 === 0) b0.className = _0x$d(12);
        else if (s2 < -2) b1.className = _0x$d(13);
        else b2.className = _0x$d(14);
    }

    updateCounselingSimulation();
}

export function updateCounselingSimulation() {
    var sliderC2 = document.getElementById(_0x$d(3));
    var sliderTh3 = document.getElementById(_0x$d(4));
    var sliderS2 = document.getElementById(_0x$d(5));
    var selectAge = document.getElementById(_0x$d(6));
    var canvas = document.getElementById(_0x$d(15));

    if (!sliderC2 || !sliderTh3 || !sliderS2 || !canvas) return;

    var c2 = parseFloat(sliderC2.value) || 0;
    var th3 = parseFloat(sliderTh3.value) || 0;
    var s2 = parseFloat(sliderS2.value) || 0;

    var valC2 = document.getElementById(_0x$d(16));
    var valTh3 = document.getElementById(_0x$d(17));
    var valS2 = document.getElementById(_0x$d(18));

    if (valC2) valC2.innerText = (c2 > 0 ? '+' : '') + c2.toFixed(1) + _0x$d(19);
    if (valTh3) valTh3.innerText = (th3 > 0 ? '+' : '') + th3.toFixed(1) + _0x$d(19);
    if (valS2) valS2.innerText = (s2 > 0 ? '+' : '') + s2.toFixed(1) + _0x$d(19);

    // 年代別発育・体重支持プロファイル（文部科学省・学校保健統計およびPlagenhoef人体計測）
    var AGE_PROFILES = {
        child:  { headKg: 3.5, thoracicKg: 9.0,  lumbarKg: 15.0 }, // 小児(6-9歳: 体重約25kg)
        junior: { headKg: 4.2, thoracicKg: 16.0, lumbarKg: 27.0 }, // ジュニア(10-14歳: 体重約45kg)
        youth:  { headKg: 4.8, thoracicKg: 20.0, lumbarKg: 35.0 }, // ユース(15-18歳: 体重約58kg)
        adult:  { headKg: 5.0, thoracicKg: 23.0, lumbarKg: 40.0 }, // 成人(19-64歳: 体重約65kg)
        senior: { headKg: 4.6, thoracicKg: 20.0, lumbarKg: 35.0 }  // シニア(65歳以上: 体重約58kg)
    };

    var ageKey = (selectAge && selectAge.value) ? selectAge.value : _0x$d(20);
    var profile = AGE_PROFILES[ageKey] || AGE_PROFILES.adult;

    // 1. 頚部実効負荷（Hansrajモデル）
    var cervicalLoadKg = profile.headKg * (1 + Math.max(0, c2) / 2.5 * 1.5);
    var cervicalMultiplier = (cervicalLoadKg / profile.headKg).toFixed(1);
    var cervicalLoadEl = document.getElementById(_0x$d(21));
    if (cervicalLoadEl) {
        cervicalLoadEl.innerHTML = cervicalLoadKg.toFixed(1) + _0x$d(22) + cervicalMultiplier + _0x$d(23);
    }

    // 2. 胸椎剪断負荷（胸椎後弯モーメント）
    var thoracicLoadKg = profile.thoracicKg * (1 + Math.max(0, th3) / 3.0 * 0.8);
    var thoracicMultiplier = (thoracicLoadKg / profile.thoracicKg).toFixed(1);
    var thoracicLoadEl = document.getElementById(_0x$d(24));
    if (thoracicLoadEl) {
        thoracicLoadEl.innerHTML = thoracicLoadKg.toFixed(1) + _0x$d(22) + thoracicMultiplier + _0x$d(23);
    }

    // 3. 腰椎・骨盤部剪断ストレス（Nachemsonモデル）
    var lumbarLoadKg = profile.lumbarKg * (1 + Math.abs(s2) / 3.0 * 0.7);
    var lumbarMultiplier = (lumbarLoadKg / profile.lumbarKg).toFixed(1);
    var lumbarLoadEl = document.getElementById(_0x$d(25));
    if (lumbarLoadEl) {
        lumbarLoadEl.innerHTML = lumbarLoadKg.toFixed(1) + _0x$d(22) + lumbarMultiplier + _0x$d(23);
    }

    // ヤンダ過緊張筋・弱化筋の判定
    var overactive = [];
    var inhibited = [];

    if (c2 > 2.0) {
        overactive.push(_0x$d(26), _0x$d(27), _0x$d(28));
        inhibited.push(_0x$d(29));
    }
    if (th3 > 1.5) {
        overactive.push(_0x$d(30), _0x$d(31), _0x$d(32));
        inhibited.push(_0x$d(33), _0x$d(34), _0x$d(35));
    } else if (th3 < -1.5) {
        overactive.push(_0x$d(36));
        inhibited.push(_0x$d(37));
    }
    if (s2 < -2.0) { // スウェイバック
        overactive.push(_0x$d(38), _0x$d(39), _0x$d(40));
        inhibited.push(_0x$d(41), _0x$d(42), _0x$d(43));
    } else if (s2 > 2.0) { // 反り腰
        overactive.push(_0x$d(44), _0x$d(45), _0x$d(46));
        inhibited.push(_0x$d(47), _0x$d(48));
    }

    if (overactive.length === 0) overactive.push(_0x$d(49));
    if (inhibited.length === 0) inhibited.push(_0x$d(50));

    var overactiveEl = document.getElementById(_0x$d(51));
    var inhibitedEl = document.getElementById(_0x$d(52));
    if (overactiveEl) overactiveEl.innerText = overactive.join("、");
    if (inhibitedEl) inhibitedEl.innerText = inhibited.join("、");

    var badgeEl = document.getElementById(_0x$d(53));
    if (badgeEl) {
        if (c2 > 3.5 || Math.abs(s2) > 3.0 || Math.abs(th3) > 3.0) {
            badgeEl.className = _0x$d(54);
            badgeEl.innerText = _0x$d(55);
        } else if (c2 > 1.5 || Math.abs(s2) > 1.5 || Math.abs(th3) > 1.5) {
            badgeEl.className = _0x$d(56);
            badgeEl.style.background = _0x$d(57);
            badgeEl.style.color = _0x$d(58);
            badgeEl.innerText = _0x$d(59);
        } else {
            badgeEl.className = _0x$d(60);
            badgeEl.style.background = "";
            badgeEl.style.color = "";
            badgeEl.innerText = _0x$d(61);
        }
    }

    // Canvas描画
    biomechanics.renderMusculoskeletalAvatar(canvas, c2, th3, s2);
}
