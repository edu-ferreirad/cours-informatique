const QUIZ_ECONOMIE_DROIT_1_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « La classe reçoit une quantité limitée d'un « bien » fictif (jetons) à répartir entre plusieurs besoins concurrents ; les élèves… » ?", options:["OS uniquement — La hiérarchie des règles de droit", "Simuler la rareté des ressources", "Un petit cas juridique du quotidien", "OS uniquement — Simuler une votation fédérale"], correct:1 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Face à une situation fictive simple (un objet prêté et cassé) » ?", options:["Un petit cas juridique du quotidien", "Simuler la rareté des ressources", "OS uniquement — Résoudre un cas pratique", "OS uniquement — La hiérarchie des règles de droit"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ECONOMIE_DROIT_1_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ECONOMIE_DROIT_1_COLLEGE = QUIZ_ECONOMIE_DROIT_1_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
