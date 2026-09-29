// SALLE OSP THÉÂTRE — 1re année (découverte) — le texte s'adresse à l'élève, étape par étape
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_THEATRE_1_ECG_OBJECTS = [
  { id:"theatre_1_1", tier:"court", emoji:"🫁", label:"Étape 1 — Travaille ta respiration et ton articulation",
    text:"Fais trois exercices de respiration abdominale, puis lis un virelangue trois fois de plus en plus vite sans perdre la clarté. Note à partir de quelle vitesse tu commences à trébucher.",
    fact:"Le souffle et l'articulation sont la base de toute expression orale, bien avant le jeu d'acteur lui-même.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"theatre_1_2", tier:"court", emoji:"🎭", label:"Étape 2 — Marche avec un masque neutre",
    text:"Marche dans l'espace, arrête-toi, regarde autour de toi, sans exprimer d'émotion particulière sur ton visage (masque neutre). Note ce que ton corps fait quand ton visage ne parle pas.",
    fact:"Le masque neutre concentre l'attention sur ce que dit le corps, indépendamment de l'expression du visage.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"theatre_1_3", tier:"court", emoji:"🎲", label:"Étape 3 — Improvise avec une contrainte tirée au sort",
    text:"Avec deux camarades, tire au sort un lieu et une contrainte (une émotion cachée). Improvise une scène de deux minutes en respectant cette contrainte sans la nommer à voix haute.",
    fact:"Une contrainte précise, plutôt que la liberté totale, débloque souvent plus facilement l'imagination.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"theatre_1_4", tier:"moyen", emoji:"📜", label:"Étape 4 — Dis une même réplique avec trois intentions",
    text:"Choisis une réplique simple (« il fait beau aujourd'hui ») et dis-la trois fois avec trois intentions différentes (convaincre, séduire, menacer). Un camarade devine l'intention à chaque fois.",
    fact:"Une même phrase change complètement de sens selon l'intention qu'on y met : c'est le cœur du jeu d'acteur.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"theatre_1_5", tier:"moyen", emoji:"🎬", label:"Étape 5 — Mets en scène une courte scène",
    text:"En groupe, mets en scène une scène de deux minutes en réfléchissant à l'espace (qui est où), aux déplacements et au volume de la voix. Répète-la une fois avec un retour d'un camarade.",
    fact:"Réfléchir à l'espace et aux déplacements, pas seulement au texte, est ce qui distingue une mise en scène d'une simple lecture.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"theatre_1_6", tier:"long", emoji:"👏", label:"Étape 6 — Présente ta scène devant la classe",
    text:"Présente la scène préparée à l'étape 5 devant la classe. Le public note deux critères précis : la clarté de la voix et l'occupation de l'espace.",
    fact:"Se produire devant un public, même une seule classe, change toujours quelque chose par rapport à la répétition.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"theatre_1_7", tier:"long", emoji:"🔁", label:"Étape 7 — Retravaille ta scène à partir des retours",
    text:"À partir des retours reçus à l'étape 6, choisis un seul élément à améliorer et rejoue ta scène en te concentrant uniquement sur cet élément.",
    fact:"Se concentrer sur un seul élément à la fois pour progresser est plus efficace que vouloir tout corriger en même temps.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getTheatre1EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_THEATRE_1_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_THEATRE_1_ECG_OBJECTS = MUSEE_THEATRE_1_ECG_OBJECTS;
window.getTheatre1EcgObjectsForParcours = getTheatre1EcgObjectsForParcours;
