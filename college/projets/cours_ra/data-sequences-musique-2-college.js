// SALLE SÉQUENCES — MUSIQUE — 2e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_MUSIQUE_2_COLLEGE_OBJECTS = [
  { id:"musique_2_1", tier:"court", emoji:"🎧", label:"Étape 1 — Écoute avec un objectif précis",
    text:"Écoute un extrait deux fois avec deux consignes différentes : d'abord les instruments, puis les changements de tempo.",
    fact:"Changer de consigne d'écoute affine l'oreille bien plus qu'une écoute libre.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"musique_2_2", tier:"court", emoji:"📖", label:"Étape 2 — Utilise trois mots de vocabulaire musical",
    text:"Après une écoute, rédige une critique de cinq lignes en utilisant au moins trois termes précis de vocabulaire musical.",
    fact:"Utiliser un vocabulaire précis oblige à préciser une impression plutôt que de rester vague.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"musique_2_3", tier:"court", emoji:"🕰️", label:"Étape 3 — Situe un extrait dans le temps",
    text:"Écoute un extrait inconnu et essaie de le situer dans l'histoire de la musique à partir d'indices sonores précis.",
    fact:"Deviner à partir d'indices, puis vérifier, ancre mieux les repères chronologiques.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"musique_2_4", tier:"moyen", emoji:"🎸", label:"Étape 4 — Réarrange une chanson connue",
    text:"En groupe, change un seul paramètre d'une chanson connue (tempo, instrumentation) et explique l'effet produit.",
    fact:"Changer un seul paramètre à la fois permet de vraiment comprendre son rôle.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"musique_2_5", tier:"moyen", emoji:"✍️", label:"Étape 5 — Écris un couplet sur un rythme donné",
    text:"Écris un court couplet sur un rythme donné, en veillant à ce que les syllabes accentuées tombent sur les temps forts.",
    fact:"Faire correspondre accents du texte et du rythme est un vrai travail de composition.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"musique_2_6", tier:"long", emoji:"🎙️", label:"Étape 6 — Enregistre ta production",
    text:"Enregistre ta production avec un téléphone, puis réécoute-la avec ton groupe.",
    fact:"S'écouter en enregistrement révèle des détails imperceptibles en jouant en direct.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"musique_2_7", tier:"long", emoji:"🔧", label:"Étape 7 — Améliore ta production à partir de l'écoute",
    text:"À partir de l'écoute, note trois améliorations précises et réenregistre au moins une partie.",
    fact:"Réenregistrer après une écoute critique est la méthode réelle de production musicale.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqMusique2CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_MUSIQUE_2_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_MUSIQUE_2_COLLEGE_OBJECTS=MUSEE_SEQ_MUSIQUE_2_COLLEGE_OBJECTS;
window.getSeqMusique2CollegeObjectsForParcours=getSeqMusique2CollegeObjectsForParcours;
