const QUIZ_ALLEMAND_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"En discipline fondamentale, avec quelle autre langue l'allemand est-il offert au choix ?", options:["L'italien", "Le grec", "L'espagnol", "Le latin"], correct:0 },
  { id:"q2", tier:"court", type:"qcm", prompt:"La connaissance de la grammaire et du vocabulaire est-elle un but en soi ?", options:["Oui, absolument", "Non, elle est au service des quatre aptitudes", "Seulement en option spécifique", "Aucune importance"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Quelle compétence l'élève développe-t-il en réfléchissant sur ses propres stratégies de travail ?", answers:["autonomie", "lautonomie", "auto-evaluation"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"L'analyse des œuvres littéraires en allemand dépasse quel aspect ?", options:["L'aspect pratique de la langue", "L'aspect historique", "L'aspect musical", "Aucun aspect particulier"], correct:0 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"L'option spécifique allemand est-elle réservée aux élèves germanophones d'origine ?", options:["Oui", "Non, accessible à tous quelle que soit la langue maternelle", "Seulement en 4e année", "Impossible à dire"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Citez un moyen pédagogique utilisé pour la compréhension orale en DF (documents sonores, films...).", answers:["documents sonores", "films", "videos", "contacts avec des germanophones"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"L'option spécifique confronte l'élève à une culture et une mentalité...", options:["Identiques à la sienne", "Différentes et complémentaires", "Sans intérêt", "Uniquement historiques"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Au-delà de la Suisse, l'allemand prépare l'élève à son insertion dans quel contexte plus large ?", options:["Le contexte américain", "Le contexte européen", "Le contexte asiatique", "Aucun contexte"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Comment évoluent les structures linguistiques apprises entre la 2e et la 4e année ?", options:["Elles restent identiques", "De plus en plus complexes et nuancées", "Elles disparaissent", "Elles se simplifient"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"En option spécifique, que permet la maîtrise de structures plus complexes ?", options:["Rien de particulier", "Une approche plus fine des textes et une expression plus nuancée", "D'éviter la lecture", "De ne plus parler allemand"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(p){ const m = QUIZ_TIER_ORDER[p] || 1; return QUIZ_ALLEMAND_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= m); }
window.QUIZ_ALLEMAND_COLLEGE = QUIZ_ALLEMAND_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
