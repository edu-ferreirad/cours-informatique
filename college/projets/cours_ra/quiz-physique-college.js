const QUIZ_PHYSIQUE_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"La physique se fonde sur la pratique expérimentale et sur quelle autre approche ?", options:["La description mathématique", "La mémorisation par cœur", "L'observation seule", "La philosophie"], correct:0 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Combien de grands domaines structurent la physique en discipline fondamentale ?", options:["Trois", "Cinq", "Sept", "Dix"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Quelle capacité progressive la répétition de la démarche scientifique permet-elle d'acquérir ?", answers:["labstraction", "l'abstraction", "abstraction", "capacite dabstraction"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Mener une expérience complète implique de savoir calculer quoi sur les mesures ?", options:["Leur couleur", "Leur incertitude", "Leur poids", "Leur âge"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"L'option spécifique physique fait appel à quels outils mathématiques plus élaborés ?", options:["Les fractions simples", "La notation vectorielle", "Les tables de multiplication", "Aucun"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Quel outil (au-delà du labo) est cité pour l'acquisition et le traitement des données d'expérience ?", answers:["informatique", "loutil informatique", "l'outil informatique"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Quel domaine de la physique du XXe siècle est explicitement cité, avec la physique quantique ?", options:["La relativité", "L'alchimie", "La météorologie ancienne", "La géologie"], correct:0 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Le lien entre physique et musique se fait via quel phénomène ?", options:["Les couleurs", "Les ondes (acoustique)", "La gravité", "L'électricité statique"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"En option spécifique, l'élève est entraîné à aborder une situation nouvelle avec quelle vision ?", options:["La plus étroite possible", "La plus globale possible", "Aucune vision particulière", "Uniquement mathématique"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Selon les objectifs généraux, la physique permet de comprendre les phénomènes naturels ET quoi d'autre ?", options:["Les réalisations de la technique", "La littérature", "L'histoire ancienne", "Rien d'autre"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_PHYSIQUE_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_PHYSIQUE_COLLEGE = QUIZ_PHYSIQUE_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
