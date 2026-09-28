// ============================================================================
// SALLE SÉQUENCES — INFORMATIQUE — 3e ANNÉE
// Particularité de la réforme 2021 : pas d'heures hebdomadaires en 3e année,
// mais une semaine décloisonnée de culture numérique où toutes les
// disciplines participent dans une approche interdisciplinaire (source :
// IRDP, grilles horaires gymnase genevois 2023-2024). Les séquences
// reflètent ce format spécifique — projet d'une semaine, pas un cours classique.
// ============================================================================
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_INFORMATIQUE_3_COLLEGE_OBJECTS = [
  { id:"in3c_info_format_semaine", degree:"3", tier:"court", emoji:"ℹ️", label:"Un format différent : la semaine décloisonnée",
    text:"En 3e année, l'informatique ne suit plus un horaire hebdomadaire classique : une semaine entière est consacrée à la culture numérique, durant laquelle toutes les disciplines participent avec une approche interdisciplinaire, plutôt qu'un cours isolé.",
    fact:"Cette organisation particulière permet de traiter des sujets numériques transversaux (désinformation, empreinte carbone du numérique, intelligence artificielle) que la seule discipline informatique ne peut pas couvrir seule.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"in3c_desinformation_enquete", degree:"3", tier:"court", emoji:"🕵️", label:"Enquêter sur une fausse information en ligne",
    text:"Par groupes, les élèves reçoivent une information douteuse trouvée en ligne et doivent en vérifier l'authenticité en utilisant des méthodes concrètes (recherche d'image inversée, vérification de la source), puis présenter leur enquête à la classe.",
    fact:"L'usage responsable des technologies numériques est un axe central du programme ; ce travail d'enquête pendant la semaine décloisonnée le rend concret et directement applicable à la vie des élèves.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"in3m_empreinte_numerique", degree:"3", tier:"moyen", emoji:"🌍", label:"Calculer l'empreinte carbone d'un usage numérique",
    text:"Les élèves estiment, à l'aide de données fournies, l'impact environnemental de leurs propres habitudes numériques (streaming, stockage cloud) sur une semaine type, puis identifient collectivement des pistes concrètes de réduction.",
    fact:"Ce sujet transversal illustre bien l'esprit interdisciplinaire de la semaine, en croisant informatique et sciences humaines ou sciences expérimentales selon les enseignants impliqués.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"in3m_ia_boite_noire_ethique", degree:"3", tier:"moyen", emoji:"🤖", label:"Tester les limites d'une intelligence artificielle",
    text:"Les élèves testent un outil d'intelligence artificielle accessible en classe sur des tâches précises et doivent noter systématiquement où l'outil se trompe ou produit un résultat biaisé, avant une discussion collective sur ses limites.",
    fact:"Cette approche pratique de test critique, plutôt qu'une seule présentation théorique de l'IA, développe un usage réfléchi et raisonné, exactement l'objectif visé par le volet culture numérique du programme.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"in3l_projet_interdisciplinaire", degree:"3", tier:"long", emoji:"🎨", label:"Restitution finale interdisciplinaire",
    text:"En fin de semaine, chaque groupe présente une production courte (affiche, court diaporama, mini-site) combinant sa discipline principale (histoire, biologie, arts) avec un enjeu numérique traité pendant la semaine, devant plusieurs classes réunies.",
    fact:"Toutes les disciplines de 3e année participant à cette semaine dans une approche interdisciplinaire, la restitution croisée est la meilleure façon de vérifier que le lien entre numérique et discipline a vraiment été construit.",
    anchor:{distance:1.8, angle:210, height:DESK_H} },
];
function getSeqInformatique3CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_INFORMATIQUE_3_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_INFORMATIQUE_3_COLLEGE_OBJECTS = MUSEE_SEQ_INFORMATIQUE_3_COLLEGE_OBJECTS;
window.getSeqInformatique3CollegeObjectsForParcours = getSeqInformatique3CollegeObjectsForParcours;
