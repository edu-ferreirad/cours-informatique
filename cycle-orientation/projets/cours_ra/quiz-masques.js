const QUIZ_MASQUES = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Pourquoi les acteurs du théâtre grec antique portaient-ils un masque ?", options:["Pour se cacher du public", "Pour identifier immédiatement leur personnage, même de loin", "Par superstition uniquement", "Pour ne pas être reconnus dans la rue"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quel genre théâtral grec fait rire de situations et personnages du quotidien ?", options:["La tragédie", "La comédie", "Le kabuki", "L'épopée"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Comment appelle-t-on le groupe de comédiens qui chantait et commentait ensemble l'action dans le théâtre grec antique ?", answers:["le choeur", "choeur", "un choeur"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"De quel pays et de quelle époque est née la Commedia dell'arte ?", options:["France, XXe siècle", "Italie, Renaissance", "Japon, Moyen Âge", "Grèce antique"], correct:1 },
  { id:"q5", tier:"moyen", type:"texte", prompt:"Quel personnage de la Commedia dell'arte porte un costume à losanges colorés et un demi-masque noir ?", answers:["arlequin"] },
  { id:"q6", tier:"moyen", type:"qcm", prompt:"Quel pédagogue français a popularisé le masque neutre au XXe siècle ?", options:["Molière", "Jacques Lecoq", "Bertolt Brecht", "Karl Valentin"], correct:1 },
  { id:"q7", tier:"long", type:"qcm", prompt:"Depuis quand le rôle de metteur en scène est-il devenu une fonction artistique clairement identifiée ?", options:["Depuis la Grèce antique", "Depuis le XIXe siècle", "Depuis les années 2000", "Il n'a jamais existé"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Dans le théâtre kabuki japonais, qu'est-ce qui remplace souvent le masque pour indiquer le caractère d'un personnage ?", options:["Un costume rouge", "Un maquillage spectaculaire (kumadori)", "Une musique spécifique", "Rien, il n'y a aucun signe"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Quel auteur allemand a développé un théâtre volontairement distancié, refusant de faire oublier au spectateur qu'il regarde du théâtre ?", options:["Molière", "Karl Valentin", "Bertolt Brecht", "Jacques Lecoq"], correct:2 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Dans certaines cultures d'Afrique de l'Ouest, un masque rituel peut être considéré comme incarnant réellement quoi pendant une cérémonie ?", options:["Un simple accessoire", "Un esprit ou un ancêtre", "Une décoration", "Un jouet"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_MASQUES.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_MASQUES = QUIZ_MASQUES; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
