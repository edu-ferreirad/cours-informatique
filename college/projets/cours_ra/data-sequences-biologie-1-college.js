// SALLE SÉQUENCES — BIOLOGIE — 1ère année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_BIOLOGIE_1_COLLEGE_OBJECTS = [
  { id:"bio1_classification_criteres_maison", tier:"court", emoji:"🧩", label:"Classification : inventer ses propres critères",
    text:"Avant de découvrir la classification scientifique officielle, les élèves reçoivent dix organismes en images et doivent inventer leurs propres critères de classement en petits groupes, puis comparer leur système à la classification biologique réelle.",
    fact:"Le plan d'études demande de développer le sens de l'observation qui permet d'élaborer des critères de classification ; laisser d'abord les élèves construire leurs propres critères rend visible pourquoi la classification scientifique a été choisie ainsi plutôt qu'autrement.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"bio1_protocole_hypothese_elevage", tier:"moyen", emoji:"🔬", label:"Démarche scientifique : formuler une hypothèse testable",
    text:"Face à une observation simple en classe (des graines qui germent différemment selon leur exposition), les élèves formulent une hypothèse, conçoivent un protocole expérimental complet sur papier, puis le confrontent à celui de l'enseignant avant toute manipulation réelle.",
    fact:"Faire concevoir le protocole avant de le réaliser, plutôt que de suivre une fiche toute faite, développe la faculté de formuler des hypothèses et de les tester que le plan d'études place au cœur des aptitudes attendues en biologie.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"bio1_texte_scientifique_vulgarise", tier:"long", emoji:"📰", label:"Lecture : décortiquer un article de vulgarisation",
    text:"Les élèves lisent un court article de vulgarisation scientifique sur un sujet biologique d'actualité et doivent en extraire, sur une fiche structurée, le fait observé, l'explication proposée et les limites ou incertitudes mentionnées par l'auteur.",
    fact:"Cet exercice développe précisément la capacité, mentionnée par le plan d'études, de comprendre des textes scientifiques simples — une compétence de lecture spécifique, différente de la lecture littéraire travaillée en français.",
    anchor:{distance:1.4, angle:160, height:DESK_H} },
];
function getSeqBiologie1CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_BIOLOGIE_1_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_BIOLOGIE_1_COLLEGE_OBJECTS = MUSEE_SEQ_BIOLOGIE_1_COLLEGE_OBJECTS;
window.getSeqBiologie1CollegeObjectsForParcours = getSeqBiologie1CollegeObjectsForParcours;
