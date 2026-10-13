const QUIZ_INFORMATIQUE_9E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Qu'est-ce qu'un algorithme ?", options:["Un type d'ordinateur", "Une suite précise d'instructions dans un ordre donné", "Un langage de programmation uniquement", "Un virus informatique"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Pourquoi utiliser une boucle \"répéter X fois\" dans un programme ?", options:["Pour rendre le programme plus long", "Pour ne pas copier plusieurs fois la même instruction", "Pour ralentir le programme", "Ce n'est jamais utile"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Citez un dispositif informatique conçu pour répondre aux demandes de nombreux autres appareils à distance.", answers:["serveur", "un serveur"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Un clavier est un périphérique de quel type ?", options:["Sortie", "Entrée", "Stockage", "Réseau"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Quel est le plus grand nombre décimal qu'on peut écrire en binaire sur un seul octet (8 bits) ?", options:["100", "128", "255", "999"], correct:2 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Comment appelle-t-on la structure de dossiers imbriqués qui organise les fichiers d'un ordinateur ?", answers:["arborescence", "une arborescence"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Combien d'octets sont nécessaires pour coder un pixel en couleurs RVB ?", options:["1", "2", "3", "8"], correct:2 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Quelle technologie réseau convient le mieux à un échange à très courte portée, comme un casque audio ?", options:["Le Bluetooth", "La fibre optique", "Le LTE/4G", "Le satellite"], correct:0 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Dans le code de César, comment un texte est-il rendu illisible ?", options:["En le traduisant", "En décalant chaque lettre d'un même nombre de positions", "En le supprimant", "En changeant la police"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Qui a contribué à déchiffrer les messages de la machine Enigma pendant la Seconde Guerre mondiale ?", options:["Ada Lovelace", "Alan Turing", "Blaise de Vigenère", "Jules César"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_INFORMATIQUE_9E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_INFORMATIQUE_9E = QUIZ_INFORMATIQUE_9E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
