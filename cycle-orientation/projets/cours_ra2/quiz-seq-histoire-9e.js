// QUIZ — SÉQUENCES HISTOIRE 9e
const QUIZ_SEQ_HISTOIRE_9E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Une boîte d'objets fictifs (tessons » ?", options:["La fouille archéologique de la classe", "Un jour dans une seigneurie", "Tracer les routes des explorateurs", "Copier à la main ou imprimer ?"], correct:0 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « La classe construit une frise chronologique collective de l'Antiquité au Moyen Âge » ?", options:["La frise du couloir", "Un jour dans une seigneurie", "Copier à la main ou imprimer ?", "L'usine d'hier et d'aujourd'hui"], correct:0 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves rejouent une assemblée : un orateur propose une loi » ?", options:["Genève au XVIe siècle, enquête locale", "La lettre d'un soldat", "Lire un tableau de la Renaissance", "Une assemblée athénienne"], correct:3 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Des cartes de rôles (seigneur » ?", options:["Un jour dans une seigneurie", "Tracer les routes des explorateurs", "La fouille archéologique de la classe", "Genève, ville des organisations internationales"], correct:0 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves comparent deux récits contemporains d'un événement médiéval » ?", options:["Une assemblée athénienne", "Deux récits, un même événement", "La frise du couloir", "Interviewer un témoin du XXe siècle"], correct:1 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « En groupes » ?", options:["Une assemblée athénienne", "Tracer les routes des explorateurs", "Affiche : une cathédrale et sa construction", "Deux récits, un même événement"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_HISTOIRE_9E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_HISTOIRE_9E = QUIZ_SEQ_HISTOIRE_9E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
