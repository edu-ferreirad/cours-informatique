const QUIZ_GREC_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"En quel type d'enseignement le grec est-il proposé au collège ?", options:["Discipline fondamentale", "Option spécifique uniquement", "Option complémentaire", "Cours facultatif de base"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Sur quelle période l'étude du grec permet-elle de suivre l'évolution de la civilisation grecque ?", options:["Uniquement l'époque moderne", "Des Mycéniens aux débuts de la chrétienté", "Uniquement le XXe siècle", "Aucune période précise"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"L'étude de quoi ouvre l'élève au vaste domaine de l'imaginaire collectif grec ?", answers:["la mythologie", "mythologie"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"L'apprentissage du système grec développe quelles facultés ?", options:["Uniquement manuelles", "Analytiques et déductives", "Uniquement sportives", "Aucune faculté particulière"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Comment appelle-t-on l'exercice de traduction du français vers le grec ?", options:["La version", "Le thème", "La dissertation", "Le commentaire"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Quel sens le grec renforce-t-il, selon le plan d'études, face à des visions du monde différentes ?", answers:["relativite", "la relativite", "sens de la relativite"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Durant les deux dernières années de grec, que fait l'élève en plus de l'étude systématique de la langue ?", options:["Il arrête l'étude", "Il aborde les grands textes de la littérature", "Il étudie uniquement la grammaire", "Il change de langue"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"L'étude du grec initie l'élève à quelle démarche intellectuelle fondamentale ?", options:["La démarche philosophique", "La démarche sportive", "La démarche commerciale", "Aucune démarche"], correct:0 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Le grec ancien connaît-il plusieurs dialectes littéraires selon les époques et genres ?", options:["Non, un seul dialecte", "Oui, plusieurs dialectes", "Impossible à savoir", "Uniquement en poésie"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Quels genres littéraires ont émergé pour la première fois avec la littérature grecque antique ?", options:["Aucun genre particulier", "Poésie épique, théâtre, histoire, roman", "Uniquement le roman", "Uniquement la poésie"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(p){ const m = QUIZ_TIER_ORDER[p] || 1; return QUIZ_GREC_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= m); }
window.QUIZ_GREC_COLLEGE = QUIZ_GREC_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
