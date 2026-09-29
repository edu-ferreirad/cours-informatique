// SALLE SÉQUENCES — ESPAGNOL — 2e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ESPAGNOL_2_COLLEGE_OBJECTS = [
  { id:"espagnol_2_1", tier:"court", emoji:"📖", label:"Étape 1 — Compare deux niveaux de texte",
    text:"Compare un texte simple et un texte plus littéraire sur un même thème, en identifiant ce qui rend le second plus exigeant.",
    fact:"Le programme demande de lire des textes de plus en plus complexes ; ce contraste rend la progression visible.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"espagnol_2_2", tier:"court", emoji:"💬", label:"Étape 2 — Discute en reformulant",
    text:"Sur un sujet culturel, échange des idées en petit groupe en reformulant systématiquement l'idée précédente avant d'ajouter la tienne.",
    fact:"Discuter et échanger des idées est un objectif explicite du programme d'espagnol.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"espagnol_2_3", tier:"court", emoji:"🎧", label:"Étape 3 — Résume un document sonore",
    text:"Écoute un court document sonore en espagnol et résume oralement son contenu principal à un camarade.",
    fact:"Résumer à l'oral consolide la compréhension autant que l'expression.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"espagnol_2_4", tier:"moyen", emoji:"🔍", label:"Étape 4 — Commente et interprète un texte",
    text:"Face à un texte littéraire hispanique, construis un commentaire structuré autour d'un thème central et de deux procédés d'écriture.",
    fact:"Commenter et interpréter un texte de façon cohérente est un objectif central de cette année.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"espagnol_2_5", tier:"moyen", emoji:"🗂️", label:"Étape 5 — Mène une recherche personnelle",
    text:"Choisis un sujet culturel du monde hispanique et mène une recherche restituée sous forme de fiche synthétique présentée oralement.",
    fact:"Effectuer des recherches personnelles est explicitement cité par le programme parmi les aptitudes à développer.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"espagnol_2_6", tier:"long", emoji:"✍️", label:"Étape 6 — Rédige un texte argumentatif",
    text:"Rédige un court texte argumentatif sur un sujet de société hispanophone, avec un contre-argument pour nuancer ta position.",
    fact:"Nuancer sa position, plutôt que de rester sur une seule idée, est ce qui distingue un bon texte argumentatif.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"espagnol_2_7", tier:"long", emoji:"🎓", label:"Étape 7 — Prépare et présente un oral structuré",
    text:"Prépare une courte présentation orale sur un sujet culturel hispanophone et présente-la à la classe avec un support simple.",
    fact:"S'entraîner à l'oral structuré prépare progressivement aux exigences des années suivantes.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqEspagnol2CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ESPAGNOL_2_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ESPAGNOL_2_COLLEGE_OBJECTS=MUSEE_SEQ_ESPAGNOL_2_COLLEGE_OBJECTS;
window.getSeqEspagnol2CollegeObjectsForParcours=getSeqEspagnol2CollegeObjectsForParcours;
