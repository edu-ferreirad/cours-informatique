// SALLE SÉQUENCES — ARTS VISUELS — 1ère année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ARTS_VISUELS_1_COLLEGE_OBJECTS = [
  { id:"av1_observation_objet", tier:"court", emoji:"🍎", label:"Dessiner ce qu'on voit vraiment",
    text:"Face à un objet simple posé devant eux, les élèves dessinent d'abord sans lever le crayon ni regarder leur feuille (dessin aveugle), puis comparent ce croquis à un second dessin classique du même objet.",
    fact:"Aiguiser la perception visuelle par un apprentissage de l'observation est un objectif explicite de la discipline fondamentale ; le dessin aveugle force à regarder l'objet plutôt que ses habitudes de dessin.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"av1_portrait_image_pouvoir", tier:"moyen", emoji:"🖼️", label:"Lire un portrait officiel",
    text:"Face à un portrait historique de pouvoir, les élèves relèvent méthodiquement chaque détail (posture, objets, décor) avant de formuler l'intention probable de l'artiste, en petit groupe puis en classe entière.",
    fact:"Maîtriser le vocabulaire nécessaire à la lecture d'une œuvre d'art est un objectif explicite du cours d'histoire de l'art en discipline fondamentale.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
];
function getSeqArtsVisuels1CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ARTS_VISUELS_1_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ARTS_VISUELS_1_COLLEGE_OBJECTS = MUSEE_SEQ_ARTS_VISUELS_1_COLLEGE_OBJECTS;
window.getSeqArtsVisuels1CollegeObjectsForParcours = getSeqArtsVisuels1CollegeObjectsForParcours;
