// SALLE SÉQUENCES — MUSIQUE — 4e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_MUSIQUE_4_COLLEGE_OBJECTS = [
  { id:"mu4_musiques_civilisations_os", tier:"court", emoji:"🌍", label:"OS uniquement — Comparer deux traditions musicales",
    text:"Les élèves de l'option comparent un extrait musical occidental à un extrait d'une autre tradition musicale du monde, en identifiant les différences de structure, de gamme ou de fonction sociale.",
    fact:"Apprendre à connaître des musiques de différents styles et de différentes civilisations est un objectif explicite de fin de cursus pour l'option spécifique.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"mu4_projet_final_os", tier:"moyen", emoji:"🎭", label:"OS uniquement — Petit projet musical de fin de cursus",
    text:"Les élèves de l'option préparent en petit groupe une courte production musicale originale (interprétation ou composition) présentée à la classe, avec une explication orale des choix artistiques effectués.",
    fact:"Ce projet final mobilise l'ensemble des aptitudes développées en option spécifique : interprétation, improvisation et création, dans un même travail cohérent.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqMusique4CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_MUSIQUE_4_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_MUSIQUE_4_COLLEGE_OBJECTS = MUSEE_SEQ_MUSIQUE_4_COLLEGE_OBJECTS;
window.getSeqMusique4CollegeObjectsForParcours = getSeqMusique4CollegeObjectsForParcours;
