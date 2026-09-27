// SALLE SÉQUENCES — CHIMIE — DF années 1-2 seulement (2h/2h), puis discipline
// uniquement via OS biologie-chimie (années 2-4). Séquences 3e-4e marquées "OS uniquement".
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_SEQ_CHIMIE_COLLEGE_OBJECTS = [
  { id:"ch1_separation_methodes", degree:"1", emoji:"🧪", label:"Trouver la bonne méthode de séparation",
    text:"Face à un mélange concret (sable et eau, huile et eau), les élèves doivent choisir et justifier la méthode de séparation adaptée à ses propriétés physiques, avant de la tester réellement en laboratoire.",
    fact:"Le plan d'études demande de choisir une méthode de séparation en fonction de propriétés physiques — un exercice qui exige de comprendre pourquoi une méthode fonctionne, pas seulement de la suivre.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"ch1_tableau_periodique_enquete", degree:"1", emoji:"🔬", label:"Enquête dans le tableau périodique",
    text:"Par petits groupes, les élèves doivent retrouver, à partir d'indices donnés (nombre d'électrons, position), trois éléments cachés dans le tableau périodique, sans jamais l'utiliser comme simple liste à consulter passivement.",
    fact:"Exploiter les informations contenues dans le tableau périodique est un objectif explicite de la discipline fondamentale ; le jeu d'enquête force une lecture active plutôt qu'une consultation superficielle.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"ch2_equilibrer_reaction", degree:"2", emoji:"⚗️", label:"Équilibrer une réaction par tâtonnement contrôlé",
    text:"Face à une équation chimique non équilibrée, les élèves doivent trouver les bons coefficients par essais successifs justifiés, en vérifiant à chaque étape la conservation du nombre d'atomes de chaque élément.",
    fact:"Formaliser et équilibrer des réactions chimiques simples est un objectif explicite de fin de discipline fondamentale, avec une maîtrise des aspects quantitatifs associés.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"ch2_rapport_experience_ph", degree:"2", emoji:"📝", label:"Rapport d'expérience : mesurer un pH",
    text:"Après une manipulation mesurant le pH de plusieurs solutions du quotidien, les élèves rédigent un rapport complet suivant une structure imposée, avant un échange de rapports pour une relecture critique croisée.",
    fact:"La rédaction de rapports d'expérience conclut la discipline fondamentale de chimie, dernière compétence commune à tous les élèves avant que la discipline ne devienne optionnelle.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"ch3_reaction_organique_os", degree:"3", emoji:"🧬", label:"OS uniquement — Prévoir une réaction organique",
    text:"Les élèves de l'option spécifique reçoivent la formule d'une molécule organique simple et doivent prévoir le produit d'une réaction courante avant de vérifier leur prédiction avec l'enseignant.",
    fact:"Prévoir et décrire les principales réactions de chimie organique est un objectif explicite de l'option spécifique, plus exigeant que la discipline fondamentale qui s'arrête à la chimie minérale de base.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"ch3_lien_biochimie_os", degree:"3", emoji:"🔗", label:"OS uniquement — De la molécule à la fonction biologique",
    text:"En coordination avec le cours de biologie de l'option, les élèves relient une structure moléculaire étudiée en chimie à sa fonction biologique concrète dans l'organisme, sous forme de schéma légendé.",
    fact:"Le plan d'études signale que le lien entre chimie et biologie est spécialement renforcé dans l'option spécifique biologie-chimie par rapport à la discipline fondamentale.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
  { id:"ch4_energie_reaction_os", degree:"4", emoji:"⚡", label:"OS uniquement — D'où vient l'énergie d'une pile ?",
    text:"Les élèves de l'option construisent une pile simple en laboratoire et doivent expliquer, à partir des réactions chimiques en jeu, d'où provient précisément l'énergie électrique produite.",
    fact:"Comprendre les principes de production d'énergie électrique à partir de phénomènes chimiques (piles) est un objectif explicite de fin de cursus en option spécifique.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"ch4_bigbang_matiere_os", degree:"4", emoji:"🌠", label:"OS uniquement — De l'univers primitif aux atomes",
    text:"Les élèves de l'option présentent en groupe, sous forme de frise commentée, les grandes étapes de la formation des premiers atomes après le big-bang, en reliant chaque étape à une notion de chimie déjà étudiée.",
    fact:"Décrire l'évolution de la matière dans l'univers à la lumière des théories récentes est un objectif explicite de fin de cursus, qui relie la chimie à une perspective historique et cosmologique large.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqChimieCollegeObjectsForDegree(degree){ return MUSEE_SEQ_CHIMIE_COLLEGE_OBJECTS.filter(o=>o.degree===degree); }
window.MUSEE_SEQ_CHIMIE_COLLEGE_OBJECTS = MUSEE_SEQ_CHIMIE_COLLEGE_OBJECTS;
window.getSeqChimieCollegeObjectsForDegree = getSeqChimieCollegeObjectsForDegree;
