// SALLE SÉQUENCES — GREC — OS uniquement, 4h/4h/6h/6h (latin au CO requis)
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_SEQ_GREC_COLLEGE_OBJECTS = [
  { id:"gr1_alphabet_dechiffrage", degree:"1", emoji:"🔤", label:"Déchiffrer avant de traduire",
    text:"Face à un mot grec inconnu écrit en capitales, les élèves le déchiffrent lettre à lettre à voix haute avant même de chercher son sens, un réflexe répété chaque semaine sur une liste de mots-clés du cours.",
    fact:"La maîtrise de l'alphabet et de la lecture est un préalable absolu avant toute traduction ; le plan d'études parle d'acquérir la connaissance des notions linguistiques élémentaires dès la première année.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"gr1_mythologie_recit", degree:"1", emoji:"🏺", label:"Raconter un mythe à sa façon",
    text:"Après la lecture d'un mythe grec simple en traduction, chaque élève doit le raconter oralement en changeant un seul élément (le lieu, l'objet magique) sans trahir la structure du récit original.",
    fact:"Le plan d'études signale que les données riches contenues dans les textes, notamment mythologiques, initient progressivement l'élève aux aspects principaux de la culture grecque.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"gr2_premiers_auteurs", degree:"2", emoji:"📜", label:"Premiers pas avec un texte d'auteur",
    text:"Les élèves traduisent en groupe un très court extrait d'un auteur grec facile, phrase par phrase, en s'appuyant sur les acquis morphologiques de l'année précédente avant une mise en commun collective.",
    fact:"Le plan d'études précise que dès la deuxième année, l'élève lit quelques textes d'auteurs faciles et acquiert des notions des dialectes littéraires.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"gr2_expose_culture", degree:"2", emoji:"🎤", label:"Petit exposé de culture grecque",
    text:"Par groupes, les élèves préparent un exposé de 3 minutes sur un aspect de la culture grecque (archéologie, institutions) à partir de documents fournis, restitué ensuite librement sans notes.",
    fact:"La préparation de petits exposés est citée par le plan d'études comme moyen d'initier progressivement l'élève aux aspects principaux de la culture grecque.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"gr3_grands_textes_auteur", degree:"3", emoji:"📖", label:"Aborder les grands textes par auteur",
    text:"Les élèves traduisent et commentent un extrait plus long d'un auteur majeur du programme, en resituant le passage dans l'ensemble de l'œuvre avant de le comparer à un extrait d'un autre auteur du même genre.",
    fact:"Le plan d'études indique que durant les deux dernières années, l'élève aborde les grands textes de la littérature par auteurs ou par thèmes.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"gr3_finesse_traduction", degree:"3", emoji:"🔍", label:"La finesse d'un seul mot",
    text:"Face à un mot grec ayant plusieurs traductions possibles selon le contexte, les élèves comparent les nuances de sens et choisissent la traduction la plus juste, en justifiant leur choix par le contexte précis du passage.",
    fact:"Par l'exercice de la traduction, développer facultés d'analyse grammaticale et finesse linguistique est un objectif explicite du plan d'études en option spécifique.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
  { id:"gr4_travail_recherche_personnel", degree:"4", emoji:"🗂️", label:"Travail de recherche personnel",
    text:"Chaque élève choisit un thème lié à la civilisation grecque étudiée sur les quatre années et mène une recherche personnelle restituée sous forme d'un court exposé illustré par des extraits traduits.",
    fact:"Le plan d'études cite explicitement des travaux personnels ou en groupe (exposés, travaux de recherche) comme activité de fin de cursus.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"gr4_lecture_comparee_traduction", degree:"4", emoji:"📚", label:"Lecture comparée en traduction",
    text:"Les élèves comparent un extrait grec traduit à un texte français d'inspiration antique (théâtre, philosophie) pour identifier ce que la culture occidentale a hérité directement de la pensée grecque.",
    fact:"Le plan d'études rappelle que l'étude du grec conduit à une prise de conscience plus aiguë de sa propre réalité grâce à la référence que constitue la culture classique.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqGrecCollegeObjectsForDegree(degree){ return MUSEE_SEQ_GREC_COLLEGE_OBJECTS.filter(o=>o.degree===degree); }
window.MUSEE_SEQ_GREC_COLLEGE_OBJECTS = MUSEE_SEQ_GREC_COLLEGE_OBJECTS;
window.getSeqGrecCollegeObjectsForDegree = getSeqGrecCollegeObjectsForDegree;
