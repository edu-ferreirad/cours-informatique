const QUIZ_INFORMATIQUE_3_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Sous quel format l'informatique est-elle enseignée en 3e année ?", options:["1h par semaine comme d'habitude", "Une semaine décloisonnée de culture numérique", "Il n'y a pas d'informatique", "2h par semaine"], correct:1 },
  { id:"q2", tier:"court", type:"texte", prompt:"Quelle méthode utilisent les élèves pour vérifier une image trouvée en ligne ?", answers:["recherche d'image inversee", "recherche inversee", "image inversee"] },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Qu'estiment les élèves lors de l'atelier sur l'empreinte numérique ?", options:["Leur note", "L'impact environnemental de leurs usages numériques", "La vitesse de leur ordinateur", "Le prix d'un smartphone"], correct:1 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Que doivent noter les élèves en testant une IA ?", options:["Rien de particulier", "Où l'outil se trompe ou produit un résultat biaisé", "Le nom de l'IA uniquement", "La couleur de l'interface"], correct:1 },
  { id:"q5", tier:"long", type:"texte", prompt:"Devant qui les groupes présentent-ils leur production finale ?", answers:["plusieurs classes", "plusieurs classes reunies"] },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_INFORMATIQUE_3_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_INFORMATIQUE_3_COLLEGE = QUIZ_INFORMATIQUE_3_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
