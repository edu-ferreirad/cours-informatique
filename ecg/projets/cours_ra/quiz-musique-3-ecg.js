const QUIZ_MUSIQUE_ECG_3 = [
  { id:"q2", tier:"court", type:"qcm", prompt:"Dans la dictée rythmique flash, combien de fois l'enseignant frappe-t-il le motif ?", options:["Une fois", "Deux fois", "Cinq fois", "Autant que nécessaire"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Dans la grille d'écoute critique, que doit éviter la classe après une prestation ?", options:["Les critiques précises", "Le simple \"c'était bien\"", "Toute forme de retour", "Les applaudissements"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Lors de la visite d'un orchestre, que doivent observer les élèves ?", options:["Le concert uniquement", "Une répétition, avec les interruptions du chef", "Rien de précis", "Uniquement les costumes"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Dans la playlist argumentée, combien de morceaux l'élève doit-il sélectionner et justifier ?", options:["Trois", "Dix", "Cinquante", "Un seul"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_MUSIQUE_ECG_3.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_MUSIQUE_ECG_3 = QUIZ_MUSIQUE_ECG_3; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
