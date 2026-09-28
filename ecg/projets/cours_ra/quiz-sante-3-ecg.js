const QUIZ_SANTE_ECG_3 = [
  { id:"q2", tier:"court", type:"qcm", prompt:"Dans le jeu de rôle du premier entretien, combien de rôles chaque élève joue-t-il ?", options:["Un seul", "Deux, patient puis soignant", "Trois", "Aucun rôle"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Dans le débat éthique en psychologie, que doivent défendre les deux groupes ?", options:["Uniquement leur propre avis", "Une position, y compris celle qu'ils ne partagent pas", "Rien de précis", "Un vote uniquement"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Lors de la visite d'un service hospitalier, que doit observer chaque élève ?", options:["Rien de précis", "Un aspect logistique invisible de l'extérieur", "Uniquement les médicaments", "Les couleurs des murs"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Dans le debrief hebdomadaire en binôme pendant le stage, que comparent les deux élèves ?", options:["Rien", "Leurs observations dans des structures différentes", "Leurs notes scolaires", "Leur tenue"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SANTE_ECG_3.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SANTE_ECG_3 = QUIZ_SANTE_ECG_3; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
