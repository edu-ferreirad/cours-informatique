const QUIZ_MUSIQUE_ECG_1 = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves écoutent trois extraits et notent les instruments et l'émotion perçue avant une mise en commun » ?", options:["Découverte : l'exigence de la pratique instrumentale", "Découverte : un mini-test de solfège en autonomie", "Découverte : reconnaître les instruments à l'écoute"], correct:2 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves déchiffrent un court rythme écrit et tentent de le reproduire » ?", options:["Découverte : l'exigence de la pratique instrumentale", "Découverte : un mini-test de solfège en autonomie", "Découverte : reconnaître les instruments à l'écoute"], correct:1 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves planifient une semaine de pratique instrumentale personnelle et notent la durée réelle » ?", options:["Découverte : l'exigence de la pratique instrumentale", "Découverte : reconnaître les instruments à l'écoute", "Découverte : un mini-test de solfège en autonomie"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_MUSIQUE_ECG_1.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_MUSIQUE_ECG_1 = QUIZ_MUSIQUE_ECG_1; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
