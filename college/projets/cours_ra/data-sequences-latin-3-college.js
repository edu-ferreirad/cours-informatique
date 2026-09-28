// SALLE SÉQUENCES — LATIN — 3e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_LATIN_3_COLLEGE_OBJECTS = [
  { id:"la3_analyse_contexte", tier:"court", emoji:"📖", label:"Analyser un texte dans son contexte",
    text:"Face à un texte d'auteur latin étudié en option spécifique, les élèves relient un passage précis à son contexte historique et culturel avant de le commenter à l'oral.",
    fact:"Analyser et commenter un texte latin dans son contexte historique et culturel est un objectif explicite de l'option spécifique dès la 3e année.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"la3_theme_construction", tier:"moyen", emoji:"✍️", label:"Le thème comme miroir de sa propre langue",
    text:"À partir d'une phrase française simple, les élèves la traduisent en latin (exercice de thème), puis comparent les structures des deux langues pour mieux comprendre le fonctionnement du français lui-même.",
    fact:"Le plan d'études indique que l'exercice de la version aide à mieux maîtriser le fonctionnement et l'expression de sa propre langue — cette séquence rend ce lien explicite.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
];
function getSeqLatin3CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_LATIN_3_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_LATIN_3_COLLEGE_OBJECTS = MUSEE_SEQ_LATIN_3_COLLEGE_OBJECTS;
window.getSeqLatin3CollegeObjectsForParcours = getSeqLatin3CollegeObjectsForParcours;
