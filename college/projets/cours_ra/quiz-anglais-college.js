const QUIZ_ANGLAIS_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Selon le plan d'études, l'anglais est la langue dominante notamment pour quels usages ?", options:["Uniquement le tourisme", "Recherche, publication, stockage de l'information", "Uniquement la cuisine", "Aucun usage particulier"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelles sont les quatre aptitudes développées en anglais ?", options:["Chant, danse, dessin, sport", "Compréhension/expression orale et écrite", "Uniquement la grammaire", "Uniquement le vocabulaire"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Que doit savoir faire l'élève avec l'information trouvée (verbe) : la rechercher, la trier, la...", answers:["traiter", "la traiter"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Que fait-on d'abord en 1ère année d'anglais, avant d'avancer ?", options:["Rien de spécial", "Une mise au point et systématisation des acquis", "Un examen final", "Un voyage linguistique"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Quel outil pratique l'élève doit-il savoir utiliser efficacement en DF ?", options:["Une calculatrice", "Un dictionnaire bilingue", "Un microscope", "Une carte"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Comment s'appelle le cours facultatif de rattrapage en anglais pour les élèves ne l'ayant pas choisi en DF/OS ?", answers:["anb", "anglais de base", "an b"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Avec quelles langues l'anglais peut-il être choisi en alternative en discipline fondamentale ?", options:["L'allemand, l'italien ou le latin", "Uniquement l'espagnol", "Uniquement le grec", "Aucune"], correct:0 },
  { id:"q8", tier:"long", type:"qcm", prompt:"En option spécifique, que développe l'élève en plus de la DF ?", options:["Rien de plus", "Compréhension détaillée et expression plus riche", "Moins d'exigence", "Uniquement l'oral"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"L'apprentissage de l'anglais donne les moyens de communiquer dans quels domaines ?", options:["Uniquement scolaire", "Scientifique, culturel, commercial, politique", "Aucun domaine précis", "Uniquement sportif"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Le vocabulaire et les structures grammaticales sont-ils un but en soi selon le plan d'études ?", options:["Oui, absolument", "Non, ils sont la base nécessaire à la communication", "Sans importance", "Uniquement en OS"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(p){ const m = QUIZ_TIER_ORDER[p] || 1; return QUIZ_ANGLAIS_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= m); }
window.QUIZ_ANGLAIS_COLLEGE = QUIZ_ANGLAIS_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
