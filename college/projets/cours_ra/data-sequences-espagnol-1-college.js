// SALLE SÉQUENCES — ESPAGNOL — 1ère année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ESPAGNOL_1_COLLEGE_OBJECTS = [
  { id:"espagnol_1_1", tier:"court", emoji:"🗣️", label:"Étape 1 — Joue une scène de survie linguistique",
    text:"Avec un camarade, joue une situation de vie courante (au marché, à la gare) en espagnol simple, avec une carte-contrainte tirée au sort.",
    fact:"Une contrainte imprévue pimente le dialogue sans complexifier le vocabulaire nécessaire.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"espagnol_1_2", tier:"court", emoji:"🎵", label:"Étape 2 — Travaille ton accent avec une chanson",
    text:"Repère les liaisons et l'accent tonique sur des mots clés d'une chanson hispanophone simple, puis chante-la en petit groupe.",
    fact:"Chanter est un moyen ludique de travailler une bonne prononciation dès le début de l'apprentissage.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"espagnol_1_3", tier:"court", emoji:"💬", label:"Étape 3 — Communique dans une situation courante",
    text:"Prépare et joue un court dialogue sur une situation de vie courante avec un camarade, en utilisant le vocabulaire vu en classe.",
    fact:"Communiquer dans les situations de la vie courante est le premier objectif de cette option.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"espagnol_1_4", tier:"moyen", emoji:"📖", label:"Étape 4 — Compare deux niveaux de texte",
    text:"Compare un texte simple et un texte plus littéraire sur un même thème et identifie ce qui rend le second plus difficile.",
    fact:"Voir le contraste entre deux niveaux de texte rend visible la progression attendue au fil des années.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"espagnol_1_5", tier:"moyen", emoji:"💬", label:"Étape 5 — Discute en reformulant",
    text:"Sur un sujet culturel simple, échange des idées en petit groupe en reformulant systématiquement l'idée du camarade précédent avant d'ajouter la tienne.",
    fact:"Cette règle de reformulation développe autant l'écoute que l'expression personnelle.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"espagnol_1_6", tier:"long", emoji:"🔍", label:"Étape 6 — Commente un texte hispanique",
    text:"Face à un texte hispanique simple, identifie un thème central et un procédé d'écriture qui le sert, avant de comparer ta lecture en petit groupe.",
    fact:"Commenter un texte, même simple, prépare progressivement à l'analyse littéraire plus poussée.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"espagnol_1_7", tier:"long", emoji:"🗂️", label:"Étape 7 — Effectue une petite recherche personnelle",
    text:"Choisis un sujet culturel du monde hispanique et mène une petite recherche documentaire, restituée sous forme de fiche présentée oralement.",
    fact:"Effectuer une recherche personnelle est une aptitude explicitement visée par le programme.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqEspagnol1CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ESPAGNOL_1_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ESPAGNOL_1_COLLEGE_OBJECTS=MUSEE_SEQ_ESPAGNOL_1_COLLEGE_OBJECTS;
window.getSeqEspagnol1CollegeObjectsForParcours=getSeqEspagnol1CollegeObjectsForParcours;
