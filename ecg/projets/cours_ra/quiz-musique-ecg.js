const QUIZ_MUSIQUE_ECG = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Le \"bœuf improvisé\" en début d'atelier sert surtout à quoi ?", options:["Évaluer les élèves", "Réhabituer l'oreille et le corps à jouer ensemble", "Apprendre le solfège", "Remplacer l'échauffement vocal"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Dans la dictée rythmique flash, combien de fois l'enseignant frappe-t-il le motif ?", options:["Une fois", "Deux fois", "Cinq fois", "Autant que nécessaire"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Dans l'atelier de remix numérique, combien de versions aux ambiances différentes chaque élève doit-il produire ?", answers:["trois", "3"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Dans l'exercice de la cellule de huit mesures, que doit faire l'élève avec la composition reçue d'un camarade ?", options:["La copier à l'identique", "La développer et la transformer", "L'ignorer", "La supprimer"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Dans la grille d'écoute critique, que doit éviter la classe après une prestation ?", options:["Les critiques précises", "Le simple \"c'était bien\"", "Toute forme de retour", "Les applaudissements"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Que simule l'exercice de préparation au concours, dans les conditions exactes de l'épreuve réelle ?", answers:["une audition", "laudition", "audition"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Que documente le carnet de répétition tenu pour le TPC musique ?", options:["Uniquement les horaires", "Les progrès, blocages et choix d'interprétation", "Rien d'utile", "La météo"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Lors de la visite d'un orchestre, que doivent observer les élèves ?", options:["Le concert uniquement", "Une répétition, avec les interruptions du chef", "Rien de précis", "Uniquement les costumes"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Avant le stage, quel métier précis l'élève doit-il choisir d'étudier ?", options:["Aucun métier précis", "Un métier précis de la filière musicale", "Uniquement celui de chanteur", "Un métier hors musique"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Dans la playlist argumentée, combien de morceaux l'élève doit-il sélectionner et justifier ?", options:["Trois", "Dix", "Cinquante", "Un seul"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(p){ const m = QUIZ_TIER_ORDER[p] || 1; return QUIZ_MUSIQUE_ECG.filter(q => QUIZ_TIER_ORDER[q.tier] <= m); }
window.QUIZ_MUSIQUE_ECG = QUIZ_MUSIQUE_ECG; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
