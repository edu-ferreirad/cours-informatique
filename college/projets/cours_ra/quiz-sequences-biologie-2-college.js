const QUIZ_BIOLOGIE_2_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Par groupes » ?", options:["Avant de choisir : rencontre avec l'option biologie-chimie", "Modéliser la cellule pour comprendre ses limites", "OS uniquement — Écologie : inventaire de terrain", "Démarche scientifique : formuler une hypothèse testable"], correct:1 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « En fin de 2e année » ?", options:["Avant de choisir : rencontre avec l'option biologie-chimie", "OS uniquement — Écologie : inventaire de terrain", "Démarche scientifique : formuler une hypothèse testable", "Rédiger un vrai rapport d'expérience"], correct:0 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « À l'issue d'une manipulation en laboratoire » ?", options:["OS uniquement — Bioéthique : débat argumenté encadré", "OS uniquement — Séquence croisée avec la chimie : les biomolécules", "Rédiger un vrai rapport d'expérience", "OS uniquement — Génétique : résoudre un arbre généalogique"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_BIOLOGIE_2_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_BIOLOGIE_2_COLLEGE = QUIZ_BIOLOGIE_2_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
