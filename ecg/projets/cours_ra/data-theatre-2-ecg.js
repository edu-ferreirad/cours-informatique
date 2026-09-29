// SALLE OSP THÉÂTRE — 2e année — le texte s'adresse à l'élève, étape par étape
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_THEATRE_2_ECG_OBJECTS = [
  { id:"theatre_2_1", tier:"court", emoji:"🎭", label:"Étape 1 — Explore ton espace personnel",
    text:"Marche dans l'espace en variant ton niveau (accroupi, debout, sur la pointe des pieds) et ta vitesse, sans parler. Note quand tu te sens le plus à l'aise ou le plus mal à l'aise.",
    fact:"Explorer son propre rapport à l'espace prépare à l'occuper consciemment sur scène plus tard.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"theatre_2_2", tier:"court", emoji:"📖", label:"Étape 2 — Lis un extrait en variant le rythme",
    text:"Lis un court extrait de pièce trois fois : une fois très lentement, une fois à vitesse normale, une fois très vite. Note ce que chaque rythme change dans la compréhension du texte.",
    fact:"Le rythme de la parole transforme le sens perçu d'un texte, indépendamment des mots eux-mêmes.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"theatre_2_3", tier:"court", emoji:"🎨", label:"Étape 3 — Esquisse un décor simple",
    text:"Pour une scène donnée, esquisse en dix minutes un décor minimal (trois éléments maximum) qui suggère le lieu sans le représenter entièrement.",
    fact:"Un décor minimal, bien choisi, en dit souvent plus qu'un décor complet et chargé.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"theatre_2_4", tier:"moyen", emoji:"🎬", label:"Étape 4 — Dirige une scène en tant que metteur en scène",
    text:"Prends le rôle de metteur en scène pour un groupe de camarades : donne trois indications précises de déplacement ou d'intention, puis regarde le résultat et ajuste une indication.",
    fact:"Diriger, même brièvement, fait comprendre les choix qu'un metteur en scène doit faire en permanence.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"theatre_2_5", tier:"moyen", emoji:"🎭", label:"Étape 5 — Travaille une scène à plusieurs niveaux de sens",
    text:"Rejoue une courte scène en ajoutant un sous-texte (ce que le personnage pense vraiment mais ne dit pas) que tu dois faire sentir sans le dire à voix haute.",
    fact:"Faire sentir un sous-texte sans le dire est une des compétences les plus avancées du jeu d'acteur.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"theatre_2_6", tier:"long", emoji:"🎪", label:"Étape 6 — Crée une courte création collective",
    text:"En groupe, crée une scène originale de trois minutes à partir d'un thème donné, en combinant espace, intentions et sous-texte travaillés précédemment.",
    fact:"Combiner plusieurs compétences dans une création originale est plus exigeant que de rejouer un texte déjà écrit.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"theatre_2_7", tier:"long", emoji:"👏", label:"Étape 7 — Présente et analyse ta création",
    text:"Présente ta création à la classe puis, avec ton groupe, analyse à l'oral un choix de mise en scène que vous avez fait et pourquoi.",
    fact:"Analyser ses propres choix après coup développe un regard critique sur sa propre pratique théâtrale.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getTheatre2EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_THEATRE_2_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_THEATRE_2_ECG_OBJECTS = MUSEE_THEATRE_2_ECG_OBJECTS;
window.getTheatre2EcgObjectsForParcours = getTheatre2EcgObjectsForParcours;
