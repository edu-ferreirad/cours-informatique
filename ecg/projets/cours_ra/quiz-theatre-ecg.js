const QUIZ_THEATRE_ECG = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Dans l'échauffement \"marche qui se transforme\", que demande l'enseignant en priorité ?", options:["De mimer explicitement", "Une transformation intérieure d'abord", "De parler fort", "De s'arrêter"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Dans la scène muette à double intention, que doivent deviner les spectateurs ?", options:["Le texte exact", "Les deux intentions cachées", "Le nom des personnages", "Rien de précis"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Comment s'appelle l'outil visuel construit par groupes pour l'histoire du théâtre ?", answers:["frise chronologique", "une frise", "frise"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Dans l'atelier chorégraphie sans musique, sur quoi le groupe doit-il se synchroniser ?", options:["Un métronome", "Leur propre respiration audible", "Les applaudissements", "Rien"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Que construisent les élèves avant de mettre en scène un extrait, dans la séquence création de spectacle ?", options:["Une maquette en carton de l'espace scénique", "Rien de matériel", "Un texte entièrement nouveau", "Un costume"], correct:0 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Combien de temps dure le débrief à chaud après un filage ?", answers:["trois minutes", "3 minutes"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Dans l'audition blanche filmée, à quoi sert le fait de se revisionner ?", options:["À rien", "Repérer des tics de jeu invisibles en jouant", "Apprendre le texte", "Choisir un costume"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Le spectacle de fin de 3e année est-il joué uniquement devant la classe ?", options:["Oui, uniquement", "Non, devant un vrai public extérieur", "Il n'y a pas de spectacle", "Uniquement en ligne"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Que note l'élève chaque jour dans son journal de bord de stage ?", options:["Rien de précis", "Une tâche, une difficulté, une chose apprise", "Uniquement les horaires", "La météo"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Le rituel hebdomadaire d'improvisation à contrainte porte sur quoi principalement ?", options:["La mémorisation de texte", "La réactivité scénique régulière", "Le chant", "La danse classique"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(p){ const m = QUIZ_TIER_ORDER[p] || 1; return QUIZ_THEATRE_ECG.filter(q => QUIZ_TIER_ORDER[q.tier] <= m); }
window.QUIZ_THEATRE_ECG = QUIZ_THEATRE_ECG; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
