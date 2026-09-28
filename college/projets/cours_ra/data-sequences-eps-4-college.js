// SALLE SÉQUENCES — ÉDUCATION PHYSIQUE ET SPORTS — 4e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_EPS_4_COLLEGE_OBJECTS = [
  { id:"eps4_sport_oc_autonomie", tier:"court", emoji:"🏃", label:"Sport (OC) — concevoir sa propre séance",
    text:"Les élèves ayant choisi l'option complémentaire Sport conçoivent, en petit groupe, une séance complète d'entraînement pour le reste de la classe, avec échauffement, activité principale et retour au calme, puis l'animent eux-mêmes.",
    fact:"Agir de façon autonome dans l'apprentissage et l'entraînement sportif est un objectif explicite du plan d'études ; concevoir et animer sa propre séance en est l'aboutissement concret.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"eps4_sport_oc_interdisciplinaire", tier:"moyen", emoji:"🔗", label:"Sport (OC) — le sport vu par une autre discipline",
    text:"Les élèves de l'option complémentaire Sport analysent, en lien avec une autre discipline (biologie ou économie), un aspect du sport (physiologie de l'effort, industrie sportive) à partir d'un dossier documentaire fourni.",
    fact:"Le plan d'études signale les interactions entre le sport et son environnement, notamment les relations entre sport, économie et médecine, comme objectif explicite de fin de cursus.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqEps4CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_EPS_4_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_EPS_4_COLLEGE_OBJECTS = MUSEE_SEQ_EPS_4_COLLEGE_OBJECTS;
window.getSeqEps4CollegeObjectsForParcours = getSeqEps4CollegeObjectsForParcours;
