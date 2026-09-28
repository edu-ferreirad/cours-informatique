// SALLE SÉQUENCES — ANGLAIS — 2e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ANGLAIS_2_COLLEGE_OBJECTS = [
  { id:"an2_debat_point_de_vue", tier:"court", emoji:"💬", label:"Oral : exprimer et défendre un point de vue",
    text:"Sur un sujet simple d'actualité ou tiré d'un texte étudié, les élèves préparent puis défendent oralement un avis personnel argumenté face à la classe, qui doit ensuite reformuler cet avis dans ses propres mots avant de réagir.",
    fact:"Faire reformuler l'avis d'un camarade avant de réagir force une vraie écoute active, condition nécessaire au développement de la compréhension orale détaillée visée par le plan d'études dès la 2e année.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"an2_dictionnaire_bilingue_efficace", tier:"moyen", emoji:"📖", label:"Méthode : utiliser le dictionnaire bilingue sans se tromper",
    text:"Face à un texte contenant des mots à sens multiples, les élèves s'entraînent à choisir la bonne entrée dans un dictionnaire bilingue en fonction du contexte de la phrase, un exercice où le mauvais choix de sens change complètement la compréhension du texte.",
    fact:"Le plan d'études mentionne explicitement l'utilisation efficace d'un dictionnaire bilingue comme objectif de la discipline fondamentale ; savoir choisir la bonne entrée est une compétence à part entière, distincte de la simple consultation.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"an2_texte_genre_varie", tier:"long", emoji:"📰", label:"Compréhension : identifier le genre d'un texte inconnu",
    text:"Les élèves reçoivent plusieurs textes courts de genres différents (article, lettre, extrait littéraire) sans titre ni indication de source et doivent identifier le genre de chacun à partir d'indices formels précis avant de comparer leurs réponses.",
    fact:"Étudier des textes de genres différents, littéraires ou autres, est un objectif explicite de la discipline fondamentale dès la 2e année ; apprendre à reconnaître un genre avant même d'en comprendre tout le contenu accélère la lecture future.",
    anchor:{distance:1.8, angle:210, height:DESK_H} },
];
function getSeqAnglais2CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ANGLAIS_2_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ANGLAIS_2_COLLEGE_OBJECTS = MUSEE_SEQ_ANGLAIS_2_COLLEGE_OBJECTS;
window.getSeqAnglais2CollegeObjectsForParcours = getSeqAnglais2CollegeObjectsForParcours;
