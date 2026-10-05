// QUIZ — SÉQUENCES ANGLAIS 10e
const QUIZ_SEQ_ANGLAIS_10E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Chaque élève ajoute une phrase au passé simple à une histoire collective » ?", options:["My house and rooms", "Numbers and time bingo", "Project : a trip to a city", "Past simple story chain"], correct:3 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « À partir de prévisions » ?", options:["Reading : strategies for a short text", "Hobbies and opinions : an interview", "Numbers and time bingo", "Weather and clothes"], correct:3 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Sur un plan » ?", options:["Hobbies and opinions : an interview", "Numbers and time bingo", "An email to a pen pal", "Giving directions"], correct:3 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Par deux » ?", options:["At the restaurant", "Role-play : a phone call", "A short presentation", "An email to a pen pal"], correct:0 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Chaque élève rédige un courriel de présentation à un correspondant fictif puis relit avec une grille » ?", options:["Listening : a short news item", "Reading : strategies for a short text", "An email to a pen pal", "Greetings et alphabet game"], correct:2 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « En groupes » ?", options:["Giving directions", "Project : a trip to a city", "Shopping role-play", "Reading : strategies for a short text"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_ANGLAIS_10E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_ANGLAIS_10E = QUIZ_SEQ_ANGLAIS_10E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
