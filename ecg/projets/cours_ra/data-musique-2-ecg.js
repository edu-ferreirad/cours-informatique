// SALLE OSP MUSIQUE — 2e année — le texte s'adresse à l'élève, étape par étape
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_MUSIQUE_2_ECG_OBJECTS = [
  { id:"musique_2_1", tier:"court", emoji:"🎧", label:"Étape 1 — Écoute avec un objectif précis",
    text:"Écoute un extrait deux fois avec deux consignes différentes : la première fois repère les instruments, la deuxième fois repère les changements de tempo.",
    fact:"Changer de consigne d'écoute à chaque passage affine l'oreille bien plus qu'une écoute libre répétée.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"musique_2_2", tier:"court", emoji:"📖", label:"Étape 2 — Utilise trois mots de vocabulaire musical",
    text:"Après une écoute, rédige une critique de cinq lignes en utilisant au moins trois termes précis de vocabulaire musical vus en classe (par exemple tempo, timbre, nuance).",
    fact:"Utiliser un vocabulaire précis oblige à préciser une impression plutôt que de rester sur « c'est beau » ou « c'est nul ».",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"musique_2_3", tier:"court", emoji:"🕰️", label:"Étape 3 — Situe un extrait dans le temps",
    text:"Écoute un extrait inconnu et essaie de le situer approximativement dans l'histoire de la musique à partir d'indices sonores précis (instrumentation, structure), avant de vérifier la vraie période.",
    fact:"Deviner à partir d'indices précis, puis vérifier, ancre mieux les repères chronologiques qu'une simple leçon d'histoire de la musique.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"musique_2_4", tier:"moyen", emoji:"🎸", label:"Étape 4 — Réarrange une chanson connue",
    text:"En groupe, choisis une chanson connue et change un seul paramètre (le tempo, l'instrumentation, l'ordre des parties). Présente ta version et explique ce que ce changement modifie dans l'ambiance.",
    fact:"Changer un seul paramètre à la fois permet de vraiment comprendre l'effet de ce paramètre précis.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"musique_2_5", tier:"moyen", emoji:"✍️", label:"Étape 5 — Écris un couplet sur un rythme donné",
    text:"Écris un court couplet de quatre lignes sur un rythme qu'on te donne, en veillant à ce que les syllabes accentuées du texte tombent sur les temps forts du rythme.",
    fact:"Faire correspondre les accents du texte et ceux du rythme est un vrai travail de composition, pas seulement de rimes.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"musique_2_6", tier:"long", emoji:"🎙️", label:"Étape 6 — Enregistre ta production",
    text:"Enregistre la production de ton groupe (chanson réarrangée ou couplet mis en musique) avec un téléphone ou un ordinateur, puis réécoute-la ensemble.",
    fact:"S'écouter soi-même en enregistrement révèle des détails qu'on ne perçoit jamais en jouant en direct.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"musique_2_7", tier:"long", emoji:"🔧", label:"Étape 7 — Améliore ta production à partir de l'écoute",
    text:"À partir de l'écoute de l'étape 6, note trois améliorations précises et réenregistre au moins une partie de ta production en les appliquant.",
    fact:"Réenregistrer après une écoute critique, plutôt que de s'arrêter au premier essai, est la méthode réelle de production musicale.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getMusique2EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_MUSIQUE_2_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_MUSIQUE_2_ECG_OBJECTS = MUSEE_MUSIQUE_2_ECG_OBJECTS;
window.getMusique2EcgObjectsForParcours = getMusique2EcgObjectsForParcours;
