// SALLE SÉQUENCES — FRANÇAIS — 2e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_FRANCAIS_2_COLLEGE_OBJECTS = [
  { id:"francais_2_1", tier:"court", emoji:"🖼️", label:"Étape 1 — Analyse un mouvement littéraire par une scène muette",
    text:"Avec ton groupe, prépare une scène de deux minutes qui incarne les valeurs d'un mouvement littéraire (romantisme, réalisme) sans jamais le nommer. La classe doit deviner lequel et justifier avec des indices précis.",
    fact:"Faire deviner un mouvement à partir de ses valeurs, plutôt que de le définir, t'oblige à comprendre ce qui le distingue vraiment.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"francais_2_2", tier:"court", emoji:"🔎", label:"Étape 2 — Trouve les défauts de deux faux plans",
    text:"Ton enseignant te donne deux plans de dissertation volontairement imparfaits sur le même sujet. Identifie précisément ce qui manque à chacun avant de construire ton propre plan amélioré.",
    fact:"Repérer les défauts d'un plan qu'on n'a pas écrit soi-même développe un regard critique transférable à tes propres écrits.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"francais_2_3", tier:"court", emoji:"📐", label:"Étape 3 — Construis un axe d'analyse à partir d'une seule citation",
    text:"Tu reçois une seule citation extraite d'un texte étudié, sans le reste. Construis un axe d'analyse complet à partir d'elle seule, puis confronte ta lecture à celle d'un camarade qui a une citation voisine.",
    fact:"Travailler à partir d'une citation isolée reproduit exactement la contrainte réelle de l'épreuve de commentaire composé.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"francais_2_4", tier:"moyen", emoji:"🧵", label:"Étape 4 — Relie trois œuvres par un même fil thématique",
    text:"Reprends trois œuvres étudiées cette année et trouve un fil thématique commun (l'exil, le pouvoir, l'amour impossible). Pour chaque œuvre, note un exemple précis qui appuie ce fil.",
    fact:"Relier plusieurs œuvres, plutôt que de les garder isolées, construit une compréhension globale et personnelle de la littérature.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"francais_2_5", tier:"moyen", emoji:"🎤", label:"Étape 5 — Passe un oral blanc chronométré",
    text:"Tire au sort un extrait d'une œuvre du programme. Tu as vingt minutes de préparation, puis dix minutes d'oral devant deux camarades qui jouent le jury avec une grille de notation simplifiée.",
    fact:"S'entraîner avec un vrai chronométrage et une vraie grille réduit l'écart entre l'entraînement habituel et la pression du jour de l'examen.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"francais_2_6", tier:"long", emoji:"⏱️", label:"Étape 6 — Rédige une dissertation en temps limité",
    text:"Rédige une dissertation complète en temps limité et sans documents. Une fois terminée, échange ta copie avec un camarade qui doit repérer un point fort et une faiblesse précise, pas une impression générale.",
    fact:"Recevoir une critique construite d'un pair, avant la correction de l'enseignant, t'habitue à ce moment délicat de l'examen.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"francais_2_7", tier:"long", emoji:"🗣️", label:"Étape 7 — Reformule l'avis d'un camarade avant de répondre",
    text:"Dans un débat sur un texte étudié, avant de répondre à un camarade, reformule d'abord son argument dans tes propres mots. Il doit confirmer que tu l'as bien compris avant que tu ne répondes.",
    fact:"Cette règle simple améliore immédiatement la qualité des débats en classe, en évitant les faux dialogues où personne n'écoute vraiment.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqFrancais2CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_FRANCAIS_2_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_FRANCAIS_2_COLLEGE_OBJECTS=MUSEE_SEQ_FRANCAIS_2_COLLEGE_OBJECTS;
window.getSeqFrancais2CollegeObjectsForParcours=getSeqFrancais2CollegeObjectsForParcours;
