const QUIZ_FRANCAIS_4_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « L'élève reprend trois œuvres étudiées au fil du cursus et doit construire » ?", options:["Commentaire composé : l'atelier des citations isolées", "Grammaire : la dictée négociée", "Synthèse : le fil rouge des quatre années", "Écriture : le résumé à contrainte de mots"], correct:2 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « En condition proche de l'examen » ?", options:["Synthèse : le fil rouge des quatre années", "Préparation à l'oral de maturité : la question surprise", "Grammaire : la dictée négociée", "Dissertation : construire un plan à partir de deux plans faux"], correct:1 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Une dissertation complète est rédigée en temps limité et sans documents » ?", options:["Carnet de lecture : la page « réaction à chaud »", "Histoire littéraire : la frise vivante des mouvements", "Commentaire composé : l'atelier des citations isolées", "Dissertation chronométrée en conditions d'examen"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_FRANCAIS_4_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_FRANCAIS_4_COLLEGE = QUIZ_FRANCAIS_4_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
