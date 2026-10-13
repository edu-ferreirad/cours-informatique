// QUIZ — SÉQUENCES ANGLAIS 9e
const QUIZ_SEQ_ANGLAIS_9E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves se saluent » ?", options:["Greetings et alphabet game", "Giving directions", "An email to a pen pal", "Shopping role-play"], correct:0 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Un bingo de nombres et d'heures en anglais entraîne la compréhension orale » ?", options:["Project : a trip to a city", "Weather and clothes", "Numbers and time bingo", "Reading : strategies for a short text"], correct:2 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves décrivent leur logement ou leur chambre idéale avec des phrases simples et un plan dessiné » ?", options:["My house and rooms", "Shopping role-play", "Describe your day", "A short presentation"], correct:0 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Par deux » ?", options:["Past simple story chain", "Numbers and time bingo", "Shopping role-play", "Hobbies and opinions : an interview"], correct:2 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves décrivent une journée type avec heures et verbes usuels » ?", options:["Describe your day", "Recorded mini-dialogue", "At the restaurant", "A short presentation"], correct:0 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves écrivent » ?", options:["A short presentation", "An email to a pen pal", "Role-play : a phone call", "Recorded mini-dialogue"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_ANGLAIS_9E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_ANGLAIS_9E = QUIZ_SEQ_ANGLAIS_9E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
