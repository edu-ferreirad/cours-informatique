const QUIZ_INFORMATIQUE_4_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Que doivent identifier les élèves de l'OC avant même d'envisager un algorithme ?", options:["Le nom du projet", "Les données pertinentes, simplifiées en modèle abstrait", "La note finale", "Le langage de programmation"], correct:1 },
  { id:"q2", tier:"court", type:"texte", prompt:"Sur quoi les élèves comparent-ils deux algorithmes de tri ?", answers:["performances", "leurs performances", "la performance"] },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Que rédigent les élèves avant de commencer un projet de groupe ?", options:["Rien, ils codent directement", "Un cahier des charges", "Une seule ligne de code", "Un poème"], correct:1 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Qui teste le prototype de chaque équipe ?", options:["L'enseignant seul", "Une équipe voisine, sans explication préalable", "Personne", "Les parents"], correct:1 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Avec quel autre cours l'OC informatique fait-il un lien explicite en fin de cursus ?", options:["Le sport", "Les applications des mathématiques", "Le dessin", "La musique"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_INFORMATIQUE_4_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_INFORMATIQUE_4_COLLEGE = QUIZ_INFORMATIQUE_4_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
