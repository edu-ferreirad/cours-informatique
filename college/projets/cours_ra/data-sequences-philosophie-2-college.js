// SALLE SÉQUENCES — PHILOSOPHIE — 2e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_PHILOSOPHIE_2_COLLEGE_OBJECTS = [
  { id:"ph2_info_pas_de_cours", tier:"court", emoji:"ℹ️", label:"Pas encore de philosophie en 2e année",
    text:"Comme en 1ère année, aucune heure de philosophie n'est prévue en 2e année : le cours démarre l'année suivante, en 3e année, avec un accès direct aux grands textes philosophiques.",
    fact:"Ce délai laisse aux élèves le temps de consolider d'autres disciplines de sciences humaines (histoire, géographie) avant d'aborder l'exercice, plus abstrait, de la réflexion philosophique.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
];
function getSeqPhilosophie2CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_PHILOSOPHIE_2_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_PHILOSOPHIE_2_COLLEGE_OBJECTS = MUSEE_SEQ_PHILOSOPHIE_2_COLLEGE_OBJECTS;
window.getSeqPhilosophie2CollegeObjectsForParcours = getSeqPhilosophie2CollegeObjectsForParcours;
