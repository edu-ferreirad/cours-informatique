// SALLE SÉQUENCES — ALLEMAND — DF 3h/3h/3h/3h (tronc commun 1ère), OS dès 2e (4/4/5)
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_SEQ_ALLEMAND_COLLEGE_OBJECTS = [
  { id:"al1_role_play_quotidien", degree:"1", emoji:"🗣️", label:"Jeux de rôle du quotidien",
    text:"Par binômes, les élèves jouent une scène courte de la vie courante (acheter, demander son chemin) en tirant au sort une contrainte (politesse excessive, urgence) qui change le ton sans changer le vocabulaire de base.",
    fact:"Le plan d'études attend en 1ère année une réaction adéquate et personnalisée dans des situations de la vie quotidienne — la contrainte de ton force à sortir du dialogue mémorisé par cœur.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"al1_nacherzahlung_image", degree:"1", emoji:"🖼️", label:"Nacherzählung à partir d'images",
    text:"À partir d'une suite de 4 images muettes, les élèves racontent une histoire courte à l'écrit en allemand simple, avant d'échanger leur texte avec un camarade qui doit redessiner la suite d'images à partir du texte seul.",
    fact:"Ce format correspond directement au Bildgeschichte cité par le plan d'études comme objectif d'expression écrite de 1ère année.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"al2_debat_point_vue_texte", degree:"2", emoji:"💬", label:"Exprimer un point de vue sur un texte",
    text:"Après lecture d'un court texte allemand, chaque élève prépare deux arguments personnels pour ou contre une affirmation qu'il contient, puis les défend à l'oral face à un camarade qui prend la position opposée.",
    fact:"Défendre et argumenter un point de vue sur la base de textes est un objectif explicite de la discipline fondamentale dès la 2e année.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"al2_comprehension_document_sonore", degree:"2", emoji:"🎧", label:"Repérer l'essentiel d'un document sonore",
    text:"Après une seule écoute d'un court reportage, les élèves notent uniquement les informations essentielles (qui, quoi, où) sans transcrire, puis comparent leurs notes en petit groupe avant une deuxième écoute de vérification.",
    fact:"Le plan d'études cite les documents sonores parmi les moyens à utiliser pour développer la compréhension orale — l'interdiction de transcrire force à trier l'essentiel plutôt qu'à tout copier mot à mot.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"al3_expose_defense_sujet", degree:"3", emoji:"🎤", label:"Présenter et défendre un sujet",
    text:"Chaque élève prépare un exposé de 3 minutes sur un sujet culturel germanophone de son choix et doit répondre ensuite à deux questions improvisées posées par des camarades tirés au sort.",
    fact:"Présenter et défendre un sujet fait partie des situations d'expression orale explicitement citées par le plan d'études pour l'option spécifique.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"al3_analyse_texte_litteraire", degree:"3", emoji:"📖", label:"Expliquer un texte littéraire court",
    text:"Face à un court extrait littéraire allemand, les élèves relèvent un procédé stylistique précis et son effet, avant de comparer leur lecture à celle d'un camarade travaillant sur un extrait voisin du même auteur.",
    fact:"Expliquer un texte littéraire est cité comme objectif d'expression orale en option spécifique dès la 3e année.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
  { id:"al4_recherche_transdisciplinaire", degree:"4", emoji:"🔬", label:"Mini-recherche transdisciplinaire",
    text:"En lien avec une autre discipline (histoire ou sciences), les élèves de l'option spécifique mènent une courte recherche documentaire en allemand sur un sujet croisé, avant une restitution orale à la classe.",
    fact:"Le plan d'études évoque explicitement la conduite éventuelle de travaux de recherche transdisciplinaires en option spécifique de 4e année.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"al4_oral_maturite_blanc", degree:"4", emoji:"🎓", label:"Oral blanc de maturité",
    text:"En conditions d'examen, l'élève tire un texte du programme, dispose d'un temps de préparation, puis présente et commente l'extrait devant deux camarades jouant le rôle de jury avec une grille simplifiée.",
    fact:"S'entraîner avec un vrai chronométrage et une grille de notation réduit l'écart entre l'entraînement habituel en classe et la pression du jour de l'examen de maturité.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqAllemandCollegeObjectsForDegree(degree){ return MUSEE_SEQ_ALLEMAND_COLLEGE_OBJECTS.filter(o=>o.degree===degree); }
window.MUSEE_SEQ_ALLEMAND_COLLEGE_OBJECTS = MUSEE_SEQ_ALLEMAND_COLLEGE_OBJECTS;
window.getSeqAllemandCollegeObjectsForDegree = getSeqAllemandCollegeObjectsForDegree;
