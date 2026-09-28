// SALLE SÉQUENCES — PHYSIQUE — 1ère année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_PHYSIQUE_1_COLLEGE_OBJECTS = [
  { id:"py1_ordre_grandeur_estimation", tier:"court", emoji:"📏", label:"Estimer avant de mesurer",
    text:"Avant toute mesure réelle, les élèves doivent estimer à l'œil un ordre de grandeur (la masse d'un objet, une distance) et écrire leur estimation au tableau ; la mesure réelle n'est révélée qu'ensuite, jamais l'inverse.",
    fact:"Le plan d'études cite explicitement l'estimation des ordres de grandeur comme aptitude fondamentale ; inverser l'ordre habituel (estimer puis mesurer) rend l'écart visible et mémorable.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"py1_protocole_simple", tier:"moyen", emoji:"🔬", label:"Observer, mesurer, analyser en trois temps",
    text:"Face à un phénomène simple (chute d'un objet, dilatation), les élèves suivent trois étapes strictement séparées — observation libre, mesure chiffrée, analyse — sans jamais mélanger les trois dans leur cahier.",
    fact:"Le plan d'études décrit la démarche scientifique comme un exercice permanent où observation, expérience et élaboration de modèles s'enchaînent dans un ordre précis, pas comme un mélange informel.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
];
function getSeqPhysique1CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_PHYSIQUE_1_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_PHYSIQUE_1_COLLEGE_OBJECTS = MUSEE_SEQ_PHYSIQUE_1_COLLEGE_OBJECTS;
window.getSeqPhysique1CollegeObjectsForParcours = getSeqPhysique1CollegeObjectsForParcours;
