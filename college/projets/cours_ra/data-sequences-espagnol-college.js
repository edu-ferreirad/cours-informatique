// SALLE SÉQUENCES — ESPAGNOL — OS uniquement, 3h/4h/4h/5h (plan d'études p.21)
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_SEQ_ESPAGNOL_COLLEGE_OBJECTS = [
  { id:"es1_survie_quotidien", degree:"1", emoji:"🗣️", label:"Scènes de survie linguistique",
    text:"Par binômes, les élèves jouent des situations de vie courante (au marché, à la gare) en espagnol simple, avec une carte-contrainte tirée au sort (objet perdu, malentendu) qui pimente le dialogue sans complexifier le vocabulaire.",
    fact:"Le plan d'études vise, dès le départ de l'option, à communiquer dans les situations de la vie courante — un objectif qui se construit par la pratique répétée de dialogues simples plutôt que par la seule mémorisation de listes.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"es1_prononciation_chant", degree:"1", emoji:"🎵", label:"Travailler l'accent avec une chanson",
    text:"À partir d'une chanson hispanophone simple, les élèves repèrent les liaisons et l'accent tonique sur des mots clés avant de chanter en petit groupe, un moyen ludique de travailler une bonne prononciation dès la première année.",
    fact:"Le plan d'études mentionne explicitement l'attention particulière accordée à la prononciation dès l'acquisition du vocabulaire de base.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"es2_lecture_texte_varie", degree:"2", emoji:"📖", label:"Lire des textes de complexité croissante",
    text:"Les élèves comparent deux textes sur un même thème, l'un simple et l'autre plus littéraire, et identifient précisément ce qui rend le second plus difficile (vocabulaire, temps verbaux, structure).",
    fact:"Le plan d'études demande de lire, comprendre et analyser des textes de plus en plus complexes et variés — ce contraste direct rend visible la progression attendue.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"es2_discussion_echange_idees", degree:"2", emoji:"💬", label:"Discussion et échange d'idées encadré",
    text:"Sur un sujet culturel simple, les élèves échangent leurs idées en petit groupe, avec la consigne explicite de reformuler l'idée du camarade précédent avant d'ajouter la sienne.",
    fact:"Discuter et échanger des idées est un objectif explicite du plan d'études ; la reformulation imposée développe autant l'écoute que l'expression.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"es3_commentaire_texte_hispanique", degree:"3", emoji:"🔍", label:"Commenter et interpréter un texte",
    text:"Face à un texte littéraire hispanique, les élèves construisent un commentaire structuré en identifiant un thème central et deux procédés d'écriture qui le servent, avant confrontation en petit groupe.",
    fact:"Commenter et interpréter des textes de façon cohérente et critique est un objectif explicite du plan d'études pour cette étape du cursus.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"es3_recherche_personnelle_es", degree:"3", emoji:"🗂️", label:"Effectuer une recherche personnelle",
    text:"Chaque élève choisit un sujet culturel du monde hispanique et mène une petite recherche documentaire en espagnol, restituée sous forme de fiche synthétique présentée oralement.",
    fact:"Effectuer des recherches personnelles est cité explicitement par le plan d'études parmi les aptitudes à développer.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
  { id:"es4_redaction_argumentative", degree:"4", emoji:"✍️", label:"Rédiger un texte argumentatif complet",
    text:"Les élèves rédigent un texte argumentatif structuré sur un sujet de société hispanophone, avec une exigence explicite de nuancer leur position par un contre-argument, corrigé selon une grille précise.",
    fact:"Rédiger progressivement des textes argumentatifs est un objectif explicite de fin de cursus pour l'option spécifique d'espagnol.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"es4_oral_maturite_es", degree:"4", emoji:"🎓", label:"Oral blanc de maturité",
    text:"En conditions d'examen, l'élève tire un extrait du programme, prépare un commentaire en temps limité, puis le présente devant un petit jury de camarades avec une grille de notation simplifiée.",
    fact:"S'entraîner dans des conditions proches de l'examen réel réduit l'écart entre la pratique habituelle en classe et la pression du jour J.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqEspagnolCollegeObjectsForDegree(degree){ return MUSEE_SEQ_ESPAGNOL_COLLEGE_OBJECTS.filter(o=>o.degree===degree); }
window.MUSEE_SEQ_ESPAGNOL_COLLEGE_OBJECTS = MUSEE_SEQ_ESPAGNOL_COLLEGE_OBJECTS;
window.getSeqEspagnolCollegeObjectsForDegree = getSeqEspagnolCollegeObjectsForDegree;
