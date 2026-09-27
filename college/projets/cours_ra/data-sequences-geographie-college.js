// SALLE SÉQUENCES — GÉOGRAPHIE — particularité : DF seulement 2e-3e-4e années
// (0/2/2/2 sur la grille horaire), pas de géographie en 1ère année.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_SEQ_GEOGRAPHIE_COLLEGE_OBJECTS = [
  { id:"ge1_info_pas_de_cours", degree:"1", emoji:"ℹ️", label:"Pas de géographie en 1ère année",
    text:"Contrairement à l'histoire, la géographie ne commence pas dès la 1ère année du Collège de Genève : la grille horaire officielle ne lui réserve aucune heure avant la 2e année, où elle démarre à raison de 2h hebdomadaires.",
    fact:"C'est une asymétrie réelle entre les deux disciplines de sciences humaines les plus proches : l'histoire est enseignée sur les 4 années, la géographie seulement sur 3.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"ge2_echelle_meme_carte", degree:"2", emoji:"🗺️", label:"Une même carte, trois échelles",
    text:"À partir d'un même territoire (une ville), les élèves observent successivement une carte à l'échelle du quartier, de la ville puis de la région et doivent noter ce que chaque échelle révèle ou cache.",
    fact:"Le plan d'études place l'échelle parmi les concepts fondamentaux de l'analyse géographique ; ce changement d'échelle répété rend concret un concept sinon très abstrait.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"ge2_document_complexe", degree:"2", emoji:"📊", label:"Décortiquer un document complexe",
    text:"Face à un document mêlant carte, statistiques et texte sur un même territoire, les élèves doivent d'abord identifier ce que chaque type de document apporte spécifiquement, sans mélanger leurs analyses.",
    fact:"La compréhension de documents de diverses natures (cartes, statistiques, documents visuels) est un objectif explicite de la discipline fondamentale.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"ge3_probleme_amenagement", degree:"3", emoji:"🏗️", label:"Débattre d'un aménagement du territoire",
    text:"Sur un projet d'aménagement fictif mais réaliste (nouvelle ligne de transport, zone industrielle), les élèves incarnent différents acteurs (habitants, entreprise, collectivité) et débattent à partir de leurs intérêts respectifs.",
    fact:"Le plan d'études souligne que toute décision, tout problème a une dimension spatiale et que les enjeux d'un territoire sont multiples — ce débat rend concrète cette multiplicité d'intérêts.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"ge3_flux_diagramme", degree:"3", emoji:"➡️", label:"Cartographier un flux mondial",
    text:"Les élèves construisent une carte simplifiée représentant un flux économique ou migratoire mondial (matière première, population) à partir de données chiffrées, avant d'en proposer une explication géographique.",
    fact:"Flux, polarisation et diffusion figurent parmi les concepts fondamentaux cités par le plan d'études pour analyser les phénomènes géographiques contemporains.",
    anchor:{distance:1.8, angle:210, height:DESK_H} },
  { id:"ge4_probleme_planetaire", degree:"4", emoji:"🌍", label:"Un grand problème planétaire, plusieurs échelles",
    text:"Sur un enjeu environnemental global, les élèves analysent successivement ses manifestations à l'échelle locale, nationale et mondiale, avant de proposer une synthèse reliant les trois niveaux.",
    fact:"Le plan d'études met l'accent sur la sensibilisation aux problèmes que l'humanité doit affronter à des échelles différentes — cette synthèse finale en est l'aboutissement logique.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"ge4_travail_recherche_geo", degree:"4", emoji:"🗂️", label:"Petite recherche territoriale personnelle",
    text:"Chaque élève choisit un territoire de son choix et mène une recherche documentaire courte pour en dégager une problématique géographique précise, restituée sous forme d'une carte commentée.",
    fact:"La construction d'une problématique par le questionnement et la formulation d'hypothèses est citée explicitement comme aptitude développée par la géographie en fin de cursus.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqGeographieCollegeObjectsForDegree(degree){ return MUSEE_SEQ_GEOGRAPHIE_COLLEGE_OBJECTS.filter(o=>o.degree===degree); }
window.MUSEE_SEQ_GEOGRAPHIE_COLLEGE_OBJECTS = MUSEE_SEQ_GEOGRAPHIE_COLLEGE_OBJECTS;
window.getSeqGeographieCollegeObjectsForDegree = getSeqGeographieCollegeObjectsForDegree;
