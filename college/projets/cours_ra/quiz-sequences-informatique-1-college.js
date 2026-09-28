const QUIZ_INFORMATIQUE_1_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Combien d'heures hebdomadaires d'informatique sont dispensées en 1ère année (réforme 2021) ?", options:["1 heure", "2 heures", "4 heures", "Aucune"], correct:1 },
  { id:"q2", tier:"court", type:"texte", prompt:"Dans l'exercice du pixel art, en quoi les élèves codent-ils l'image sur papier ?", answers:["0 et 1", "des 0 et des 1", "binaire"] },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Que doivent écrire les élèves avant de traduire leur solution en code ?", options:["Rien, on code directement", "Un algorithme en français structuré", "Un dessin uniquement", "Une liste de mots-clés"], correct:1 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Dans l'exercice de débogage, combien d'erreurs le programme contient-il ?", options:["Aucune", "Une seule", "Plusieurs", "On ne sait pas"], correct:1 },
  { id:"q5", tier:"long", type:"texte", prompt:"Que mesurent les élèves lors de l'atelier sur les mots de passe ?", answers:["le temps", "temps pour deviner", "combien de temps"] },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelles briques le mini-projet de fin de semestre réutilise-t-il ?", options:["Des briques nouvelles jamais vues", "Exactement les briques déjà vues en classe", "Aucune brique particulière", "Uniquement des boucles"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_INFORMATIQUE_1_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_INFORMATIQUE_1_COLLEGE = QUIZ_INFORMATIQUE_1_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
