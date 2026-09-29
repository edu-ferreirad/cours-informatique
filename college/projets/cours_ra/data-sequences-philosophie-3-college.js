// SALLE SÉQUENCES — PHILOSOPHIE — 3e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_PHILOSOPHIE_3_COLLEGE_OBJECTS = [
  { id:"philosophie_3_1", tier:"court", emoji:"📖", label:"Étape 1 — Dialogue directement avec un texte",
    text:"Face à un court extrait d'un philosophe étudié, formule tes propres questions sur le texte avant toute explication de l'enseignant.",
    fact:"Le programme insiste sur un dialogue permanent avec les penseurs du passé, à partir de vraies questions, pas imposées.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"philosophie_3_2", tier:"court", emoji:"💬", label:"Étape 2 — Justifie chaque affirmation dans un débat",
    text:"Sur une question philosophique simple, débats librement, mais chaque affirmation que tu fais doit être immédiatement suivie d'une justification argumentée.",
    fact:"La rigueur de la justification prime sur la liberté d'opinion seule dans un vrai débat philosophique.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"philosophie_3_3", tier:"court", emoji:"🔍", label:"Étape 3 — Distingue une croyance d'un savoir",
    text:"Face à une liste d'affirmations, classe chacune en « croyance » ou « savoir vérifiable » et justifie ton classement.",
    fact:"Cette distinction est une des bases de la réflexion philosophique sur la connaissance.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"philosophie_3_4", tier:"moyen", emoji:"📚", label:"Étape 4 — Suis la progression d'un auteur",
    text:"Lis plusieurs extraits successifs d'un même ouvrage philosophique et reconstitue, sans aide, la progression de l'argumentation de l'auteur.",
    fact:"Suivre la continuité d'une pensée sur plusieurs extraits est un exercice plus exigeant que lire un seul extrait isolé.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"philosophie_3_5", tier:"moyen", emoji:"🗣️", label:"Étape 5 — Présente et défends une thèse",
    text:"Choisis une thèse simple d'un philosophe étudié et défends-la face à des questions critiques posées par tes camarades.",
    fact:"Défendre une thèse qui n'est pas nécessairement la tienne développe ta capacité argumentative.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"philosophie_3_6", tier:"long", emoji:"🔗", label:"Étape 6 — Relie la philosophie à une autre discipline",
    text:"Sur un sujet contemporain, croise un texte philosophique avec un document d'une autre discipline (droit, biologie) pour construire une réflexion multidisciplinaire.",
    fact:"Le programme cite explicitement que de nombreux sujets philosophiques peuvent être traités en lien avec d'autres disciplines.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"philosophie_3_7", tier:"long", emoji:"✍️", label:"Étape 7 — Rédige un court essai philosophique",
    text:"Rédige un court essai sur une question philosophique étudiée, en construisant une argumentation structurée avec au moins un contre-argument.",
    fact:"Rédiger un essai structuré, avec un contre-argument, prépare aux exigences de la dissertation philosophique.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqPhilosophie3CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_PHILOSOPHIE_3_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_PHILOSOPHIE_3_COLLEGE_OBJECTS=MUSEE_SEQ_PHILOSOPHIE_3_COLLEGE_OBJECTS;
window.getSeqPhilosophie3CollegeObjectsForParcours=getSeqPhilosophie3CollegeObjectsForParcours;
