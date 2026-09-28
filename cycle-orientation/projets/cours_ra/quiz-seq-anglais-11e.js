// QUIZ — SÉQUENCES ANGLAIS 11e
const QUIZ_SEQ_ANGLAIS_11E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves écoutent un court reportage » ?", options:["Recorded mini-dialogue", "Listening : a short news item", "Hobbies and opinions : an interview", "Project : a trip to a city"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Avec un court article » ?", options:["Role-play : a phone call", "Reading : strategies for a short text", "Greetings et alphabet game", "Describe your day"], correct:1 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves planifient un séjour (transport » ?", options:["Past simple story chain", "Giving directions", "Project : a trip to a city", "Planning a trip"], correct:3 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Par deux » ?", options:["Describe your day", "Hobbies and opinions : an interview", "Project : a trip to a city", "Planning a trip"], correct:1 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Chaque élève présente un sujet en deux minutes avec support visuel et répond à une question » ?", options:["A short presentation", "Weather and clothes", "At the restaurant", "Numbers and time bingo"], correct:0 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves jouent un appel téléphonique (réservation » ?", options:["Hobbies and opinions : an interview", "Planning a trip", "Role-play : a phone call", "Weather and clothes"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_ANGLAIS_11E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_ANGLAIS_11E = QUIZ_SEQ_ANGLAIS_11E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
