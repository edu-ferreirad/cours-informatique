// QUIZ — SÉQUENCES PHYSIQUE 11e
const QUIZ_SEQ_PHYSIQUE_11E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves mesurent la masse d'objets » ?", options:["Flotte ou coule ? Prédire puis tester", "Jouer aux particules", "Masse et volume par déplacement d'eau", "Le rapport d'expérience complet"], correct:2 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « La classe joue le solide » ?", options:["Identifier un métal inconnu", "La courbe de chauffage de la glace", "Masse et volume par déplacement d'eau", "Jouer aux particules"], correct:3 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves chauffent de la glace » ?", options:["La courbe de chauffage de la glace", "Masse et volume par déplacement d'eau", "Jouer aux particules", "Flotte ou coule ? Prédire puis tester"], correct:0 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Avant toute expérience » ?", options:["Masse et volume par déplacement d'eau", "Flotte ou coule ? Prédire puis tester", "Identifier un métal inconnu", "Le rapport d'expérience complet"], correct:1 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Chaque groupe détermine la masse volumique d'un métal inconnu et le compare à un tableau pour proposer une… » ?", options:["Masse et volume par déplacement d'eau", "Identifier un métal inconnu", "Flotte ou coule ? Prédire puis tester", "Le rapport d'expérience complet"], correct:1 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves rédigent un rapport avec hypothèse » ?", options:["Le rapport d'expérience complet", "La courbe de chauffage de la glace", "Jouer aux particules", "Masse et volume par déplacement d'eau"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_PHYSIQUE_11E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_PHYSIQUE_11E = QUIZ_SEQ_PHYSIQUE_11E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
