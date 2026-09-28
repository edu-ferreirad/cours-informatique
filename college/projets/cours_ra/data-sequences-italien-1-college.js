// SALLE SÉQUENCES — ITALIEN — 1ère année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ITALIEN_1_COLLEGE_OBJECTS = [
  { id:"it1_sons_prononciation", tier:"court", emoji:"🔊", label:"Chasse aux sons italiens",
    text:"Par petits groupes, les élèves classent une liste de mots italiens selon des sons proches à distinguer (gli/gn, doubles consonnes), en s'enregistrant pour vérifier leur propre prononciation avant correction collective.",
    fact:"Reconnaître et reproduire les sons de la langue italienne est un objectif explicite du tronc commun de 1ère année.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"it1_description_image", tier:"moyen", emoji:"🖼️", label:"Décrire une image à un camarade aveugle",
    text:"Un élève décrit oralement en italien simple une image qu'il est seul à voir ; son camarade doit la dessiner uniquement à partir de la description avant de comparer les deux versions.",
    fact:"Décrire un lieu, une personne ou une image est cité par le plan d'études comme objectif de compréhension et d'expression orale de 1ère année.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
];
function getSeqItalien1CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ITALIEN_1_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ITALIEN_1_COLLEGE_OBJECTS = MUSEE_SEQ_ITALIEN_1_COLLEGE_OBJECTS;
window.getSeqItalien1CollegeObjectsForParcours = getSeqItalien1CollegeObjectsForParcours;
