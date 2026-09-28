const QUIZ_ANGLAIS_3_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Face à un court extrait d'une œuvre littéraire anglophone étudiée » ?", options:["Explication de texte littéraire guidée", "Oral blanc de maturité en conditions réelles", "Écriture : commenter un texte d'actualité anglophone", "Exposé de recherche documentée"], correct:0 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Par binômes » ?", options:["Oral : le récit structuré en trois temps", "Oral blanc de maturité en conditions réelles", "Oral : formuler une interview sur un sujet culturel", "Méthode : utiliser le dictionnaire bilingue sans se tromper"], correct:2 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « À partir d'un article de presse anglophone récent » ?", options:["Oral : le récit structuré en trois temps", "Écriture : commenter un texte d'actualité anglophone", "Tronc commun : le diagnostic sans note", "Oral : formuler une interview sur un sujet culturel"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ANGLAIS_3_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ANGLAIS_3_COLLEGE = QUIZ_ANGLAIS_3_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
