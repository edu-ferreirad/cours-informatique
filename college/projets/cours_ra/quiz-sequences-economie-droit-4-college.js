const QUIZ_ECONOMIE_DROIT_4_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Sur un cas d'entreprise réelle et récente » ?", options:["OS uniquement — Évaluer une politique économique réelle", "Simuler la rareté des ressources", "OS uniquement — Résoudre un cas pratique", "OS uniquement — Évaluer la stratégie d'une entreprise"], correct:3 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves de l'option préparent puis simulent le débat d'une votation fédérale fictive » ?", options:["OS uniquement — Le rôle des agents économiques", "OS uniquement — Résoudre un cas pratique", "OS uniquement — Simuler une votation fédérale", "OS uniquement — Évaluer une politique économique réelle"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ECONOMIE_DROIT_4_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ECONOMIE_DROIT_4_COLLEGE = QUIZ_ECONOMIE_DROIT_4_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
