const QUIZ_MUSIQUE_3_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves de l'option spécifique improvisent à tour de rôle sur un instrument ou avec la voix » ?", options:["Reconnaître un instrument les yeux fermés", "Situer un morceau sur la frise musicale", "OS uniquement — Comparer deux traditions musicales", "OS uniquement — Improviser sur une contrainte"], correct:3 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves de l'option composent une très courte mélodie sur une base rythmique donnée » ?", options:["OS uniquement — Petit projet musical de fin de cursus", "OS uniquement — Comparer deux traditions musicales", "OS uniquement — Écrire une courte mélodie", "Construire une critique argumentée"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_MUSIQUE_3_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_MUSIQUE_3_COLLEGE = QUIZ_MUSIQUE_3_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
