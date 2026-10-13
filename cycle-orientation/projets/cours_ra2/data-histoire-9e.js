// ============================================================================
// SALLE HISTOIRE 9e — "Antiquité et Moyen Âge"
// Contenu reformulé à partir des chapitres du manuel officiel romand
// Histoire 9e (CIIP) : Le monde grec antique, Alexandrie, L'Empire romain,
// Les royaumes barbares, Al-Andalus, La féodalité, Les croisades, L'Église
// et l'art religieux, Seigneuries/villes/cantons en Suisse. Aucun énoncé
// n'est copié tel quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_HISTOIRE_9E_OBJECTS = [
  {
    id: "democratie_athenienne",
    tier: "court",
    emoji: "🏛️",
    label: "La démocratie, une invention athénienne",
    text: "À Athènes, à partir du Ve siècle avant J.-C., les citoyens (une minorité de la population : ni les femmes, ni les esclaves, ni les étrangers n'y participaient) se réunissaient pour voter directement les lois et les décisions importantes de la cité — une pratique politique alors radicalement nouvelle.",
    fact: "Le mot \"démocratie\" vient du grec \"demos\" (le peuple) et \"kratos\" (le pouvoir) — littéralement \"le pouvoir du peuple\", même si ce peuple était, dans les faits, restreint à une petite partie des habitants de la cité.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "jeux_olympiques_antiques",
    tier: "court",
    emoji: "🏃",
    label: "Les Jeux olympiques antiques",
    text: "Nés en Grèce antique, les Jeux olympiques mêlaient compétition sportive et religion : ils étaient dédiés au dieu Zeus, et une trêve sacrée devait suspendre les guerres entre cités le temps des jeux. Les femmes n'y participaient pas comme athlètes et ne pouvaient généralement pas assister aux épreuves des hommes.",
    fact: "Lors de la relance des Jeux olympiques modernes, Pierre de Coubertin s'opposait fermement à la participation des femmes — il a fallu attendre 2007 pour que l'ouverture de toutes les disciplines aux femmes devienne obligatoire aux JO.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "alexandrie_hellenistique",
    tier: "court",
    emoji: "📚",
    label: "Alexandrie, carrefour du monde grec",
    text: "Fondée par Alexandre le Grand en Égypte, Alexandrie est devenue l'une des plus grandes villes du monde antique, célèbre pour sa bibliothèque immense et son phare légendaire — un symbole du rayonnement de la culture grecque bien après la mort d'Alexandre, jusqu'en Afrique du Nord.",
    fact: "La bibliothèque d'Alexandrie aurait rassemblé plusieurs centaines de milliers de rouleaux de papyrus, un rêve d'exhaustivité du savoir mondial jamais vraiment reproduit depuis dans l'Antiquité.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "empire_romain_expansion",
    tier: "court",
    emoji: "🦅",
    label: "L'Empire romain, un monde unifié",
    text: "À son apogée, l'Empire romain reliait par un même réseau de routes, de lois et d'administration des territoires allant de la Bretagne à l'Égypte, en passant par la Suisse actuelle — une unification politique et culturelle sans précédent dans l'histoire européenne.",
    fact: "Le réseau routier romain était si bien construit que certains tronçons de voies romaines sont restés utilisables, voire visibles, près de deux mille ans plus tard.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "royaumes_barbares",
    tier: "moyen",
    emoji: "⚔️",
    label: "Après Rome, des royaumes barbares",
    text: "Après la chute de l'Empire romain d'Occident, plusieurs peuples venus d'ailleurs en Europe (Francs, Wisigoths, Ostrogoths...) ont fondé de nouveaux royaumes sur les anciennes terres romaines — mêlant souvent leurs propres traditions à l'héritage administratif et culturel romain qu'ils trouvaient sur place.",
    fact: "Le terme \"barbare\", utilisé à l'époque par les Romains pour désigner ces peuples, ne signifiait pas \"violent\" mais simplement \"étranger, qui ne parle pas le grec ni le latin\" — un jugement culturel plus qu'une description de leurs mœurs.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "al_andalus",
    tier: "moyen",
    emoji: "🕌",
    label: "Al-Andalus, l'Espagne musulmane",
    text: "Entre le VIIIe et le XVe siècle, une grande partie de la péninsule Ibérique a été gouvernée par des dynasties musulmanes, donnant naissance à Al-Andalus : une société où cohabitaient, avec des tensions mais aussi des échanges féconds, populations musulmanes, chrétiennes et juives.",
    fact: "Cordoue, capitale d'Al-Andalus à son apogée, était l'une des plus grandes villes du monde médiéval, réputée pour ses bibliothèques et ses savants en médecine, en astronomie et en philosophie.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "feodalite",
    tier: "moyen",
    emoji: "🏰",
    label: "La féodalité, un réseau de fidélités",
    text: "Dans la société féodale médiévale, un seigneur accordait une terre (un fief) à un vassal en échange de sa fidélité et de son aide militaire — un système de liens personnels et hiérarchiques qui structurait toute la société, du roi jusqu'au plus petit chevalier.",
    fact: "Un même seigneur pouvait être à la fois vassal d'un roi plus puissant que lui et suzerain de plusieurs vassaux plus modestes — la pyramide féodale ressemblait ainsi à un empilement de fidélités croisées plutôt qu'à une simple hiérarchie à deux niveaux.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "croisades",
    tier: "moyen",
    emoji: "✝️",
    label: "Les croisades, entre foi et conquête",
    text: "À partir de la fin du XIe siècle, plusieurs expéditions militaires appelées croisades sont parties d'Europe occidentale vers le Proche-Orient, officiellement pour reprendre les lieux saints chrétiens, mêlant motivations religieuses, politiques et économiques bien plus complexes que le seul motif spirituel affiché.",
    fact: "Les croisades ont aussi favorisé, malgré les violences qu'elles ont causées, des échanges commerciaux et culturels durables entre l'Europe et le Proche-Orient, notamment via les grandes villes marchandes italiennes comme Venise ou Gênes.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "eglise_art_religieux",
    tier: "long",
    emoji: "⛪",
    label: "L'Église, une puissance omniprésente",
    text: "Au Moyen Âge, l'Église catholique n'était pas seulement une autorité religieuse : elle possédait des terres immenses, influençait la politique des rois, et a financé la construction de cathédrales gigantesques — d'abord dans un style roman massif, puis gothique, plus élancé et lumineux.",
    fact: "Construire une grande cathédrale gothique pouvait prendre plusieurs générations : certains ouvriers et architectes qui en posaient les premières pierres savaient qu'ils ne verraient jamais l'édifice achevé.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "seigneuries_villes_cantons_suisse",
    tier: "long",
    emoji: "🇨🇭",
    label: "Naissance des cantons suisses",
    text: "Entre seigneuries rurales et villes en plein essor commercial, plusieurs communautés des Alpes centrales ont progressivement conclu des alliances défensives mutuelles à partir du XIIIe siècle, posant les bases de ce qui deviendra, siècle après siècle, la Confédération suisse.",
    fact: "Le pacte fédéral de 1291, souvent présenté comme un acte fondateur de la Suisse, n'était pas un événement isolé : il s'inscrit dans une longue série d'alliances régionales similaires conclues par différentes communautés alpines à la même époque.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "villes_medievales_guildes",
    tier: "long",
    emoji: "🏘️",
    label: "Les villes médiévales et leurs métiers",
    text: "À partir du XIIe siècle, l'essor du commerce a fait grandir de nombreuses villes européennes, où les artisans et marchands d'un même métier s'organisaient en guildes (ou corporations) pour fixer des règles communes de qualité, de prix et de formation des apprentis.",
    fact: "Pour devenir maître dans sa guilde, un apprenti devait souvent produire un \"chef-d'œuvre\" — une pièce de démonstration technique jugée par les maîtres déjà établis, une pratique qui a donné son sens actuel au mot français.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "femmes_histoire_medievale",
    tier: "long",
    emoji: "♀️",
    label: "Les femmes, presque absentes des sources",
    text: "Retracer la vie des femmes dans l'Antiquité et au Moyen Âge est particulièrement difficile pour les historiens : la plupart des sources écrites de l'époque ont été produites par des hommes, souvent sans grand intérêt pour la vie quotidienne ou le statut réel des femmes, qu'il faut alors reconstituer à partir d'indices indirects.",
    fact: "Certaines découvertes archéologiques récentes (tombes richement équipées, restes osseux réanalysés) ont conduit les historiens à revoir certaines conclusions trop rapides sur le rôle strictement domestique des femmes dans plusieurs sociétés anciennes.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getHistoire9eObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_HISTOIRE_9E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_HISTOIRE_9E_OBJECTS = MUSEE_HISTOIRE_9E_OBJECTS;
window.getHistoire9eObjectsForParcours = getHistoire9eObjectsForParcours;
