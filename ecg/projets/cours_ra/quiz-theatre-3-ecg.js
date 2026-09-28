const QUIZ_THEATRE_ECG_3 = [
  { id:"q2", tier:"court", type:"qcm", prompt:"Dans la scène muette à double intention, que doivent deviner les spectateurs ?", options:["Le texte exact", "Les deux intentions cachées", "Le nom des personnages", "Rien de précis"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Que construisent les élèves avant de mettre en scène un extrait, dans la séquence création de spectacle ?", options:["Une maquette en carton de l'espace scénique", "Rien de matériel", "Un texte entièrement nouveau", "Un costume"], correct:0 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Le spectacle de fin de 3e année est-il joué uniquement devant la classe ?", options:["Oui, uniquement", "Non, devant un vrai public extérieur", "Il n'y a pas de spectacle", "Uniquement en ligne"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Le rituel hebdomadaire d'improvisation à contrainte porte sur quoi principalement ?", options:["La mémorisation de texte", "La réactivité scénique régulière", "Le chant", "La danse classique"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_THEATRE_ECG_3.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_THEATRE_ECG_3 = QUIZ_THEATRE_ECG_3; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
