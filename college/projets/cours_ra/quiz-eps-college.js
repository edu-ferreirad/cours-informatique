const QUIZ_EPS_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"L'EPS contribue à l'épanouissement harmonieux de quoi ?", options:["Corps, sensibilité, volonté, intelligence", "Uniquement le corps", "Uniquement l'intelligence", "Rien de précis"], correct:0 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Le corps est considéré comme organisme ET comme quoi ?", options:["Moyen d'expression", "Objet décoratif", "Rien d'autre", "Outil scolaire"], correct:0 },
  { id:"q3", tier:"court", type:"texte", prompt:"L'élève devient capable de choisir entre les formes de mouvement, de jeu et de sport en toute...", answers:["independance", "en toute independance"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelles attitudes sportives sont attendues en compétition ?", options:["Esprit d'équipe, fair-play, discipline, entraide", "Uniquement gagner à tout prix", "Aucune attitude particulière", "L'indifférence"], correct:0 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Le développement des aptitudes motrices est lié à quels systèmes organiques ?", options:["Locomoteur, nerveux, métabolique", "Uniquement digestif", "Aucun système", "Uniquement respiratoire"], correct:0 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Quels éléments naturels sont cités pour la pratique sportive (eau, neige et...) ?", answers:["glace", "la glace"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Le sport est-il uniquement enseigné en discipline obligatoire ?", options:["Oui, uniquement", "Non, aussi en option complémentaire", "Jamais en option", "Uniquement en DF"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Quelles relations entre sport et société sont étudiées avec un œil critique ?", options:["Économie, médias, sponsoring, dopage", "Aucune relation", "Uniquement la météo", "Uniquement la nutrition"], correct:0 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Quelle attitude est attendue face aux différentes approches culturelles du sport ?", options:["Acceptation des différences culturelles", "Le rejet", "L'indifférence totale", "Aucune attitude"], correct:0 },
  { id:"q10", tier:"long", type:"qcm", prompt:"L'EPS se veut aussi un facteur de quoi à l'école ?", options:["Équilibre et délassement", "Stress supplémentaire", "Rien de particulier", "Compétition uniquement"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(p){ const m = QUIZ_TIER_ORDER[p] || 1; return QUIZ_EPS_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= m); }
window.QUIZ_EPS_COLLEGE = QUIZ_EPS_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
