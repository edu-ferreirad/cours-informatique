const QUIZ_ARTS_DESIGN_ECG_1 = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves dessinent le même objet en dix minutes » ?", options:["Découverte : préparer son projet d'admission", "Découverte : le dessin d'observation en dix minutes", "Découverte : lire une affiche comme un designer"], correct:1 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « À partir d'une affiche » ?", options:["Découverte : le dessin d'observation en dix minutes", "Découverte : préparer son projet d'admission", "Découverte : lire une affiche comme un designer"], correct:2 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves listent ce que demande le concours d'admission en maturité spécialisée arts et design et esquissent un plan d » ?", options:["Découverte : lire une affiche comme un designer", "Découverte : le dessin d'observation en dix minutes", "Découverte : préparer son projet d'admission"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ARTS_DESIGN_ECG_1.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ARTS_DESIGN_ECG_1 = QUIZ_ARTS_DESIGN_ECG_1; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
