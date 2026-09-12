// ============================================================================
// TABLEAU DE BORD PARTAGÉ EN TEMPS RÉEL — configuration Firebase
// ============================================================================
//
// Sans configuration, le jeu fonctionne normalement (score local par équipe
// uniquement) — cette fonctionnalité est un bonus optionnel, jamais bloquant.
//
// COMMENT L'ACTIVER (10 minutes, gratuit) :
// 1. Va sur https://console.firebase.google.com → « Ajouter un projet »
//    (nom libre, ex. "marmite-1602")
// 2. Dans le projet : Build → Realtime Database → Créer une base de données
//    → choisis une région Europe → démarre en « mode test » (accès ouvert
//    30 jours ; largement suffisant pour une activité de classe. Si tu veux
//    la garder active plus longtemps, il faudra ajuster les règles d'accès
//    plus tard dans la console).
// 3. Dans les paramètres du projet (roue crantée) → « Ajouter une application »
//    → Web (</>) → copie l'objet firebaseConfig qui s'affiche.
// 4. Colle-le ci-dessous à la place de FIREBASE_CONFIG.
// 5. Choisis un GAME_SESSION_ID unique pour la journée (ex. "escalade-2026-12-11")
//    — toutes les équipes qui jouent le même jour avec le même identifiant
//    apparaîtront sur le même tableau de bord.
//
// Le tableau de bord live est visible sur grand écran via le lien affiché
// en bas de l'écran d'accueil (mode projecteur).
//
// ============================================================================

const FIREBASE_CONFIG = null; // remplace par ton objet firebaseConfig, ex:
// const FIREBASE_CONFIG = {
//   apiKey: "AIza...",
//   authDomain: "marmite-1602.firebaseapp.com",
//   databaseURL: "https://marmite-1602-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "marmite-1602",
// };

const GAME_SESSION_ID = "escalade-1602-defaut"; // change-le pour isoler chaque session/journée

if (typeof window !== "undefined") {
  window.FIREBASE_CONFIG = FIREBASE_CONFIG;
  window.GAME_SESSION_ID = GAME_SESSION_ID;
}
