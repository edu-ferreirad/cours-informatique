// SALLE SÉQUENCES — ARTS VISUELS — 1ère année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ARTS_VISUELS_1_COLLEGE_OBJECTS = [
  { id:"arts_visuels_1_1", tier:"court", emoji:"🍎", label:"Étape 1 — Dessine sans lever le crayon",
    text:"Pose un objet simple devant toi et dessine-le sans lever le crayon ni regarder ta feuille (dessin aveugle). Compare ce croquis à un second dessin classique du même objet.",
    fact:"Le dessin aveugle force à regarder l'objet plutôt que tes habitudes de dessin.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"arts_visuels_1_2", tier:"court", emoji:"🖼️", label:"Étape 2 — Lis un portrait officiel",
    text:"Face à un portrait historique de pouvoir, relève méthodiquement chaque détail (posture, objets, décor) avant de formuler l'intention probable de l'artiste.",
    fact:"Maîtriser le vocabulaire de la lecture d'une œuvre d'art est un objectif de la discipline fondamentale.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"arts_visuels_1_3", tier:"court", emoji:"🎨", label:"Étape 3 — Explore les couleurs primaires",
    text:"Avec seulement les trois couleurs primaires, obtiens cinq couleurs différentes par mélange et nomme chacune.",
    fact:"Explorer le mélange des couleurs de base avant d'utiliser toute la palette développe ton œil.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"arts_visuels_1_4", tier:"moyen", emoji:"🖌️", label:"Étape 4 — Copie puis transforme",
    text:"Copie fidèlement un détail d'une œuvre qu'on te montre, puis transforme ta copie selon une contrainte donnée (change l'époque, la matière).",
    fact:"Copier avant de transformer donne d'abord une base solide avant de prendre des libertés.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"arts_visuels_1_5", tier:"moyen", emoji:"🗨️", label:"Étape 5 — Défends ton goût avec des arguments",
    text:"Choisis une œuvre que tu aimes et une que tu n'aimes pas. Pour chacune, donne trois arguments précis (composition, couleur, intention).",
    fact:"Argumenter un jugement esthétique avec des critères précis distingue une opinion construite d'un simple réflexe.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"arts_visuels_1_6", tier:"long", emoji:"🎯", label:"Étape 6 — Esquisse trois pistes pour un même thème",
    text:"Choisis un thème simple et esquisse trois idées de traitement graphique très différentes pour ce même thème.",
    fact:"Explorer plusieurs pistes avant de choisir est la méthode que suivent les designers avant de se lancer.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"arts_visuels_1_7", tier:"long", emoji:"🎓", label:"Étape 7 — Présente ton projet",
    text:"Présente ton esquisse préférée de l'étape 6 à la classe en expliquant ton choix final.",
    fact:"Expliquer un choix artistique, plutôt que de simplement montrer le résultat, développe ta réflexion.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqArtsVisuels1CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ARTS_VISUELS_1_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ARTS_VISUELS_1_COLLEGE_OBJECTS=MUSEE_SEQ_ARTS_VISUELS_1_COLLEGE_OBJECTS;
window.getSeqArtsVisuels1CollegeObjectsForParcours=getSeqArtsVisuels1CollegeObjectsForParcours;
