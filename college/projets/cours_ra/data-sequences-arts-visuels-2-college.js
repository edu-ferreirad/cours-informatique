// SALLE SÉQUENCES — ARTS VISUELS — 2e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ARTS_VISUELS_2_COLLEGE_OBJECTS = [
  { id:"av2_copie_variation", tier:"court", emoji:"🎨", label:"Copier puis transformer une œuvre",
    text:"Après avoir copié fidèlement un détail d'une œuvre du passé, les élèves doivent la transformer selon une contrainte imposée (changer l'époque, la technique) et expliquer les choix effectués.",
    fact:"La confrontation avec les modèles du passé par la copie, l'analyse et la variation est un objectif explicite de la formation en atelier dès la 2e année.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"av2_argumentation_gout", tier:"moyen", emoji:"💬", label:"Justifier un goût esthétique",
    text:"Face à deux œuvres contrastées, chaque élève doit exprimer une préférence personnelle en l'appuyant sur trois critères précis (composition, couleur, intention), sans se contenter de dire « j'aime » ou « je n'aime pas ».",
    fact:"Le plan d'études attend que l'élève analyse ses impressions et mette des mots sur ses émotions pour formuler un jugement personnel communicable à autrui — pas seulement une préférence brute.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
];
function getSeqArtsVisuels2CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ARTS_VISUELS_2_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ARTS_VISUELS_2_COLLEGE_OBJECTS = MUSEE_SEQ_ARTS_VISUELS_2_COLLEGE_OBJECTS;
window.getSeqArtsVisuels2CollegeObjectsForParcours = getSeqArtsVisuels2CollegeObjectsForParcours;
