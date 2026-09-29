// SALLE OSP ARTS ET DESIGN — 1re année (découverte) — le texte s'adresse à l'élève, étape par étape
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_ARTS_DESIGN_1_ECG_OBJECTS = [
  { id:"arts_design_1_1", tier:"court", emoji:"✏️", label:"Étape 1 — Dessine le même objet en dix minutes",
    text:"Pose un objet simple devant toi (une chaussure, une tasse) et dessine-le en dix minutes, sans effacer. Affiche ton dessin avec ceux de la classe, sans nom, et regarde ce que chacun a choisi de montrer ou de simplifier.",
    fact:"Comparer des regards différents sur un même objet montre ce que travaille vraiment un designer : un point de vue, pas juste une technique.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"arts_design_1_2", tier:"court", emoji:"🖼️", label:"Étape 2 — Décode une affiche comme un designer",
    text:"Choisis une affiche (publicité, événement) et note : le message principal, à qui elle s'adresse, et trois choix graphiques (couleur, police, disposition) qui servent ce message.",
    fact:"Repérer les choix graphiques volontaires derrière une affiche, c'est la première étape pour apprendre à en créer une toi-même.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"arts_design_1_3", tier:"court", emoji:"🎨", label:"Étape 3 — Crée trois nuances avec une seule couleur",
    text:"Avec une seule couleur de peinture ou de crayon, produis trois nuances différentes (en ajoutant du blanc, en appuyant plus ou moins fort) sur une même feuille, et nomme chaque nuance obtenue.",
    fact:"Explorer les nuances d'une seule couleur avant d'utiliser toute la palette est un exercice classique pour apprendre à voir finement.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"arts_design_1_4", tier:"moyen", emoji:"🏺", label:"Étape 4 — Copie un détail, puis transforme-le",
    text:"Copie fidèlement un détail d'une œuvre qu'on te montre, puis retransforme ta copie selon une contrainte donnée (change l'époque suggérée, ou la matière). Explique en deux phrases tes choix.",
    fact:"Copier avant de transformer est une méthode ancienne : elle donne d'abord une base solide avant de prendre des libertés.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"arts_design_1_5", tier:"moyen", emoji:"🗨️", label:"Étape 5 — Défends ton goût avec trois arguments",
    text:"Choisis une œuvre que tu aimes et une que tu n'aimes pas parmi celles montrées en classe. Pour chacune, donne trois arguments précis (composition, couleur, intention) — jamais seulement « j'aime » ou « je n'aime pas ».",
    fact:"Argumenter un jugement esthétique avec des critères précis est ce qui distingue une opinion personnelle construite d'un simple réflexe.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"arts_design_1_6", tier:"long", emoji:"🎯", label:"Étape 6 — Esquisse ton mini-projet personnel",
    text:"Choisis un thème simple (un animal, un lieu) et esquisse trois idées de traitement graphique très différentes pour ce même thème, en gardant celle que tu préfères pour la développer davantage.",
    fact:"Explorer plusieurs pistes avant de choisir est la méthode que suivent les designers avant de se lancer dans un projet final.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"arts_design_1_7", tier:"long", emoji:"🎓", label:"Étape 7 — Présente ton projet et le concours d'admission",
    text:"Présente ton esquisse de l'étape 6 à la classe en expliquant ton choix final, puis cherche dans la brochure ECG ce qu'exige le concours d'admission en maturité spécialisée arts et design.",
    fact:"Le concours d'admission en maturité spécialisée arts et design se prépare dès maintenant, pas seulement en dernière année.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getArtsDesign1EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_ARTS_DESIGN_1_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_ARTS_DESIGN_1_ECG_OBJECTS = MUSEE_ARTS_DESIGN_1_ECG_OBJECTS;
window.getArtsDesign1EcgObjectsForParcours = getArtsDesign1EcgObjectsForParcours;
