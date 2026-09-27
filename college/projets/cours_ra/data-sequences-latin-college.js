// SALLE SÉQUENCES — LATIN — DF 3h/3h/3h/3h (tronc commun 1ère), OS dès 2e (4/4/5)
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_SEQ_LATIN_COLLEGE_OBJECTS = [
  { id:"la1_version_guidee", degree:"1", emoji:"📜", label:"Version guidée pas à pas",
    text:"Face à une phrase latine courte, les élèves identifient d'abord le verbe conjugué, puis le sujet, puis les compléments un par un avant de proposer une traduction complète — jamais l'inverse.",
    fact:"Cette méthode reproduit l'aptitude visée par le plan d'études : comprendre et traduire un texte en repérant d'abord sa structure, plutôt que de deviner un sens global au hasard.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"la1_etymologie_chasse", degree:"1", emoji:"🔤", label:"Chasse à l'étymologie",
    text:"À partir d'une liste de mots latins simples, les élèves cherchent des mots français ou anglais qui en dérivent probablement, avant de vérifier leurs hypothèses dans un dictionnaire étymologique.",
    fact:"Le plan d'études cite explicitement les notions étymologiques comme facilitant l'apprentissage des langues romanes — un lien concret entre le latin et les langues vivantes déjà étudiées.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"la2_civilisation_dossier", degree:"2", emoji:"🏛️", label:"Petit dossier de civilisation romaine",
    text:"Par groupes, les élèves constituent un court dossier sur un aspect de la civilisation romaine (bains, forum, légions) à partir de plusieurs documents fournis, présenté ensuite en 3 minutes à la classe.",
    fact:"Le plan d'études laisse une part de liberté dans le choix des sujets de civilisation en discipline fondamentale — ce dossier en donne une forme concrète et autonome.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"la2_traduction_comparee", degree:"2", emoji:"🔍", label:"Comparer deux traductions d'un même texte",
    text:"Les élèves reçoivent deux traductions différentes d'un même court passage latin et doivent identifier les choix d'interprétation qui les distinguent, avant de proposer leur propre version.",
    fact:"Comparer des traductions rend visible qu'une version n'est jamais unique — un pas vers l'analyse et l'interprétation d'une œuvre visée par le plan d'études.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"la3_analyse_contexte", degree:"3", emoji:"📖", label:"Analyser un texte dans son contexte",
    text:"Face à un texte d'auteur latin étudié en option spécifique, les élèves relient un passage précis à son contexte historique et culturel avant de le commenter à l'oral.",
    fact:"Analyser et commenter un texte latin dans son contexte historique et culturel est un objectif explicite de l'option spécifique dès la 3e année.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"la3_theme_construction", degree:"3", emoji:"✍️", label:"Le thème comme miroir de sa propre langue",
    text:"À partir d'une phrase française simple, les élèves la traduisent en latin (exercice de thème), puis comparent les structures des deux langues pour mieux comprendre le fonctionnement du français lui-même.",
    fact:"Le plan d'études indique que l'exercice de la version aide à mieux maîtriser le fonctionnement et l'expression de sa propre langue — cette séquence rend ce lien explicite.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
  { id:"la4_etude_autonome_auteur", degree:"4", emoji:"🔎", label:"Étudier seul un texte d'auteur",
    text:"Chaque élève choisit un court texte d'un auteur latin étudié, le prépare seul (traduction, analyse), puis le présente à la classe qui pose ensuite des questions sur le contexte et le style.",
    fact:"Étudier seul un texte d'auteur et le présenter est cité par le plan d'études comme objectif spécifique de la 3e-4e année en option spécifique.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"la4_heritage_droit_romain", degree:"4", emoji:"⚖️", label:"L'héritage romain dans le droit suisse",
    text:"En lien avec le cours d'économie et droit, les élèves identifient dans un texte de loi suisse actuel des notions ou termes hérités directement du droit romain étudié en classe.",
    fact:"Le plan d'études signale explicitement l'héritage culturel, politique et juridique de la romanité, en particulier son empreinte sur la Suisse — un lien interdisciplinaire concret en fin de cursus.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqLatinCollegeObjectsForDegree(degree){ return MUSEE_SEQ_LATIN_COLLEGE_OBJECTS.filter(o=>o.degree===degree); }
window.MUSEE_SEQ_LATIN_COLLEGE_OBJECTS = MUSEE_SEQ_LATIN_COLLEGE_OBJECTS;
window.getSeqLatinCollegeObjectsForDegree = getSeqLatinCollegeObjectsForDegree;
