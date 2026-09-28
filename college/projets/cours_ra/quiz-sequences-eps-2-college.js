const QUIZ_EPS_2_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves refont un même test physique simple (souplesse » ?", options:["Un carrousel de sports pour découvrir ses goûts", "Suivre ses propres progrès sur un test simple", "Débattre d'un enjeu du sport contemporain", "Devenir arbitre pour comprendre les règles"], correct:1 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Après un jeu collectif compétitif » ?", options:["Sport (OC) — concevoir sa propre séance", "Nommer la frustration plutôt que la jouer", "Devenir arbitre pour comprendre les règles", "Suivre ses propres progrès sur un test simple"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_EPS_2_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_EPS_2_COLLEGE = QUIZ_EPS_2_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
