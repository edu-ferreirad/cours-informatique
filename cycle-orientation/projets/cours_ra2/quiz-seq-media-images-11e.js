// QUIZ — SÉQUENCES MÉDIA-IMAGES 11e
const QUIZ_SEQ_MEDIA_IMAGES_11E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves séparent dans une photographie ce qui est visible de ce qui est supposé » ?", options:["Analyser un plan de publicité", "Décrire ou interpréter une photo ?", "Un photomontage et ses risques", "Charte du droit à l'image"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves utilisent la recherche d'image inversée sur une photo virale pour retrouver sa source et son contexte » ?", options:["Analyser un plan de publicité", "Décrire ou interpréter une photo ?", "Vérifier une image", "Charte du droit à l'image"], correct:2 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « La classe compare les unes de trois journaux sur le même jour et relève choix » ?", options:["Un photomontage et ses risques", "Analyser un plan de publicité", "Vérifier une image", "Trois unes, un même jour"], correct:3 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves observent un court spot » ?", options:["Un photomontage et ses risques", "Analyser un plan de publicité", "Charte du droit à l'image", "Décrire ou interpréter une photo ?"], correct:1 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Chaque élève crée un photomontage et le présente à un camarade pour voir s'il repère la manipulation » ?", options:["Charte du droit à l'image", "Un photomontage et ses risques", "Vérifier une image", "Trois unes, un même jour"], correct:1 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « La classe rédige une charte de règles pour publier des images de camarades » ?", options:["Analyser un plan de publicité", "Trois unes, un même jour", "Un photomontage et ses risques", "Charte du droit à l'image"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_MEDIA_IMAGES_11E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_MEDIA_IMAGES_11E = QUIZ_SEQ_MEDIA_IMAGES_11E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
