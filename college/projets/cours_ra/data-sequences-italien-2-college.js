// SALLE SÉQUENCES — ITALIEN — 2e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ITALIEN_2_COLLEGE_OBJECTS = [
  { id:"it2_conversation_spontanee", tier:"court", emoji:"💬", label:"Conversation spontanée minutée",
    text:"Par binômes, les élèves tiennent une conversation de 2 minutes sur un sujet imposé, sans préparation écrite préalable, immédiatement suivie d'un retour du camarade sur un seul point à améliorer.",
    fact:"Participer activement à une conversation et à un échange d'idées est un objectif central de la discipline fondamentale dès la 2e année.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"it2_lecture_diversite_textes", tier:"moyen", emoji:"📰", label:"Lire des textes de natures différentes",
    text:"Les élèves comparent un article de presse, une chanson et une bande dessinée italienne sur un thème commun, et doivent identifier ce que chaque type de texte permet de dire que les autres ne permettent pas.",
    fact:"Le plan d'études cite explicitement articles de presse, chansons et bandes dessinées parmi les supports à étudier pour découvrir la diversité de la culture italienne.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
];
function getSeqItalien2CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ITALIEN_2_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ITALIEN_2_COLLEGE_OBJECTS = MUSEE_SEQ_ITALIEN_2_COLLEGE_OBJECTS;
window.getSeqItalien2CollegeObjectsForParcours = getSeqItalien2CollegeObjectsForParcours;
