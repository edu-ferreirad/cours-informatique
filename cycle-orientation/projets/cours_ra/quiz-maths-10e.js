const QUIZ_MATHS_10E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"En plongée en apnée, comment se comptent les profondeurs par rapport à la surface ?", options:["En nombres positifs", "En nombres relatifs négatifs", "En pourcentages", "En fractions"], correct:1 },
  { id:"q2", tier:"court", type:"texte", prompt:"Dans la suite de Fibonacci (0,1,1,2,3,5,8...), comment obtient-on chaque nouveau terme ?", answers:["en additionnant les deux precedents", "addition des deux termes precedents", "somme des deux precedents", "on additionne les deux nombres precedents"] },
  { id:"q3", tier:"court", type:"qcm", prompt:"Dans un triangle rectangle, le théorème de Pythagore relie le carré de l'hypoténuse à quoi ?", options:["La somme des deux autres côtés", "La somme des carrés des deux autres côtés", "Le produit des trois côtés", "La différence des deux autres côtés"], correct:1 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quel mathématicien grec a approché la valeur de π en utilisant des polygones inscrits dans un cercle ?", options:["Pythagore", "Euclide", "Archimède", "Thalès"], correct:2 },
  { id:"q5", tier:"moyen", type:"texte", prompt:"À quel angle correspond une pente de montagne de 100 % ?", answers:["45", "45 degres", "45°"] },
  { id:"q6", tier:"moyen", type:"qcm", prompt:"Que permet de faire un graphique représentant un phénomène, en plus d'un tableau de valeurs ?", options:["Uniquement décorer", "Le relier à une expression algébrique", "Remplacer les nombres", "Rien de plus"], correct:1 },
  { id:"q7", tier:"long", type:"qcm", prompt:"Que cherche la racine carrée d'un nombre ?", options:["Le double de ce nombre", "Un nombre qui, multiplié par lui-même, donne ce nombre", "La moitié de ce nombre", "Le carré de ce nombre"], correct:1 },
  { id:"q8", tier:"long", type:"texte", prompt:"Le mot \"algèbre\" vient de l'arabe \"al-jabr\", qui signifie littéralement quoi (en français, 2 mots) ?", answers:["la reunion des morceaux casses", "reunion des morceaux casses", "la reunion"] },
  { id:"q9", tier:"long", type:"qcm", prompt:"Sur une carte à l'échelle 1:25 000, un centimètre sur le papier représente combien de mètres sur le terrain ?", options:["25", "250", "2500", "25000"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Pourquoi la médiane résiste-t-elle mieux que la moyenne à une valeur extrême dans une série de données ?", options:["Elle ignore l'ordre des valeurs", "Elle est la valeur du milieu, peu importe les extrêmes", "Elle est toujours égale à la moyenne", "Elle ne s'applique pas aux salaires"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_MATHS_10E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_MATHS_10E = QUIZ_MATHS_10E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
