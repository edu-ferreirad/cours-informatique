const QUIZ_LATIN_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Le latin vise la maîtrise de la langue ET la connaissance de quoi ?", options:["Uniquement la grammaire", "La civilisation romaine sous ses multiples aspects", "Uniquement la poésie", "Rien d'autre"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Parmi les attitudes attendues figure le plaisir de découvrir quoi ?", options:["Les mathématiques modernes", "Les œuvres et documents légués par l'Antiquité", "Le sport antique uniquement", "Rien de précis"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"En DF, quelle liberté est laissée aux maîtres et aux élèves dans le choix des sujets ?", answers:["une part de liberte", "liberte", "de la liberte"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Pour quelles langues le latin fournit-il des notions étymologiques utiles ?", options:["Les langues romanes", "Les langues asiatiques", "Aucune langue", "Uniquement l'anglais"], correct:0 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Quels genres littéraires latins sont étudiés ?", options:["Aucun genre distinct", "Poésie épique, théâtre, histoire, discours", "Uniquement la poésie", "Uniquement le théâtre"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Quel exercice de traduction permet de mieux maîtriser sa propre langue française ?", answers:["la version", "version", "lexercice de version"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"L'héritage romain a-t-il marqué la Suisse selon le plan d'études ?", options:["Non, pas du tout", "Oui, de façon décisive", "Seulement l'Italie", "Impossible à dire"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"En 3e et 4e années OS, quel objectif spécifique concerne l'étude d'un texte d'auteur ?", options:["L'étudier en groupe uniquement", "L'étudier seul et le présenter", "Ne jamais l'étudier", "Le traduire en anglais"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"L'influence de la culture latine se retrouve-t-elle encore aujourd'hui dans la création artistique ?", options:["Non, elle a disparu", "Oui, elle reste toujours présente", "Uniquement en Italie", "Impossible à dire"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Que développe l'élève en apprenant à consulter seul les ouvrages de référence en latin ?", options:["Rien de particulier", "Son autonomie face à un texte inconnu", "Sa mémoire uniquement", "Sa vitesse de lecture"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(p){ const m = QUIZ_TIER_ORDER[p] || 1; return QUIZ_LATIN_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= m); }
window.QUIZ_LATIN_COLLEGE = QUIZ_LATIN_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
