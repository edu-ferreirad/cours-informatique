const QUIZ_HISTOIRE_9E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"À Athènes, qui pouvait voter les lois de la cité ?", options:["Tous les habitants sans exception", "Seulement les citoyens (une minorité)", "Seulement les esclaves", "Seulement les étrangers"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Que devait suspendre la trêve sacrée pendant les Jeux olympiques antiques ?", options:["Le commerce", "Les guerres entre cités", "Les mariages", "Les récoltes"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Qui a fondé la ville d'Alexandrie en Égypte ?", answers:["alexandre le grand", "alexandre"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Que signifiait réellement le mot \"barbare\" pour les Romains ?", options:["Violent et cruel", "Étranger, qui ne parle pas grec ni latin", "Riche et puissant", "Nomade"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Quelle était la capitale d'Al-Andalus à son apogée, réputée pour ses savants ?", options:["Madrid", "Cordoue", "Grenade", "Séville"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Dans la féodalité, comment appelle-t-on la terre donnée par un seigneur à son vassal ?", answers:["fief", "un fief"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Quel style architectural religieux a précédé le style gothique au Moyen Âge ?", options:["Le style baroque", "Le style roman", "Le style classique", "Le style Art nouveau"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Le pacte fédéral de 1291 s'inscrit dans quel contexte plus large ?", options:["Un événement totalement isolé", "Une série d'alliances régionales similaires entre communautés alpines", "Une décision d'un seul roi", "Une invention du XXe siècle"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Que devait produire un apprenti pour devenir maître dans sa guilde médiévale ?", options:["Une lettre de recommandation", "Un chef-d'œuvre", "Un paiement uniquement", "Rien de particulier"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Pourquoi est-il difficile pour les historiens de retracer la vie des femmes dans l'Antiquité et au Moyen Âge ?", options:["Elles n'existaient pas", "La plupart des sources écrites ont été produites par des hommes", "Il n'y a aucune source du tout", "Ce n'est pas difficile"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_HISTOIRE_9E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_HISTOIRE_9E = QUIZ_HISTOIRE_9E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
