// SALLE SÉQUENCES — FRANÇAIS — 3e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_FRANCAIS_3_COLLEGE_OBJECTS = [
  { id:"fr3_frise_mouvements", tier:"court", emoji:"🖼️", label:"Histoire littéraire : la frise vivante des mouvements",
    text:"Par groupes, les élèves préparent une courte scène (2 minutes) incarnant les valeurs d'un mouvement littéraire (romantisme, réalisme, symbolisme) sans jamais nommer le mouvement — le reste de la classe doit l'identifier et justifier son choix par des indices précis.",
    fact:"Faire deviner un mouvement littéraire à partir de ses valeurs incarnées, plutôt que de le définir directement, oblige les élèves à comprendre ce qui distingue vraiment chaque courant plutôt qu'à mémoriser une liste de dates et d'auteurs.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"fr3_dissertation_plan_contradictoire", tier:"moyen", emoji:"📐", label:"Dissertation : construire un plan à partir de deux plans faux",
    text:"L'enseignant distribue deux plans de dissertation volontairement imparfaits sur le même sujet (l'un trop descriptif, l'autre sans exemples) ; les élèves doivent identifier précisément ce qui manque à chacun avant de construire leur propre plan amélioré.",
    fact:"Apprendre à repérer les défauts d'un plan qu'on n'a pas écrit soi-même développe un regard critique transférable, souvent plus efficace que la seule correction d'un plan personnel déjà chargé d'affect.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
  { id:"fr3_commentaire_compose_atelier", tier:"long", emoji:"🔬", label:"Commentaire composé : l'atelier des citations isolées",
    text:"Chaque élève reçoit une seule citation extraite d'un texte étudié (sans le reste du texte) et doit en tirer un axe d'analyse complet avant de confronter son interprétation à celle d'un camarade ayant reçu une citation voisine dans le même texte.",
    fact:"Partir d'une citation isolée, sans le confort du texte complet sous les yeux, reproduit la contrainte réelle de l'épreuve de commentaire composé où l'élève doit construire une lecture fine à partir d'un support limité.",
    anchor:{distance:2.3, angle:340, height:WALL_H} },
];
function getSeqFrancais3CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_FRANCAIS_3_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_FRANCAIS_3_COLLEGE_OBJECTS = MUSEE_SEQ_FRANCAIS_3_COLLEGE_OBJECTS;
window.getSeqFrancais3CollegeObjectsForParcours = getSeqFrancais3CollegeObjectsForParcours;
