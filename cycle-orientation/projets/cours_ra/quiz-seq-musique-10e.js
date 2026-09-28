// QUIZ — SÉQUENCES MUSIQUE 10e
const QUIZ_SEQ_MUSIQUE_10E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « La classe apprend une mélodie puis une deuxième voix simple » ?", options:["Un paysage sonore", "Chanter à deux voix", "Écoute active", "Écoute comparative"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves écoutent deux extraits de styles ou d'époques différents et comparent instruments » ?", options:["Écoute comparative", "Écoute active", "Un paysage sonore", "Chanter à deux voix"], correct:0 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « En groupes » ?", options:["Écoute comparative", "Arranger une chanson connue", "Un paysage sonore", "Enregistrer et s'écouter"], correct:2 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves écrivent un couplet sur un rythme donné » ?", options:["Écrire un couplet", "Mini-concert de classe", "Enregistrer et s'écouter", "Percussions corporelles en canon"], correct:0 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les groupes réarrangent une chanson connue (instruments » ?", options:["Arranger une chanson connue", "Échauffement vocal", "Lire un rythme simple", "Composer un ostinato"], correct:0 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les groupes enregistrent leur production » ?", options:["Écrire un couplet", "Chanter à deux voix", "Composer un ostinato", "Enregistrer et s'écouter"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_MUSIQUE_10E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_MUSIQUE_10E = QUIZ_SEQ_MUSIQUE_10E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
