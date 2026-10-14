// SALLE SÉQUENCES — PHILOSOPHIE — 2e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_PHILOSOPHIE_2_COLLEGE_OBJECTS = [
  { id:"philosophie_2_1", tier:"court", emoji:"ℹ️", label:"Étape 1 — La philosophie n'est pas encore là, mais elle approche",
    text:"Cherche combien de temps il te reste avant de commencer réellement la philosophie l'an prochain, et note une question que tu aimerais y poser.",
    fact:"Se préparer mentalement à une discipline avant qu'elle ne commence peut rendre son arrivée plus motivante.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"philosophie_2_2", tier:"court", emoji:"🤔", label:"Étape 2 — Reprends une question de l'an dernier",
    text:"Reprends une question notée dans ton carnet l'an dernier et vérifie si ta réponse spontanée a changé depuis.",
    fact:"Comparer sa réponse à un an d'intervalle montre concrètement comment on évolue en tant que penseur.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"philosophie_2_3", tier:"court", emoji:"🗣️", label:"Étape 3 — Discute une question sans trancher",
    text:"Avec un camarade, discute cinq minutes d'une question philosophique simple sans chercher à avoir raison, en cherchant à comprendre son point de vue.",
    fact:"Cette posture d'écoute, sans vouloir avoir raison, est une préparation directe à la discussion philosophique.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"philosophie_2_4", tier:"moyen", emoji:"📖", label:"Étape 4 — Lis un texte plus exigeant",
    text:"Lis un texte un peu plus long qui pose une vraie question existentielle et note deux idées qui t'ont marqué.",
    fact:"Lire des textes progressivement plus exigeants prépare en douceur aux grands textes philosophiques de l'an prochain.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"philosophie_2_5", tier:"moyen", emoji:"💭", label:"Étape 5 — Continue ton carnet de questionnements",
    text:"Ajoute trois nouvelles questions à ton carnet personnel, en essayant cette fois d'en formuler une qui te semble vraiment difficile.",
    fact:"Formuler soi-même une question vraiment difficile est déjà un premier pas dans la démarche philosophique.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"philosophie_2_6", tier:"long", emoji:"🎭", label:"Étape 6 — Approfondis un dilemme moral",
    text:"Reprends un dilemme moral et, cette fois, essaie d'imaginer un troisième point de vue, différent des deux évidents.",
    fact:"Chercher un troisième point de vue, au-delà du pour et du contre, est un exercice de pensée plus exigeant.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"philosophie_2_7", tier:"long", emoji:"🗣️", label:"Étape 7 — Partage ton évolution de questionnement",
    text:"Présente à la classe comment ta réflexion sur une question a évolué entre la 1ère et la 2e année.",
    fact:"Rendre visible sa propre évolution de pensée est une préparation directe à la réflexion philosophique à venir.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqPhilosophie2CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_PHILOSOPHIE_2_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_PHILOSOPHIE_2_COLLEGE_OBJECTS=MUSEE_SEQ_PHILOSOPHIE_2_COLLEGE_OBJECTS;
window.getSeqPhilosophie2CollegeObjectsForParcours=getSeqPhilosophie2CollegeObjectsForParcours;
