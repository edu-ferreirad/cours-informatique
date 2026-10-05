// QUIZ FINAL — SALLE MATHÉMATIQUES 9e
const QUIZ_MATHS_9E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Face à un problème de recherche et stratégies (comme le coffre à combinaison), quelle est la meilleure approche ?", options:["Tester tous les codes un par un","Réduire les possibilités par le raisonnement","Attendre que le professeur donne la réponse","Deviner au hasard"], correct:1 },
  { id:"q2", tier:"court", type:"texte", prompt:"Comment appelle-t-on deux grandeurs quand l'une est toujours obtenue en multipliant l'autre par un même nombre ?", answers:["proportionnelles","proportionnalité","des grandeurs proportionnelles"] },
  { id:"q3", tier:"court", type:"qcm", prompt:"Pour construire un triangle à partir de 3 longueurs données, quelle condition doit toujours être respectée ?", options:["Les 3 côtés doivent être égaux","La somme des deux côtés les plus courts doit dépasser le 3e côté","Un des angles doit être droit","Aucune condition n'est nécessaire"], correct:1 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Un cercle possède combien d'axes de symétrie ?", options:["Un seul","Quatre","Aucun","Une infinité"], correct:3 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Que mesure l'aire d'une figure, contrairement au périmètre ?", options:["Son contour", "La surface qu'elle recouvre", "Sa hauteur", "Son poids"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"En comparant un abonnement à prix fixe et un achat à l'unité pour trouver l'offre la plus avantageuse, on compare mathématiquement deux quoi (mot en -s) ?", answers:["fonctions", "des fonctions", "fonctions affines"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"En mathématiques, combien d'essais réussis suffisent-ils à prouver une conjecture ?", options:["Dix", "Cent", "Aucun, un seul contre-exemple suffit à l'invalider", "Mille"], correct:2 },
  { id:"q8", tier:"long", type:"texte", prompt:"Si on double toutes les dimensions d'un cube, par combien son volume est-il multiplié ?", answers:["8", "huit"] },
  { id:"q9", tier:"long", type:"qcm", prompt:"Pour qu'un diagramme en secteurs (camembert) ait un sens, que doivent représenter toutes les parts additionnées ?", options:["50 %", "Un tout (100 %)", "Peu importe", "0 %"], correct:1 },
  { id:"q10", tier:"long", type:"texte", prompt:"Le symbole \"x\" utilisé pour désigner une inconnue viendrait de la déformation d'un mot arabe signifiant quoi ?", answers:["chose", "la chose"] },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_MATHS_9E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_MATHS_9E = QUIZ_MATHS_9E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
