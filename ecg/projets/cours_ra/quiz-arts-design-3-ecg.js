const QUIZ_ARTS_DESIGN_ECG_3 = [
  { id:"q2", tier:"court", type:"qcm", prompt:"Dans l'atelier affiche, quelle contrainte de temps de lecture est imposée ?", options:["Moins de 3 secondes", "10 minutes", "Aucune contrainte", "1 minute"], correct:0 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Que doivent justifier les élèves après avoir présenté leur maquette de projet design ?", options:["Rien de particulier", "Leurs choix face à des contraintes contradictoires", "Le prix uniquement", "La couleur choisie"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Lors des portes ouvertes de l'atelier, à qui l'élève doit-il présenter son travail ?", options:["Uniquement à l'enseignant", "À un visiteur inconnu, sans connaissance préalable du projet", "À personne", "Uniquement par écrit"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Dans le rituel de critique croisée, que doit formuler chaque élève sur le travail d'un camarade ?", options:["Un simple \"j'aime\" ou \"j'aime pas\"", "Une force et une piste d'amélioration précises", "Rien du tout", "Uniquement une note chiffrée"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ARTS_DESIGN_ECG_3.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ARTS_DESIGN_ECG_3 = QUIZ_ARTS_DESIGN_ECG_3; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
