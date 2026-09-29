// SALLE SÉQUENCES — ANGLAIS — 1ère année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ANGLAIS_1_COLLEGE_OBJECTS = [
  { id:"anglais_1_1", tier:"court", emoji:"🎯", label:"Étape 1 — Fais ton propre diagnostic, sans note",
    text:"Passe le petit test de rentrée (compréhension orale, expression écrite courte, vocabulaire) sans stress : il n'est pas noté. Note toi-même à la fin ce que tu maîtrises déjà bien et ce que tu dois travailler en priorité.",
    fact:"Ce diagnostic sert à cibler ta remise à niveau sans te stigmatiser sur tes lacunes de départ.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"anglais_1_2", tier:"court", emoji:"🗣️", label:"Étape 2 — Raconte en trois temps",
    text:"Après l'écoute d'un enregistrement court, restitue oralement l'essentiel en respectant une structure imposée : situation, problème, résolution. Pas de résumé libre cette année.",
    fact:"Un cadre fixe est rassurant pour progresser à l'oral quand on est encore peu autonome dans une langue.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"anglais_1_3", tier:"court", emoji:"✍️", label:"Étape 3 — Continue une histoire à partir d'une phrase donnée",
    text:"Tu reçois une première phrase imposée. Poursuis un court texte narratif en respectant le temps et la longueur donnés, en te concentrant sur la correction plutôt que sur l'originalité.",
    fact:"Partir d'un sujet connu, déjà discuté en classe, réduit la charge de travail avant d'aborder des sujets totalement libres plus tard.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"anglais_1_4", tier:"moyen", emoji:"💬", label:"Étape 4 — Défends un avis à l'oral",
    text:"Sur un sujet simple, prépare puis défends oralement un avis personnel argumenté face à la classe, qui doit reformuler ton avis dans ses propres mots avant de réagir.",
    fact:"Faire reformuler ton avis par un camarade avant qu'il ne réagisse force une vraie écoute de sa part.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"anglais_1_5", tier:"moyen", emoji:"📖", label:"Étape 5 — Choisis la bonne entrée du dictionnaire",
    text:"Face à un texte contenant des mots à sens multiples, entraîne-toi à choisir la bonne entrée dans un dictionnaire bilingue selon le contexte de la phrase.",
    fact:"Le mauvais choix de sens dans le dictionnaire change complètement la compréhension d'un texte entier.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"anglais_1_6", tier:"long", emoji:"🗞️", label:"Étape 6 — Identifie le genre d'un texte inconnu",
    text:"Tu reçois plusieurs textes courts de genres différents (article, lettre, extrait littéraire) sans titre ni source. Identifie le genre de chacun à partir d'indices formels précis.",
    fact:"Reconnaître un genre avant même d'en comprendre tout le contenu accélère beaucoup ta future lecture.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"anglais_1_7", tier:"long", emoji:"🎙️", label:"Étape 7 — Enregistre-toi et réécoute-toi",
    text:"Écris et enregistre un mini-dialogue de six répliques avec un camarade, puis réécoutez-vous ensemble pour corriger prononciation et intonation.",
    fact:"S'entendre soi-même révèle des erreurs de prononciation qu'on ne remarque jamais en parlant seulement.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqAnglais1CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ANGLAIS_1_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ANGLAIS_1_COLLEGE_OBJECTS=MUSEE_SEQ_ANGLAIS_1_COLLEGE_OBJECTS;
window.getSeqAnglais1CollegeObjectsForParcours=getSeqAnglais1CollegeObjectsForParcours;
