const QUIZ_ECONOMIE_DROIT_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"À quoi sert l'introduction à l'économie et au droit en 1ère année ?", options:["À choisir en connaissance de cause ses options futures", "À rien de particulier", "À remplacer les mathématiques", "À apprendre une langue"], correct:0 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Pourquoi les hommes sont-ils dans l'obligation de produire, selon le plan d'études ?", options:["Pour le plaisir uniquement", "Pour consommer, satisfaire leurs besoins", "Sans raison précise", "Pour voyager"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Que suppose toute vie en société, selon le texte sur le droit ?", answers:["des regles communes", "regles communes", "des regles"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"L'élève apprend à évaluer et critiquer quelles politiques ?", options:["Conjoncturelles et structurelles de l'État", "Uniquement locales", "Aucune politique", "Uniquement scolaires"], correct:0 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Quelle différence l'élève apprend-il à saisir en droit ?", options:["Règle de droit vs règle morale ou religieuse", "Aucune différence", "Riche vs pauvre", "Vrai vs faux uniquement"], correct:0 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"En plus de la loi écrite, à quoi l'élève doit-il recourir pour résoudre des cas pratiques (jurisprudence et...) ?", answers:["doctrine", "la doctrine"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Le plan d'études compare le système juridique suisse à quels autres systèmes ?", options:["Français et anglo-saxons", "Uniquement chinois", "Aucun autre système", "Uniquement africains"], correct:0 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Les outils quantitatifs (comptabilité, statistiques) sont-ils étudiés pour eux-mêmes ?", options:["Oui, en profondeur", "Non, seulement selon les besoins du programme", "Jamais utilisés", "Uniquement en 4e année"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"L'élève apprend à apprécier ses droits, mais aussi quoi ?", options:["Ses devoirs et responsabilités", "Rien d'autre", "Uniquement ses loisirs", "Ses vacances"], correct:0 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Le droit entretient un rapport étroit avec quelle discipline via la bioéthique ?", options:["La biologie", "Le sport", "La musique", "Les arts visuels"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(p){ const m = QUIZ_TIER_ORDER[p] || 1; return QUIZ_ECONOMIE_DROIT_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= m); }
window.QUIZ_ECONOMIE_DROIT_COLLEGE = QUIZ_ECONOMIE_DROIT_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
