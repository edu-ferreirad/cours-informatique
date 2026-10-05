// QUIZ — SÉQUENCES GÉOGRAPHIE 9e
const QUIZ_SEQ_GEOGRAPHIE_9E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves placent séismes et volcans sur un planisphère » ?", options:["Ma consommation d'eau", "La route d'un t-shirt", "La carte des risques", "Migrer : pourquoi partir ?"], correct:2 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Sur un plan de ville » ?", options:["Les fonctions de ma ville", "Ma consommation d'eau", "Portrait d'un parcours migratoire", "Débat : délocaliser ou non ?"], correct:0 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Une alerte fictive est déclenchée » ?", options:["Campagne de sensibilisation à l'eau", "Un quartier durable à concevoir", "Le Léman vu d'en haut, hier et aujourd'hui", "Alerte inondation : plan d'évacuation"], correct:3 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves suivent la trace des matières premières d'un smartphone sur une carte du monde et repèrent les pays concernés » ?", options:["Ma première carte de données", "De la mine au téléphone", "La carte des risques", "Sources d'énergie : renouvelables ou non ?"], correct:1 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves comptent modes de transport et trajets de leurs camarades » ?", options:["La carte des risques", "Enquête de mobilité devant l'école", "De la mine au téléphone", "Ma première carte de données"], correct:1 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « En groupes » ?", options:["Ma première carte de données", "Le Léman vu d'en haut, hier et aujourd'hui", "Campagne de sensibilisation à l'eau", "Un quartier durable à concevoir"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_GEOGRAPHIE_9E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_GEOGRAPHIE_9E = QUIZ_SEQ_GEOGRAPHIE_9E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
