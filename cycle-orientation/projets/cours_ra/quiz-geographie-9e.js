// QUIZ FINAL — SALLE GÉOGRAPHIE 9e
const QUIZ_GEOGRAPHIE_9E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Un risque naturel n'existe que si deux conditions se combinent : un aléa et quoi ?", options:["Une vulnérabilité", "Une montagne", "Un tremblement de terre", "Une frontière"], correct:0 },
  { id:"q2", tier:"court", type:"texte", prompt:"Comment appelle-t-on les grands morceaux mobiles qui composent la croûte terrestre ?", answers:["plaques tectoniques", "plaques", "des plaques tectoniques"] },
  { id:"q3", tier:"court", type:"qcm", prompt:"Pourquoi des millions de personnes vivent-elles volontairement près de volcans actifs ?", options:["Pour le tourisme uniquement", "Les cendres volcaniques enrichissent les sols agricoles", "Par manque d'autres terrains disponibles", "Les volcans ne sont jamais dangereux"], correct:1 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Où se négocie le prix mondial des céréales comme le blé ?", options:["Dans chaque village", "Sur des marchés mondiaux", "Uniquement dans le pays producteur", "Il n'y a pas de prix mondial"], correct:1 },
  { id:"q5", tier:"moyen", type:"texte", prompt:"Quelle céréale nourrit plus de la moitié de la population mondiale, essentiellement dans son propre pays de production ?", answers:["le riz", "riz"] },
  { id:"q6", tier:"moyen", type:"qcm", prompt:"Si la planète produit assez de nourriture pour tout le monde, pourquoi la faim persiste-t-elle dans certaines régions ?", options:["Un manque global de nourriture", "Des problèmes d'accès, de répartition ou de prix", "Le climat mondial uniquement", "Il n'y a plus de faim dans le monde"], correct:1 },
  { id:"q7", tier:"long", type:"qcm", prompt:"Pour la première fois dans l'histoire humaine, où vit la majorité de la population mondiale ?", options:["À la campagne", "En ville", "Sur les côtes uniquement", "En altitude"], correct:1 },
  { id:"q8", tier:"long", type:"texte", prompt:"Comment appelle-t-on les quartiers urbains informels, souvent sans accès légal à l'eau ou à l'électricité ?", answers:["bidonvilles", "des bidonvilles", "un bidonville"] },
  { id:"q9", tier:"long", type:"qcm", prompt:"Le phénomène qui fait que les quartiers d'une même ville se différencient fortement selon le revenu de leurs habitants s'appelle ?", options:["L'urbanisation", "La ségrégation spatiale", "La mondialisation", "L'exode rural"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Que cherchent à réduire les villes qui rendent leurs transports en commun gratuits ?", options:["Le nombre d'habitants", "La place de la voiture individuelle", "La taille des trottoirs", "Le prix du logement"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_GEOGRAPHIE_9E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_GEOGRAPHIE_9E = QUIZ_GEOGRAPHIE_9E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
