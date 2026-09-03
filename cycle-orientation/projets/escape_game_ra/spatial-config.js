// ============================================================================
// CONFIGURATION SPATIALE — vraies mesures de la salle
// ============================================================================
//
// Format de chaque objet : { distance, angle, height } — mesuré au point de
// calibration avec une distance en diagonale (mètre ruban / télémètre) et
// un cap de boussole (téléphone à plat) :
//   0°   = tout droit devant soi (vers le tableau)
//   90°  = plein à droite
//   180° = derrière soi
//   270° = plein à gauche
// (sens horaire, comme une vraie boussole)
//
// Salle : 6,8 m × 5,2 m.
// Hauteur bureau élève : 0,6 m. Hauteur bureau du professeur : 0,9 m.
// Tableau (où est punaisé "Cé qu'è lainô") : hauteur 1 m, largeur 2 m.
//
// ============================================================================

const CALIBRATION_POINT_DESC =
  "Tenez-vous sur le seuil de la porte d'entrée, face à la salle (vers le tableau).";

const DESK_H = 0.6;   // hauteur bureau élève
const PROF_H = 0.9;   // hauteur bureau du professeur
const ARMOIRE_H = 0.9; // hauteur zone armoire (calendrier / cadenas / clé / rébus)
const PANNEAU_H = 1.0; // hauteur panneau mural (chanson de l'Escalade)

const SPATIAL_ANCHORS = {

  // ---- Chapitre 2 : l'échelle ----
  ch2: [
    { id: "echelle_vraie",    assetKey: "img_echelle",    label: "Cahier « Les échelles » (le vrai)",         correct: true,  distance: 0.5, angle: 100, height: DESK_H },
    { id: "echelle_fausse",   assetKey: "img_echelle",    label: "Cahier « Les échelles » (faux exemplaire)", correct: false, distance: 1.6, angle: 87,  height: DESK_H },
    { id: "cahier_ascenseur", assetKey: "img_ascenseur",  label: "Cahier « Ascenseurs »",                     correct: false, distance: 4.8, angle: 137, height: DESK_H },
    { id: "cahier_escaliers", assetKey: "img_escaliers",  label: "Cahier « Les escaliers »",                  correct: false, distance: 2.8, angle: 91,  height: DESK_H },
  ],

  // ---- Chapitre 3 : la cloche ----
  ch3: [
    { id: "miroir_cloche", label: "Le miroir + l'écusson de Genève", correct: true,  distance: 6.7, angle: 116, height: DESK_H },
    { id: "verre_1",       label: "Un verre",                        correct: false, distance: 4.2, angle: 80,  height: DESK_H },
    { id: "verre_2",       label: "Un verre",                        correct: false, distance: 6.0, angle: 105, height: DESK_H },
  ],

  // ---- Chapitre 4 : Mère Royaume ----
  ch4: [
    { id: "calendrier",    label: "Le calendrier sur le côté de l'armoire", correct: true,  distance: 1.0, angle: 220, height: ARMOIRE_H },
    { id: "boite_cadenas", label: "Une boîte à cadenas",                    correct: false, distance: 3.0, angle: 180, height: ARMOIRE_H },
    { id: "cle_cachee",    label: "Une petite clé cachée",                  correct: false, distance: 5.2, angle: 190, height: ARMOIRE_H },
  ],

  // ---- Chapitre 5 : l'écusson du bureau du professeur ----
  ch5: [
    { id: "ecusson_geneve", assetKey: "ecusson_geneve", label: "Écusson de Genève — bureau du professeur", correct: true,  distance: 4.8, angle: 155, height: PROF_H },
    { id: "ecusson_vaud",   assetKey: "ecusson_vaud",   label: "Écusson de Vaud — bureau élève",           correct: false, distance: 3.4, angle: 120, height: DESK_H },
    { id: "ecusson_berne",  assetKey: "ecusson_berne",  label: "Écusson de Berne — bureau élève",          correct: false, distance: 5.6, angle: 120, height: DESK_H },
    { id: "ecusson_valais", assetKey: "ecusson_valais", label: "Écusson du Valais — bureau élève",         correct: false, distance: 4.2, angle: 80,  height: DESK_H },
  ],

  // ---- Chapitre 6 : la chanson de l'Escalade ----
  ch6: [
    { id: "panneau_chanson", label: "Panneau « Cé qu'è lainô »",       correct: true,  distance: 3.4, angle: 90,  height: PANNEAU_H },
    { id: "vieux_cahier",    assetKey: "img_escaliers", label: "Un vieux cahier sans rapport", correct: false, distance: 6.0, angle: 105, height: DESK_H },
  ],

  // ---- Chapitre 7 : le rébus (à l'intérieur de l'armoire) ----
  ch7: [
    { id: "rebus_vrai", assetKey: "rebus_true", label: "Le vrai rébus", correct: true,  distance: 1.0, angle: 220, height: ARMOIRE_H },
    { id: "rebus_faux", assetKey: "rebus_fake", label: "Un faux rébus", correct: false, distance: 1.3, angle: 208, height: ARMOIRE_H },
  ],

  // ---- Chapitre 8 : les bulletins de notes (bureau du professeur) ----
  ch8: [
    { id: "bulletins", label: "Les bulletins de notes — bureau du professeur", correct: true, distance: 4.8, angle: 155, height: PROF_H },
  ],
};

if (typeof window !== "undefined") {
  window.CALIBRATION_POINT_DESC = CALIBRATION_POINT_DESC;
  window.SPATIAL_ANCHORS = SPATIAL_ANCHORS;
}
