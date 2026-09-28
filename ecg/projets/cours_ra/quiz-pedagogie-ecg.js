const QUIZ_PEDAGOGIE_ECG = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Dans l'exercice \"expliquer à un enfant de 6 ans\", quelle contrainte est imposée ?", options:["Utiliser des mots techniques", "N'utiliser aucun mot technique", "Parler en anglais", "Ne rien expliquer"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Dans l'exercice du jeu mathématique manipulable, sur qui les élèves testent-ils leur jeu ?", options:["De vrais enfants uniquement", "Des camarades jouant le rôle d'élèves", "Personne", "Un ordinateur"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Combien d'images-clés maximum la carte mentale d'histoire doit-elle contenir ?", answers:["cinq", "5"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Dans le débat sur l'autorité en philosophie, une des deux positions est-elle présentée comme la bonne ?", options:["Oui, toujours", "Non, aucune n'est présentée comme évidente", "Seulement la règle stricte", "Seulement la négociation"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Dans la vulgarisation d'expérience scientifique, pour quel public l'expérience doit-elle être adaptée ?", options:["Des adultes", "Des enfants de primaire", "Des scientifiques", "Personne en particulier"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Dans l'exercice de lecture à voix haute, combien de moments précis du texte demandent une variation de ton ?", answers:["trois", "3"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Que prépare l'élève en amont du séjour linguistique de six semaines ?", options:["Rien de spécial", "Un carnet d'objectifs pédagogiques précis", "Uniquement ses valises", "Un budget"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Dans le journal d'observation de stage, quelle distinction méthodologique l'élève doit-il respecter ?", options:["Aucune distinction", "Observation factuelle vs interprétation personnelle", "Français vs allemand", "Matin vs après-midi"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Dans la simulation de réunion de parents, quelles attentes sont mises en scène ?", options:["Des attentes identiques", "Des attentes contradictoires", "Aucune attente", "Une seule attente"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Dans le projet de séquence complète, quels deux rôles successifs joue le public de la classe ?", options:["Rien de précis", "D'abord élèves, puis jury critique", "Uniquement spectateurs muets", "Uniquement examinateurs"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(p){ const m = QUIZ_TIER_ORDER[p] || 1; return QUIZ_PEDAGOGIE_ECG.filter(q => QUIZ_TIER_ORDER[q.tier] <= m); }
window.QUIZ_PEDAGOGIE_ECG = QUIZ_PEDAGOGIE_ECG; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
