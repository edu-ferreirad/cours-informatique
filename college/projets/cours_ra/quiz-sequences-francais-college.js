const QUIZ_SEQ_FRANCAIS_COLLEGE = [
  { id:"q1", degree:"1", type:"qcm", prompt:"Dans la séquence de diction, que doit deviner la classe sans connaître la consigne ?", options:["Le sujet du texte","Une émotion cachée","L'auteur du texte","La note obtenue"], correct:1 },
  { id:"q2", degree:"1", type:"texte", prompt:"Dans le carnet de lecture, sur quoi porte l'évaluation de la page « réaction à chaud » ?", answers:["la sincerite","sincerite"] },
  { id:"q3", degree:"1", type:"qcm", prompt:"Dans la dictée négociée, comment un groupe doit-il justifier chaque correction ?", options:["Par un vote","Par une règle grammaticale","Par l'avis de l'enseignant seul","Au hasard"], correct:1 },
  { id:"q4", degree:"2", type:"qcm", prompt:"Dans le débat à contre-emploi, quelle position chaque élève doit-il défendre ?", options:["Sa propre conviction","La position opposée à sa conviction","Aucune position précise","Celle de l'enseignant"], correct:1 },
  { id:"q5", degree:"2", type:"qcm", prompt:"Dans le résumé à contrainte de mots, combien de mots exactement le résumé doit-il faire ?", options:["50 mots","80 mots","150 mots","200 mots"], correct:1 },
  { id:"q6", degree:"2", type:"texte", prompt:"Quel seul critère la classe note-t-elle lors du flash-info hebdomadaire ?", answers:["la clarte","clarte","la clarte de la construction"] },
  { id:"q7", degree:"3", type:"qcm", prompt:"Dans la frise vivante des mouvements, que les élèves doivent-ils éviter de faire pendant leur scène ?", options:["Jouer un personnage","Nommer le mouvement","Utiliser des gestes","Parler"], correct:1 },
  { id:"q8", degree:"3", type:"qcm", prompt:"Dans l'atelier du plan contradictoire, que reçoivent les élèves au départ ?", options:["Un plan parfait à imiter","Deux plans volontairement imparfaits","Aucun plan","Une liste de citations"], correct:1 },
  { id:"q9", degree:"3", type:"texte", prompt:"Dans l'atelier des citations isolées, à partir de quoi chaque élève construit-il son axe d'analyse ?", answers:["une citation","une seule citation","citation isolee"] },
  { id:"q10", degree:"4", type:"qcm", prompt:"Dans la synthèse du fil rouge, combien d'œuvres l'élève doit-il relier au minimum ?", options:["Une","Deux","Trois","Cinq"], correct:2 },
  { id:"q11", degree:"4", type:"qcm", prompt:"Dans l'oral blanc de maturité, combien de temps de préparation est accordé avant l'oral ?", options:["5 minutes","20 minutes","1 heure","Aucun temps de préparation"], correct:1 },
  { id:"q12", degree:"4", type:"texte", prompt:"Dans la dissertation chronométrée, que doit repérer chaque relecteur chez son camarade ?", answers:["un point fort et une faiblesse","point fort et faiblesse","une force et une faiblesse"] },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
function getSeqQuizForDegree(degree){ return QUIZ_SEQ_FRANCAIS_COLLEGE.filter(q => q.degree === degree); }
window.QUIZ_SEQ_FRANCAIS_COLLEGE = QUIZ_SEQ_FRANCAIS_COLLEGE; window.getSeqQuizForDegree = getSeqQuizForDegree; window.normalizeAnswer = normalizeAnswer;
