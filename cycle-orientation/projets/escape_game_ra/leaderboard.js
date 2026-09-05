// ============================================================================
// LEADERBOARD — synchronisation temps réel entre équipes (via Firebase)
//
// Dégradation gracieuse totale : si /firebase-config.js n'a pas été rempli
// (FIREBASE_CONFIG === null), toutes les fonctions ci-dessous ne font rien
// et ne bloquent jamais le jeu. Rien n'est requis pour jouer normalement.
// ============================================================================

const Leaderboard = (() => {
  let db = null;
  let teamId = null;
  let available = false;
  let initPromise = null;

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = () => reject(new Error("échec de chargement: " + src));
      document.head.appendChild(s);
    });
  }

  async function init() {
    if (!window.FIREBASE_CONFIG) return false;
    if (initPromise) return initPromise;
    initPromise = (async () => {
      try {
        await loadScript("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
        await loadScript("https://www.gstatic.com/firebasejs/10.12.2/firebase-database-compat.js");
        // eslint-disable-next-line no-undef
        firebase.initializeApp(window.FIREBASE_CONFIG);
        // eslint-disable-next-line no-undef
        db = firebase.database();
        available = true;
        return true;
      } catch (e) {
        available = false;
        return false;
      }
    })();
    return initPromise;
  }

  function setTeam(name) {
    const slug = (name || "equipe").trim().toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[.#$\[\]/\s]+/g, "-");
    teamId = slug + "-" + Math.random().toString(36).slice(2, 6);
  }

  function update(data) {
    if (!available || !db || !teamId) return;
    db.ref(`sessions/${window.GAME_SESSION_ID}/teams/${teamId}`).set({
      name: data.name || "",
      score: data.score || 0,
      chapter: data.chapter || 0,
      total: data.total || 0,
      finished: !!data.finished,
      time: data.time || null,
      updatedAt: Date.now(),
    }).catch(() => {});
  }

  function subscribe(callback) {
    if (!available || !db) return () => {};
    const ref = db.ref(`sessions/${window.GAME_SESSION_ID}/teams`);
    const handler = (snap) => callback(snap.val() || {});
    ref.on("value", handler);
    return () => ref.off("value", handler);
  }

  return { init, setTeam, update, subscribe, isAvailable: () => available };
})();

if (typeof window !== "undefined") window.Leaderboard = Leaderboard;
