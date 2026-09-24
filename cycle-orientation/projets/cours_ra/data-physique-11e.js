// ============================================================================
// SALLE PHYSIQUE 11e — "Salle des expériences"
// Contenu original construit à partir des thèmes officiels du Programme
// cantonal Sciences de la nature — Physique 11e (DIP Genève, prescriptions
// cantonales PER, juin 2023) : transformations physiques et chimiques de
// la matière, transferts et transformations d'énergie. Aucun manuel
// disponible pour cette discipline : contenu rédigé pour être fidèle aux
// objectifs officiels.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_PHYSIQUE_11E_OBJECTS = [
  {
    id: "masse_volumique",
    tier: "court",
    emoji: "⚖️",
    label: "La masse volumique, carte d'identité d'une matière",
    text: "À volume égal, deux matières différentes n'ont presque jamais la même masse : le fer coule dans l'eau, le liège flotte. Ce rapport entre la masse et le volume, appelé masse volumique, est une véritable carte d'identité qui permet d'identifier une substance sans même la reconnaître à l'œil nu.",
    fact: "L'or est environ 19 fois plus dense (plus lourd à volume égal) que l'eau — c'est notamment cette densité extrême qui rend les tests d'authenticité de l'or si fiables.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "etats_matiere",
    tier: "court",
    emoji: "🧊",
    label: "Solide, liquide, gazeux : une question de molécules",
    text: "Les trois états de la matière ne sont pas trois matières différentes, mais trois façons dont les mêmes molécules s'organisent : bien rangées et immobiles dans un solide, mobiles mais proches dans un liquide, très dispersées et libres de se déplacer dans un gaz.",
    fact: "Une même quantité d'eau occupe un volume bien plus grand à l'état gazeux (vapeur) qu'à l'état liquide — c'est pourquoi une casserole d'eau qui bout produit un panache de vapeur visible qui semble beaucoup plus \"grand\" que l'eau dont il provient.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "changement_etat",
    tier: "court",
    emoji: "❄️",
    label: "Chaque substance a sa propre température de changement",
    text: "Chaque matière pure change d'état (fond, bout) à une température qui lui est propre et qui ne varie pas tant que le changement d'état est en cours — une propriété si fiable qu'elle sert elle aussi à identifier une substance inconnue.",
    fact: "Tant qu'un glaçon fond, l'eau qui l'entoure reste précisément à 0 °C, même si on continue de chauffer : toute l'énergie apportée sert à faire fondre la glace, pas à faire monter la température, jusqu'à ce que tout soit devenu liquide.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "energies_primaires",
    tier: "court",
    emoji: "⛽",
    label: "Les énergies primaires, matières premières de l'énergie",
    text: "Avant d'être transformées en électricité ou en mouvement, toutes nos sources d'énergie partent d'une énergie primaire directement puisée dans la nature : le charbon, le pétrole, le gaz, l'énergie du vent, du soleil, de l'eau ou de l'atome — chacune avec ses propres avantages et limites.",
    fact: "Le mot \"primaire\" ne veut pas dire \"simple\" : il indique seulement que cette énergie n'a encore subi aucune transformation, contrairement à l'électricité, qui est toujours une énergie secondaire obtenue à partir d'une source primaire.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "transformation_physique_chimique",
    tier: "moyen",
    emoji: "🔄",
    label: "Transformation physique ou chimique ?",
    text: "Faire fondre un glaçon est une transformation physique : l'eau reste de l'eau, seule sa forme change. Brûler du bois est une transformation chimique : de nouvelles substances apparaissent (cendres, fumée) qui n'existaient pas avant, et le bois ne peut plus redevenir du bois.",
    fact: "Le test le plus simple pour distinguer les deux : une transformation physique est généralement réversible (on peut regeler l'eau), une transformation chimique ne l'est presque jamais directement.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "ecriture_chimique",
    tier: "moyen",
    emoji: "🧪",
    label: "Le langage universel des symboles",
    text: "Chaque élément chimique possède un symbole international reconnu partout dans le monde (H pour hydrogène, O pour oxygène, Na pour sodium) — un langage commun qui permet d'écrire une même molécule (comme H₂O pour l'eau) de façon identique, quelle que soit la langue parlée par le scientifique.",
    fact: "Certains symboles chimiques ne correspondent pas du tout au nom français de l'élément : \"Na\" pour le sodium vient du latin \"natrium\", et \"Fe\" pour le fer vient du latin \"ferrum\".",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "reaction_chimique",
    tier: "moyen",
    emoji: "💥",
    label: "Une réaction chimique, rien ne se perd",
    text: "Lors d'une réaction chimique, les réactifs de départ se transforment en produits différents — mais la matière ne disparaît jamais : chaque atome présent au départ se retrouve, réorganisé, dans les produits finaux. C'est ce qu'on appelle la conservation de la matière.",
    fact: "Ce principe de conservation de la matière lors d'une réaction chimique a été formulé avec précision à la fin du XVIIIe siècle par le chimiste français Antoine Lavoisier, souvent résumé par la formule \"rien ne se perd, rien ne se crée, tout se transforme\".",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "diagramme_energie",
    tier: "moyen",
    emoji: "📊",
    label: "Dessiner le trajet de l'énergie",
    text: "Un diagramme d'énergie représente visuellement le parcours de l'énergie dans un système : d'où elle vient, sous quelle forme elle est transformée, et où elle finit par se disperser — un outil qui rend visible un phénomène par ailleurs invisible.",
    fact: "Dans presque tous les diagrammes d'énergie d'appareils réels, une partie de l'énergie finit toujours dispersée sous forme de chaleur non désirée — c'est cette part \"perdue\" que les ingénieurs cherchent sans cesse à réduire.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "conservation_energie",
    tier: "long",
    emoji: "♾️",
    label: "L'énergie ne disparaît jamais vraiment",
    text: "Le principe de conservation de l'énergie affirme que l'énergie totale d'un système isolé reste toujours constante : elle ne se crée pas et ne se détruit pas, elle se transforme seulement d'une forme à une autre (mécanique, thermique, électrique, lumineuse...).",
    fact: "Quand on dit qu'un appareil \"consomme de l'énergie\", il ne la fait pas disparaître : il la transforme en une autre forme, le plus souvent en chaleur, qui se disperse ensuite dans l'environnement de façon difficile à récupérer.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "rendement",
    tier: "long",
    emoji: "📉",
    label: "Le rendement, l'énergie vraiment utile",
    text: "Le rendement d'un appareil compare l'énergie utile qu'il produit à l'énergie totale qu'il consomme au départ. Aucun appareil réel n'atteint un rendement de 100 % : une partie de l'énergie se perd toujours, le plus souvent sous forme de chaleur non désirée.",
    fact: "Une ampoule à incandescence classique a un rendement lumineux très faible : la grande majorité de l'électricité qu'elle consomme part en chaleur plutôt qu'en lumière — c'est en grande partie pour cette raison qu'elle a été progressivement remplacée par les LED, bien plus performantes.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "agitation_moleculaire_temperature",
    tier: "long",
    emoji: "🌡️",
    label: "La température, une agitation invisible",
    text: "À l'échelle moléculaire, la température mesure en réalité l'intensité du mouvement des molécules : plus elles s'agitent vite, plus la température est élevée. Chauffer une substance, c'est littéralement accélérer la danse invisible de ses molécules.",
    fact: "Le zéro absolu (environ -273,15 °C) correspond à la température théorique où l'agitation des molécules serait totalement nulle — une température jamais atteinte exactement, même en laboratoire, mais approchée de très près.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "transfert_energie_mesure",
    tier: "long",
    emoji: "🔌",
    label: "Mesurer un transfert d'énergie",
    text: "Un transfert d'énergie — l'électricité qui fait chauffer une résistance, la lumière qui chauffe une surface — peut être calculé et mesuré expérimentalement, en comparant par exemple l'énergie électrique consommée à l'élévation de température obtenue sur une masse d'eau donnée.",
    fact: "C'est précisément ce type d'expérience — chauffer une masse d'eau connue et mesurer l'élévation de sa température — qui a permis aux physiciens du XIXe siècle d'établir pour la première fois l'équivalence précise entre chaleur et énergie mécanique.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getPhysique11eObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_PHYSIQUE_11E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_PHYSIQUE_11E_OBJECTS = MUSEE_PHYSIQUE_11E_OBJECTS;
window.getPhysique11eObjectsForParcours = getPhysique11eObjectsForParcours;
