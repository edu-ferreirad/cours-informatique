const QUIZ_MUSIQUE_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"La musique se trouve à l'intersection de quoi ?", options:["De nombreuses disciplines", "Uniquement les mathématiques", "Rien de particulier", "Uniquement le sport"], correct:0 },
  { id:"q2", tier:"court", type:"qcm", prompt:"La pratique de la musique favorise entre autres quoi ?", options:["L'expression de soi et la socialisation", "Rien de particulier", "Uniquement la mémoire", "Uniquement la vitesse"], correct:0 },
  { id:"q3", tier:"court", type:"texte", prompt:"Quelle heure supplémentaire s'ajoute à la dotation horaire habituelle de musique ?", answers:["instrument", "heure dinstrument", "une heure dinstrument"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Après deux années de DF, l'élève doit reconnaître quoi à l'audition ?", options:["Les instruments et timbres vocaux courants", "Rien de particulier", "Uniquement les paroles", "Uniquement le tempo"], correct:0 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"L'élève apprend à relier les pièces entendues à quoi ?", options:["L'écriture musicale", "Rien de précis", "Uniquement la danse", "Uniquement le rythme"], correct:0 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"En option spécifique, quelles trois dimensions actives l'élève développe-t-il (interprétation, improvisation et...) ?", answers:["creation", "la creation"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"En option spécifique, l'élève connaît des musiques de quelles civilisations ?", options:["Uniquement occidentales", "De différents styles et civilisations", "Aucune civilisation", "Uniquement suisses"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Le lien entre musique et langues se fait notamment via quoi ?", options:["La prosodie", "Le sport", "Les mathématiques uniquement", "Rien de précis"], correct:0 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Quelle science étudie scientifiquement le son, en lien avec la musique ?", options:["L'acoustique (physique)", "La chimie", "La biologie", "L'histoire"], correct:0 },
  { id:"q10", tier:"long", type:"qcm", prompt:"L'informatique est reliée à la musique notamment pour quoi ?", options:["La lecture et l'écriture de partitions", "Rien de particulier", "Uniquement le sport", "Uniquement la cuisine"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(p){ const m = QUIZ_TIER_ORDER[p] || 1; return QUIZ_MUSIQUE_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= m); }
window.QUIZ_MUSIQUE_COLLEGE = QUIZ_MUSIQUE_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
