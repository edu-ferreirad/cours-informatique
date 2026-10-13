// QUIZ — SÉQUENCES BIOLOGIE 10e
const QUIZ_SEQ_BIOLOGIE_10E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves mesurent leur pouls au repos puis après un effort » ?", options:["Le pouls avant et après l'effort", "Un modèle de la respiration", "Projet de prévention", "Lire une étiquette alimentaire"], correct:0 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Avec une bouteille » ?", options:["Un modèle de la respiration", "L'oignon au microscope", "Projet de prévention", "La clé de détermination des feuilles"], correct:0 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves comparent la quantité de sucre de plusieurs produits et discutent des choix alimentaires » ?", options:["La clé de détermination des feuilles", "Germination : un protocole complet", "Construire un arbre de parenté", "Lire une étiquette alimentaire"], correct:3 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Avec un modèle de squelette » ?", options:["Lire une étiquette alimentaire", "Exposé sur un écosystème local", "Le squelette et les muscles", "La clé de détermination des feuilles"], correct:2 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves recueillent des données » ?", options:["Le pouls avant et après l'effort", "L'oignon au microscope", "Enquête sur le petit-déjeuner", "Le squelette et les muscles"], correct:2 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « En groupes » ?", options:["Lire une étiquette alimentaire", "Enquête sur le petit-déjeuner", "Le pouls avant et après l'effort", "Projet de prévention"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_BIOLOGIE_10E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_BIOLOGIE_10E = QUIZ_SEQ_BIOLOGIE_10E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
