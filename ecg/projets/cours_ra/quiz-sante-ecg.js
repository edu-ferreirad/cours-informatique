const QUIZ_SANTE_ECG = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Dans l'exercice de calcul médical, que doivent calculer les élèves ?", options:["Un budget", "La dose exacte d'un médicament selon le poids", "Une distance", "Une surface"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Dans le jeu de rôle du premier entretien, combien de rôles chaque élève joue-t-il ?", options:["Un seul", "Deux, patient puis soignant", "Trois", "Aucun rôle"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Avant toute manipulation en chimie, que doivent rédiger eux-mêmes les élèves ?", answers:["protocole de securite", "un protocole de securite", "le protocole de securite"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Dans l'étude de cas clinique simplifié, à partir de quoi les élèves doivent-ils raisonner ?", options:["Une pathologie déjà nommée", "Des symptômes, pour identifier le système affecté", "Rien de précis", "Une photo uniquement"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Dans le débat éthique en psychologie, que doivent défendre les deux groupes ?", options:["Uniquement leur propre avis", "Une position, y compris celle qu'ils ne partagent pas", "Rien de précis", "Un vote uniquement"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Quel document personnel l'élève prépare-t-il avant le stage préalable de quatre semaines ?", answers:["checklist", "une checklist", "checklist de terrain"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Dans la simulation d'urgence en calcul médical, quelle contrainte est ajoutée au temps limité ?", options:["Rien de plus", "Un environnement bruyant", "Une musique douce", "Un silence complet"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Lors de la visite d'un service hospitalier, que doit observer chaque élève ?", options:["Rien de précis", "Un aspect logistique invisible de l'extérieur", "Uniquement les médicaments", "Les couleurs des murs"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Dans le portrait croisé de deux métiers, que doit identifier l'élève ?", options:["Un seul point commun", "Trois différences concrètes entre deux métiers proches", "Rien de particulier", "Le salaire uniquement"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Dans le debrief hebdomadaire en binôme pendant le stage, que comparent les deux élèves ?", options:["Rien", "Leurs observations dans des structures différentes", "Leurs notes scolaires", "Leur tenue"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(p){ const m = QUIZ_TIER_ORDER[p] || 1; return QUIZ_SANTE_ECG.filter(q => QUIZ_TIER_ORDER[q.tier] <= m); }
window.QUIZ_SANTE_ECG = QUIZ_SANTE_ECG; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
