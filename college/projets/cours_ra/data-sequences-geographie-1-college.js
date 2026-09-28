// SALLE SÉQUENCES — GÉOGRAPHIE — 1ère année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_GEOGRAPHIE_1_COLLEGE_OBJECTS = [
  { id:"ge1_info_pas_de_cours", tier:"court", emoji:"ℹ️", label:"Pas de géographie en 1ère année",
    text:"Contrairement à l'histoire, la géographie ne commence pas dès la 1ère année du Collège de Genève : la grille horaire officielle ne lui réserve aucune heure avant la 2e année, où elle démarre à raison de 2h hebdomadaires.",
    fact:"C'est une asymétrie réelle entre les deux disciplines de sciences humaines les plus proches : l'histoire est enseignée sur les 4 années, la géographie seulement sur 3.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
];
function getSeqGeographie1CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_GEOGRAPHIE_1_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_GEOGRAPHIE_1_COLLEGE_OBJECTS = MUSEE_SEQ_GEOGRAPHIE_1_COLLEGE_OBJECTS;
window.getSeqGeographie1CollegeObjectsForParcours = getSeqGeographie1CollegeObjectsForParcours;
