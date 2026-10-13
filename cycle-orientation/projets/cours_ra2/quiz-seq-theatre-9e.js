// QUIZ — SÉQUENCES THÉÂTRE 9e
const QUIZ_SEQ_THEATRE_9E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « La classe pratique respiration abdominale et virelangues » ?", options:["Marcher avec le masque neutre", "Représentation et retour", "Respirer et articuler", "Trois intentions pour une réplique de Molière"], correct:2 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves marchent » ?", options:["Trois intentions pour une réplique de Molière", "Représentation et retour", "Marcher avec le masque neutre", "Mettre en scène une scène de deux minutes"], correct:2 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Par groupes » ?", options:["Respirer et articuler", "Marcher avec le masque neutre", "Mettre en scène une scène de deux minutes", "Improvisation à contrainte"], correct:3 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Une même réplique est dite avec trois intentions différentes (convaincre » ?", options:["Mettre en scène une scène de deux minutes", "Improvisation à contrainte", "Respirer et articuler", "Trois intentions pour une réplique de Molière"], correct:3 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Chaque groupe met en scène une courte scène avec espace » ?", options:["Trois intentions pour une réplique de Molière", "Respirer et articuler", "Mettre en scène une scène de deux minutes", "Improvisation à contrainte"], correct:2 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Chaque groupe présente sa scène ; le public donne un retour selon deux critères (voix » ?", options:["Mettre en scène une scène de deux minutes", "Trois intentions pour une réplique de Molière", "Représentation et retour", "Respirer et articuler"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_THEATRE_9E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_THEATRE_9E = QUIZ_SEQ_THEATRE_9E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
