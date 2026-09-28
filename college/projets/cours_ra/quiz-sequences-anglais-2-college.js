const QUIZ_ANGLAIS_2_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Sur un sujet simple d'actualité ou tiré d'un texte étudié » ?", options:["Oral : exprimer et défendre un point de vue", "Exposé de recherche documentée", "Essai académique structuré (introduction-corps-conclusion)", "Compréhension : identifier le genre d'un texte inconnu"], correct:0 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Face à un texte contenant des mots à sens multiples » ?", options:["Méthode : utiliser le dictionnaire bilingue sans se tromper", "Exposé de recherche documentée", "Oral : exprimer et défendre un point de vue", "Compréhension : identifier le genre d'un texte inconnu"], correct:0 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves reçoivent plusieurs textes courts de genres différents (article » ?", options:["Oral : exprimer et défendre un point de vue", "Essai académique structuré (introduction-corps-conclusion)", "Compréhension : identifier le genre d'un texte inconnu", "Méthode : utiliser le dictionnaire bilingue sans se tromper"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ANGLAIS_2_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ANGLAIS_2_COLLEGE = QUIZ_ANGLAIS_2_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
