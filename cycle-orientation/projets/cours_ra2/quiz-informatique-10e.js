const QUIZ_INFORMATIQUE_10E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Comment appelle-t-on la disposition de clavier utilisée en France ?", options:["QWERTY", "AZERTY", "QWERTZ", "DVORAK"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"À quoi servent les \"touches mortes\" sur un clavier ?", options:["À rien, elles sont cassées", "À modifier la lettre suivante (ex : accents)", "À éteindre l'ordinateur", "À changer de langue"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Comment appelle-t-on l'usage des majuscules et minuscules dans un texte ?", answers:["casse", "la casse"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Pourquoi éviter d'aligner du texte avec des espaces répétés plutôt qu'avec des taquets de tabulation ?", options:["C'est interdit", "Cela casse souvent à l'impression ou sur un autre ordinateur", "C'est plus rapide", "Il n'y a aucune différence"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Quel avantage principal offrent les styles de titre prédéfinis dans un traitement de texte ?", options:["Ils rendent le fichier plus lourd", "Une mise en forme cohérente modifiable partout à la fois", "Ils suppriment le texte", "Rien de particulier"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Que peut générer automatiquement un document qui utilise des styles de titre cohérents ?", answers:["table des matieres", "une table des matieres"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Copier un texte de Wikipédia sans indiquer la source, même pour un exercice, peut être considéré comme quoi ?", options:["Une bonne pratique", "Un plagiat", "Une obligation", "Une erreur mineure sans conséquence"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Pourquoi le format PDF est-il souvent utilisé pour partager un document ?", options:["Il est plus facile à modifier", "Il fige la mise en page, identique sur tout appareil", "Il est plus petit toujours", "Il n'existe pas d'autre format"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Comment écrit-on généralement des caractères japonais sur un clavier occidental ?", options:["Impossible", "Via une transcription phonétique convertie automatiquement", "Avec un clavier à 5000 touches", "En dessinant chaque caractère"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Un pied de page automatique dans un document se met à jour comment ?", options:["Il faut le retaper à chaque page", "Automatiquement sur toutes les pages", "Il disparaît après une page", "Il ne peut contenir que du texte"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_INFORMATIQUE_10E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_INFORMATIQUE_10E = QUIZ_INFORMATIQUE_10E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
