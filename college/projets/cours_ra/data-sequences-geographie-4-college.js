// SALLE SÉQUENCES — GÉOGRAPHIE — 4e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_GEOGRAPHIE_4_COLLEGE_OBJECTS = [
  { id:"ge4_probleme_planetaire", tier:"court", emoji:"🌍", label:"Un grand problème planétaire, plusieurs échelles",
    text:"Sur un enjeu environnemental global, les élèves analysent successivement ses manifestations à l'échelle locale, nationale et mondiale, avant de proposer une synthèse reliant les trois niveaux.",
    fact:"Le plan d'études met l'accent sur la sensibilisation aux problèmes que l'humanité doit affronter à des échelles différentes — cette synthèse finale en est l'aboutissement logique.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"ge4_travail_recherche_geo", tier:"moyen", emoji:"🗂️", label:"Petite recherche territoriale personnelle",
    text:"Chaque élève choisit un territoire de son choix et mène une recherche documentaire courte pour en dégager une problématique géographique précise, restituée sous forme d'une carte commentée.",
    fact:"La construction d'une problématique par le questionnement et la formulation d'hypothèses est citée explicitement comme aptitude développée par la géographie en fin de cursus.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqGeographie4CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_GEOGRAPHIE_4_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_GEOGRAPHIE_4_COLLEGE_OBJECTS = MUSEE_SEQ_GEOGRAPHIE_4_COLLEGE_OBJECTS;
window.getSeqGeographie4CollegeObjectsForParcours = getSeqGeographie4CollegeObjectsForParcours;
