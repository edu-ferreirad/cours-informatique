const QUIZ_TRAVAIL_SOCIAL_ECG_1 = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Par binômes » ?", options:["Découverte : portrait croisé de deux métiers du social", "Découverte : cartographier les ressources sociales de son quartier", "Découverte : écouter sans conseiller"], correct:2 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves repèrent sur une carte de leur quartier trois lieux qui offrent un soutien (association » ?", options:["Découverte : écouter sans conseiller", "Découverte : cartographier les ressources sociales de son quartier", "Découverte : portrait croisé de deux métiers du social"], correct:1 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves comparent deux professions (assistant social » ?", options:["Découverte : cartographier les ressources sociales de son quartier", "Découverte : écouter sans conseiller", "Découverte : portrait croisé de deux métiers du social"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_TRAVAIL_SOCIAL_ECG_1.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_TRAVAIL_SOCIAL_ECG_1 = QUIZ_TRAVAIL_SOCIAL_ECG_1; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
