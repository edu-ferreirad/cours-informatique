// SALLE SÉQUENCES — GREC — 1ère année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_GREC_1_COLLEGE_OBJECTS = [
  { id:"gr1_alphabet_dechiffrage", tier:"court", emoji:"🔤", label:"Déchiffrer avant de traduire",
    text:"Face à un mot grec inconnu écrit en capitales, les élèves le déchiffrent lettre à lettre à voix haute avant même de chercher son sens, un réflexe répété chaque semaine sur une liste de mots-clés du cours.",
    fact:"La maîtrise de l'alphabet et de la lecture est un préalable absolu avant toute traduction ; le plan d'études parle d'acquérir la connaissance des notions linguistiques élémentaires dès la première année.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"gr1_mythologie_recit", tier:"moyen", emoji:"🏺", label:"Raconter un mythe à sa façon",
    text:"Après la lecture d'un mythe grec simple en traduction, chaque élève doit le raconter oralement en changeant un seul élément (le lieu, l'objet magique) sans trahir la structure du récit original.",
    fact:"Le plan d'études signale que les données riches contenues dans les textes, notamment mythologiques, initient progressivement l'élève aux aspects principaux de la culture grecque.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
];
function getSeqGrec1CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_GREC_1_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_GREC_1_COLLEGE_OBJECTS = MUSEE_SEQ_GREC_1_COLLEGE_OBJECTS;
window.getSeqGrec1CollegeObjectsForParcours = getSeqGrec1CollegeObjectsForParcours;
