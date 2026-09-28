// ============================================================================
// SALLE SÉQUENCES — INFORMATIQUE — 4e ANNÉE (option complémentaire, 4h)
// Pour les élèves ayant choisi l'OC informatique : approfondissement de
// l'algorithmique, de la modélisation et de projets plus ambitieux.
// ============================================================================
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_INFORMATIQUE_4_COLLEGE_OBJECTS = [
  { id:"in4c_modelisation_probleme_reel", degree:"4", tier:"court", emoji:"🧩", label:"Modéliser un problème avant de coder",
    text:"Face à un problème concret complexe (organiser un tournoi, optimiser un trajet), les élèves de l'OC doivent d'abord identifier les données pertinentes et les simplifier en un modèle abstrait, avant même d'envisager un algorithme.",
    fact:"Le plan d'études cite l'analyse des situations afin d'arriver à une modélisation comme préalable à toute conception de solution algorithmique — une étape souvent négligée quand on se précipite vers le code.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"in4c_comparaison_algorithmes", degree:"4", tier:"court", emoji:"⚖️", label:"Comparer deux algorithmes sur le même problème",
    text:"Les élèves de l'OC résolvent un même problème avec deux algorithmes différents (par exemple deux méthodes de tri) et comparent leurs performances sur des données de tailles croissantes, avant de conclure lequel choisir selon le contexte.",
    fact:"Le plan d'études demande la comparaison critique de plusieurs solutions au regard de la faisabilité et de l'efficacité — un objectif que seule une confrontation empirique directe permet de vraiment ressentir.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"in4m_projet_equipe_specification", degree:"4", tier:"moyen", emoji:"📝", label:"Rédiger un cahier des charges avant de coder en équipe",
    text:"Avant de commencer un projet de groupe, les élèves de l'OC rédigent un court cahier des charges précisant les fonctionnalités attendues et les contraintes, validé par l'enseignant avant que le développement ne commence réellement.",
    fact:"Cette étape reproduit une pratique professionnelle réelle du développement logiciel et évite l'écueil fréquent d'un projet qui change constamment de direction faute d'objectif clair au départ.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"in4m_test_utilisateur_croise", degree:"4", tier:"moyen", emoji:"👥", label:"Test utilisateur croisé entre équipes",
    text:"Une fois un prototype fonctionnel, chaque équipe de l'OC fait tester son outil par une équipe voisine sans aucune explication préalable, et note tous les moments où l'utilisateur hésite ou se trompe, avant une phase de correction ciblée.",
    fact:"Le plan d'études cite la convivialité des solutions informatiques comme critère d'évaluation à part entière ; observer un utilisateur réel se tromper révèle des problèmes qu'aucune relecture du code seul ne montre.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"in4l_projet_final_present", degree:"4", tier:"long", emoji:"🚀", label:"Présentation finale du projet de l'OC",
    text:"Chaque équipe de l'OC présente son projet final devant la classe avec une démonstration en direct, en expliquant les choix de conception effectués et les difficultés rencontrées, suivie de questions techniques improvisées.",
    fact:"Formuler et documenter ses analyses, réflexions et démarches est un objectif explicite du plan d'études ; cette présentation finale mobilise l'ensemble du travail mené sur l'année d'option complémentaire.",
    anchor:{distance:1.8, angle:210, height:DESK_H} },
  { id:"in4l_lien_maths_algo", degree:"4", tier:"long", emoji:"🔗", label:"Un lien avec les applications des mathématiques",
    text:"En lien avec le cours d'applications des mathématiques, les élèves de l'OC informatique implémentent une méthode numérique simple (approximation, simulation) déjà étudiée en mathématiques, pour comparer les deux approches du même problème.",
    fact:"Le plan d'études souligne un caractère interdisciplinaire fondamental entre informatique et applications des mathématiques — ce lien direct clôt le cursus informatique sur une note résolument transversale.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
];
function getSeqInformatique4CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_INFORMATIQUE_4_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_INFORMATIQUE_4_COLLEGE_OBJECTS = MUSEE_SEQ_INFORMATIQUE_4_COLLEGE_OBJECTS;
window.getSeqInformatique4CollegeObjectsForParcours = getSeqInformatique4CollegeObjectsForParcours;
