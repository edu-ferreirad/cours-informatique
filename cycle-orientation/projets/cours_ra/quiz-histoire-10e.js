const QUIZ_HISTOIRE_10E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Qu'a permis l'invention de l'imprimerie à caractères mobiles au XVe siècle ?", options:["Copier les livres plus lentement", "Reproduire un texte à de nombreux exemplaires bien plus vite", "Interdire les livres", "Rien de nouveau"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Le mouvement humaniste de la Renaissance plaçait quoi au centre de son attention ?", options:["Les animaux", "L'être humain et sa raison", "Uniquement la religion", "Uniquement la guerre"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Quel réformateur a fait de Genève un centre majeur du protestantisme au XVIe siècle ?", answers:["calvin", "jean calvin"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quel château symbolise la construction de l'État centralisé au XVIIe siècle en France ?", options:["Le Louvre", "Versailles", "Chambord", "Fontainebleau"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"En quelle année la Suisse a-t-elle accordé le droit de vote aux femmes au niveau fédéral ?", options:["1848", "1918", "1945", "1971"], correct:3 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Quelle guerre civile suisse a précédé la Constitution fédérale de 1848 ?", answers:["sonderbund", "guerre du sonderbund", "le sonderbund"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Comment appelle-t-on le système d'échange entre l'Europe, l'Afrique et les Amériques lié à la traite atlantique ?", options:["Le commerce bilatéral", "Le commerce triangulaire", "Le commerce libre", "Le commerce colonial simple"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Quelle industrie a permis une industrialisation précoce du canton de Neuchâtel ?", options:["Le textile", "L'horlogerie", "La métallurgie lourde", "Le chocolat"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Que marquaient souvent, à tort, les cartes coloniales sur des régions pourtant bien connues localement ?", options:["Des frontières exactes", "\"Terra incognita\" (terre inconnue)", "Le nom des habitants", "Rien de particulier"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"La conférence de Berlin (1884-1885) a organisé le partage de quel continent entre puissances européennes ?", options:["L'Asie", "L'Amérique du Sud", "L'Afrique", "L'Océanie"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_HISTOIRE_10E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_HISTOIRE_10E = QUIZ_HISTOIRE_10E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
