const QUIZ_INFORMATIQUE_2_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Combien d'heures hebdomadaires d'informatique sont dispensées en 2e année (réforme 2021) ?", options:["1 heure", "2 heures", "3 heures", "Aucune"], correct:0 },
  { id:"q2", tier:"court", type:"texte", prompt:"Sur quoi les élèves tracent-ils le chemin le plus court d'un message ?", answers:["un schema", "un schema de reseau", "schema simplifie"] },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Dans l'exercice de la boîte noire, que découvrent les élèves à la fin ?", options:["Rien de plus", "Le code réel de la fonction", "Une nouvelle fonction", "La note de l'exercice"], correct:1 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Que comparent les élèves lors de l'exercice de recherche dans une liste ?", options:["La couleur des nombres", "Le nombre de comparaisons nécessaires", "La longueur du code", "Rien de précis"], correct:1 },
  { id:"q5", tier:"long", type:"texte", prompt:"Que doit faire un autre binôme avec la mini-calculatrice programmée ?", answers:["la faire planter", "tester pour la faire planter", "essayer de la faire planter"] },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_INFORMATIQUE_2_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_INFORMATIQUE_2_COLLEGE = QUIZ_INFORMATIQUE_2_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
