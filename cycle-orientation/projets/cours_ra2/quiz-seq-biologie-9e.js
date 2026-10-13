// QUIZ — SÉQUENCES BIOLOGIE 9e
const QUIZ_SEQ_BIOLOGIE_9E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves préparent une lame de peau d'oignon » ?", options:["Un mètre carré de cour", "Construire un arbre de parenté", "Lire une étiquette alimentaire", "L'oignon au microscope"], correct:3 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « À l'aide d'une clé simple » ?", options:["Un mètre carré de cour", "La clé de détermination des feuilles", "Le squelette et les muscles", "Germination : un protocole complet"], correct:1 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves délimitent un mètre carré » ?", options:["Un mètre carré de cour", "La clé de détermination des feuilles", "Le squelette et les muscles", "L'oignon au microscope"], correct:0 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « À partir d'un tableau de caractères » ?", options:["Le pouls avant et après l'effort", "La clé de détermination des feuilles", "Exposé sur un écosystème local", "Construire un arbre de parenté"], correct:3 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves formulent une hypothèse sur l'effet de la lumière ou de l'eau sur des graines » ?", options:["Germination : un protocole complet", "Le pouls avant et après l'effort", "La clé de détermination des feuilles", "Lire une étiquette alimentaire"], correct:0 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « En groupes » ?", options:["Exposé sur un écosystème local", "Le pouls avant et après l'effort", "Un mètre carré de cour", "Un modèle de la respiration"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_BIOLOGIE_9E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_BIOLOGIE_9E = QUIZ_SEQ_BIOLOGIE_9E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
