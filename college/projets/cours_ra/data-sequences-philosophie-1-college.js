// SALLE SÉQUENCES — PHILOSOPHIE — 1ère année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_PHILOSOPHIE_1_COLLEGE_OBJECTS = [
  { id:"ph1_info_pas_de_cours", tier:"court", emoji:"ℹ️", label:"Pas de philosophie en 1ère année",
    text:"La philosophie n'apparaît pas dans la grille horaire de 1ère année du Collège de Genève : elle démarre seulement en 3e année, à raison de 2h hebdomadaires, et continue en 4e année.",
    fact:"Certaines disciplines de sciences humaines (histoire) sont enseignées sur 4 ans, d'autres (géographie) sur 3, et la philosophie seulement sur 2 — une organisation propre à chaque discipline, pas un oubli.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
];
function getSeqPhilosophie1CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_PHILOSOPHIE_1_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_PHILOSOPHIE_1_COLLEGE_OBJECTS = MUSEE_SEQ_PHILOSOPHIE_1_COLLEGE_OBJECTS;
window.getSeqPhilosophie1CollegeObjectsForParcours = getSeqPhilosophie1CollegeObjectsForParcours;
