const QUIZ_ECONOMIE_DROIT_2_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Par groupes » ?", options:["Un petit cas juridique du quotidien", "OS uniquement — La hiérarchie des règles de droit", "OS uniquement — Résoudre un cas pratique", "OS uniquement — Le rôle des agents économiques"], correct:3 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Face à un conflit fictif entre deux règles de niveaux différents (loi cantonale contre loi fédérale) » ?", options:["OS uniquement — La hiérarchie des règles de droit", "OS uniquement — Résoudre un cas pratique", "OS uniquement — Évaluer une politique économique réelle", "OS uniquement — Évaluer la stratégie d'une entreprise"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ECONOMIE_DROIT_2_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ECONOMIE_DROIT_2_COLLEGE = QUIZ_ECONOMIE_DROIT_2_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
