const QUIZ_MATHS_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quel niveau de mathématiques est obligatoire pour l'option spécifique physique-applications des mathématiques ?", options:["MA1", "MA2", "Aucun niveau spécifique", "Les deux au choix"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Le calcul littéral permet de passer du particulier à quoi ?", options:["Au concret", "Au général (abstraction)", "Au hasard", "À rien de nouveau"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"En géométrie, quel type de démarche l'étude d'une figure permet-elle de pratiquer directement ?", answers:["la demonstration", "demonstration", "argumentation logique"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"À partir de la 3e année, l'analyse mathématique étudie la relation entre une fonction et sa quoi ?", options:["Son inverse", "Sa dérivée", "Sa racine", "Son carré"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Les statistiques et probabilités développent surtout quelle posture face aux résultats ?", options:["Accepter sans questionner", "Analyser, interpréter et critiquer", "Ignorer les résultats", "Mémoriser par cœur"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Le cours d'applications des mathématiques a un caractère particulièrement quoi ?", answers:["interdisciplinaire", "interdisciplinaire fondamental"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Dès la 2e année, l'accent des mathématiques se déplace vers quoi ?", options:["Uniquement le calcul mental", "L'esprit scientifique et la démonstration", "L'apprentissage par cœur", "Rien de nouveau"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Parmi les attitudes attendues en mathématiques figure la capacité à apprécier quoi ?", options:["Uniquement l'utilité pratique", "L'aspect esthétique d'une théorie", "La rapidité de calcul", "La mémorisation"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Les méthodes numériques exigent la maîtrise des bases de quoi ?", options:["La chimie", "L'algorithmique", "La géographie", "La philosophie"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Le plan d'études demande de réfléchir au statut historique de quels objets mathématiques ?", options:["Les nombres pairs uniquement", "L'infiniment grand et l'infiniment petit", "Les fractions simples", "Rien en particulier"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_MATHS_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_MATHS_COLLEGE = QUIZ_MATHS_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
