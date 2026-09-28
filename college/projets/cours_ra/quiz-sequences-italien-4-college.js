const QUIZ_ITALIEN_4_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Chaque élève choisit une œuvre italienne du programme et mène une recherche personnelle sur son contexte socio-politique et… » ?", options:["Conversation spontanée minutée", "Frise des courants littéraires italiens", "Recherche personnelle sur une œuvre", "Oral blanc de maturité"], correct:2 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « En conditions d'examen » ?", options:["Recherche personnelle sur une œuvre", "Chasse aux sons italiens", "Frise des courants littéraires italiens", "Oral blanc de maturité"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ITALIEN_4_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ITALIEN_4_COLLEGE = QUIZ_ITALIEN_4_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
