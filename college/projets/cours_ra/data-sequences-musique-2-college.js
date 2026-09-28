// SALLE SÉQUENCES — MUSIQUE — 2e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_MUSIQUE_2_COLLEGE_OBJECTS = [
  { id:"mu2_vocabulaire_critique", tier:"court", emoji:"💬", label:"Construire une critique argumentée",
    text:"Après l'écoute d'un morceau inconnu, chaque élève rédige une courte critique utilisant au moins trois termes de vocabulaire musical précis vus en classe, avant d'échanger son texte avec un camarade pour vérification du vocabulaire employé.",
    fact:"Disposer d'un vocabulaire permettant une argumentation critique est un objectif explicite de fin de discipline fondamentale.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"mu2_histoire_musique_frise", tier:"moyen", emoji:"🕰️", label:"Situer un morceau sur la frise musicale",
    text:"Face à un extrait musical non identifié, les élèves doivent le situer approximativement dans le temps en s'appuyant sur des indices sonores précis (instrumentation, structure), avant de vérifier la période réelle.",
    fact:"Connaître les grandes articulations de l'histoire de la musique, des genres et des formes est un objectif explicite de fin de discipline fondamentale.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
];
function getSeqMusique2CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_MUSIQUE_2_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_MUSIQUE_2_COLLEGE_OBJECTS = MUSEE_SEQ_MUSIQUE_2_COLLEGE_OBJECTS;
window.getSeqMusique2CollegeObjectsForParcours = getSeqMusique2CollegeObjectsForParcours;
