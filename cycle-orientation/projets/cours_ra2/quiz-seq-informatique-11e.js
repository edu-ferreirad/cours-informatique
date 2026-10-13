// QUIZ — SÉQUENCES INFORMATIQUE 11e
const QUIZ_SEQ_INFORMATIQUE_11E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves affichent un message » ?", options:["Mon premier programme Python", "Une affiche avec des styles", "La table de multiplication", "Le jeu de devinette"], correct:0 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves programment un quiz avec une condition pour dire si la réponse est correcte » ?", options:["Quiz de calcul mental", "Une affiche avec des styles", "Mon premier programme Python", "Le jeu de devinette"], correct:0 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Avec une boucle » ?", options:["Programmer un robot sur quadrillage", "Dessiner un polygone avec la tortue", "La table de multiplication", "L'algorithme, une recette"], correct:2 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « À l'aide d'une bibliothèque de tortue graphique » ?", options:["Dessiner un polygone avec la tortue", "La table de multiplication", "Netiquette : cas pratiques", "Mon prénom en binaire"], correct:0 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « En binôme » ?", options:["Déboguer à deux", "Quiz de calcul mental", "Une affiche avec des styles", "Le jeu de devinette"], correct:3 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Chaque binôme reçoit un programme contenant trois erreurs » ?", options:["Un dossier avec sources citées", "Quiz de calcul mental", "Le jeu de devinette", "Déboguer à deux"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_INFORMATIQUE_11E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_INFORMATIQUE_11E = QUIZ_SEQ_INFORMATIQUE_11E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
