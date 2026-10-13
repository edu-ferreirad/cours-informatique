const QUIZ_HISTOIRE_11E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quel événement a déclenché la Première Guerre mondiale en 1914 ?", options:["Une crise économique", "L'assassinat de l'archiduc François-Ferdinand", "Une invasion surprise", "Un tremblement de terre"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle crise économique mondiale a marqué l'entre-deux-guerres, née aux États-Unis ?", options:["La crise de 1929", "La crise de 1918", "La crise de 1945", "La crise de 1900"], correct:0 },
  { id:"q3", tier:"court", type:"texte", prompt:"Quel juriste a inventé le mot \"génocide\" en 1944 ?", answers:["raphael lemkin", "lemkin"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Pourquoi appelle-t-on la période après 1945 opposant USA et URSS une \"guerre froide\" ?", options:["Elle se déroulait dans des pays froids", "Il n'y a jamais eu d'affrontement militaire direct entre les deux puissances", "C'était une vraie guerre déclarée", "Aucune tension n'existait"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Quelles deux ressources stratégiques étaient au cœur du premier projet de coopération européenne en 1951 ?", options:["Le pétrole et le gaz", "Le charbon et l'acier", "L'or et l'argent", "Le blé et le vin"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Comment est parfois appelée l'année 1960, marquée par l'indépendance de 17 pays africains ?", answers:["annee de lafrique", "lannee de lafrique", "annee de l'afrique"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Quel tableau de Picasso, peint en réaction à un bombardement de 1937, est devenu un symbole antiguerre mondial ?", options:["Guernica", "Les Demoiselles d'Avignon", "La Guerre", "Le Cri"], correct:0 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Pourquoi les historiens ne se fient-ils jamais à un seul témoignage sur un événement historique ?", options:["Les témoins mentent toujours", "Deux témoins peuvent avoir des souvenirs sincères mais différents", "Les témoignages sont interdits", "Ce n'est pas vrai, un seul suffit"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Quelle organisation a précédé les Nations Unies après la Première Guerre mondiale, sans empêcher la Seconde ?", options:["L'Union européenne", "La Société des Nations", "L'OTAN", "Le Commonwealth"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"En quelle année la Cour pénale internationale a-t-elle été créée ?", options:["1945", "1990", "2002", "2020"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_HISTOIRE_11E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_HISTOIRE_11E = QUIZ_HISTOIRE_11E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
