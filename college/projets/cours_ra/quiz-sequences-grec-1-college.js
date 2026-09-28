const QUIZ_GREC_1_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Face à un mot grec inconnu écrit en capitales » ?", options:["Lecture comparée en traduction", "Déchiffrer avant de traduire", "Petit exposé de culture grecque", "La finesse d'un seul mot"], correct:1 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Après la lecture d'un mythe grec simple en traduction » ?", options:["Petit exposé de culture grecque", "Lecture comparée en traduction", "Raconter un mythe à sa façon", "Aborder les grands textes par auteur"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_GREC_1_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_GREC_1_COLLEGE = QUIZ_GREC_1_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
