// SALLE SÉQUENCES — ANGLAIS — 2e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ANGLAIS_2_COLLEGE_OBJECTS = [
  { id:"anglais_2_1", tier:"court", emoji:"💬", label:"Étape 1 — Défends un avis à l'oral",
    text:"Sur un sujet simple, prépare puis défends oralement un avis personnel argumenté, face à un camarade qui doit reformuler ton avis avant de réagir.",
    fact:"Faire reformuler ton avis avant la réaction développe une vraie écoute active, pas juste une succession de monologues.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"anglais_2_2", tier:"court", emoji:"📖", label:"Étape 2 — Choisis la bonne entrée du dictionnaire",
    text:"Face à un texte contenant des mots à sens multiples, entraîne-toi à choisir la bonne entrée dans un dictionnaire bilingue selon le contexte précis de la phrase.",
    fact:"Utiliser efficacement un dictionnaire bilingue est un objectif explicite du programme de cette année.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"anglais_2_3", tier:"court", emoji:"🗞️", label:"Étape 3 — Identifie le genre d'un texte inconnu",
    text:"Face à plusieurs textes courts sans titre ni source, identifie le genre de chacun (article, lettre, extrait littéraire) à partir d'indices formels précis.",
    fact:"Reconnaître un genre avant d'en comprendre tout le contenu accélère beaucoup la lecture future.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"anglais_2_4", tier:"moyen", emoji:"🎧", label:"Étape 4 — Écoute et restitue sans transcrire",
    text:"Après une seule écoute d'un court reportage, note uniquement les informations essentielles (qui, quoi, où) sans transcrire, puis compare tes notes à celles d'un camarade avant une deuxième écoute.",
    fact:"Trier l'essentiel sans tout transcrire t'entraîne à une compréhension orale plus réelle qu'une simple dictée.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"anglais_2_5", tier:"moyen", emoji:"✍️", label:"Étape 5 — Résume un texte en 80 mots exactement",
    text:"Résume un texte simple en anglais en exactement 80 mots, ni plus ni moins. Compte-les toi-même avant de rendre ton résumé.",
    fact:"Cette contrainte stricte t'oblige à choisir l'essentiel plutôt qu'à simplement raccourcir au hasard.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"anglais_2_6", tier:"long", emoji:"🎭", label:"Étape 6 — Joue une scène de la vie courante",
    text:"Avec un camarade, prépare et joue une scène de vie courante (achat, rendez-vous) en anglais, avec une contrainte tirée au sort qui pimente le dialogue.",
    fact:"Le jeu de rôle te prépare aux vraies situations de communication que tu rencontreras un jour en voyage ou au travail.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"anglais_2_7", tier:"long", emoji:"🌍", label:"Étape 7 — Présente un aspect culturel d'un pays anglophone",
    text:"Choisis un aspect culturel d'un pays anglophone (une fête, une tradition) et présente-le en deux minutes à la classe avec au moins un fait vérifié précis.",
    fact:"S'appuyer sur un fait vérifié, plutôt que sur une impression générale, rend ta présentation bien plus crédible.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqAnglais2CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ANGLAIS_2_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ANGLAIS_2_COLLEGE_OBJECTS=MUSEE_SEQ_ANGLAIS_2_COLLEGE_OBJECTS;
window.getSeqAnglais2CollegeObjectsForParcours=getSeqAnglais2CollegeObjectsForParcours;
