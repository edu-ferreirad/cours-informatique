const QUIZ_PHILOSOPHIE_1_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « La philosophie n'apparaît pas dans la grille horaire de 1ère année du Collège de Genève : elle démarre seulement en 3e année » ?", options:["Pas de philosophie en 1ère année", "Dialoguer directement avec un texte source", "Discussion libre mais encadrée par la rigueur", "Suivre la continuité d'une pensée sur un ouvrage"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_PHILOSOPHIE_1_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_PHILOSOPHIE_1_COLLEGE = QUIZ_PHILOSOPHIE_1_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
