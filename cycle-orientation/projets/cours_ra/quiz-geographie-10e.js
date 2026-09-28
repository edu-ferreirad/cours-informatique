const QUIZ_GEOGRAPHIE_10E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Sur combien d'années calcule-t-on généralement les moyennes qui définissent un climat de référence ?", options:["Un an", "Dix ans", "Trente ans", "Cent ans"], correct:2 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Sans aucun effet de serre naturel, quelle serait approximativement la température moyenne à la surface de la Terre ?", options:["0°C", "15°C", "-18°C", "30°C"], correct:2 },
  { id:"q3", tier:"court", type:"texte", prompt:"Comment appelle-t-on le phénomène qui rend les villes plus chaudes que la campagne environnante lors d'une canicule ?", answers:["ilot de chaleur urbain", "ilot de chaleur", "un ilot de chaleur urbain"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quel mode de transport de marchandises reste, à distance égale, l'un des moins coûteux et des moins polluants par tonne transportée ?", options:["Le transport aérien", "Le transport routier", "Le transport maritime par porte-conteneurs", "Le transport ferroviaire local"], correct:2 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Le choix d'implanter une usine dépend de quoi ?", options:["D'un seul facteur, le coût de la main-d'œuvre", "De plusieurs critères combinés", "Uniquement du hasard", "Uniquement du climat"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Un smartphone courant peut contenir des matériaux extraits sur combien de continents différents ?", answers:["quatre", "4"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"La plupart des migrations dans le monde se déroulent où ?", options:["Entre deux pays différents", "À l'intérieur d'un même pays", "Uniquement vers l'Europe", "Uniquement entre continents"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Comment le droit international distingue-t-il le \"réfugié\" du \"migrant économique\" ?", options:["Il n'y a aucune différence", "Le réfugié fuit un danger reconnu, le migrant économique part de son plein gré", "Le réfugié voyage en avion uniquement", "Le migrant économique ne peut jamais revenir"], correct:1 },
  { id:"q9", tier:"long", type:"texte", prompt:"Comment appelle-t-on l'espace européen qui a supprimé les contrôles aux frontières internes entre plusieurs pays ?", answers:["schengen", "espace schengen", "zone schengen"] },
  { id:"q10", tier:"long", type:"qcm", prompt:"L'argent envoyé chaque année par les migrants à leur famille au pays dépasse, à l'échelle mondiale, quoi ?", options:["Le budget d'un seul pays", "L'aide publique au développement de tous les pays riches réunis", "Rien, ce montant est négligeable", "Le PIB mondial"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_GEOGRAPHIE_10E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_GEOGRAPHIE_10E = QUIZ_GEOGRAPHIE_10E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
