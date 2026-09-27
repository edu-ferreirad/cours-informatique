// ============================================================================
// SALLE SÉQUENCES — BIOLOGIE — COLLÈGE DE GENÈVE
// Attention, particularité de cette discipline (plan d'études DIP 2018-2019,
// p. 36-37) : la biologie n'est discipline fondamentale (DF) qu'en 1ère et
// 2e années (2h/2h). Dès la 3e année, elle ne continue que pour les élèves
// ayant choisi l'option spécifique biologie-chimie (OS BI 3h/3h/4h). Les
// séquences de 3e-4e sont donc explicitement marquées "OS uniquement".
// Contenu original, pas une citation du plan d'études.
// ============================================================================
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_BIOLOGIE_COLLEGE_OBJECTS = [
  // ---------------- 1ère année (DF) : le vivant, diversité et unité ----------------
  { id:"bio1_classification_criteres_maison", degree:"1", emoji:"🧩", label:"Classification : inventer ses propres critères",
    text:"Avant de découvrir la classification scientifique officielle, les élèves reçoivent dix organismes en images et doivent inventer leurs propres critères de classement en petits groupes, puis comparer leur système à la classification biologique réelle.",
    fact:"Le plan d'études demande de développer le sens de l'observation qui permet d'élaborer des critères de classification ; laisser d'abord les élèves construire leurs propres critères rend visible pourquoi la classification scientifique a été choisie ainsi plutôt qu'autrement.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"bio1_protocole_hypothese_elevage", degree:"1", emoji:"🔬", label:"Démarche scientifique : formuler une hypothèse testable",
    text:"Face à une observation simple en classe (des graines qui germent différemment selon leur exposition), les élèves formulent une hypothèse, conçoivent un protocole expérimental complet sur papier, puis le confrontent à celui de l'enseignant avant toute manipulation réelle.",
    fact:"Faire concevoir le protocole avant de le réaliser, plutôt que de suivre une fiche toute faite, développe la faculté de formuler des hypothèses et de les tester que le plan d'études place au cœur des aptitudes attendues en biologie.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"bio1_texte_scientifique_vulgarise", degree:"1", emoji:"📰", label:"Lecture : décortiquer un article de vulgarisation",
    text:"Les élèves lisent un court article de vulgarisation scientifique sur un sujet biologique d'actualité et doivent en extraire, sur une fiche structurée, le fait observé, l'explication proposée et les limites ou incertitudes mentionnées par l'auteur.",
    fact:"Cet exercice développe précisément la capacité, mentionnée par le plan d'études, de comprendre des textes scientifiques simples — une compétence de lecture spécifique, différente de la lecture littéraire travaillée en français.",
    anchor:{distance:1.4, angle:160, height:DESK_H} },

  // ---------------- 2e année (DF, dernière année DF) : cellule, métabolisme, choix d'option ----------------
  { id:"bio2_modele_cellulaire_pate_a_modeler", degree:"2", emoji:"🧫", label:"Modéliser la cellule pour comprendre ses limites",
    text:"Par groupes, les élèves construisent une maquette simplifiée de cellule (pâte à modeler, matériaux de récupération) puis doivent explicitement lister ce que leur modèle représente fidèlement et ce qu'il déforme ou simplifie à l'excès.",
    fact:"Exiger une liste des limites du modèle, pas seulement sa construction, entraîne un regard critique sur les modèles scientifiques eux-mêmes — une posture que le plan d'études rattache à la compréhension de comment se construit le savoir scientifique.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"bio2_debat_choix_option_bio_chimie", degree:"2", emoji:"🧭", label:"Avant de choisir : rencontre avec l'option biologie-chimie",
    text:"En fin de 2e année, les élèves qui hésitent à choisir l'option spécifique biologie-chimie rencontrent des élèves de 3e-4e déjà engagés dans cette option, qui présentent concrètement un exemple de travail pratique mené en laboratoire.",
    fact:"Comme la biologie s'arrête en discipline fondamentale après la 2e année, ce moment de transition organisé et concret aide les élèves à choisir leur option en connaissance de cause plutôt que sur une simple impression du nom de la discipline.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"bio2_rapport_experience_redige", degree:"2", emoji:"📝", label:"Rédiger un vrai rapport d'expérience",
    text:"À l'issue d'une manipulation en laboratoire, les élèves rédigent seuls un rapport complet (hypothèse, matériel, résultats, interprétation) suivant une structure imposée, avant un échange de rapports entre élèves pour une relecture critique croisée.",
    fact:"Le plan d'études cite explicitement la rédaction de rapports comme aptitude à développer au terme de la discipline fondamentale ; c'est aussi la dernière compétence transversale que tous les élèves emportent, y compris ceux qui n'iront pas plus loin en biologie.",
    anchor:{distance:1.8, angle:210, height:DESK_H} },

  // ---------------- 3e année (OS Biologie-Chimie uniquement) : génétique et écologie approfondies ----------------
  { id:"bio3_arbre_genealogique_genetique", degree:"3", emoji:"🧬", label:"OS uniquement — Génétique : résoudre un arbre généalogique",
    text:"Face à un arbre généalogique fictif présentant la transmission d'un caractère sur plusieurs générations, les élèves de l'option spécifique doivent déterminer le mode de transmission le plus probable et prédire la probabilité d'apparition du caractère chez une future génération.",
    fact:"Cette séquence n'existe que pour les élèves ayant choisi l'option spécifique biologie-chimie, puisque la biologie ne fait plus partie du tronc commun dès la 3e année selon la grille horaire officielle de l'ECG.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"bio3_etude_ecosysteme_terrain", degree:"3", emoji:"🌿", label:"OS uniquement — Écologie : inventaire de terrain",
    text:"Lors d'une sortie sur le terrain, les élèves de l'option relèvent méthodiquement les espèces observées dans une zone délimitée et construisent un schéma simplifié des interactions probables entre elles (prédation, compétition, symbiose) avant validation en classe.",
    fact:"Ce travail de terrain répond à l'objectif du plan d'études de comprendre les interactions et l'équilibre entre les espèces et leur environnement — un aspect de l'écologie générale et appliquée difficile à saisir uniquement en classe.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
  { id:"bio3_lien_chimie_biomolecules", degree:"3", emoji:"⚗️", label:"OS uniquement — Séquence croisée avec la chimie : les biomolécules",
    text:"En coordination avec le cours de chimie de l'option, les élèves relient explicitement une structure moléculaire étudiée en chimie (une protéine simple) à sa fonction biologique concrète dans l'organisme, sous forme de schéma légendé.",
    fact:"L'option spécifique biologie-chimie est construite précisément pour renforcer ce lien entre les deux sciences ; le plan d'études indique que ce lien y est spécialement renforcé par rapport à la discipline fondamentale.",
    anchor:{distance:2.3, angle:340, height:WALL_H} },

  // ---------------- 4e année (OS Biologie-Chimie uniquement) : évolution, bioéthique, travail personnel ----------------
  { id:"bio4_debat_bioethique_argumente", degree:"4", emoji:"⚖️", label:"OS uniquement — Bioéthique : débat argumenté encadré",
    text:"Sur un dilemme bioéthique réel et actuel (par exemple un enjeu lié aux biotechnologies), les élèves de l'option préparent un dossier de sources scientifiques et éthiques contradictoires avant un débat structuré où chaque argument doit être sourcé précisément.",
    fact:"Le plan d'études relie explicitement la biologie à la philosophie par la bioéthique ; ce débat en fin de cursus mobilise à la fois la rigueur scientifique et la réflexion éthique développées séparément au fil des quatre années.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"bio4_arbre_evolution_reconstruction", degree:"4", emoji:"🌳", label:"OS uniquement — Évolution : reconstruire un arbre phylogénétique",
    text:"À partir d'un tableau de caractères communs et différents entre plusieurs espèces, les élèves de l'option reconstruisent eux-mêmes un arbre phylogénétique plausible avant de le comparer à l'arbre scientifiquement établi et d'expliquer les éventuels écarts.",
    fact:"Cette reconstruction active met en pratique la connaissance en matière de génétique et d'évolution exigée par le plan d'études, en évitant que l'arbre de l'évolution ne soit reçu comme une simple image à mémoriser.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
  { id:"bio4_travail_personnel_labo", degree:"4", emoji:"🔭", label:"OS uniquement — Amorcer un travail personnel encadré",
    text:"En vue du travail de maturité, les élèves de l'option biologie-chimie amorcent seuls une petite recherche expérimentale ou documentaire sur une question qu'ils ont eux-mêmes formulée, avec un point d'étape encadré par l'enseignant toutes les deux semaines.",
    fact:"Ce format encadré prépare directement à l'autonomie exigée par un futur travail de maturité en lien avec les sciences expérimentales, en gardant un filet de sécurité pédagogique régulier plutôt qu'une autonomie totale et déstabilisante d'un coup.",
    anchor:{distance:4.4, angle:185, height:DESK_H} },
];

function getSeqBiologieCollegeObjectsForDegree(degree) {
  return MUSEE_SEQ_BIOLOGIE_COLLEGE_OBJECTS.filter(o => o.degree === degree);
}
window.MUSEE_SEQ_BIOLOGIE_COLLEGE_OBJECTS = MUSEE_SEQ_BIOLOGIE_COLLEGE_OBJECTS;
window.getSeqBiologieCollegeObjectsForDegree = getSeqBiologieCollegeObjectsForDegree;
