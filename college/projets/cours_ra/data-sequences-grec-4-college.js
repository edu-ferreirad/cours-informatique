// SALLE SÉQUENCES — GREC — 4e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_GREC_4_COLLEGE_OBJECTS = [
  { id:"gr4_travail_recherche_personnel", tier:"court", emoji:"🗂️", label:"Travail de recherche personnel",
    text:"Chaque élève choisit un thème lié à la civilisation grecque étudiée sur les quatre années et mène une recherche personnelle restituée sous forme d'un court exposé illustré par des extraits traduits.",
    fact:"Le plan d'études cite explicitement des travaux personnels ou en groupe (exposés, travaux de recherche) comme activité de fin de cursus.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"gr4_lecture_comparee_traduction", tier:"moyen", emoji:"📚", label:"Lecture comparée en traduction",
    text:"Les élèves comparent un extrait grec traduit à un texte français d'inspiration antique (théâtre, philosophie) pour identifier ce que la culture occidentale a hérité directement de la pensée grecque.",
    fact:"Le plan d'études rappelle que l'étude du grec conduit à une prise de conscience plus aiguë de sa propre réalité grâce à la référence que constitue la culture classique.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqGrec4CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_GREC_4_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_GREC_4_COLLEGE_OBJECTS = MUSEE_SEQ_GREC_4_COLLEGE_OBJECTS;
window.getSeqGrec4CollegeObjectsForParcours = getSeqGrec4CollegeObjectsForParcours;
