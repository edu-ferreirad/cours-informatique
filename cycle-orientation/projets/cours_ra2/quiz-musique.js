const QUIZ_MUSIQUE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quel est, selon la salle, le premier instrument de musique disponible pour chacun ?", options:["Le piano", "La voix", "Le tambour", "La guitare"], correct:1 },
  { id:"q2", tier:"court", type:"texte", prompt:"Comment appelle-t-on le battement régulier de fond sous presque toute musique ?", answers:["pulsation", "la pulsation"] },
  { id:"q3", tier:"court", type:"qcm", prompt:"À quelle famille d'instruments appartient le piano, techniquement ?", options:["Les vents", "Les percussions", "Les cordes frappées", "Les claviers électroniques"], correct:2 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Comment appelle-t-on les cinq lignes horizontales utilisées pour écrire la musique ?", options:["La gamme", "La portée", "Le tempo", "L'accord"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Quel mode musical (majeur ou mineur) est généralement perçu comme triste ou inquiétant ?", options:["Majeur", "Mineur", "Aucun des deux", "Cela dépend du pays"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Quelles grandes périodes musicales occidentales sont citées avant l'explosion des styles populaires du XXe siècle (citez-en une) ?", answers:["baroque", "classique", "romantique"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Quel instrument, capable de créer des sons inexistants dans la nature, a rendu possibles des genres musicaux entiers ?", options:["Le violon", "La flûte", "Le synthétiseur", "Le tambour"], correct:2 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Certaines traditions musicales, comme la musique indienne classique, utilisent des intervalles plus fins que quoi dans le système occidental ?", options:["Les octaves", "Les demi-tons", "Les mesures", "Les silences"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Composer une musique de film demande surtout de synchroniser la musique à quoi ?", options:["Au générique uniquement", "À l'image ou à l'action", "Au silence", "Au public en salle"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Dans un grand chœur, que fait inconsciemment chaque chanteur par rapport à ses voisins ?", options:["Il chante plus fort qu'eux", "Il adapte sa voix à la leur", "Il s'arrête de chanter", "Rien de particulier"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_MUSIQUE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_MUSIQUE = QUIZ_MUSIQUE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
