// SALLE SÉQUENCES — GREC — 3e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_GREC_3_COLLEGE_OBJECTS = [
  { id:"grec_3_1", tier:"court", emoji:"📖", label:"Étape 1 — Aborde un grand texte par thème",
    text:"Traduis et commente un extrait plus long d'un auteur majeur du programme, en le resituant dans l'ensemble de l'œuvre.",
    fact:"Durant les deux dernières années, tu abordes les grands textes de la littérature par auteurs ou par thèmes.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"grec_3_2", tier:"court", emoji:"🔍", label:"Étape 2 — Cherche la finesse d'un mot",
    text:"Face à un mot grec ayant plusieurs traductions possibles, compare les nuances de sens et choisis la traduction la plus juste selon le contexte.",
    fact:"Développer une finesse linguistique par l'exercice de la traduction est un objectif explicite de l'option spécifique.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"grec_3_3", tier:"court", emoji:"🏛️", label:"Étape 3 — Approfondis un aspect de civilisation",
    text:"Choisis un aspect approfondi de la civilisation grecque (institutions, religion) et prépare une courte présentation avec plusieurs sources.",
    fact:"Approfondir un sujet de civilisation, plutôt que le survoler, est attendu en option spécifique.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"grec_3_4", tier:"moyen", emoji:"📜", label:"Étape 4 — Traduis un texte plus exigeant",
    text:"Traduis un texte grec plus difficile qu'en 2e année, en mobilisant méthodiquement les techniques déjà vues.",
    fact:"Les textes en option spécifique deviennent progressivement plus exigeants et plus denses.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"grec_3_5", tier:"moyen", emoji:"🔎", label:"Étape 5 — Compare deux auteurs sur un même thème",
    text:"Compare deux auteurs grecs traitant d'un thème proche (le pouvoir, l'amour) et identifie une différence de traitement entre eux.",
    fact:"Comparer deux auteurs développe une vision plus large de la littérature grecque qu'une étude isolée.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"grec_3_6", tier:"long", emoji:"🔎", label:"Étape 6 — Étudie un texte d'auteur en autonomie",
    text:"Choisis un court texte d'un auteur grec étudié, prépare-le seul (traduction, analyse) en vue d'une présentation à la classe.",
    fact:"Étudier seul un texte d'auteur est un objectif spécifique de cette étape du cursus.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"grec_3_7", tier:"long", emoji:"🗣️", label:"Étape 7 — Présente ton texte d'auteur",
    text:"Présente le texte préparé à l'étape 6 à la classe, qui pose ensuite des questions sur le contexte et le style.",
    fact:"Répondre aux questions de la classe après ta présentation vérifie que tu maîtrises vraiment ton texte.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqGrec3CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_GREC_3_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_GREC_3_COLLEGE_OBJECTS=MUSEE_SEQ_GREC_3_COLLEGE_OBJECTS;
window.getSeqGrec3CollegeObjectsForParcours=getSeqGrec3CollegeObjectsForParcours;
