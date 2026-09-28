// SALLE SÉQUENCES — GREC — 3e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_GREC_3_COLLEGE_OBJECTS = [
  { id:"gr3_grands_textes_auteur", tier:"court", emoji:"📖", label:"Aborder les grands textes par auteur",
    text:"Les élèves traduisent et commentent un extrait plus long d'un auteur majeur du programme, en resituant le passage dans l'ensemble de l'œuvre avant de le comparer à un extrait d'un autre auteur du même genre.",
    fact:"Le plan d'études indique que durant les deux dernières années, l'élève aborde les grands textes de la littérature par auteurs ou par thèmes.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"gr3_finesse_traduction", tier:"moyen", emoji:"🔍", label:"La finesse d'un seul mot",
    text:"Face à un mot grec ayant plusieurs traductions possibles selon le contexte, les élèves comparent les nuances de sens et choisissent la traduction la plus juste, en justifiant leur choix par le contexte précis du passage.",
    fact:"Par l'exercice de la traduction, développer facultés d'analyse grammaticale et finesse linguistique est un objectif explicite du plan d'études en option spécifique.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
];
function getSeqGrec3CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_GREC_3_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_GREC_3_COLLEGE_OBJECTS = MUSEE_SEQ_GREC_3_COLLEGE_OBJECTS;
window.getSeqGrec3CollegeObjectsForParcours = getSeqGrec3CollegeObjectsForParcours;
