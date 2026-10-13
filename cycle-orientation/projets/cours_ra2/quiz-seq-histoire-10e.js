// QUIZ — SÉQUENCES HISTOIRE 10e
const QUIZ_SEQ_HISTOIRE_10E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves recopient une phrase à la plume » ?", options:["Copier à la main ou imprimer ?", "L'usine d'hier et d'aujourd'hui", "Tracer les routes des explorateurs", "La fouille archéologique de la classe"], correct:0 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Sur un planisphère » ?", options:["Un jour dans une seigneurie", "Calvin et la Réforme : deux points de vue", "Affiche : une cathédrale et sa construction", "Tracer les routes des explorateurs"], correct:3 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Avec une grille d'observation » ?", options:["Calvin et la Réforme : deux points de vue", "La fouille archéologique de la classe", "Copier à la main ou imprimer ?", "Lire un tableau de la Renaissance"], correct:3 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « À partir de courts documents » ?", options:["Calvin et la Réforme : deux points de vue", "Lire un tableau de la Renaissance", "Genève, ville des organisations internationales", "L'usine d'hier et d'aujourd'hui"], correct:0 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves explorent des sources sur l'arrivée de réfugiés à Genève et rédigent un court texte : qui vient » ?", options:["Interviewer un témoin du XXe siècle", "Genève au XVIe siècle, enquête locale", "La frise du couloir", "Tracer les routes des explorateurs"], correct:1 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « En s'inspirant d'extraits du siècle des Lumières » ?", options:["L'usine d'hier et d'aujourd'hui", "Calvin et la Réforme : deux points de vue", "Deux récits, un même événement", "Un article d'Encyclopédie fictif"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_HISTOIRE_10E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_HISTOIRE_10E = QUIZ_SEQ_HISTOIRE_10E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
