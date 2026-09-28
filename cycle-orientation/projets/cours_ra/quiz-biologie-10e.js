const QUIZ_BIOLOGIE_10E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Les antibiotiques sont efficaces contre quel type d'agent infectieux ?", options:["Les virus", "Les bactéries", "Tous les agents infectieux", "Aucun"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle division cellulaire produit les cellules reproductrices (gamètes) avec la moitié du matériel génétique ?", options:["La mitose", "La méiose", "La fécondation", "La mutation"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Qui féconde l'ovule lors de la reproduction humaine ?", answers:["spermatozoide", "un spermatozoide", "le spermatozoide"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Comment s'appelle la quantité d'énergie consommée par le corps même complètement au repos ?", options:["Le métabolisme de base", "La digestion", "Le rendement", "La respiration"], correct:0 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Pourquoi ne contracte-t-on généralement la varicelle qu'une seule fois ?", options:["Le corps l'oublie totalement", "Le système immunitaire en garde la mémoire", "Ce n'est pas vrai, on peut l'avoir chaque année", "Un hasard uniquement"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Comment appelle-t-on les messagers chimiques libérés dans le sang qui pilotent notamment la puberté ?", answers:["hormones", "les hormones", "hormone"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Quel médecin anglais a découvert le principe de la vaccination à la fin du XVIIIe siècle ?", options:["Louis Pasteur", "Edward Jenner", "Charles Darwin", "Alexander Fleming"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"À l'échelle mondiale, quelle catégorie de maladies représente la première cause de décès ?", options:["Les maladies infectieuses", "Les maladies non transmissibles", "Les accidents", "Aucune, la mortalité a disparu"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Une espèce envahissante pose surtout problème quand elle est introduite hors de son milieu d'origine, en l'absence de quoi ?", options:["De nourriture", "De ses prédateurs naturels", "D'eau", "De lumière"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Le circuit de la récompense du cerveau s'active-t-il uniquement face à des substances addictives ?", options:["Oui, uniquement", "Non, aussi face à des expériences saines comme le sport ou une réussite", "Il ne s'active jamais", "Seulement chez les adultes"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_BIOLOGIE_10E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_BIOLOGIE_10E = QUIZ_BIOLOGIE_10E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
