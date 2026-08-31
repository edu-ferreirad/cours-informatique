// ============================================================================
// CONFIGURATION SPATIALE — dérivée du plan de salle fourni (salle.pdf)
// ============================================================================
//
// IMPORTANT : le plan original n'est pas à l'échelle (c'est un schéma de
// disposition, pas un plan coté). Les valeurs forward/right/height
// ci-dessous sont donc des ESTIMATIONS construites à partir de la grille
// du plan (3 colonnes de tables × 4 rangées + la zone bureau du prof côté
// armoires), avec un espacement de table standard (~1.2 m entre colonnes,
// ~1.2 m entre rangées). CE SONT DES PLACEHOLDERS — à corriger avec de
// vraies mesures avant le jour J.
//
// COMMENT CORRIGER :
// Tiens-toi au POINT DE CALIBRATION (voir CALIBRATION_POINT_DESC),
// face à la salle, et mesure jusqu'à chaque objet :
//   - forward : mètres tout droit devant toi
//   - right   : mètres sur ta droite (négatif = à gauche)
//   - height  : hauteur du plateau/objet par rapport au sol
// Remplace juste les 3 nombres de chaque entrée ci-dessous — le reste
// (id, chapitre, correct/décoy) ne doit pas changer.
//
// ============================================================================

const CALIBRATION_POINT_DESC =
  "Tenez-vous sur le seuil de la porte d'entrée, face à la salle (vers le tableau).";

// Repères de grille utilisés pour construire les estimations (en mètres,
// depuis le seuil de la porte). Change juste ces 7 nombres si tu préfères
// recalculer toutes les positions à partir d'une grille corrigée.
const GRID = {
  colLeft: -1.8, colMid: 0, colRight: 1.8,
  rowFront: 1.8, rowMid1: 3.0, rowMid2: 4.2, rowBack: 5.4,
  deskHeight: 0.75,
};

// Chaque entrée : id unique, chapitre auquel elle appartient, texte affiché
// sur le panneau RA quand on la trouve, correct (true = fait avancer
// l'histoire) ou false (décoy → message "Dommage !").
const SPATIAL_ANCHORS = {

  // ---- Chapitre 2 : l'échelle (vraie / fausses, + décoys du plan) ----
  ch2: [
    { id: "echelle_vraie",   label: "Cahier « Les échelles » (le vrai)", correct: true,
      forward: GRID.rowFront, right: GRID.colLeft, height: GRID.deskHeight },
    { id: "echelle_fausse",  label: "Cahier « Les échelles » (faux exemplaire)", correct: false,
      forward: GRID.rowMid2, right: GRID.colLeft, height: GRID.deskHeight },
    { id: "cahier_ascenseur", label: "Cahier « Ascenseurs »", correct: false,
      forward: GRID.rowMid2, right: GRID.colRight, height: GRID.deskHeight },
    { id: "cahier_escaliers", label: "Cahier « Les escaliers »", correct: false,
      forward: GRID.rowMid1, right: GRID.colLeft, height: GRID.deskHeight },
  ],

  // ---- Chapitre 3 : la cloche (miroir, + verres-décoys du plan) ----
  ch3: [
    { id: "miroir_cloche", label: "Le miroir + l'écusson de Genève", correct: true,
      forward: GRID.rowBack, right: GRID.colRight, height: GRID.deskHeight },
    { id: "verre_1", label: "Un verre", correct: false,
      forward: GRID.rowBack, right: GRID.colLeft, height: GRID.deskHeight },
    { id: "verre_2", label: "Un verre", correct: false,
      forward: GRID.rowBack, right: GRID.colMid, height: GRID.deskHeight },
  ],

  // ---- Chapitre 4 : Mère Royaume (calendrier, près des armoires) ----
  ch4: [
    { id: "calendrier", label: "Le calendrier sur le côté de l'armoire", correct: true,
      forward: 0.9, right: -1.2, height: 1.1 },
    { id: "boite_cadenas", label: "Une boîte à cadenas", correct: false,
      forward: 0.9, right: -0.4, height: 0.9 },
    { id: "cle_cachee", label: "Une petite clé cachée", correct: false,
      forward: 0.9, right: 0.3, height: 0.9 },
  ],

  // ---- Chapitre 5 : l'écusson de Genève sur le bureau du prof ----
  // (mécanique demandée explicitement : faux sur les bureaux élèves,
  // le bon sur le bureau du prof)
  ch5: [
    { id: "ecusson_geneve", assetKey: "ecusson_geneve", label: "Écusson de Genève — bureau du professeur", correct: true,
      forward: 1.0, right: 2.2, height: 0.75 },
    { id: "ecusson_vaud", assetKey: "ecusson_vaud", label: "Écusson de Vaud — bureau élève", correct: false,
      forward: GRID.rowFront, right: GRID.colMid, height: GRID.deskHeight },
    { id: "ecusson_berne", assetKey: "ecusson_berne", label: "Écusson de Berne — bureau élève", correct: false,
      forward: GRID.rowMid1, right: GRID.colRight, height: GRID.deskHeight },
    { id: "ecusson_valais", assetKey: "ecusson_valais", label: "Écusson du Valais — bureau élève", correct: false,
      forward: GRID.rowMid2, right: GRID.colMid, height: GRID.deskHeight },
  ],

  // ---- Chapitre 6 : la chanson de l'Escalade (panneau au mur du fond) ----
  ch6: [
    { id: "panneau_chanson", label: "Panneau « Cé qu'è lainô »", correct: true,
      forward: GRID.rowBack, right: GRID.colMid, height: 1.3 },
    { id: "vieux_cahier", label: "Un vieux cahier sans rapport", correct: false,
      forward: GRID.rowMid1, right: GRID.colMid, height: GRID.deskHeight },
  ],

  // ---- Chapitre 7 : le rébus (dans l'armoire, vrai + faux) ----
  ch7: [
    { id: "rebus_vrai", assetKey: "rebus_true", label: "Le vrai rébus", correct: true,
      forward: 0.9, right: -1.6, height: 1.0 },
    { id: "rebus_faux", assetKey: "rebus_fake", label: "Un faux rébus", correct: false,
      forward: 0.9, right: -0.9, height: 1.0 },
  ],

  // ---- Chapitre 8 : les bulletins de notes (bureau du prof) ----
  ch8: [
    { id: "bulletins", label: "Les bulletins de notes — bureau du professeur", correct: true,
      forward: 1.0, right: 2.6, height: 0.75 },
  ],
};

if (typeof window !== "undefined") {
  window.CALIBRATION_POINT_DESC = CALIBRATION_POINT_DESC;
  window.SPATIAL_ANCHORS = SPATIAL_ANCHORS;
  window.GRID = GRID;
}
