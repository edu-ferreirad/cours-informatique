const QUIZ_MUSIQUE_ECG_2 = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Le \"bœuf improvisé\" en début d'atelier sert surtout à quoi ?", options:["Évaluer les élèves", "Réhabituer l'oreille et le corps à jouer ensemble", "Apprendre le solfège", "Remplacer l'échauffement vocal"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Dans l'atelier de remix numérique, combien de versions aux ambiances différentes chaque élève doit-il produire ?", answers:["trois", "3"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Dans l'exercice de la cellule de huit mesures, que doit faire l'élève avec la composition reçue d'un camarade ?", options:["La copier à l'identique", "La développer et la transformer", "L'ignorer", "La supprimer"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Que simule l'exercice de préparation au concours, dans les conditions exactes de l'épreuve réelle ?", answers:["une audition", "laudition", "audition"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Que documente le carnet de répétition tenu pour le TPC musique ?", options:["Uniquement les horaires", "Les progrès, blocages et choix d'interprétation", "Rien d'utile", "La météo"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Avant le stage, quel métier précis l'élève doit-il choisir d'étudier ?", options:["Aucun métier précis", "Un métier précis de la filière musicale", "Uniquement celui de chanteur", "Un métier hors musique"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_MUSIQUE_ECG_2.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_MUSIQUE_ECG_2 = QUIZ_MUSIQUE_ECG_2; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
