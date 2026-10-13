const QUIZ_ALLEMAND = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Comment dit-on \"je m'appelle\" en allemand ?", options:["Ich komme aus", "Ich heiße", "Ich bin", "Ich habe"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Combien de genres grammaticaux possède l'allemand ?", options:["Deux", "Trois", "Quatre", "Aucun"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"En allemand, \"halb neun\" signifie littéralement quelle heure en français (ex: huit heures et...) ?", answers:["demie", "huit heures et demie", "8h30"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"D'où viendrait le mot \"Brezel\" (bretzel) ?", options:["De l'allemand moderne", "Du latin \"brachiatus\" (bras repliés)", "De l'anglais", "Du français"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Quel verbe allemand exprime l'idée d'aimer faire quelque chose (\"ich spiele gern Fußball\") ?", options:["Haben", "Sein", "Gern", "Kommen"], correct:2 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Comment appelle-t-on l'allemand dialectal parlé au quotidien en Suisse alémanique ?", answers:["schwyzertutsch", "schwiizerdutsch", "suisse allemand", "le suisse allemand"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Que signifie réellement le mot allemand \"Gift\" ?", options:["Cadeau", "Poison", "Don", "Talent"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Quel monument berlinois marquait autrefois la frontière entre Berlin-Est et Berlin-Ouest ?", options:["Le Reichstag", "La porte de Brandebourg", "La tour de télévision", "Le mur de Chine"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Combien de langues nationales compte la Suisse ?", options:["Deux", "Trois", "Quatre", "Cinq"], correct:2 },
  { id:"q10", tier:"long", type:"qcm", prompt:"À quelle période a réellement lieu l'Oktoberfest, malgré son nom ?", options:["Tout octobre", "Mi-septembre à début octobre", "Uniquement en novembre", "Tout l'été"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ALLEMAND.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ALLEMAND = QUIZ_ALLEMAND; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
