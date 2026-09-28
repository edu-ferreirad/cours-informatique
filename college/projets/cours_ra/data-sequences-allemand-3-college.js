// SALLE SÉQUENCES — ALLEMAND — 3e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ALLEMAND_3_COLLEGE_OBJECTS = [
  { id:"al3_expose_defense_sujet", tier:"court", emoji:"🎤", label:"Présenter et défendre un sujet",
    text:"Chaque élève prépare un exposé de 3 minutes sur un sujet culturel germanophone de son choix et doit répondre ensuite à deux questions improvisées posées par des camarades tirés au sort.",
    fact:"Présenter et défendre un sujet fait partie des situations d'expression orale explicitement citées par le plan d'études pour l'option spécifique.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"al3_analyse_texte_litteraire", tier:"moyen", emoji:"📖", label:"Expliquer un texte littéraire court",
    text:"Face à un court extrait littéraire allemand, les élèves relèvent un procédé stylistique précis et son effet, avant de comparer leur lecture à celle d'un camarade travaillant sur un extrait voisin du même auteur.",
    fact:"Expliquer un texte littéraire est cité comme objectif d'expression orale en option spécifique dès la 3e année.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
];
function getSeqAllemand3CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ALLEMAND_3_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ALLEMAND_3_COLLEGE_OBJECTS = MUSEE_SEQ_ALLEMAND_3_COLLEGE_OBJECTS;
window.getSeqAllemand3CollegeObjectsForParcours = getSeqAllemand3CollegeObjectsForParcours;
