const QUIZ_BIOLOGIE_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Le \"regard biologique\" attendu de l'élève implique une pensée...", options:["Isolée et technique", "Comparative et globale", "Purement mémorielle", "Aucune pensée particulière"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Le plan d'études demande de respecter la vie en ayant conscience de quoi ?", options:["Être extérieur à la nature", "Faire partie intégrante de la nature", "Dominer la nature", "Rien de particulier"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Quelle étape de la démarche scientifique consiste à tester une hypothèse avec du matériel de laboratoire ?", answers:["experience", "une experience", "lexperience"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Le programme couvre les manifestations du vivant, du niveau moléculaire jusqu'à quoi ?", options:["Le comportement", "Uniquement la cellule", "Rien d'autre", "Uniquement la génétique"], correct:0 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Quels deux domaines sont cités comme des piliers indissociables de la biologie moderne ?", options:["Chimie et physique", "Génétique et évolution", "Histoire et géographie", "Musique et arts"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Quelle méthode est privilégiée en option spécifique biologie-chimie, plus qu'en discipline fondamentale ?", answers:["methode experimentale", "la methode experimentale", "experimentale"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"La biologie partage des champs d'étude avec l'économie via quel domaine ?", options:["Les biotechnologies", "La comptabilité", "Le commerce", "Rien de spécifique"], correct:0 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Le lien entre biologie et droit/philosophie se fait via quel domaine ?", options:["La bioéthique", "Le droit civil uniquement", "La philosophie du langage", "Rien de spécifique"], correct:0 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Quelle langue est citée comme la principale langue de communication scientifique aujourd'hui ?", options:["Le français", "L'anglais", "L'allemand", "Le latin"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Au-delà de recevoir le savoir, l'élève doit comprendre comment se construit quoi ?", options:["Le savoir scientifique", "Le règlement scolaire", "Le calendrier des cours", "Rien de particulier"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_BIOLOGIE_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_BIOLOGIE_COLLEGE = QUIZ_BIOLOGIE_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
