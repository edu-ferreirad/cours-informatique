// SALLE SÉQUENCES — GÉOGRAPHIE — 3e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_GEOGRAPHIE_3_COLLEGE_OBJECTS = [
  { id:"ge3_probleme_amenagement", tier:"court", emoji:"🏗️", label:"Débattre d'un aménagement du territoire",
    text:"Sur un projet d'aménagement fictif mais réaliste (nouvelle ligne de transport, zone industrielle), les élèves incarnent différents acteurs (habitants, entreprise, collectivité) et débattent à partir de leurs intérêts respectifs.",
    fact:"Le plan d'études souligne que toute décision, tout problème a une dimension spatiale et que les enjeux d'un territoire sont multiples — ce débat rend concrète cette multiplicité d'intérêts.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"ge3_flux_diagramme", tier:"moyen", emoji:"➡️", label:"Cartographier un flux mondial",
    text:"Les élèves construisent une carte simplifiée représentant un flux économique ou migratoire mondial (matière première, population) à partir de données chiffrées, avant d'en proposer une explication géographique.",
    fact:"Flux, polarisation et diffusion figurent parmi les concepts fondamentaux cités par le plan d'études pour analyser les phénomènes géographiques contemporains.",
    anchor:{distance:1.8, angle:210, height:DESK_H} },
];
function getSeqGeographie3CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_GEOGRAPHIE_3_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_GEOGRAPHIE_3_COLLEGE_OBJECTS = MUSEE_SEQ_GEOGRAPHIE_3_COLLEGE_OBJECTS;
window.getSeqGeographie3CollegeObjectsForParcours = getSeqGeographie3CollegeObjectsForParcours;
