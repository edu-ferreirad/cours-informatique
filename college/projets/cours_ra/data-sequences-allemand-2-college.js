// SALLE SÉQUENCES — ALLEMAND — 2e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ALLEMAND_2_COLLEGE_OBJECTS = [
  { id:"al2_debat_point_vue_texte", tier:"court", emoji:"💬", label:"Exprimer un point de vue sur un texte",
    text:"Après lecture d'un court texte allemand, chaque élève prépare deux arguments personnels pour ou contre une affirmation qu'il contient, puis les défend à l'oral face à un camarade qui prend la position opposée.",
    fact:"Défendre et argumenter un point de vue sur la base de textes est un objectif explicite de la discipline fondamentale dès la 2e année.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"al2_comprehension_document_sonore", tier:"moyen", emoji:"🎧", label:"Repérer l'essentiel d'un document sonore",
    text:"Après une seule écoute d'un court reportage, les élèves notent uniquement les informations essentielles (qui, quoi, où) sans transcrire, puis comparent leurs notes en petit groupe avant une deuxième écoute de vérification.",
    fact:"Le plan d'études cite les documents sonores parmi les moyens à utiliser pour développer la compréhension orale — l'interdiction de transcrire force à trier l'essentiel plutôt qu'à tout copier mot à mot.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
];
function getSeqAllemand2CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ALLEMAND_2_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ALLEMAND_2_COLLEGE_OBJECTS = MUSEE_SEQ_ALLEMAND_2_COLLEGE_OBJECTS;
window.getSeqAllemand2CollegeObjectsForParcours = getSeqAllemand2CollegeObjectsForParcours;
