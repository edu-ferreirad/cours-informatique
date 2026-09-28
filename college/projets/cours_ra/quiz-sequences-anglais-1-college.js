const QUIZ_ANGLAIS_1_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « En tout début d'année » ?", options:["Explication de texte littéraire guidée", "Oral blanc de maturité en conditions réelles", "Oral : exprimer et défendre un point de vue", "Tronc commun : le diagnostic sans note"], correct:3 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Après l'écoute d'un enregistrement court » ?", options:["Explication de texte littéraire guidée", "Oral : le récit structuré en trois temps", "Tronc commun : le diagnostic sans note", "Oral : formuler une interview sur un sujet culturel"], correct:1 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves reçoivent une première phrase imposée et doivent poursuivre un court texte narratif » ?", options:["Écriture : commenter un texte d'actualité anglophone", "Méthode : utiliser le dictionnaire bilingue sans se tromper", "Oral : formuler une interview sur un sujet culturel", "Écriture : composition à partir d'une amorce"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ANGLAIS_1_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ANGLAIS_1_COLLEGE = QUIZ_ANGLAIS_1_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
