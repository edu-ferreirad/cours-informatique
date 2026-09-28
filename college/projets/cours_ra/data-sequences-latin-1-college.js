// SALLE SÉQUENCES — LATIN — 1ère année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_LATIN_1_COLLEGE_OBJECTS = [
  { id:"la1_version_guidee", tier:"court", emoji:"📜", label:"Version guidée pas à pas",
    text:"Face à une phrase latine courte, les élèves identifient d'abord le verbe conjugué, puis le sujet, puis les compléments un par un avant de proposer une traduction complète — jamais l'inverse.",
    fact:"Cette méthode reproduit l'aptitude visée par le plan d'études : comprendre et traduire un texte en repérant d'abord sa structure, plutôt que de deviner un sens global au hasard.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"la1_etymologie_chasse", tier:"moyen", emoji:"🔤", label:"Chasse à l'étymologie",
    text:"À partir d'une liste de mots latins simples, les élèves cherchent des mots français ou anglais qui en dérivent probablement, avant de vérifier leurs hypothèses dans un dictionnaire étymologique.",
    fact:"Le plan d'études cite explicitement les notions étymologiques comme facilitant l'apprentissage des langues romanes — un lien concret entre le latin et les langues vivantes déjà étudiées.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
];
function getSeqLatin1CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_LATIN_1_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_LATIN_1_COLLEGE_OBJECTS = MUSEE_SEQ_LATIN_1_COLLEGE_OBJECTS;
window.getSeqLatin1CollegeObjectsForParcours = getSeqLatin1CollegeObjectsForParcours;
