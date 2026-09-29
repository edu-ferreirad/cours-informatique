// SALLE OSP SANTÉ — 2e année — le texte s'adresse à l'élève, étape par étape
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_SANTE_2_ECG_OBJECTS = [
  { id:"sante_2_1", tier:"court", emoji:"🧮", label:"Étape 1 — Calcule une dose pour un enfant",
    text:"Un médicament fictif se dose à 15 mg par kilo pour un enfant. Calcule la dose exacte pour un enfant de 22 kg, puis convertis-la en millilitres si le médicament est à 50 mg par ml. Vérifie ton résultat avec un camarade avant de le montrer à l'enseignant.",
    fact:"Un seul chiffre décalé dans ce genre de calcul change complètement la réponse : c'est pour ça qu'on le vérifie toujours à deux dans la vraie vie.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"sante_2_2", tier:"court", emoji:"🔬", label:"Étape 2 — Observe une cellule au microscope",
    text:"Prépare une lame simple (par exemple de peau d'oignon) et observe-la au microscope. Dessine ce que tu vois et légende trois structures que tu reconnais (paroi, noyau, cytoplasme).",
    fact:"Le dessin d'observation t'oblige à vraiment regarder, pas juste à savoir par cœur le nom des structures.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"sante_2_3", tier:"court", emoji:"🧠", label:"Étape 3 — Décris une émotion sans la nommer",
    text:"Choisis une émotion (peur, soulagement, colère) et décris-la à un camarade uniquement par ce que le corps fait — sans jamais dire le mot lui-même. Il doit deviner laquelle c'est.",
    fact:"En psychologie, savoir observer les signes d'une émotion chez l'autre est aussi important que savoir la nommer.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"sante_2_4", tier:"moyen", emoji:"⚗️", label:"Étape 4 — Teste le pH de trois liquides",
    text:"Mesure le pH de trois liquides du quotidien (eau, jus de citron, savon dilué) avec du papier pH, note les résultats dans un tableau, et classe-les de l'acide à la base.",
    fact:"Le pH d'un liquide biologique (sang, urine) est une information que les soignants surveillent en permanence.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"sante_2_5", tier:"moyen", emoji:"🩻", label:"Étape 5 — Identifie un os sur un schéma",
    text:"Sur un schéma vierge du squelette qu'on te donne, place les noms de dix os principaux, puis entoure en rouge les trois qui te semblent les plus exposés aux fractures chez un adolescent sportif, en expliquant pourquoi en une phrase chacun.",
    fact:"Relier la structure du corps à un risque concret est une manière de retenir l'anatomie qui reste bien plus longtemps qu'une liste apprise par cœur.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"sante_2_6", tier:"long", emoji:"📊", label:"Étape 6 — Mène ta mini-enquête santé",
    text:"Choisis une habitude de santé (sommeil, écrans, activité physique) et interroge dix camarades avec trois questions précises. Organise les réponses dans un tableau puis dans un graphique simple.",
    fact:"Une enquête bien construite, même petite, se lit et se discute — une opinion seule ne se discute pas de la même façon.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"sante_2_7", tier:"long", emoji:"📣", label:"Étape 7 — Crée ton affiche de prévention",
    text:"À partir des résultats de ton enquête de l'étape 6, conçois une affiche de prévention avec un seul message clair, un chiffre réel tiré de ton enquête, et une image ou un dessin. Présente-la à la classe en trente secondes.",
    fact:"Un message de prévention efficace tient en une phrase et s'appuie sur un vrai chiffre, jamais sur des généralités.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getSante2EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_SANTE_2_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_SANTE_2_ECG_OBJECTS = MUSEE_SANTE_2_ECG_OBJECTS;
window.getSante2EcgObjectsForParcours = getSante2EcgObjectsForParcours;
