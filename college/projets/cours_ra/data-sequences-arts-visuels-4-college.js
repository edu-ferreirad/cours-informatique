// SALLE SÉQUENCES — ARTS VISUELS — 4e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ARTS_VISUELS_4_COLLEGE_OBJECTS = [
  { id:"av4_synthese_projet_os", tier:"court", emoji:"🏛️", label:"OS uniquement — Synthèse d'un projet cohérent",
    text:"Les élèves de l'option finalisent un projet personnel démarré en 3e année et doivent présenter, à l'oral, la cohérence de leur démarche entre l'intention de départ et le résultat final obtenu.",
    fact:"La synthèse des modèles passés et présents en vue d'une démarche et d'un projet personnels fortement affirmés est l'objectif final de l'option spécifique.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"av4_recherche_terrain_os", tier:"moyen", emoji:"🏛️", label:"OS uniquement — Travail de terrain en musée",
    text:"Les élèves de l'option mènent une visite active dans un lieu d'exposition, avec une grille d'observation précise à remplir sur place, restituée ensuite sous forme d'un court compte rendu critique.",
    fact:"Le plan d'études encourage explicitement le travail sur le terrain, sous forme de visites et de recherches personnelles dans les musées et galeries, dans la mesure du possible.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqArtsVisuels4CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ARTS_VISUELS_4_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ARTS_VISUELS_4_COLLEGE_OBJECTS = MUSEE_SEQ_ARTS_VISUELS_4_COLLEGE_OBJECTS;
window.getSeqArtsVisuels4CollegeObjectsForParcours = getSeqArtsVisuels4CollegeObjectsForParcours;
