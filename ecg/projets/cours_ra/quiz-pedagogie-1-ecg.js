const QUIZ_PEDAGOGIE_ECG_1 = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Chaque élève prépare en une minute l'explication d'une notion simple (le cycle de l'eau) pour un enfant de huit ans » ?", options:["Découverte : expliquer une notion à un enfant de 8 ans", "Découverte : deux voies vers l'enseignement", "Découverte : observer une séance avec une grille"], correct:0 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Lors d'une courte observation d'une situation d'apprentissage (vidéo ou visite) » ?", options:["Découverte : expliquer une notion à un enfant de 8 ans", "Découverte : deux voies vers l'enseignement", "Découverte : observer une séance avec une grille"], correct:2 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves comparent le parcours vers l'enseignement primaire et celui vers l'éducation de l'enfance à partir de la broc » ?", options:["Découverte : deux voies vers l'enseignement", "Découverte : expliquer une notion à un enfant de 8 ans", "Découverte : observer une séance avec une grille"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_PEDAGOGIE_ECG_1.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_PEDAGOGIE_ECG_1 = QUIZ_PEDAGOGIE_ECG_1; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
