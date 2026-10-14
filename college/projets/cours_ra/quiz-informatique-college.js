const QUIZ_INFORMATIQUE_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"L'informatique au collège dépasse quoi, selon le plan d'études ?", options:["La simple utilisation des outils numériques (TIC)", "Les mathématiques", "Le sport", "Rien de particulier"], correct:0 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Le cours consiste à analyser des situations pour arriver à quoi ?", options:["Une modélisation et des solutions algorithmiques", "Un simple dessin", "Une note chiffrée uniquement", "Rien de concret"], correct:0 },
  { id:"q3", tier:"court", type:"texte", prompt:"Comment s'appelle le cours transversal de 1ère année qui prépare aux sciences expérimentales (sigle) ?", answers:["ids", "l'ids"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"L'IDS permet de se familiariser avec quels outils ?", options:["Notation scientifique, graphiques, ordres de grandeur", "Uniquement le dessin", "Uniquement la musique", "Rien de précis"], correct:0 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Au-delà d'automatiser une solution, que doit aussi faire l'élève ?", options:["Rien de plus", "Évaluer sa pertinence, efficacité et convivialité", "L'oublier immédiatement", "La cacher"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Quels trois axes fondamentaux structurent le cours IDS ?", answers:["grandeurs relations modelisation", "grandeurs, relations, modelisation"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"L'informatique fait appel à des notions mathématiques ET à quelles autres compétences ?", options:["Créatives et organisationnelles", "Uniquement sportives", "Aucune autre", "Uniquement artistiques"], correct:0 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Quelle attitude est explicitement attendue face à l'échec initial d'un programme (le bug) ?", options:["Abandonner immédiatement", "La persévérance", "L'indifférence", "La colère"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"L'informatique est-elle pensée comme une pratique solitaire au collège ?", options:["Oui, toujours seul", "Non, aussi comme un travail en équipe", "Impossible à dire", "Uniquement en option"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Le cours IDS établit des relations avec quel autre grand domaine, au-delà des sciences expérimentales ?", options:["Les sciences humaines", "Uniquement le sport", "Uniquement la musique", "Aucun autre domaine"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(p){ const m = QUIZ_TIER_ORDER[p] || 1; return QUIZ_INFORMATIQUE_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= m); }
window.QUIZ_INFORMATIQUE_COLLEGE = QUIZ_INFORMATIQUE_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
