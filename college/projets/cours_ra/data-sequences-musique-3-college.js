// SALLE SÉQUENCES — MUSIQUE — 3e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_MUSIQUE_3_COLLEGE_OBJECTS = [
  { id:"mu3_improvisation_encadree_os", tier:"court", emoji:"🎹", label:"OS uniquement — Improviser sur une contrainte",
    text:"Les élèves de l'option spécifique improvisent à tour de rôle sur un instrument ou avec la voix, en respectant une contrainte simple imposée (une gamme, un rythme), avant un retour bref du groupe sur ce qui a fonctionné.",
    fact:"Exprimer et développer son potentiel artistique par l'interprétation, l'improvisation et la création est un objectif explicite propre à l'option spécifique.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"mu3_ecriture_musicale_os", tier:"moyen", emoji:"🎼", label:"OS uniquement — Écrire une courte mélodie",
    text:"Les élèves de l'option composent une très courte mélodie sur une base rythmique donnée, en utilisant les bases de l'écriture musicale étudiées, avant de la faire jouer ou chanter par la classe.",
    fact:"Acquérir les bases de l'écriture musicale est un objectif explicite du plan d'études pour l'option spécifique, en plus des savoirs déjà requis en discipline fondamentale.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
];
function getSeqMusique3CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_MUSIQUE_3_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_MUSIQUE_3_COLLEGE_OBJECTS = MUSEE_SEQ_MUSIQUE_3_COLLEGE_OBJECTS;
window.getSeqMusique3CollegeObjectsForParcours = getSeqMusique3CollegeObjectsForParcours;
