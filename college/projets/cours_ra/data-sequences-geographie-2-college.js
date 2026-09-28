// SALLE SÉQUENCES — GÉOGRAPHIE — 2e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_GEOGRAPHIE_2_COLLEGE_OBJECTS = [
  { id:"ge2_echelle_meme_carte", tier:"court", emoji:"🗺️", label:"Une même carte, trois échelles",
    text:"À partir d'un même territoire (une ville), les élèves observent successivement une carte à l'échelle du quartier, de la ville puis de la région et doivent noter ce que chaque échelle révèle ou cache.",
    fact:"Le plan d'études place l'échelle parmi les concepts fondamentaux de l'analyse géographique ; ce changement d'échelle répété rend concret un concept sinon très abstrait.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"ge2_document_complexe", tier:"moyen", emoji:"📊", label:"Décortiquer un document complexe",
    text:"Face à un document mêlant carte, statistiques et texte sur un même territoire, les élèves doivent d'abord identifier ce que chaque type de document apporte spécifiquement, sans mélanger leurs analyses.",
    fact:"La compréhension de documents de diverses natures (cartes, statistiques, documents visuels) est un objectif explicite de la discipline fondamentale.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
];
function getSeqGeographie2CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_GEOGRAPHIE_2_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_GEOGRAPHIE_2_COLLEGE_OBJECTS = MUSEE_SEQ_GEOGRAPHIE_2_COLLEGE_OBJECTS;
window.getSeqGeographie2CollegeObjectsForParcours = getSeqGeographie2CollegeObjectsForParcours;
