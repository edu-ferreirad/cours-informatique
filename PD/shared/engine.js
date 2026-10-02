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
  var stats, path, code, busy, curFx = 50, curSp = 40, manualFit = null, muted = false, ac = null, prof = false, fsIdx = 0;
  var FS = [1, 1.2, 1.4];

  $("app").innerHTML =
    '<div id="stage">' +
      '<img class="bg" id="bg" alt=""><img class="fg" id="fg" alt="">' +
      '<div id="hud"><div class="logo"><img src="' + LOGO + '" alt="CO Drize – SEM Lab"></div>' +
      '<div id="gauges"></div>' +
      '<div class="tools"><button id="zoom" title="Voir toute l\'image / zoomer">🔍</button><button id="snd" title="Son">🔊</button>' +
      '<button id="fsz" title="Taille du texte">Aa</button><button id="tts" title="Lire à voix haute">📢</button><button id="pf" title="Mode projection (classe)">🎓</button></div></div>' +
      '<div id="dice" hidden></div>' +
      '<div id="rot" hidden>↻ ' + (ROLE === "enfant" ? "Tourne" : "Tournez") + ' le téléphone pour voir toute l\'image</div>' +
    '</div>' +
    '<div id="panel"><div id="txt"></div><div id="q"></div><div id="btns"></div></div>' +
    '<div id="end" hidden></div>';

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
      } catch (e) {}
    }, delay || 0);
  }

  function fit() {
    var fg = $("fg"), st = $("stage");
    if (!fg.naturalWidth) return;
    var iar = fg.naturalWidth / fg.naturalHeight, sa = st.clientWidth / st.clientHeight;
    var vis = Math.min(1, sa / iar) * 100;
    var cover = manualFit === null ? (vis < 92 && vis >= curSp + 8) : manualFit === "cover";
    fg.style.objectFit = cover ? "cover" : "contain";
    var bw = st.clientWidth, bh = st.clientHeight, iw = Math.max(bw, bh * iar), pos = 50;
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

  function drawGauges(d, target, labels) {
    var h = "";
    Object.keys(G.stats).forEach(function (k) {
      var s = G.stats[k], v = stats[k];
      h += '<div class="g" title="' + esc(s[1]) + '"><span class="gi">' + s[0] + "</span>" +
        (labels ? '<span class="gl">' + esc(s[1]) + "</span>" : "") +
        '<div class="gbar"><i style="width:' + v + '%"></i></div>' +
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

  function btn(label, fn) {
    var b = document.createElement("button");
    b.className = "b"; b.textContent = label; b.onclick = fn;
    return b;
  }
  function animPanel() {
    var p = $("panel"); p.classList.remove("in"); void p.offsetWidth; p.classList.add("in");
  }
  function voteBox() {
    var v = document.createElement("div"), n = 0;
    v.className = "vote";
    v.innerHTML = '<button type="button">−</button><b>0</b><button type="button">+</button>';
    var bs = v.getElementsByTagName("button"), out = v.getElementsByTagName("b")[0];
    bs[0].onclick = function () { n = Math.max(0, n - 1); out.textContent = n; };
    bs[1].onclick = function () { n++; out.textContent = n; };
    return v;
  }
  function show(id) {
    var s = S[id];
    busy = false;
    try { speechSynthesis.cancel(); } catch (e) {}
    if (s.bend) { bonusEnding(s); return; }
    if (s.end) { ending(s); return; }
    setImg(s.img, s.fx, s.sp);
    animPanel();
    $("txt").textContent = s.text;
    var box = $("btns"); box.innerHTML = "";
    if (s.roll) {
      $("q").textContent = s.roll.hint;
      box.appendChild(btn("🎲 Lancer le dé", function () { roll(s.roll); }));
    } else {
      $("q").textContent = s.q;
      s.a.forEach(function (a, i) {
        var w = document.createElement("div");
        w.className = "opt";
        w.appendChild(btn(a.l, function () { choose(a, i); }));
        w.appendChild(voteBox());
        box.appendChild(w);
      });
    }
  }
  function choose(a, idx) {
    if (busy) return;
    busy = true;
    beep(520, 0.08);
    path.push({ log: a.log });
    code += idx;
    apply(a.fx);
    if (a.why) {
      animPanel();
      $("txt").textContent = a.why;
      $("q").textContent = "💡 À savoir";
      var box = $("btns"); box.innerHTML = "";
      box.appendChild(btn("Continuer ›", function () { show(a.next); }));
    } else {
      setTimeout(function () { show(a.next); }, 450);
    }
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
        $("q").textContent = "🎲 " + res + " — " + (ok ? (r.okt || "Le hasard est favorable.") : (r.kot || "Cette fois, le hasard en décide autrement."));
        beep(ok ? 784 : 220, 0.25);
        path.push({ log: "Dé : " + res, dice: 1 });
        code += res;
        setTimeout(function () { d.hidden = true; show(ok ? r.ok : r.ko); }, 2200);
      }
    }, 90);
  }

  function load() { try { return JSON.parse(localStorage.getItem("pd_" + ROLE)) || []; } catch (e) { return []; } }
  function save(v) { try { localStorage.setItem("pd_" + ROLE, JSON.stringify(v)); } catch (e) {} }
  function tallyGet() { try { return JSON.parse(localStorage.getItem("pd_prof_" + ROLE)) || {}; } catch (e) { return {}; } }
  function tallySet(t) { try { localStorage.setItem("pd_prof_" + ROLE, JSON.stringify(t)); } catch (e) {} }
  function tallyText() {
    var t = tallyGet(), a = [];
    for (var i = 1; i <= total; i++) a.push("Fin " + i + " : " + (t[i] || 0));
    return a.join(" · ");
  }

  function replay(role, c) {
    var g = window.GAMES[role], id, out = [], i = 0, guard = 0;
    if (!g) return null;
    id = g.start;
    while (id && guard++ < 40) {
      var s = g.scenes[id], ch;
      if (!s) return null;
      if (s.end) return { steps: out, end: s.end };
      ch = c.charAt(i++);
      if (ch === "") return null;
      if (s.roll) {
        var d = +ch;
        if (!(d >= 1 && d <= 6)) return null;
        out.push({ log: "Dé : " + d, dice: 1 });
        id = d <= s.roll.pass ? s.roll.ok : s.roll.ko;
      } else {
        var a = s.a[+ch];
        if (!a) return null;
        out.push({ log: a.log });
        id = a.next;
      }
    }
    return null;
  }
  function listHtml(steps) {
    return "<ul class=\"path\">" + steps.map(function (p) { return '<li' + (p.dice ? ' class="d"' : "") + ">" + esc(p.log) + "</li>"; }).join("") + "</ul>";
  }

  function initStats() {
    stats = {}; path = []; code = "";
    Object.keys(G.stats).forEach(function (k) { stats[k] = G.stats[k][2]; });
    drawGauges(null, $("gauges"), false);
  }
  function startBonus() { $("end").hidden = true; initStats(); show(G.bonus); }
  function bonusEnding(s) {
    var e = $("end");
    [523, 659, 784].forEach(function (f, i) { beep(f, 0.25, "sine", i * 140); });
    e.innerHTML =
      '<div class="card k-win"><div class="logo big"><img src="' + LOGO + '" alt="CO Drize – SEM Lab"></div>' +
        '<div class="ico">🌟</div><h2>Chapitre bonus terminé</h2>' +
        '<p class="msg">' + esc(s.msg) + "</p>" +
        '<div id="gend" class="gauges"></div>' +
        "<h3>Mon parcours</h3>" + listHtml(path) +
        '<div class="actions">' +
          '<button class="b" id="again" type="button">↺ Rejouer le chapitre</button>' +
          '<a class="b alt" target="_blank" href="' + G.flyer + '">📄 Flyer droit à l\'image</a>' +
          '<a class="b alt" href="' + G.home + '">Recommencer l\'histoire</a>' +
          '<a class="b alt" href="' + G.index + '">⌂ Accueil</a>' +
        '</div><p class="credits">' + esc(C.CREDITS) + "</p></div>";
    drawGauges(null, $("gend"), true);
    $("again").onclick = startBonus;
    e.hidden = false; e.scrollTop = 0;
  }

  function ending(s) {
    var un = load();
    if (un.indexOf(s.end) < 0) { un.push(s.end); save(un); }
    var star = un.filter(function (n) { return n <= total; }).length >= total;
    var ico = { lose: "💭", mixed: "🍀", win: "🌟" }[s.kind];
    if (s.kind === "win") [523, 659, 784, 1047].forEach(function (f, i) { beep(f, 0.3, "sine", i * 140); });
    else if (s.kind === "mixed") [523, 659].forEach(function (f, i) { beep(f, 0.25, "sine", i * 160); });
    else { beep(330, 0.3); beep(262, 0.4, "sine", 260); }
    if (prof) { var t = tallyGet(); t[s.end] = (t[s.end] || 0) + 1; tallySet(t); }
    var chips = "";
    for (var i = 1; i <= total; i++) chips += '<span class="chip' + (un.indexOf(i) >= 0 ? " on" : "") + (i === s.end ? " cur" : "") + '">' + i + "</span>";
    chips += '<span class="chip' + (star ? " on" : "") + '">' + (star ? "⭐" : "?") + "</span>";
    var myCode = ROLE.charAt(0).toUpperCase() + code;
    var defi = stats.conf >= 70;
    var e = $("end");
    e.innerHTML =
      '<div class="card k-' + s.kind + '">' +
        '<div class="logo big"><img src="' + LOGO + '" alt="CO Drize – SEM Lab"></div>' +
        '<div class="ico">' + ico + "</div>" +
        "<h2>Fin n°" + s.end + " sur " + total + "</h2>" +
        '<p class="msg">' + esc(s.msg) + "</p>" +
        '<div id="gend" class="gauges"></div>' +
        '<p class="defi">🎯 Défi optionnel : terminer avec une confiance de 70 % ou plus — ' + (defi ? "relevé" : "à retenter") + "</p>" +
        "<h3>Mon parcours</h3>" + listHtml(path) +
        "<h3>Fins débloquées <small>" + un.filter(function (n) { return n <= total; }).length + "/" + total + "</small></h3><div class=\"chips\">" + chips + "</div>" +
        (star ? '<p class="secret">⭐ ' + esc(G.secret) + "</p>" : "") +
        (prof ? '<div class="tally">🎓 Fins atteintes en classe<br><span id="tt">' + tallyText() + '</span> <button id="treset" class="lnk" type="button">remettre à zéro</button></div>' : "") +
        "<details class=\"discuss\"><summary>💬 À discuter à deux</summary><ol>" + G.discuss.map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ol></details>" +
        '<details class="duo"><summary>👥 Jouer à deux</summary>' +
          "<p>Chacun joue sa version (Enfant et Parent), puis vous comparez vos parcours. Il n'y a pas de bonne ou de mauvaise réponse : l'idée est d'en parler.</p>" +
          '<p>Mon code : <b id="mycode">' + myCode + '</b></p>' +
          '<div class="row"><input id="oc" placeholder="Code de l\'autre joueur" autocapitalize="characters"><button id="cmp" class="b" type="button">Comparer</button></div>' +
          '<div id="cmpout"></div></details>' +
        '<div class="actions">' +
          '<a class="b" href="' + G.home + '">↺ Recommencer</a>' +
          '<button class="b alt" id="bon" type="button">➕ Chapitre bonus</button>' +
          '<button class="b alt" id="prt" type="button">🖨️ Imprimer ma fiche</button>' +
          '<a class="b alt" target="_blank" href="' + C.BROCHURE + '">📄 Ouvrir la brochure</a>' +
          '<a class="b alt" href="' + G.other[0] + '">' + G.other[1] + "</a>" +
          '<a class="b alt" href="' + G.index + '">⌂ Accueil</a>' +
        '</div><p class="credits">' + esc(C.CREDITS) + "</p></div>";
    drawGauges(null, $("gend"), true);
    $("bon").onclick = startBonus;
    $("prt").onclick = function () {
      var ds = e.getElementsByTagName("details");
      for (var k = 0; k < ds.length; k++) ds[k].open = true;
      window.print();
    };
    $("cmp").onclick = function () {
      var v = $("oc").value.replace(/\s/g, "").toUpperCase(), role = v.charAt(0) === "E" ? "enfant" : v.charAt(0) === "P" ? "parent" : null;
      var mine = replay(ROLE, code), other = role ? replay(role, v.slice(1)) : null;
      $("cmpout").innerHTML = (!mine || !other)
        ? "<p>Code non reconnu. Il commence par E ou P, suivi de chiffres.</p>"
        : '<div class="cols"><div><h4>Ma partie (' + ROLE + ")</h4>" + listHtml(mine.steps) + "<p>Fin n°" + mine.end + "</p></div>" +
          '<div><h4>L\'autre partie (' + role + ")</h4>" + listHtml(other.steps) + "<p>Fin n°" + other.end + "</p></div></div>";
    };
    if (prof) $("treset").onclick = function () { tallySet({}); $("tt").textContent = tallyText(); };
    e.hidden = false; e.scrollTop = 0;
  }

  $("snd").onclick = function () { muted = !muted; $("snd").textContent = muted ? "🔇" : "🔊"; };
  $("fsz").onclick = function () { fsIdx = (fsIdx + 1) % FS.length; $("app").style.setProperty("--fs", FS[fsIdx]); };
  $("tts").onclick = function () {
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance($("txt").textContent + ". " + $("q").textContent);
      u.lang = "fr-FR"; speechSynthesis.speak(u);
    } catch (e) {}
  };
  $("pf").onclick = function () { prof = !prof; $("app").classList.toggle("prof", prof); };
  document.addEventListener("keydown", function (ev) {
    if (!$("end").hidden || ev.target.tagName === "INPUT") return;
    var b = document.querySelectorAll("#btns .b"), k = ev.key.toLowerCase();
    var i = (k === "o" || k === "1") ? 0 : (k === "n" || k === "2") ? 1 : (k === "enter" && b.length === 1) ? 0 : -1;
    if (i >= 0 && b[i]) b[i].click();
  });
  initStats();
  Object.keys(S).forEach(function (k) { if (S[k].img) new Image().src = IMG(S[k].img); });
  show(G.start);
})();
