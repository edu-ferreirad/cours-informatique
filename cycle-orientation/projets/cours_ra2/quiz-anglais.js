const QUIZ_ANGLAIS = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Comment dit-on \"je viens de\" en anglais ?", options:["My name is", "I come from", "I am", "I have"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Les noms communs anglais ont-ils un genre grammatical (le/la) comme en français ou en allemand ?", options:["Oui, toujours", "Non, aucun", "Seulement au pluriel", "Seulement pour les animaux"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Comment dit-on \"neuf heures moins le quart\" en anglais ?", answers:["a quarter to nine", "quarter to nine"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quel plat est un symbole culinaire britannique emblématique, fait de poisson frit et de frites ?", options:["Fish and chips", "Full English breakfast", "Afternoon tea", "Shepherd's pie"], correct:0 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Parler de la météo au Royaume-Uni sert souvent à quoi socialement ?", options:["À rien de particulier", "À engager la conversation avec un inconnu", "Uniquement à la météo télévisée", "C'est interdit en public"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Comment appelle-t-on le football aux États-Unis, pour le distinguer du football américain ?", answers:["soccer"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Que signifie réellement le mot anglais \"actually\" ?", options:["Actuellement", "En fait", "Éventuellement", "Actualité"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Big Ben désigne officiellement quoi, et non la tour elle-même ?", options:["L'horloge", "La cloche du beffroi", "Le drapeau", "L'entrée du Parlement"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Quel pays a offert la statue de la Liberté aux États-Unis en 1886 ?", options:["Le Royaume-Uni", "L'Espagne", "La France", "L'Italie"], correct:2 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Un \"biscuit\" britannique correspond à quoi aux États-Unis ?", options:["Un cookie", "Un petit pain moelleux", "Une tarte", "Un gâteau"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ANGLAIS.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ANGLAIS = QUIZ_ANGLAIS; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
