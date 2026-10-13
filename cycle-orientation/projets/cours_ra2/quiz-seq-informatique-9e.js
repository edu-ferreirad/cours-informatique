// QUIZ — SÉQUENCES INFORMATIQUE 9e
const QUIZ_SEQ_INFORMATIQUE_9E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves écrivent une recette précise (faire un sandwich) qu'un camarade « robot » exécute à la lettre » ?", options:["Quiz de calcul mental", "L'algorithme, une recette", "Mon prénom en binaire", "La table de multiplication"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Sur un quadrillage papier » ?", options:["Un dossier avec sources citées", "Une affiche avec des styles", "Une animation avec une boucle", "Programmer un robot sur quadrillage"], correct:3 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Avec un tableau de codage » ?", options:["Le budget de la classe au tableur", "Mon prénom en binaire", "Déboguer à deux", "Netiquette : cas pratiques"], correct:1 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Sur des photos de composants » ?", options:["Les composants d'un ordinateur", "Dessiner un polygone avec la tortue", "Le jeu de devinette", "Une animation avec une boucle"], correct:0 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Avec un environnement à blocs » ?", options:["Une animation avec une boucle", "Mon prénom en binaire", "Programmer un robot sur quadrillage", "L'algorithme, une recette"], correct:0 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves testent la robustesse de mots de passe fictifs avec un outil pédagogique et rédigent trois règles de sécurité » ?", options:["Créer un bon mot de passe", "Programmer un robot sur quadrillage", "Les composants d'un ordinateur", "Diaporama lisible ou illisible ?"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_INFORMATIQUE_9E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_INFORMATIQUE_9E = QUIZ_SEQ_INFORMATIQUE_9E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
