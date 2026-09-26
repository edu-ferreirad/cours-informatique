const QUIZ_CHIMIE_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"L'étude de la chimie amène à mieux comprendre quoi, selon les objectifs généraux ?", options:["Notre environnement quotidien", "Uniquement les mathématiques", "Rien de concret", "Uniquement l'histoire"], correct:0 },
  { id:"q2", tier:"court", type:"qcm", prompt:"La pratique conjointe de l'expérience et de modèles théoriques initie l'élève à quoi ?", options:["La méthode scientifique", "La méthode artistique", "Aucune méthode", "La méthode historique"], correct:0 },
  { id:"q3", tier:"court", type:"texte", prompt:"Quel outil organise l'ensemble de la matière connue selon des régularités précises ?", answers:["tableau periodique", "le tableau periodique"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"La notion de polarité d'une molécule explique par exemple pourquoi quoi ne se mélange pas ?", options:["L'eau et l'huile", "Le sel et l'eau", "Le sucre et l'eau", "Deux gaz"], correct:0 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Équilibrer une réaction chimique reflète quel principe énoncé par Lavoisier ?", options:["La conservation de la matière", "La destruction de la matière", "La création de matière", "Rien de précis"], correct:0 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Que mesure le pH d'une solution ?", answers:["acidite", "lacidite", "acidite ou basicite", "l'acidite"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"En option spécifique, la chimie organique est appliquée à la compréhension de quels phénomènes ?", options:["Biochimiques", "Astronomiques", "Météorologiques", "Aucun phénomène"], correct:0 },
  { id:"q8", tier:"long", type:"qcm", prompt:"L'option spécifique amène à décrire l'évolution de la matière dans l'univers via quelle théorie ?", options:["Le big-bang", "La tectonique des plaques", "L'évolution des espèces", "Aucune théorie"], correct:0 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Le principe de la pile électrique repose sur quel type de réaction chimique ?", options:["Une réaction d'oxydoréduction", "Une réaction acido-basique uniquement", "Aucune réaction chimique", "Une fusion nucléaire"], correct:0 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Les cycles des éléments chimiques (carbone, azote) créent un lien avec quel domaine ?", options:["Les sciences humaines", "Uniquement les mathématiques", "Aucun lien", "Uniquement la musique"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_CHIMIE_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_CHIMIE_COLLEGE = QUIZ_CHIMIE_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
