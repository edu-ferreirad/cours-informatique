const QUIZ_THEATRE_ECG_1 = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Par groupes de trois » ?", options:["Découverte : observer une répétition", "Découverte : une improvisation à contrainte", "Découverte : le chemin vers la formation de comédien"], correct:1 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves observent une répétition ou un extrait filmé et notent ce que le metteur en scène corrige » ?", options:["Découverte : une improvisation à contrainte", "Découverte : le chemin vers la formation de comédien", "Découverte : observer une répétition"], correct:2 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves retracent le parcours possible depuis l'OSP Théâtre jusqu'aux formations professionnelles » ?", options:["Découverte : une improvisation à contrainte", "Découverte : observer une répétition", "Découverte : le chemin vers la formation de comédien"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_THEATRE_ECG_1.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_THEATRE_ECG_1 = QUIZ_THEATRE_ECG_1; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
