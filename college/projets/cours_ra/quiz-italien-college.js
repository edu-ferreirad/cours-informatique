const QUIZ_ITALIEN_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Sur quelle région suisse l'enseignement de l'italien met-il particulièrement l'accent ?", options:["Le Valais", "La Suisse italienne (Tessin)", "Genève", "La Suisse alémanique"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Au-delà de communiquer et comprendre, quelle compétence critique est explicitement visée ?", options:["Mémoriser par cœur", "Exprimer un jugement personnel argumenté", "Ne jamais donner son avis", "Traduire uniquement"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Quelles disciplines artistiques la sensibilité développée en italien concerne-t-elle (citez-en une) ?", answers:["litterature", "theatre", "musique", "arts", "medias"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"En 1ère année, sur quoi porte d'abord l'apprentissage de la langue orale ?", options:["La grammaire complexe", "Les sons de la langue elle-même", "La littérature classique", "L'histoire de l'art"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Quels types de textes variés sont utilisés en plus des œuvres classiques ?", options:["Uniquement des manuels", "Articles de presse, chansons, bandes dessinées", "Rien d'autre", "Uniquement la poésie"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Dès quelle année d'option spécifique l'accent est-il mis sur les œuvres littéraires classiques et modernes ?", answers:["2e", "deuxieme", "2eme", "la 2e"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Dans quels domaines la présence culturelle italienne en Europe est-elle citée ?", options:["Uniquement la cuisine", "Musique, architecture, arts visuels", "Uniquement le sport", "Aucun domaine"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"En option spécifique, quelle nuance sociolinguistique l'élève doit-il maîtriser ?", options:["Distinguer différents niveaux de langue", "Parler uniquement en dialecte", "Ignorer la grammaire", "Rien de particulier"], correct:0 },
  { id:"q9", tier:"long", type:"qcm", prompt:"L'apprentissage de l'italien tient compte de quels trois aspects simultanés ?", options:["Communicatif, cognitif, socio-culturel", "Uniquement grammatical", "Uniquement phonétique", "Historique seulement"], correct:0 },
  { id:"q10", tier:"long", type:"qcm", prompt:"L'italien étudié au collège couvre quelle aire géographique principale ?", options:["Uniquement l'Italie", "L'Italie et la Suisse italienne", "Uniquement le Tessin", "L'Amérique du Sud"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(p){ const m = QUIZ_TIER_ORDER[p] || 1; return QUIZ_ITALIEN_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= m); }
window.QUIZ_ITALIEN_COLLEGE = QUIZ_ITALIEN_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
