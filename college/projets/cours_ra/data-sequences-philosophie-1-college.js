// SALLE SÉQUENCES — PHILOSOPHIE — 1ère année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_PHILOSOPHIE_1_COLLEGE_OBJECTS = [
  { id:"philosophie_1_1", tier:"court", emoji:"ℹ️", label:"Étape 1 — Comprends pourquoi il n'y a pas de philosophie cette année",
    text:"Cherche dans la grille horaire officielle à partir de quelle année la philosophie commence, et note combien d'années elle dure.",
    fact:"La philosophie démarre seulement en 3e année : ce n'est pas un oubli, c'est une organisation propre à cette discipline.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"philosophie_1_2", tier:"court", emoji:"🤔", label:"Étape 2 — Pose-toi une première question philosophique",
    text:"Choisis une question simple (qu'est-ce que le temps ? qu'est-ce que la liberté ?) et note en cinq lignes ta première réponse spontanée, sans chercher d'aide.",
    fact:"Cette première réponse spontanée, gardée de côté, te sera utile pour mesurer ton évolution en 3e année.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"philosophie_1_3", tier:"court", emoji:"🗣️", label:"Étape 3 — Discute une question sans trancher",
    text:"Avec un camarade, discute cinq minutes d'une question sans chercher à avoir raison, en cherchant plutôt à comprendre son point de vue.",
    fact:"Discuter sans chercher à avoir raison est une posture rare mais précieuse, qui prépare à la philosophie.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"philosophie_1_4", tier:"moyen", emoji:"📖", label:"Étape 4 — Lis un court texte réflexif",
    text:"Lis un très court texte (pas forcément philosophique) qui pose une question sur le sens de la vie ou de l'existence, et note ce qu'il te fait penser.",
    fact:"S'habituer à lire pour réfléchir, pas seulement pour comprendre une information, prépare à la démarche philosophique.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"philosophie_1_5", tier:"moyen", emoji:"💭", label:"Étape 5 — Garde une trace de tes questionnements",
    text:"Commence un petit carnet où tu notes, au fil des semaines, des questions qui te viennent sur le monde, toi-même ou les autres, sans chercher à y répondre tout de suite.",
    fact:"Ce carnet, gardé sur plusieurs mois, révèle souvent des questionnements plus profonds qu'on ne le pense.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"philosophie_1_6", tier:"long", emoji:"🎭", label:"Étape 6 — Explore un dilemme moral simple",
    text:"Réfléchis à un dilemme simple (dire une vérité qui blesse, ou un mensonge qui protège) et note les arguments des deux côtés, sans trancher.",
    fact:"Explorer les deux côtés d'un dilemme, sans trancher trop vite, est un exercice qui prépare à l'argumentation philosophique.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"philosophie_1_7", tier:"long", emoji:"🗣️", label:"Étape 7 — Partage un de tes questionnements",
    text:"Choisis une question de ton carnet de l'étape 5 et partage-la avec la classe en expliquant pourquoi elle t'intéresse.",
    fact:"Partager un vrai questionnement personnel, plutôt qu'une question imposée, rend la réflexion plus authentique.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqPhilosophie1CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_PHILOSOPHIE_1_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_PHILOSOPHIE_1_COLLEGE_OBJECTS=MUSEE_SEQ_PHILOSOPHIE_1_COLLEGE_OBJECTS;
window.getSeqPhilosophie1CollegeObjectsForParcours=getSeqPhilosophie1CollegeObjectsForParcours;
