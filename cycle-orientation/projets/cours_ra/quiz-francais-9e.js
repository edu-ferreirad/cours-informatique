// QUIZ FINAL — SALLE FRANÇAIS 9e — Musée des mots
const QUIZ_FRANCAIS_9E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"L'émetteur, le destinataire, le moment et le lieu d'une parole forment ce qu'on appelle la situation de quoi ?", options:["Narration", "Énonciation", "Description", "Conjugaison"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Citer les mots exacts de quelqu'un entre guillemets, c'est utiliser le discours...", options:["Indirect", "Direct", "Narratif", "Descriptif"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Quelle classe de mots se place presque toujours devant un nom pour en préciser le sens (un, le, mon, ce...) ?", answers:["determinant", "determinants", "le determinant", "les determinants"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Avec quoi l'adjectif doit-il obligatoirement s'accorder ?", options:["Le verbe de la phrase", "Le nom qu'il qualifie", "Le sujet uniquement", "Rien, il est invariable"], correct:1 },
  { id:"q5", tier:"moyen", type:"texte", prompt:"Comment appelle-t-on l'ensemble des mots qui se rapportent à une même idée dans un texte (ex. la peur, la mer...) ?", answers:["champ lexical", "un champ lexical", "le champ lexical"] },
  { id:"q6", tier:"moyen", type:"qcm", prompt:"D'où vient le mot français \"hasard\" ?", options:["Du latin", "De l'arabe (via l'espagnol)", "De l'anglais", "Du grec"], correct:1 },
  { id:"q7", tier:"long", type:"qcm", prompt:"Deux mots à la prononciation identique mais de sens totalement différent sont appelés...", options:["Synonymes", "Antonymes", "Homonymes", "Paronymes"], correct:2 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Quel type de vocabulaire est réputé l'un des plus pauvres du français courant ?", options:["Le vocabulaire visuel", "Le vocabulaire olfactif (odeurs)", "Le vocabulaire du temps", "Le vocabulaire des couleurs"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"L'accord du participe passé avec l'auxiliaire \"avoir\" dépend de la position de quel élément ?", options:["Le sujet", "L'adverbe", "Le complément d'objet direct", "L'adjectif"], correct:2 },
  { id:"q10", tier:"long", type:"texte", prompt:"Quel auteur a écrit le récit d'une descente vers le centre de la Terre étudié dans l'activité sur le vocabulaire du voyage ?", answers:["jules verne", "verne"] },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_FRANCAIS_9E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_FRANCAIS_9E = QUIZ_FRANCAIS_9E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
