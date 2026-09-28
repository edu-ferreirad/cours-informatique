// QUIZ — SÉQUENCES MUSIQUE 9e
const QUIZ_SEQ_MUSIQUE_9E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « La classe s'échauffe par respiration » ?", options:["Percussions corporelles en canon", "Écoute comparative", "Lire un rythme simple", "Échauffement vocal"], correct:3 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves reproduisent un rythme frappé et chanté » ?", options:["Composer un ostinato", "Arranger une chanson connue", "Percussions corporelles en canon", "Écoute comparative"], correct:2 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves déchiffrent une courte partition rythmique et la frappent » ?", options:["Mini-concert de classe", "Percussions corporelles en canon", "Lire un rythme simple", "Chanter à deux voix"], correct:2 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves écoutent un extrait plusieurs fois avec des consignes différentes (instruments » ?", options:["Écoute active", "Percussions corporelles en canon", "Chanter à deux voix", "Lire un rythme simple"], correct:0 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « En groupes » ?", options:["Arranger une chanson connue", "Un paysage sonore", "Composer un ostinato", "Écoute active"], correct:2 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les groupes présentent leur travail à la classe ; chaque auditeur note une chose réussie et une piste d'amélioration » ?", options:["Lire un rythme simple", "Enregistrer et s'écouter", "Arranger une chanson connue", "Mini-concert de classe"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_MUSIQUE_9E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_MUSIQUE_9E = QUIZ_SEQ_MUSIQUE_9E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
