// SALLE SÉQUENCES — ALLEMAND — 1ère année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ALLEMAND_1_COLLEGE_OBJECTS = [
  { id:"al1_role_play_quotidien", tier:"court", emoji:"🗣️", label:"Jeux de rôle du quotidien",
    text:"Par binômes, les élèves jouent une scène courte de la vie courante (acheter, demander son chemin) en tirant au sort une contrainte (politesse excessive, urgence) qui change le ton sans changer le vocabulaire de base.",
    fact:"Le plan d'études attend en 1ère année une réaction adéquate et personnalisée dans des situations de la vie quotidienne — la contrainte de ton force à sortir du dialogue mémorisé par cœur.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"al1_nacherzahlung_image", tier:"moyen", emoji:"🖼️", label:"Nacherzählung à partir d'images",
    text:"À partir d'une suite de 4 images muettes, les élèves racontent une histoire courte à l'écrit en allemand simple, avant d'échanger leur texte avec un camarade qui doit redessiner la suite d'images à partir du texte seul.",
    fact:"Ce format correspond directement au Bildgeschichte cité par le plan d'études comme objectif d'expression écrite de 1ère année.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
];
function getSeqAllemand1CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ALLEMAND_1_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ALLEMAND_1_COLLEGE_OBJECTS = MUSEE_SEQ_ALLEMAND_1_COLLEGE_OBJECTS;
window.getSeqAllemand1CollegeObjectsForParcours = getSeqAllemand1CollegeObjectsForParcours;
