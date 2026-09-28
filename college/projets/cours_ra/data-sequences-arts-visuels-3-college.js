// SALLE SÉQUENCES — ARTS VISUELS — 3e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ARTS_VISUELS_3_COLLEGE_OBJECTS = [
  { id:"av3_projet_personnel_os", tier:"court", emoji:"🖌️", label:"OS uniquement — Élaborer un projet personnel",
    text:"Les élèves de l'option spécifique définissent seuls un petit projet plastique personnel (thème, technique, format), le développent sur plusieurs semaines, avec un point d'étape encadré à mi-parcours.",
    fact:"Le plan d'études cite l'élaboration et le développement d'une expression personnalisée comme objectif central de l'option spécifique, distinct du simple apprentissage technique de la discipline fondamentale.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"av3_confrontation_contemporain_os", tier:"moyen", emoji:"🖼️", label:"OS uniquement — Confronter modèle ancien et art contemporain",
    text:"Les élèves de l'option comparent une œuvre classique à une œuvre contemporaine traitant du même sujet, et doivent identifier ce que l'art contemporain remet en question par rapport au modèle ancien.",
    fact:"La discussion du modèle moderne et contemporain visant à développer le sens critique est un objectif explicite de l'option spécifique en 3e-4e année.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
];
function getSeqArtsVisuels3CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ARTS_VISUELS_3_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ARTS_VISUELS_3_COLLEGE_OBJECTS = MUSEE_SEQ_ARTS_VISUELS_3_COLLEGE_OBJECTS;
window.getSeqArtsVisuels3CollegeObjectsForParcours = getSeqArtsVisuels3CollegeObjectsForParcours;
