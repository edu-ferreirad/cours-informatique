// QUIZ — SÉQUENCES HISTOIRE 11e
const QUIZ_SEQ_HISTOIRE_11E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves comparent une photographie d'usine de 1900 à une photo actuelle et relèvent trois changements dans le travail » ?", options:["Un jour dans une seigneurie", "Deux récits, un même événement", "Calvin et la Réforme : deux points de vue", "L'usine d'hier et d'aujourd'hui"], correct:3 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves lisent une lettre d'un soldat de 1914-1918 » ?", options:["Lire un tableau de la Renaissance", "Deux récits, un même événement", "Deux affiches de propagande", "La lettre d'un soldat"], correct:3 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Deux affiches de guerre sont comparées avec une grille (qui parle » ?", options:["L'usine d'hier et d'aujourd'hui", "Genève au XVIe siècle, enquête locale", "Deux affiches de propagande", "Débat : la chute du Mur"], correct:2 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « À l'aide d'une carte mentale » ?", options:["Deux récits, un même événement", "La fouille archéologique de la classe", "Affiche : une cathédrale et sa construction", "Genève, ville des organisations internationales"], correct:3 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves préparent un guide d'entretien » ?", options:["Interviewer un témoin du XXe siècle", "Deux affiches de propagande", "Deux récits, un même événement", "Affiche : une cathédrale et sa construction"], correct:0 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « À partir de sources contrastées » ?", options:["Débat : la chute du Mur", "Lire un tableau de la Renaissance", "Un jour dans une seigneurie", "La fouille archéologique de la classe"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_HISTOIRE_11E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_HISTOIRE_11E = QUIZ_SEQ_HISTOIRE_11E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
