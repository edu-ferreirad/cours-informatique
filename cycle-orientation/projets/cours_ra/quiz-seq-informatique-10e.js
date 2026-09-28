// QUIZ — SÉQUENCES INFORMATIQUE 10e
const QUIZ_SEQ_INFORMATIQUE_10E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves mesurent leur vitesse de frappe au clavier » ?", options:["Les composants d'un ordinateur", "Le défi de frappe", "Dessiner un polygone avec la tortue", "Mon prénom en binaire"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves composent une affiche en traitement de texte en utilisant styles de titres » ?", options:["Netiquette : cas pratiques", "Diaporama lisible ou illisible ?", "Une affiche avec des styles", "Un dossier avec sources citées"], correct:2 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves construisent un budget avec formules d'addition et de pourcentage et vérifient ce qui change quand on… » ?", options:["Mon prénom en binaire", "Le budget de la classe au tableur", "Les composants d'un ordinateur", "Netiquette : cas pratiques"], correct:1 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves analysent deux diaporamas » ?", options:["Netiquette : cas pratiques", "Mon prénom en binaire", "Diaporama lisible ou illisible ?", "Le défi de frappe"], correct:2 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves rédigent un dossier de deux pages avec sommaire automatique » ?", options:["Une affiche avec des styles", "Un dossier avec sources citées", "La table de multiplication", "Diaporama lisible ou illisible ?"], correct:1 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « À partir de mini-scènes de messagerie » ?", options:["Déboguer à deux", "Netiquette : cas pratiques", "Programmer un robot sur quadrillage", "Une animation avec une boucle"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_INFORMATIQUE_10E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_INFORMATIQUE_10E = QUIZ_SEQ_INFORMATIQUE_10E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
