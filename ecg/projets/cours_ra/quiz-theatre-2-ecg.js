const QUIZ_THEATRE_ECG_2 = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Dans l'échauffement \"marche qui se transforme\", que demande l'enseignant en priorité ?", options:["De mimer explicitement", "Une transformation intérieure d'abord", "De parler fort", "De s'arrêter"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Comment s'appelle l'outil visuel construit par groupes pour l'histoire du théâtre ?", answers:["frise chronologique", "une frise", "frise"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Dans l'atelier chorégraphie sans musique, sur quoi le groupe doit-il se synchroniser ?", options:["Un métronome", "Leur propre respiration audible", "Les applaudissements", "Rien"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Combien de temps dure le débrief à chaud après un filage ?", answers:["trois minutes", "3 minutes"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Dans l'audition blanche filmée, à quoi sert le fait de se revisionner ?", options:["À rien", "Repérer des tics de jeu invisibles en jouant", "Apprendre le texte", "Choisir un costume"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Que note l'élève chaque jour dans son journal de bord de stage ?", options:["Rien de précis", "Une tâche, une difficulté, une chose apprise", "Uniquement les horaires", "La météo"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_THEATRE_ECG_2.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_THEATRE_ECG_2 = QUIZ_THEATRE_ECG_2; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
