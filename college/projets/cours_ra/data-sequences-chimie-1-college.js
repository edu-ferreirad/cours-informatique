// SALLE SÉQUENCES — CHIMIE — 1ère année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_CHIMIE_1_COLLEGE_OBJECTS = [
  { id:"ch1_separation_methodes", tier:"court", emoji:"🧪", label:"Trouver la bonne méthode de séparation",
    text:"Face à un mélange concret (sable et eau, huile et eau), les élèves doivent choisir et justifier la méthode de séparation adaptée à ses propriétés physiques, avant de la tester réellement en laboratoire.",
    fact:"Le plan d'études demande de choisir une méthode de séparation en fonction de propriétés physiques — un exercice qui exige de comprendre pourquoi une méthode fonctionne, pas seulement de la suivre.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"ch1_tableau_periodique_enquete", tier:"moyen", emoji:"🔬", label:"Enquête dans le tableau périodique",
    text:"Par petits groupes, les élèves doivent retrouver, à partir d'indices donnés (nombre d'électrons, position), trois éléments cachés dans le tableau périodique, sans jamais l'utiliser comme simple liste à consulter passivement.",
    fact:"Exploiter les informations contenues dans le tableau périodique est un objectif explicite de la discipline fondamentale ; le jeu d'enquête force une lecture active plutôt qu'une consultation superficielle.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
];
function getSeqChimie1CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_CHIMIE_1_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_CHIMIE_1_COLLEGE_OBJECTS = MUSEE_SEQ_CHIMIE_1_COLLEGE_OBJECTS;
window.getSeqChimie1CollegeObjectsForParcours = getSeqChimie1CollegeObjectsForParcours;
