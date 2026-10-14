const QUIZ_ESPAGNOL_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"En quel type de discipline l'espagnol est-il enseigné au collège ?", options:["Discipline fondamentale uniquement", "Option spécifique uniquement", "Option complémentaire uniquement", "Les trois à la fois"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Le \"monde hispanique\" étudié couvre quelle aire géographique ?", options:["Uniquement l'Espagne", "L'Espagne et l'Amérique latine hispanophone", "Uniquement le Mexique", "Uniquement l'Europe"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"L'élève est amené à établir des liens entre l'espagnol et quoi ?", answers:["dautres disciplines", "d'autres disciplines", "autres disciplines"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Sur quelles époques portent les œuvres littéraires étudiées en espagnol ?", options:["Uniquement contemporaines", "D'époques différentes", "Uniquement médiévales", "Aucune œuvre étudiée"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Quelles formes d'écriture l'élève apprend-il à rédiger progressivement ?", options:["Uniquement des lettres", "Compositions, narrations, résumés, textes argumentatifs", "Uniquement de la poésie", "Rien de particulier"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Sur quels mots porte d'abord l'étude du vocabulaire en espagnol ?", answers:["vie quotidienne", "la vie quotidienne", "mots de la vie quotidienne"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"À quoi le plan d'études accorde-t-il une attention particulière, en plus du vocabulaire ?", options:["La danse", "La prononciation et l'orthographe", "Le sport", "La cuisine"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"L'espagnol est aujourd'hui l'une des langues les plus parlées au monde, principalement grâce à sa diffusion où ?", options:["En Afrique", "En Amérique latine", "En Asie", "En Océanie"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Discuter et échanger des idées en espagnol suppose de dépasser quoi ?", options:["La simple récitation de phrases apprises", "La grammaire", "Rien de particulier", "L'écriture"], correct:0 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Les recherches personnelles en espagnol préparent progressivement à quel exercice de fin de cursus ?", options:["Le brevet", "Le travail de maturité", "Un simple examen oral", "Rien de spécifique"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(p){ const m = QUIZ_TIER_ORDER[p] || 1; return QUIZ_ESPAGNOL_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= m); }
window.QUIZ_ESPAGNOL_COLLEGE = QUIZ_ESPAGNOL_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
