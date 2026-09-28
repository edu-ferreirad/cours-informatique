// SALLE SÉQUENCES — ESPAGNOL — 3e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ESPAGNOL_3_COLLEGE_OBJECTS = [
  { id:"es3_commentaire_texte_hispanique", tier:"court", emoji:"🔍", label:"Commenter et interpréter un texte",
    text:"Face à un texte littéraire hispanique, les élèves construisent un commentaire structuré en identifiant un thème central et deux procédés d'écriture qui le servent, avant confrontation en petit groupe.",
    fact:"Commenter et interpréter des textes de façon cohérente et critique est un objectif explicite du plan d'études pour cette étape du cursus.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"es3_recherche_personnelle_es", tier:"moyen", emoji:"🗂️", label:"Effectuer une recherche personnelle",
    text:"Chaque élève choisit un sujet culturel du monde hispanique et mène une petite recherche documentaire en espagnol, restituée sous forme de fiche synthétique présentée oralement.",
    fact:"Effectuer des recherches personnelles est cité explicitement par le plan d'études parmi les aptitudes à développer.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
];
function getSeqEspagnol3CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ESPAGNOL_3_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ESPAGNOL_3_COLLEGE_OBJECTS = MUSEE_SEQ_ESPAGNOL_3_COLLEGE_OBJECTS;
window.getSeqEspagnol3CollegeObjectsForParcours = getSeqEspagnol3CollegeObjectsForParcours;
