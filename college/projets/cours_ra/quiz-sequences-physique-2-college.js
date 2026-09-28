const QUIZ_PHYSIQUE_2_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves refont cinq fois la même mesure simple (longueur » ?", options:["Lire un graphique sans le texte", "La mesure qui ne tombe jamais deux fois pareil", "OS uniquement — Un lien physique-biologie", "OS uniquement — Un paradoxe du XXe siècle"], correct:1 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Face à un graphique de résultats expérimentaux sans légende ni texte d'accompagnement » ?", options:["Estimer avant de mesurer", "OS uniquement — Calculer l'impact d'une incertitude", "OS uniquement — Un lien physique-biologie", "Lire un graphique sans le texte"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_PHYSIQUE_2_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_PHYSIQUE_2_COLLEGE = QUIZ_PHYSIQUE_2_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
