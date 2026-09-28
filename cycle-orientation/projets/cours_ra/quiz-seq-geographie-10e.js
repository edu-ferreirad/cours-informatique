// QUIZ — SÉQUENCES GÉOGRAPHIE 10e
const QUIZ_SEQ_GEOGRAPHIE_10E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « À partir de données mensuelles de deux villes » ?", options:["Construire un climatogramme", "Le Léman vu d'en haut, hier et aujourd'hui", "Enquête de mobilité devant l'école", "La route d'un t-shirt"], correct:0 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Des photographies de paysages sont associées à des zones climatiques par les élèves » ?", options:["Quel climat pour quel paysage ?", "De la mine au téléphone", "Campagne de sensibilisation à l'eau", "La carte des risques"], correct:0 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves localisent les étapes de fabrication d'un t-shirt (coton » ?", options:["La route d'un t-shirt", "La carte des risques", "Enquête de mobilité devant l'école", "Sources d'énergie : renouvelables ou non ?"], correct:0 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Avec une carte de flux et des données » ?", options:["Campagne de sensibilisation à l'eau", "Migrer : pourquoi partir ?", "De la mine au téléphone", "Quel climat pour quel paysage ?"], correct:1 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves incarnent entreprise » ?", options:["Débat : délocaliser ou non ?", "Migrer : pourquoi partir ?", "Ma consommation d'eau", "Quel climat pour quel paysage ?"], correct:0 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « À partir d'un témoignage documenté » ?", options:["Le Léman vu d'en haut, hier et aujourd'hui", "Sources d'énergie : renouvelables ou non ?", "Quel climat pour quel paysage ?", "Portrait d'un parcours migratoire"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_GEOGRAPHIE_10E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_GEOGRAPHIE_10E = QUIZ_SEQ_GEOGRAPHIE_10E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
