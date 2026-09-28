const QUIZ_ANGLAIS_4_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Chaque élève choisit un sujet lié au monde anglophone et mène une recherche documentaire en anglais sur deux à trois semaines » ?", options:["Compréhension : identifier le genre d'un texte inconnu", "Tronc commun : le diagnostic sans note", "Écriture : commenter un texte d'actualité anglophone", "Exposé de recherche documentée"], correct:3 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « En condition d'examen » ?", options:["Oral blanc de maturité en conditions réelles", "Compréhension : identifier le genre d'un texte inconnu", "Essai académique structuré (introduction-corps-conclusion)", "Explication de texte littéraire guidée"], correct:0 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves rédigent un essai académique complet sur un sujet culturel ou de société en respectant une structure anglo-saxonne… » ?", options:["Essai académique structuré (introduction-corps-conclusion)", "Oral : formuler une interview sur un sujet culturel", "Écriture : composition à partir d'une amorce", "Oral blanc de maturité en conditions réelles"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ANGLAIS_4_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ANGLAIS_4_COLLEGE = QUIZ_ANGLAIS_4_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
