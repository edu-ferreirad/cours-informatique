const QUIZ_MUSIQUE_2_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Après l'écoute d'un morceau inconnu » ?", options:["Reconnaître un instrument les yeux fermés", "Construire une critique argumentée", "OS uniquement — Petit projet musical de fin de cursus", "OS uniquement — Écrire une courte mélodie"], correct:1 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Face à un extrait musical non identifié » ?", options:["Chanter en canon pour sentir la structure", "Situer un morceau sur la frise musicale", "OS uniquement — Écrire une courte mélodie", "OS uniquement — Improviser sur une contrainte"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_MUSIQUE_2_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_MUSIQUE_2_COLLEGE = QUIZ_MUSIQUE_2_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
