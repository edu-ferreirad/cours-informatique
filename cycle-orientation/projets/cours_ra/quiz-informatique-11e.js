const QUIZ_INFORMATIQUE_11E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"D'où vient réellement le nom du langage Python ?", options:["Du serpent python", "D'une série télévisée comique britannique", "D'un mathématicien", "D'une ville des États-Unis"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"En Python, comment écrit-on un programme, contrairement à Scratch ?", options:["Avec des blocs visuels", "En lignes de texte (un script)", "Avec la souris uniquement", "Il n'y a pas de différence"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Comment s'appelle le module Python qui permet de dessiner avec une petite figure virtuelle qui se déplace ?", answers:["turtle", "le module turtle"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Pour tracer un polygone régulier à n côtés avec la tortue graphique, comment calcule-t-on l'angle de rotation à chaque sommet ?", options:["360 divisé par n", "180 divisé par n", "n divisé par 360", "Toujours 90 degrés"], correct:0 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Que permettent de faire les commandes \"penup\" et \"pendown\" ?", options:["Changer de couleur", "Se déplacer sans laisser de trace, puis redessiner", "Effacer tout l'écran", "Fermer le programme"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"D'où viendrait le terme \"bug\" en informatique, selon une anecdote célèbre de 1947 ?", answers:["une mite", "insecte coince dans un relais", "mite coincee dans un relais"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Un polygone régulier à 100 côtés très courts ressemble, à l'œil nu, à quelle figure ?", options:["Un carré", "Un cercle", "Un triangle", "Une étoile"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Quel mathématicien grec antique utilisait le même principe (polygones à nombreux côtés) pour approcher π ?", options:["Pythagore", "Archimède", "Euclide", "Thalès"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Quelle est la meilleure stratégie face à un dessin complexe à reproduire par du code ?", options:["Écrire tout le programme d'un coup sans réfléchir", "Décomposer la figure en formes simples déjà maîtrisées", "Abandonner immédiatement", "Copier un programme au hasard"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Passer de Scratch à Python change surtout quoi ?", options:["La logique de programmation complètement", "La forme du code, pas la logique de fond (boucles, variables...)", "Rien du tout", "Le sens des instructions"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_INFORMATIQUE_11E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_INFORMATIQUE_11E = QUIZ_INFORMATIQUE_11E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
