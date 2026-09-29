// SALLE SÉQUENCES — ANGLAIS — 4e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ANGLAIS_4_COLLEGE_OBJECTS = [
  { id:"anglais_4_1", tier:"court", emoji:"🔍", label:"Étape 1 — Mène une recherche documentée",
    text:"Choisis un sujet lié au monde anglophone et mène une recherche documentaire en anglais sur deux à trois semaines, en notant tes sources au fur et à mesure.",
    fact:"Noter ses sources au fur et à mesure évite une course contre la montre pénible à la fin de la recherche.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"anglais_4_2", tier:"court", emoji:"🎓", label:"Étape 2 — Passe un oral blanc filmé",
    text:"En condition d'examen, tire au sort un support (image ou court texte), prépare-toi en temps limité, puis fais un oral filmé de quelques minutes.",
    fact:"Se filmer permet de se revoir soi-même après coup, ce qu'aucun retour oral seul ne permet aussi précisément.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"anglais_4_3", tier:"court", emoji:"📝", label:"Étape 3 — Structure un essai académique",
    text:"Rédige l'introduction d'un essai académique anglo-saxon : une thèse claire (thesis statement) suivie d'une annonce du plan, sur un sujet culturel de ton choix.",
    fact:"La structure anglo-saxonne, différente de la dissertation à la française, te prépare aux exigences des études supérieures anglophones.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"anglais_4_4", tier:"moyen", emoji:"🎤", label:"Étape 4 — Présente ta recherche à la classe",
    text:"Présente ta recherche de l'étape 1 en exposé d'actualité devant la classe, puis réponds à des questions improvisées posées par tes camarades.",
    fact:"Les questions improvisées, à la fin, évitent que l'exposé ne se réduise à une récitation apprise par cœur.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"anglais_4_5", tier:"moyen", emoji:"🔎", label:"Étape 5 — Réécoute-toi et identifie tes tics de langage",
    text:"Réécoute l'enregistrement de ton oral blanc de l'étape 2 seul, et note précisément deux tics de langage ou hésitations que tu n'avais pas remarqués en le faisant.",
    fact:"Se revoir soi-même révèle des points faibles qu'aucun retour extérieur seul ne pointe aussi précisément.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"anglais_4_6", tier:"long", emoji:"📝", label:"Étape 6 — Rédige un essai académique complet",
    text:"Rédige un essai académique complet (introduction, paragraphes à idée unique, conclusion) sur un sujet culturel ou de société, selon la grille d'évaluation donnée à l'avance.",
    fact:"Connaître la grille à l'avance te permet de t'auto-évaluer avant même de rendre ton travail.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"anglais_4_7", tier:"long", emoji:"🎓", label:"Étape 7 — Passe ton oral blanc final",
    text:"Passe un dernier oral blanc en conditions réelles d'examen de maturité, puis compare ta performance à celle de ton premier oral blanc de l'année : qu'est-ce qui a vraiment progressé ?",
    fact:"Comparer ta première et ta dernière performance de l'année rend tes progrès concrets et visibles, pas juste ressentis.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqAnglais4CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ANGLAIS_4_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ANGLAIS_4_COLLEGE_OBJECTS=MUSEE_SEQ_ANGLAIS_4_COLLEGE_OBJECTS;
window.getSeqAnglais4CollegeObjectsForParcours=getSeqAnglais4CollegeObjectsForParcours;
