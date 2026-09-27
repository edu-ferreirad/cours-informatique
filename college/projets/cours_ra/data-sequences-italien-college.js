// SALLE SÉQUENCES — ITALIEN — DF 4h/3h/3h/3h (tronc commun 1ère), OS dès 2e (4/4/5)
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_SEQ_ITALIEN_COLLEGE_OBJECTS = [
  { id:"it1_sons_prononciation", degree:"1", emoji:"🔊", label:"Chasse aux sons italiens",
    text:"Par petits groupes, les élèves classent une liste de mots italiens selon des sons proches à distinguer (gli/gn, doubles consonnes), en s'enregistrant pour vérifier leur propre prononciation avant correction collective.",
    fact:"Reconnaître et reproduire les sons de la langue italienne est un objectif explicite du tronc commun de 1ère année.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"it1_description_image", degree:"1", emoji:"🖼️", label:"Décrire une image à un camarade aveugle",
    text:"Un élève décrit oralement en italien simple une image qu'il est seul à voir ; son camarade doit la dessiner uniquement à partir de la description avant de comparer les deux versions.",
    fact:"Décrire un lieu, une personne ou une image est cité par le plan d'études comme objectif de compréhension et d'expression orale de 1ère année.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"it2_conversation_spontanee", degree:"2", emoji:"💬", label:"Conversation spontanée minutée",
    text:"Par binômes, les élèves tiennent une conversation de 2 minutes sur un sujet imposé, sans préparation écrite préalable, immédiatement suivie d'un retour du camarade sur un seul point à améliorer.",
    fact:"Participer activement à une conversation et à un échange d'idées est un objectif central de la discipline fondamentale dès la 2e année.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"it2_lecture_diversite_textes", degree:"2", emoji:"📰", label:"Lire des textes de natures différentes",
    text:"Les élèves comparent un article de presse, une chanson et une bande dessinée italienne sur un thème commun, et doivent identifier ce que chaque type de texte permet de dire que les autres ne permettent pas.",
    fact:"Le plan d'études cite explicitement articles de presse, chansons et bandes dessinées parmi les supports à étudier pour découvrir la diversité de la culture italienne.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"it3_frise_litteraire_italie", degree:"3", emoji:"📚", label:"Frise des courants littéraires italiens",
    text:"Par groupes, les élèves associent un court extrait à un courant littéraire italien étudié, en justifiant leur choix par deux indices précis relevés dans le texte, avant confrontation avec le reste de la classe.",
    fact:"Connaître les étapes principales de l'histoire littéraire italienne en identifiant les grands courants est un objectif fondamental de l'option spécifique.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"it3_debat_actualite_it", degree:"3", emoji:"🗣️", label:"Débat sur un texte d'actualité italienne",
    text:"À partir d'un article italien récent, les élèves préparent un avis argumenté puis débattent en classe, avec obligation de citer précisément une phrase du texte à l'appui de chaque argument.",
    fact:"Commenter un texte d'actualité dans une langue correcte, en distinguant les niveaux de langue, est un objectif explicite de l'expression écrite et orale en option spécifique.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
  { id:"it4_recherche_personnelle_oeuvre", degree:"4", emoji:"🔍", label:"Recherche personnelle sur une œuvre",
    text:"Chaque élève choisit une œuvre italienne du programme et mène une recherche personnelle sur son contexte socio-politique et artistique, avant une présentation orale de 5 minutes suivie de questions.",
    fact:"Le plan d'études prévoit explicitement que les élèves soient conduits à effectuer des recherches personnelles sur les œuvres étudiées, situées dans leur contexte.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"it4_oral_maturite_it", degree:"4", emoji:"🎓", label:"Oral blanc de maturité",
    text:"En conditions d'examen, l'élève tire un extrait du programme, prépare un commentaire en temps limité, puis le présente devant un petit jury de camarades qui note selon une grille simplifiée.",
    fact:"S'entraîner en conditions réelles réduit l'écart entre la pratique habituelle en classe et la pression du jour de l'examen de maturité.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqItalienCollegeObjectsForDegree(degree){ return MUSEE_SEQ_ITALIEN_COLLEGE_OBJECTS.filter(o=>o.degree===degree); }
window.MUSEE_SEQ_ITALIEN_COLLEGE_OBJECTS = MUSEE_SEQ_ITALIEN_COLLEGE_OBJECTS;
window.getSeqItalienCollegeObjectsForDegree = getSeqItalienCollegeObjectsForDegree;
