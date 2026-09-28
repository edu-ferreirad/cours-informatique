const QUIZ_COMMUNICATION_INFO_ECG_1 = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves comparent le titre d'un même fait dans trois médias et identifient ce que chaque formulation met en avant » ?", options:["Découverte : mesurer son propre usage du numérique", "Découverte : décoder un titre d'actualité", "Découverte : quatre débouchés, quatre exigences"], correct:1 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves relèvent pendant deux jours leur temps d'écran par type d'usage et en tirent deux constats à partager en clas » ?", options:["Découverte : mesurer son propre usage du numérique", "Découverte : quatre débouchés, quatre exigences", "Découverte : décoder un titre d'actualité"], correct:0 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « À partir de la brochure ECG » ?", options:["Découverte : mesurer son propre usage du numérique", "Découverte : quatre débouchés, quatre exigences", "Découverte : décoder un titre d'actualité"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_COMMUNICATION_INFO_ECG_1.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_COMMUNICATION_INFO_ECG_1 = QUIZ_COMMUNICATION_INFO_ECG_1; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
