const QUIZ_PHILOSOPHIE_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"La philosophie apprend à penser de manière autonome, et non par quoi ?", options:["Imprégnation du milieu ou voie d'autorité", "Lecture uniquement", "Discussion", "Aucune raison"], correct:0 },
  { id:"q2", tier:"court", type:"qcm", prompt:"La philosophie approfondit la conscience de soi face à quoi ?", options:["Uniquement soi-même", "Autrui, la nature, la culture, la société", "Uniquement les mathématiques", "Rien en particulier"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"La philosophie tend à développer la conscience de quel type de personne ?", answers:["citoyen", "du citoyen", "le citoyen"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Sous l'autorité de quoi la philosophie se place-t-elle exclusivement ?", options:["La tradition", "La seule raison critique", "La religion", "L'autorité politique"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"La réflexion philosophique sur la science s'appelle comment ?", options:["Réflexion épistémologique", "Réflexion sportive", "Réflexion artistique", "Aucun nom particulier"], correct:0 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Sur quoi la discussion critique en philosophie ne souffre-t-elle aucune restriction (4 domaines, citez-en un) ?", answers:["religieuse", "culturelle", "ethnique", "politique"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"La philosophie contribue à la promotion de la paix dans quel cadre ?", options:["La justice et la liberté", "La guerre", "Aucun cadre", "L'isolement"], correct:0 },
  { id:"q8", tier:"long", type:"qcm", prompt:"L'activité des artistes alimente en philosophie quelle réflexion ?", options:["Esthétique et critique", "Aucune réflexion", "Uniquement technique", "Uniquement historique"], correct:0 },
  { id:"q9", tier:"long", type:"qcm", prompt:"La philosophie prépare à quel type d'activité dans la vie future de l'élève ?", options:["Une activité critique et responsable", "Aucune préparation", "Uniquement académique", "Uniquement professionnelle"], correct:0 },
  { id:"q10", tier:"long", type:"qcm", prompt:"De nombreux sujets philosophiques peuvent être traités en relation avec quelles autres disciplines ?", options:["Aucune autre discipline", "Société, politique, économie, droit, esthétique", "Uniquement le sport", "Uniquement la musique"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(p){ const m = QUIZ_TIER_ORDER[p] || 1; return QUIZ_PHILOSOPHIE_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= m); }
window.QUIZ_PHILOSOPHIE_COLLEGE = QUIZ_PHILOSOPHIE_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
