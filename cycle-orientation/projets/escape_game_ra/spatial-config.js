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

  // ---- Avant le chapitre 2 : les outils de décodage (trouvés une fois) ----
  // Roue de César + tables de conversion — posés quelque part dans la salle,
  // comme dans un vrai escape game. Une fois trouvés, ils rejoignent le
  // porte-documents 🗂️ et restent consultables librement pour le reste de la
  // partie (pas besoin de les re-chercher à chaque lettre à décoder).
  tools: [
    { id: "outils_decodage", emoji: "📐", label: "Les outils de décodage — roue de César et tables de conversion", correct: true, distance: 2.2, angle: 60, height: DESK_H },
    { id: "vieux_stylo",     emoji: "🖊️", label: "Un vieux stylo",  correct: false, distance: 1.6, angle: 87,  height: DESK_H },
    { id: "gomme",           emoji: "🧽", label: "Une gomme",       correct: false, distance: 2.8, angle: 91,  height: DESK_H },
  ],

  // ---- Chapitre 2 : le gobelet à l'écusson de Genève (contient l'échelle) ----
  // Inventaire réel : "Goblet avec l'écusson de Genève (mettre enigme 2 dedans)".
  // Genève est sur le bureau du professeur ; les autres cantons + les verres
  // "dommage" sont posés sur des bureaux élèves.
  ch2: [
    { id: "ecusson_geneve", assetKey: "ecusson_geneve", label: "Écusson de Genève — bureau du professeur", correct: true,  distance: 4.8, angle: 155, height: PROF_H },
    { id: "ecusson_vaud",   assetKey: "ecusson_vaud",   label: "Écusson de Vaud — bureau élève",           correct: false, distance: 3.4, angle: 120, height: DESK_H },
    { id: "ecusson_berne",  assetKey: "ecusson_berne",  label: "Écusson de Berne — bureau élève",          correct: false, distance: 6.0, angle: 105, height: DESK_H },
    { id: "ecusson_valais", assetKey: "ecusson_valais", label: "Écusson du Valais — bureau élève",         correct: false, distance: 4.2, angle: 80,  height: DESK_H },
  ],

  // ---- Chapitre 3 : le vrai cahier « échelle » (contient la cloche) ----
  // Inventaire réel : "3 cahiers échelle (1 vrai avec l'énigme 3 dedans - 2 faux)".
  // Labels neutres : "vraies/fausses" donnerait la réponse avant de chercher.
  // Un des faux est une image d'échelle MODERNE — piège visuel volontaire.
  // Les cahiers ascenseur/escaliers contiennent eux-mêmes "dommage" écrit en
  // chiffres romains (petit easter egg fidèle à l'original — visible sur leur
  // panneau RA une fois trouvés).
  ch3: [
    { id: "echelle_vraie",    assetKey: "img_echelle",         label: "Cahier « Les échelles »",  correct: true,  distance: 0.5, angle: 100, height: DESK_H },
    { id: "echelle_fausse",   assetKey: "img_echelle_moderne", label: "Cahier « Les échelles »",  correct: false, distance: 1.6, angle: 87,  height: DESK_H },
    { id: "cahier_ascenseur", assetKey: "img_ascenseur",       label: "Cahier « Ascenseurs »",    correct: false, distance: 4.8, angle: 137, height: DESK_H, romanTrap: true },
    { id: "cahier_escaliers", assetKey: "img_escaliers",       label: "Cahier « Les escaliers »", correct: false, distance: 2.8, angle: 91,  height: DESK_H, romanTrap: true },
  ],

  // ---- Chapitre 4 : Mère Royaume ----
  // Pure énigme narrative dans l'inventaire réel (aucun objet à chercher en RA
  // pour celle-ci) — pas de spatialKey pour ce chapitre.

  // ---- Chapitre 5 : le bulletin de Clément Clé (bureau du professeur) ----
  ch5: [
    { id: "bulletin_clement_cle", emoji: "📋", label: "Bulletin de Clément Clé",  correct: true,  distance: 4.8, angle: 155, height: PROF_H },
    { id: "bulletin_leurre_1",    emoji: "📄", label: "Bulletin d'un autre élève", correct: false, distance: 3.4, angle: 120, height: DESK_H },
    { id: "bulletin_leurre_2",    emoji: "📄", label: "Bulletin d'un autre élève", correct: false, distance: 5.6, angle: 120, height: DESK_H },
    { id: "cle_cachee",           emoji: "🗝️", label: "Une petite clé cachée",     correct: false, distance: 5.2, angle: 190, height: ARMOIRE_H },
  ],

  // ---- Chapitre 6 : la boîte à cadenas (contient la chanson de l'Escalade) ----
  // Inventaire réel : "boite avec cadenas (avec l'énigme 6 dedans)" — thème :
  // vous avez trouvé une clé (chapitre 5), elle ouvre cette boîte.
  ch6: [
    { id: "boite_cadenas",   emoji: "🔒", label: "Une boîte à cadenas",            correct: true,  distance: 3.0, angle: 180, height: ARMOIRE_H },
    { id: "verre_dommage_2", emoji: "🥃", label: "Un verre",                       correct: false, distance: 6.0, angle: 105, height: DESK_H },
  ],

  // ---- Chapitre 7 : le calendrier (contient le rébus) ----
  // Inventaire réel : "Calendrier (avec l'énigme 7 dedans) au dos du mois de novembre".
  ch7: [
    { id: "calendrier",      emoji: "📅", label: "Le calendrier sur le côté de l'armoire", correct: true,  distance: 1.0, angle: 220, height: ARMOIRE_H },
    { id: "verre_dommage_3", emoji: "🥃", label: "Un verre",                               correct: false, distance: 4.2, angle: 80,  height: DESK_H },
  ],

  // ---- Chapitre 8 : le coupable ----
  // Pure énigme narrative dans l'inventaire réel ("Rien ni personne n'a
  // jamais quitté cette salle") — pas de spatialKey, pas de recherche RA.
};

if (typeof window !== "undefined") {
  window.CALIBRATION_POINT_DESC = CALIBRATION_POINT_DESC;
  window.SPATIAL_ANCHORS = SPATIAL_ANCHORS;
}
