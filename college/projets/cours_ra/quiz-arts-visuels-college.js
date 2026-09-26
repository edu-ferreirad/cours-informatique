const QUIZ_ARTS_VISUELS_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quels sont les deux volets complémentaires des arts visuels ?", options:["Arts plastiques et histoire de l'art", "Musique et théâtre", "Sport et danse", "Aucun volet distinct"], correct:0 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Par quelles trois démarches s'effectue la réflexion critique en arts plastiques ?", options:["Réflexion critique, observation, expérimentation", "Uniquement la copie", "Uniquement le dessin", "Aucune démarche"], correct:0 },
  { id:"q3", tier:"court", type:"texte", prompt:"Quel type de sens l'enseignement développe-t-il face aux images de l'environnement social ?", answers:["sens critique", "le sens critique", "esprit critique"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Sur quelle période l'histoire de l'art met-elle l'accent en priorité ?", options:["Le XXe siècle et ses origines", "Uniquement l'Antiquité", "Uniquement la Renaissance", "Aucune période précise"], correct:0 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"En option spécifique, la confrontation avec les modèles du passé se fait par quels moyens ?", options:["Copie, analyse, variation", "Uniquement la mémorisation", "Aucun moyen", "Uniquement la théorie"], correct:0 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Où le travail \"sur le terrain\" est-il encouragé, en plus des visites (citez un lieu) ?", answers:["musees", "galeries", "places", "edifices publics"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Selon le plan d'études, l'image peut exercer quoi sur le spectateur ?", options:["Une forme de pouvoir", "Aucun effet", "Uniquement du plaisir", "Rien de mesurable"], correct:0 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Quelles technologies sont citées comme liées aux arts visuels et à l'informatique ?", options:["Images fractales, images de synthèse, réalité virtuelle", "Aucune technologie", "Uniquement la photographie argentique", "Uniquement la peinture"], correct:0 },
  { id:"q9", tier:"long", type:"qcm", prompt:"L'approfondissement en option spécifique concourt à éveiller quel potentiel de l'élève ?", options:["Sa créativité personnelle", "Sa mémoire uniquement", "Sa vitesse d'exécution", "Rien de particulier"], correct:0 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Les arts visuels tissent des liens avec de nombreuses disciplines, dont laquelle est explicitement citée ?", options:["L'histoire des religions", "Aucune discipline", "Uniquement la musique", "Uniquement le sport"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(p){ const m = QUIZ_TIER_ORDER[p] || 1; return QUIZ_ARTS_VISUELS_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= m); }
window.QUIZ_ARTS_VISUELS_COLLEGE = QUIZ_ARTS_VISUELS_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
