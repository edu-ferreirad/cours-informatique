const QUIZ_SANTE_ECG_1 = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves de 1re année reçoivent le programme fictif d'une matinée de soignant (accueil » ?", options:["Découverte : comparer trois filières santé post-ECG", "Découverte : une matinée dans la peau d'un soignant", "Découverte : préparer les questions à un professionnel invité"], correct:1 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Avant la venue d'un professionnel de la santé » ?", options:["Découverte : une matinée dans la peau d'un soignant", "Découverte : préparer les questions à un professionnel invité", "Découverte : comparer trois filières santé post-ECG"], correct:1 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « À partir de la brochure ECG » ?", options:["Découverte : préparer les questions à un professionnel invité", "Découverte : une matinée dans la peau d'un soignant", "Découverte : comparer trois filières santé post-ECG"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SANTE_ECG_1.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SANTE_ECG_1 = QUIZ_SANTE_ECG_1; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
