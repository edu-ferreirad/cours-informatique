// SALLE SÉQUENCES — PHYSIQUE — 3e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_PHYSIQUE_3_COLLEGE_OBJECTS = [
  { id:"py3_calcul_incertitude_os", tier:"court", emoji:"🎯", label:"OS uniquement — Calculer l'impact d'une incertitude",
    text:"Les élèves de l'option spécifique calculent comment une petite erreur de mesure au départ se propage jusqu'au résultat final d'un calcul en plusieurs étapes, avant de juger si cette erreur reste acceptable.",
    fact:"Effectuer un calcul d'incertitude jusqu'à l'estimation de son impact sur les résultats est un objectif explicite de l'option spécifique, plus exigeant que la simple discipline fondamentale.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"py3_modelisation_numerique_os", tier:"moyen", emoji:"💻", label:"OS uniquement — Simuler avant de conclure",
    text:"À l'aide d'un outil informatique simple, les élèves de l'option font varier un paramètre d'un phénomène physique modélisé et observent l'effet sur le résultat avant de formuler une conclusion générale.",
    fact:"Le plan d'études cite la maîtrise de l'outil informatique pour l'acquisition, le traitement des données et la simulation des phénomènes comme objectif propre à l'option spécifique.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
];
function getSeqPhysique3CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_PHYSIQUE_3_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_PHYSIQUE_3_COLLEGE_OBJECTS = MUSEE_SEQ_PHYSIQUE_3_COLLEGE_OBJECTS;
window.getSeqPhysique3CollegeObjectsForParcours = getSeqPhysique3CollegeObjectsForParcours;
