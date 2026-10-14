// ============================================================================
// DISSUASION CAPTURE D'ÉCRAN / COPIE
// Un navigateur ne peut PAS bloquer techniquement la capture d'écran d'un
// téléphone (iOS/Android). Ce script met en place les freins possibles :
//  - masque la page quand elle passe en arrière-plan (changement d'appli)
//  - masque la page sur Impression d'écran / Ctrl+P / Ctrl+S / Cmd+Shift+3-4-5
//  - bloque sélection, copier, glisser-déposer, menu contextuel, appui long
//  - rend l'impression de la page vide
// Aucun impact sur la caméra, la RA, l'audio ni le quiz.
// ============================================================================
(function () {
  "use strict";
  if (window.__antiCapture) return;
  window.__antiCapture = true;

  var css =
    "html,body{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;}" +
    "input,textarea{-webkit-user-select:text;user-select:text;}" +
    "img{-webkit-user-drag:none;}" +
    "@media print{html{display:none!important;}}";
  var st = document.createElement("style");
  st.textContent = css;
  (document.head || document.documentElement).appendChild(st);

  var shield = null;
  function ensureShield() {
    if (shield) return shield;
    shield = document.createElement("div");
    shield.setAttribute("aria-hidden", "true");
    shield.style.cssText =
      "position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483647;" +
      "background:#000;color:#fff;display:none;align-items:center;" +
      "justify-content:center;text-align:center;padding:24px;" +
      "font:600 16px/1.4 system-ui,sans-serif;";
    shield.textContent = "🔒 Contenu protégé — les captures d'écran sont interdites.";
    (document.body || document.documentElement).appendChild(shield);
    return shield;
  }
  function hide() { ensureShield().style.display = "flex"; }
  function show() { if (shield) shield.style.display = "none"; }

  function isField(t) {
    return !!(t && t.closest && t.closest("input,textarea"));
  }

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) hide(); else show();
  });

  // Ordinateur uniquement : la perte de focus (outil de capture) masque la page.
  var desktop = false;
  try { desktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches; } catch (e) {}
  if (desktop) {
    window.addEventListener("blur", hide);
    window.addEventListener("focus", show);
  }

  function panic() {
    hide();
    try { if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(" "); } catch (e) {}
    setTimeout(show, 1500);
  }

  function onKey(e) {
    var k = e.key || "";
    var mod = e.ctrlKey || e.metaKey;
    var low = k.toLowerCase();
    if (k === "PrintScreen" || k === "Snapshot") { panic(); return; }
    if (mod && e.shiftKey && (k === "3" || k === "4" || k === "5" || low === "s")) { panic(); e.preventDefault(); return; }
    if (mod && (low === "p" || low === "s")) { panic(); e.preventDefault(); }
  }
  document.addEventListener("keydown", onKey, true);
  document.addEventListener("keyup", function (e) {
    if (e.key === "PrintScreen" || e.key === "Snapshot") panic();
  }, true);

  window.addEventListener("beforeprint", hide);
  window.addEventListener("afterprint", show);

  document.addEventListener("contextmenu", function (e) { e.preventDefault(); }, true);
  document.addEventListener("dragstart", function (e) { e.preventDefault(); }, true);
  ["copy", "cut", "selectstart"].forEach(function (ev) {
    document.addEventListener(ev, function (e) { if (!isField(e.target)) e.preventDefault(); }, true);
  });
})();
