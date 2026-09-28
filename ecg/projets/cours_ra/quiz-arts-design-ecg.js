const QUIZ_ARTS_DESIGN_ECG = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Dans l'exercice du redessin d'objet banal, combien de versions différentes doit produire chaque élève ?", options:["Une seule", "Trois", "Cinq", "Dix"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Dans l'atelier affiche, quelle contrainte de temps de lecture est imposée ?", options:["Moins de 3 secondes", "10 minutes", "Aucune contrainte", "1 minute"], correct:0 },
  { id:"q3", tier:"court", type:"texte", prompt:"Comment s'appelle le carnet tenu lors de la sortie art contemporain, notant une chose comprise et une chose incertaine ?", answers:["carnet de doute", "le carnet de doute"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Dans l'exercice des trente vignettes, quel est l'objectif principal ?", options:["La qualité de chaque case", "La quantité, pour désinhiber le trait", "La couleur uniquement", "La rapidité de lecture"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Que doivent justifier les élèves après avoir présenté leur maquette de projet design ?", options:["Rien de particulier", "Leurs choix face à des contraintes contradictoires", "Le prix uniquement", "La couleur choisie"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Comment s'appelle l'exercice de simulation avant la vraie soutenance du TPC, où deux camarades jouent le jury ?", answers:["jury blanc", "le jury blanc"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Dans la séquence \"pasticher puis rompre\", que fait l'élève en premier ?", options:["Inventer une œuvre totalement originale", "Copier fidèlement le style d'un artiste étudié", "Rien, il commence par la rupture", "Analyser une seule œuvre"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Lors des portes ouvertes de l'atelier, à qui l'élève doit-il présenter son travail ?", options:["Uniquement à l'enseignant", "À un visiteur inconnu, sans connaissance préalable du projet", "À personne", "Uniquement par écrit"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Avant le stage, quelle préparation est demandée à l'élève ?", options:["Rien de spécial", "Préparer cinq questions précises pour le professionnel rencontré", "Apprendre un discours par cœur", "Uniquement observer en silence"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Dans le rituel de critique croisée, que doit formuler chaque élève sur le travail d'un camarade ?", options:["Un simple \"j'aime\" ou \"j'aime pas\"", "Une force et une piste d'amélioration précises", "Rien du tout", "Uniquement une note chiffrée"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(p){ const m = QUIZ_TIER_ORDER[p] || 1; return QUIZ_ARTS_DESIGN_ECG.filter(q => QUIZ_TIER_ORDER[q.tier] <= m); }
window.QUIZ_ARTS_DESIGN_ECG = QUIZ_ARTS_DESIGN_ECG; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
