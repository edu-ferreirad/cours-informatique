/* Moteur du jeu "Protection des données" — Créé par David Ferreira (CO Drize / SEM Lab) */
(function () {
  "use strict";
  var ROLE = document.body.getAttribute("data-role");
  var G = window.GAMES[ROLE], S = G.scenes, C = window.CONFIG;
  var IMG = function (n) { return "../shared/img/" + n + ".webp"; };
  var LOGO = "../shared/img/logo.png";
  var $ = function (i) { return document.getElementById(i); };
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var total = 0;
  Object.keys(S).forEach(function (k) { if (S[k].end) total++; });
  var stats, path, busy, curFx = 50, curSp = 40, manualFit = null, muted = false, ac = null;

  $("app").innerHTML =
    '<div id="stage">' +
      '<img class="bg" id="bg" alt=""><img class="fg" id="fg" alt="">' +
      '<div id="hud"><div class="logo"><img src="' + LOGO + '" alt="CO Drize – SEM Lab"></div>' +
      '<div id="gauges"></div>' +
      '<div class="tools"><button id="zoom" title="Voir toute l\'image / zoomer">🔍</button><button id="snd" title="Son">🔊</button></div></div>' +
      '<div id="dice" hidden></div><div id="rot" hidden>↻ ' + (ROLE === "enfant" ? "Tourne" : "Tournez") + ' le téléphone pour voir toute l\'image</div>' +
    '</div>' +
    '<div id="panel"><div id="txt"></div><div id="q"></div><div id="btns"></div></div>' +
    '<div id="end" hidden></div>';

  /* ---------- Son ---------- */
  function beep(f, d, type, delay) {
    if (muted) return;
    setTimeout(function () {
      try {
        ac = ac || new (window.AudioContext || window.webkitAudioContext)();
        var o = ac.createOscillator(), g = ac.createGain();
        o.type = type || "sine"; o.frequency.value = f; g.gain.value = 0.07;
        o.connect(g); g.connect(ac.destination); o.start();
        g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + d);
        o.stop(ac.currentTime + d);
      } catch (e) { /* son indisponible : sans importance */ }
    }, delay || 0);
  }

  /* ---------- Images : plein cadre centré sur l'action, ou image entière ---------- */
  function fit() {
    var fg = $("fg"), st = $("stage");
    if (!fg.naturalWidth) return;
    var ia = fg.naturalWidth / fg.naturalHeight, sa = st.clientWidth / st.clientHeight;
    // zoom sur l'action seulement si elle tient entièrement dans la zone visible (sp = largeur de l'action en %)
    var vis = Math.min(1, sa / ia) * 100;
    var cover = manualFit === null ? (vis < 92 && vis >= curSp + 8) : manualFit === "cover";
    fg.style.objectFit = cover ? "cover" : "contain";
    // centre l'action (fx = position du personnage en % de la largeur) dans la zone visible
    var bw = st.clientWidth, bh = st.clientHeight, iw = Math.max(bw, bh * ia), pos = 50;
    if (cover && iw > bw) pos = Math.max(0, Math.min(100, ((curFx / 100 * iw - bw / 2) / (iw - bw)) * 100));
    fg.style.objectPosition = pos + "% 50%";
    fg.setAttribute("data-fit", cover ? "cover" : "contain");
    $("rot").hidden = !(!cover && manualFit === null && st.clientWidth < 700 && sa < 1);
  }
  function setImg(name, fx, sp) {
    var fg = $("fg"), bg = $("bg");
    curFx = fx; curSp = sp || 40;
    if (fg.getAttribute("data-n") === name) { fit(); return; }
    fg.setAttribute("data-n", name);
    manualFit = null;
    fg.style.opacity = 0;
    fg.onload = function () { fit(); fg.style.opacity = 1; };
    bg.src = fg.src = IMG(name);
    if (fg.complete && fg.naturalWidth) { fit(); fg.style.opacity = 1; }
  }
  $("zoom").onclick = function () {
    manualFit = $("fg").getAttribute("data-fit") === "cover" ? "contain" : "cover";
    fit();
  };
  window.addEventListener("resize", fit);

  /* ---------- Jauges ---------- */
  function drawGauges(d, target, labels) {
    var h = "";
    Object.keys(G.stats).forEach(function (k) {
      var s = G.stats[k], v = stats[k];
      h += '<div class="g" title="' + esc(s[1]) + '"><span class="gi">' + s[0] + "</span>" +
        (labels ? '<span class="gl">' + esc(s[1]) + "</span>" : "") +
        '<div class="gbar"><i style="width:' + v + '%" class="' + (v < 35 ? "lo" : v < 65 ? "mid" : "hi") + '"></i></div>' +
        (d && d[k] ? '<b class="pop ' + (d[k] > 0 ? "up" : "dn") + '">' + (d[k] > 0 ? "+" : "") + d[k] + "</b>" : "") + "</div>";
    });
    target.innerHTML = h;
  }
  function apply(fx) {
    var d = {};
    if (fx) Object.keys(fx).forEach(function (k) {
      var nv = Math.max(0, Math.min(100, stats[k] + fx[k]));
      d[k] = nv - stats[k]; stats[k] = nv;
    });
    drawGauges(d, $("gauges"), false);
  }

  /* ---------- Scènes ---------- */
  function btn(label, fn) {
    var b = document.createElement("button");
    b.className = "b"; b.textContent = label; b.onclick = fn;
    return b;
  }
  function show(id) {
    var s = S[id];
    busy = false;
    if (s.end) { ending(s); return; }
    setImg(s.img, s.fx, s.sp);
    var p = $("panel"); p.classList.remove("in"); void p.offsetWidth; p.classList.add("in");
    $("txt").textContent = s.text;
    var box = $("btns"); box.innerHTML = "";
    if (s.roll) {
      $("q").textContent = s.roll.hint;
      box.appendChild(btn("🎲 Lancer le dé", function () { roll(s.roll); }));
    } else {
      $("q").textContent = s.q;
      s.a.forEach(function (a) { box.appendChild(btn(a.l, function () { choose(a); })); });
    }
  }
  function choose(a) {
    if (busy) return;
    busy = true;
    beep(520, 0.08);
    path.push({ log: a.log, good: a.good });
    apply(a.fx);
    setTimeout(function () { show(a.next); }, 450);
  }
  function roll(r) {
    if (busy) return;
    busy = true;
    $("btns").innerHTML = "";
    var d = $("dice"), faces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"], n = 0;
    var res = Math.floor(Math.random() * 6) + 1, ok = res <= r.pass;
    d.hidden = false; d.className = "rolling";
    var t = setInterval(function () {
      d.textContent = faces[Math.floor(Math.random() * 6)];
      beep(300 + Math.random() * 250, 0.05);
      if (++n > 12) {
        clearInterval(t);
        d.textContent = faces[res - 1]; d.className = ok ? "okd" : "kod";
        $("q").textContent = "🎲 " + res + (ok ? " — le hasard est avec toi !" : " — pas de chance…");
        beep(ok ? 784 : 180, 0.25, ok ? "sine" : "sawtooth");
        path.push({ log: "Dé : " + res + (ok ? " (réussi)" : " (raté)"), good: ok ? 1 : 0 });
        setTimeout(function () { d.hidden = true; show(ok ? r.ok : r.ko); }, 1800);
      }
    }, 90);
  }

  /* ---------- Fins et bilan ---------- */
  function load() { try { return JSON.parse(localStorage.getItem("pd_" + ROLE)) || []; } catch (e) { return []; } }
  function save(v) { try { localStorage.setItem("pd_" + ROLE, JSON.stringify(v)); } catch (e) { /* stockage indisponible */ } }
  function ending(s) {
    var un = load();
    if (un.indexOf(s.end) < 0) { un.push(s.end); save(un); }
    var ico = { lose: "😕", mixed: "🍀", win: "🏆" }[s.kind];
    if (s.kind === "win") [523, 659, 784, 1047].forEach(function (f, i) { beep(f, 0.3, "sine", i * 140); });
    else if (s.kind === "mixed") [523, 659].forEach(function (f, i) { beep(f, 0.25, "sine", i * 160); });
    else { beep(220, 0.3, "sawtooth"); beep(165, 0.4, "sawtooth", 260); }
    var chips = "";
    for (var i = 1; i <= total; i++) chips += '<span class="chip' + (un.indexOf(i) >= 0 ? " on" : "") + (i === s.end ? " cur" : "") + '">' + i + "</span>";
    var e = $("end");
    e.innerHTML =
      '<div class="card k-' + s.kind + '">' +
        '<div class="logo big"><img src="' + LOGO + '" alt="CO Drize – SEM Lab"></div>' +
        '<div class="ico">' + ico + "</div>" +
        "<h2>Fin n°" + s.end + " sur " + total + " — " + esc(s.title) + "</h2>" +
        '<p class="msg">' + esc(s.msg) + "</p>" +
        '<div id="gend" class="gauges"></div>' +
        "<h3>Ton parcours</h3><ul class=\"path\">" +
          path.map(function (p) { return '<li class="' + (p.good ? "ok" : "ko") + '">' + esc(p.log) + "</li>"; }).join("") + "</ul>" +
        "<h3>Fins débloquées <small>" + un.length + "/" + total + "</small></h3><div class=\"chips\">" + chips + "</div>" +
        "<details><summary>💬 À discuter à deux</summary><ol>" + G.discuss.map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ol></details>" +
        '<div class="actions">' +
          '<a class="b" href="' + G.home + '">↺ Recommencer</a>' +
          '<a class="b alt" target="_blank" href="' + C.BROCHURE + '">📄 Ouvrir la brochure</a>' +
          '<a class="b alt" href="' + G.other[0] + '">' + G.other[1] + "</a>" +
          '<a class="b alt" href="' + G.index + '">⌂ Accueil</a>' +
        '</div><p class="credits">' + esc(C.CREDITS) + "</p></div>";
    drawGauges(null, $("gend"), true);
    e.hidden = false; e.scrollTop = 0;
  }

  /* ---------- Démarrage ---------- */
  $("snd").onclick = function () { muted = !muted; $("snd").textContent = muted ? "🔇" : "🔊"; };
  document.addEventListener("keydown", function (ev) {
    if (!$("end").hidden) return;
    var b = $("btns").children, k = ev.key.toLowerCase();
    var i = (k === "o" || k === "1") ? 0 : (k === "n" || k === "2") ? 1 : (k === "enter" && b.length === 1) ? 0 : -1;
    if (i >= 0 && b[i]) b[i].click();
  });
  stats = {}; path = [];
  Object.keys(G.stats).forEach(function (k) { stats[k] = G.stats[k][2]; });
  drawGauges(null, $("gauges"), false);
  Object.keys(S).forEach(function (k) { if (S[k].img) new Image().src = IMG(S[k].img); });
  show(G.start);
})();
