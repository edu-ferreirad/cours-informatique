// SALLE SÉQUENCES — CHIMIE — 4e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_CHIMIE_4_COLLEGE_OBJECTS = [
  { id:"ch4_energie_reaction_os", tier:"court", emoji:"⚡", label:"OS uniquement — D'où vient l'énergie d'une pile ?",
    text:"Les élèves de l'option construisent une pile simple en laboratoire et doivent expliquer, à partir des réactions chimiques en jeu, d'où provient précisément l'énergie électrique produite.",
    fact:"Comprendre les principes de production d'énergie électrique à partir de phénomènes chimiques (piles) est un objectif explicite de fin de cursus en option spécifique.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"ch4_bigbang_matiere_os", tier:"moyen", emoji:"🌠", label:"OS uniquement — De l'univers primitif aux atomes",
    text:"Les élèves de l'option présentent en groupe, sous forme de frise commentée, les grandes étapes de la formation des premiers atomes après le big-bang, en reliant chaque étape à une notion de chimie déjà étudiée.",
    fact:"Décrire l'évolution de la matière dans l'univers à la lumière des théories récentes est un objectif explicite de fin de cursus, qui relie la chimie à une perspective historique et cosmologique large.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqChimie4CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_CHIMIE_4_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_CHIMIE_4_COLLEGE_OBJECTS = MUSEE_SEQ_CHIMIE_4_COLLEGE_OBJECTS;
window.getSeqChimie4CollegeObjectsForParcours = getSeqChimie4CollegeObjectsForParcours;
