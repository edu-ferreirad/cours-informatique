// SALLE OSP THÉÂTRE — 3e année — le texte s'adresse à l'élève, étape par étape
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_THEATRE_3_ECG_OBJECTS = [
  { id:"theatre_3_1", tier:"court", emoji:"🎭", label:"Étape 1 — Compare deux mises en scène d'un même texte",
    text:"Regarde deux extraits vidéo de mises en scène différentes d'une même scène célèbre et note trois différences de choix (espace, rythme, ton).",
    fact:"Comparer deux mises en scène révèle qu'un même texte peut être interprété de façons très différentes.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"theatre_3_2", tier:"court", emoji:"📜", label:"Étape 2 — Analyse la dramaturgie d'une scène",
    text:"Sur un extrait de pièce, identifie qui veut quoi, quel obstacle s'y oppose, et comment la tension évolue au fil de la scène.",
    fact:"Repérer désir et obstacle est la base de l'analyse dramaturgique, quel que soit le genre de la pièce.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"theatre_3_3", tier:"court", emoji:"🕺", label:"Étape 3 — Explore mouvement et chorégraphie",
    text:"Improvise trois minutes de mouvement sur une musique donnée, en cherchant à raconter une émotion uniquement par le corps, sans texte ni visage expressif.",
    fact:"Raconter par le mouvement seul prépare à une forme de théâtre où le texte n'est pas la seule ressource.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"theatre_3_4", tier:"moyen", emoji:"🎬", label:"Étape 4 — Conçois une courte création de spectacle",
    text:"En groupe, esquisse le déroulé d'un très court spectacle (trois minutes) avec un début, un climax et une fin, en précisant qui fait quoi sur scène à chaque moment.",
    fact:"Structurer un spectacle en moments clés, même très court, est la base de la création de spectacle.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"theatre_3_5", tier:"moyen", emoji:"🎭", label:"Étape 5 — Répète en intégrant un retour extérieur",
    text:"Fais répéter ta scène par un camarade extérieur au groupe qui n'a jamais vu le texte, et note ce qu'il comprend ou ne comprend pas sans explication préalable.",
    fact:"Un regard extérieur neuf révèle des incompréhensions invisibles pour ceux qui connaissent déjà la scène par cœur.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"theatre_3_6", tier:"long", emoji:"🎪", label:"Étape 6 — Finalise ta création de spectacle",
    text:"Finalise la création commencée à l'étape 4 en intégrant les retours reçus, et répète-la en entier au moins deux fois.",
    fact:"Répéter en entier, pas seulement par fragments, est indispensable pour sentir le rythme global d'un spectacle.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"theatre_3_7", tier:"long", emoji:"🎓", label:"Étape 7 — Présente ton spectacle et le chemin vers le métier",
    text:"Présente ta création finale à la classe, puis cherche dans la brochure ECG comment se déroule l'admission aux formations de comédien (dossier, entretien, concours ou examen).",
    fact:"Savoir que l'admission se fait sur dossier, entretien, concours ou examen selon les écoles permet d'anticiper cette sélection bien avant la fin du cursus.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getTheatre3EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_THEATRE_3_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_THEATRE_3_ECG_OBJECTS = MUSEE_THEATRE_3_ECG_OBJECTS;
window.getTheatre3EcgObjectsForParcours = getTheatre3EcgObjectsForParcours;
