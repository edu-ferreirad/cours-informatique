// SALLE SÉQUENCES — HISTOIRE — 2e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_HISTOIRE_2_COLLEGE_OBJECTS = [
  { id:"hi2_frise_ruptures_continuites", tier:"court", emoji:"📏", label:"Frise annotée : ruptures et continuités",
    text:"Sur une frise chronologique longue de l'époque moderne, chaque élève doit placer un événement donné en le classant explicitement comme « rupture » ou « continuité » par rapport à la période précédente, avec une justification écrite d'une phrase.",
    fact:"Le plan d'études demande d'étudier les continuités et les ruptures comme une des lignes de force de l'enseignement de l'histoire ; forcer un choix explicite entre les deux catégories évite la simple accumulation chronologique de dates isolées.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"hi2_debat_reforme_contradictoire", tier:"moyen", emoji:"🗣️", label:"Débat contradictoire sur une grande réforme",
    text:"Par groupes tirés au sort, les élèves préparent puis débattent des arguments favorables ou défavorables à une réforme majeure de l'époque moderne, avant un vote final en classe sur la base des seuls arguments entendus, pas des convictions de départ.",
    fact:"Le plan d'études évoque explicitement la préparation de débats, par exemple pour des votations en blanc, comme moyen de développer l'écoute d'autrui et le travail en équipe, des compétences sociales fondamentales en démocratie.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"hi2_iconographie_pouvoir", tier:"long", emoji:"🖼️", label:"Analyse d'image : lire un portrait de pouvoir",
    text:"Face à un portrait officiel d'un souverain de l'époque moderne, les élèves relèvent méthodiquement chaque détail visuel (posture, objets, décor) et en déduisent le message de pouvoir voulu, avant de comparer avec un second portrait d'un contexte différent.",
    fact:"Cette lecture méthodique de l'image répond directement à l'objectif du plan d'études d'analyser et de synthétiser des informations iconographiques, une compétence aussi importante que la lecture de texte en histoire.",
    anchor:{distance:1.8, angle:210, height:DESK_H} },
];
function getSeqHistoire2CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_HISTOIRE_2_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_HISTOIRE_2_COLLEGE_OBJECTS = MUSEE_SEQ_HISTOIRE_2_COLLEGE_OBJECTS;
window.getSeqHistoire2CollegeObjectsForParcours = getSeqHistoire2CollegeObjectsForParcours;
