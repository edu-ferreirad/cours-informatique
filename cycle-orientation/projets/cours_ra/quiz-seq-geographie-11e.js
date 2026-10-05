// QUIZ — SÉQUENCES GÉOGRAPHIE 11e
const QUIZ_SEQ_GEOGRAPHIE_11E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves estiment leur consommation d'eau d'une journée » ?", options:["Ma consommation d'eau", "La carte des risques", "La route d'un t-shirt", "Alerte inondation : plan d'évacuation"], correct:0 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves classent des cartes de sources d'énergie » ?", options:["Alerte inondation : plan d'évacuation", "Sources d'énergie : renouvelables ou non ?", "Construire un climatogramme", "Un quartier durable à concevoir"], correct:1 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « À l'aide d'images satellites d'époques différentes » ?", options:["Enquête de mobilité devant l'école", "Le Léman vu d'en haut, hier et aujourd'hui", "Migrer : pourquoi partir ?", "Le bilan énergétique de l'école"], correct:1 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Avec un outil de cartographie en ligne » ?", options:["Débat : délocaliser ou non ?", "Ma première carte de données", "Sources d'énergie : renouvelables ou non ?", "Le bilan énergétique de l'école"], correct:1 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves relèvent les usages de l'énergie de l'école » ?", options:["Portrait d'un parcours migratoire", "La route d'un t-shirt", "Ma première carte de données", "Le bilan énergétique de l'école"], correct:3 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les groupes conçoivent une affiche ou un court message vidéo pour sensibiliser les élèves à l'eau » ?", options:["Ma première carte de données", "Campagne de sensibilisation à l'eau", "La route d'un t-shirt", "Sources d'énergie : renouvelables ou non ?"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_GEOGRAPHIE_11E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_GEOGRAPHIE_11E = QUIZ_SEQ_GEOGRAPHIE_11E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
