// SALLE SÉQUENCES — ESPAGNOL — 1ère année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ESPAGNOL_1_COLLEGE_OBJECTS = [
  { id:"es1_survie_quotidien", tier:"court", emoji:"🗣️", label:"Scènes de survie linguistique",
    text:"Par binômes, les élèves jouent des situations de vie courante (au marché, à la gare) en espagnol simple, avec une carte-contrainte tirée au sort (objet perdu, malentendu) qui pimente le dialogue sans complexifier le vocabulaire.",
    fact:"Le plan d'études vise, dès le départ de l'option, à communiquer dans les situations de la vie courante — un objectif qui se construit par la pratique répétée de dialogues simples plutôt que par la seule mémorisation de listes.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"es1_prononciation_chant", tier:"moyen", emoji:"🎵", label:"Travailler l'accent avec une chanson",
    text:"À partir d'une chanson hispanophone simple, les élèves repèrent les liaisons et l'accent tonique sur des mots clés avant de chanter en petit groupe, un moyen ludique de travailler une bonne prononciation dès la première année.",
    fact:"Le plan d'études mentionne explicitement l'attention particulière accordée à la prononciation dès l'acquisition du vocabulaire de base.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
];
function getSeqEspagnol1CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ESPAGNOL_1_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ESPAGNOL_1_COLLEGE_OBJECTS = MUSEE_SEQ_ESPAGNOL_1_COLLEGE_OBJECTS;
window.getSeqEspagnol1CollegeObjectsForParcours = getSeqEspagnol1CollegeObjectsForParcours;
