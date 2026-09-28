const QUIZ_MUSIQUE_1_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves écoutent plusieurs extraits sonores et doivent identifier l'instrument entendu uniquement à son timbre » ?", options:["Reconnaître un instrument les yeux fermés", "OS uniquement — Comparer deux traditions musicales", "OS uniquement — Improviser sur une contrainte", "OS uniquement — Petit projet musical de fin de cursus"], correct:0 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « La classe chante un canon simple en plusieurs groupes décalés » ?", options:["OS uniquement — Écrire une courte mélodie", "Reconnaître un instrument les yeux fermés", "Chanter en canon pour sentir la structure", "Situer un morceau sur la frise musicale"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_MUSIQUE_1_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_MUSIQUE_1_COLLEGE = QUIZ_MUSIQUE_1_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
