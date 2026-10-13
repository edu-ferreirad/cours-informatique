const QUIZ_MATHS_11E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Un nombre comme π, dont les décimales ne s'arrêtent ni ne se répètent jamais, appartient à quel ensemble ?", options:["Les nombres rationnels", "Les nombres irrationnels", "Les nombres entiers", "Les nombres décimaux"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Le produit de deux nombres négatifs donne toujours un résultat...", options:["Négatif", "Nul", "Positif", "Cela dépend"], correct:2 },
  { id:"q3", tier:"court", type:"texte", prompt:"Pour comparer deux fractions avec des dénominateurs différents, que doit-on d'abord faire ?", answers:["les mettre au meme denominateur", "mettre au meme denominateur", "meme denominateur"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"0,999999... répété à l'infini est-il égal à 1 ?", options:["Non, presque égal seulement", "Oui, exactement égal", "Cela dépend du contexte", "Impossible à savoir"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Le volume d'une pyramide est égal à quelle fraction du volume du prisme de même base et hauteur ?", options:["La moitié", "Le tiers", "Le quart", "Les deux tiers"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Diviser par une fraction revient à multiplier par quoi ?", answers:["son inverse", "l'inverse", "linverse"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Une fonction affine (y = ax + b) trace toujours quelle forme sur un graphique ?", options:["Une courbe", "Une droite", "Un cercle", "Une parabole"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Combien de diagonales possède un simple hexagone (6 côtés) ?", options:["6", "9", "12", "3"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Dans un raisonnement par discussion de cas, que se passe-t-il si un seul cas est oublié ?", options:["Rien, ce n'est pas grave", "Toute la démonstration devient invalide", "Le résultat est quand même juste", "On peut l'ignorer"], correct:1 },
  { id:"q10", tier:"long", type:"texte", prompt:"Dans un appariement logique, quelle méthode permet de trouver la solution : deviner au hasard ou éliminer progressivement les possibilités ?", answers:["eliminer progressivement", "elimination", "eliminer les possibilites", "par elimination"] },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_MATHS_11E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_MATHS_11E = QUIZ_MATHS_11E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
