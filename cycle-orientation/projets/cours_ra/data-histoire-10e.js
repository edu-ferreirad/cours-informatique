// ============================================================================
// SALLE HISTOIRE 10e — "Renaissance et temps modernes"
// Contenu reformulé à partir des chapitres du manuel officiel romand
// Histoire 10e (CIIP) : Les trois révolutions du livre, Humanisme et
// Renaissance, L'Europe à la rencontre du monde, Les réformes religieuses
// au XVIe siècle, La construction de l'État au XVIIe siècle, Des Lumières
// au bulletin de vote, 1848 : naissance de la Suisse moderne, Regards sur
// la colonisation. Aucun énoncé n'est copié tel quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_HISTOIRE_10E_OBJECTS = [
  {
    id: "revolutions_du_livre",
    tier: "court",
    emoji: "📖",
    label: "Les révolutions du livre",
    text: "Avant l'imprimerie, chaque livre était copié à la main, lettre par lettre, un travail long et coûteux réservé à une minorité. L'invention de l'imprimerie à caractères mobiles, au XVe siècle, a permis de reproduire un texte à des centaines d'exemplaires en une fraction du temps auparavant nécessaire.",
    fact: "On estime qu'en cinquante ans à peine après l'invention de l'imprimerie par Gutenberg, plus de livres ont été produits en Europe qu'au cours des mille années précédentes de copie manuscrite réunies.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "humanisme_renaissance",
    tier: "court",
    emoji: "🎨",
    label: "Humanisme et Renaissance",
    text: "À partir du XIVe siècle en Italie, un mouvement culturel et intellectuel a redécouvert les textes de l'Antiquité grecque et romaine, plaçant l'être humain, sa raison et ses capacités créatrices au centre de l'attention — un tournant qui a profondément renouvelé l'art, la science et la pensée européenne.",
    fact: "De nombreux artistes de la Renaissance, comme Léonard de Vinci, étaient à la fois peintres, ingénieurs, anatomistes et inventeurs — un idéal de savoir universel qui définissait alors ce qu'on appelait un \"homme de la Renaissance\".",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "europe_rencontre_monde",
    tier: "court",
    emoji: "🌍",
    label: "L'Europe à la rencontre du monde",
    text: "À partir de la fin du XVe siècle, les grandes explorations maritimes européennes ont mis en contact direct, souvent violent, des continents jusque-là largement séparés — bouleversant le commerce mondial, la circulation des richesses, mais aussi provoquant la destruction de civilisations entières en Amérique.",
    fact: "L'arrivée des Européens en Amérique a provoqué, par la transmission de maladies inconnues sur ce continent (variole, grippe), un effondrement démographique parmi les plus dévastateurs jamais enregistrés dans l'histoire humaine.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "reformes_religieuses_xvie",
    tier: "court",
    emoji: "⛪",
    label: "Les réformes religieuses du XVIe siècle",
    text: "Au XVIe siècle, plusieurs mouvements ont contesté l'autorité et certaines pratiques de l'Église catholique, donnant naissance au protestantisme — divisant durablement l'Europe entre régions catholiques et protestantes, la Suisse elle-même se trouvant partagée selon les cantons.",
    fact: "Genève est devenue, sous l'influence du réformateur Jean Calvin au XVIe siècle, un centre majeur du protestantisme européen, au point d'être parfois surnommée la \"Rome protestante\".",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "construction_etat_xviie",
    tier: "moyen",
    emoji: "👑",
    label: "La construction de l'État moderne",
    text: "Au XVIIe siècle, plusieurs monarchies européennes ont renforcé leur pouvoir central en créant des administrations, des armées permanentes et des systèmes d'impôts plus efficaces — posant les bases de l'État moderne, avec une autorité centralisée bien plus forte que les royaumes féodaux du Moyen Âge.",
    fact: "Le château de Versailles, construit pour le roi de France Louis XIV, n'était pas qu'une résidence royale : c'était aussi un outil politique, pensé pour maintenir la noblesse sous surveillance proche du roi plutôt que dans ses propres terres.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "lumieres_bulletin_vote",
    tier: "moyen",
    emoji: "🗳️",
    label: "Des Lumières au bulletin de vote",
    text: "Au XVIIIe siècle, des penseurs des Lumières ont défendu des idées comme la liberté individuelle, la séparation des pouvoirs et l'égalité devant la loi — des idées qui ont directement inspiré les révolutions politiques ultérieures et l'émergence progressive du droit de vote dans plusieurs pays européens.",
    fact: "Le droit de vote des femmes, pourtant issu des mêmes idéaux d'égalité portés par les Lumières, a mis bien plus de temps à se concrétiser que celui des hommes : en Suisse, il n'a été accordé au niveau fédéral qu'en 1971.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "naissance_suisse_moderne_1848",
    tier: "moyen",
    emoji: "🇨🇭",
    label: "1848, naissance de la Suisse moderne",
    text: "Après une guerre civile brève entre cantons (la guerre du Sonderbund), la Suisse a adopté en 1848 une nouvelle Constitution fédérale qui transforme une simple alliance de cantons largement indépendants en un véritable État fédéral moderne, avec un gouvernement et un parlement communs.",
    fact: "La Constitution suisse de 1848 s'est en partie inspirée du modèle fédéral des États-Unis, tout en l'adaptant à la réalité plurilingue et aux traditions cantonales très fortes de la Suisse.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "regards_colonisation_afrique",
    tier: "moyen",
    emoji: "🌍",
    label: "Regards sur la colonisation en Afrique",
    text: "À partir de la fin du XIXe siècle, plusieurs puissances européennes se sont partagé la quasi-totalité du continent africain lors de la période appelée colonisation, imposant une domination politique, économique et culturelle qui a durablement marqué les sociétés africaines, y compris longtemps après les indépendances.",
    fact: "Le partage des territoires africains entre puissances européennes lors de la conférence de Berlin (1884-1885) s'est fait presque entièrement sans consultation des populations africaines elles-mêmes, en traçant des frontières qui ne correspondaient souvent à aucune réalité locale préexistante.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "traite_negriere",
    tier: "long",
    emoji: "⛓️",
    label: "La traite atlantique",
    text: "À partir du XVIe siècle, des millions de personnes ont été capturées en Afrique et déportées de force vers les Amériques pour y être réduites en esclavage, dans un système économique organisé entre l'Europe, l'Afrique et les Amériques connu comme la traite atlantique — l'une des plus grandes tragédies humaines de l'histoire moderne.",
    fact: "Ce système d'échange forcé formait un triangle : des marchandises européennes échangées contre des captifs en Afrique, ces captifs déportés vers les Amériques, puis des matières premières (sucre, coton) renvoyées vers l'Europe — ce qu'on appelle le commerce triangulaire.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "guerres_religion_suisse",
    tier: "long",
    emoji: "⚔️",
    label: "La Suisse divisée par la religion",
    text: "Les réformes religieuses du XVIe siècle n'ont pas seulement divisé l'Europe : elles ont aussi fracturé la Confédération suisse elle-même, certains cantons devenant protestants et d'autres restant catholiques, une division religieuse qui a provoqué des tensions internes durables, jusqu'à la guerre civile du Sonderbund en 1847.",
    fact: "Cette division confessionnelle explique en partie pourquoi la Suisse a longtemps fonctionné comme une alliance assez lâche de cantons très autonomes, plutôt que comme un État centralisé — jusqu'à la réforme de 1848.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "revolution_industrielle_debuts",
    tier: "long",
    emoji: "⚙️",
    label: "Les débuts de l'industrialisation",
    text: "À la fin du XVIIIe et au XIXe siècle, de nouvelles machines (notamment la machine à vapeur) et de nouvelles formes d'organisation du travail ont transformé la production, faisant naître de grandes usines et de nouvelles villes ouvrières — un bouleversement social et économique qui allait toucher, avec un temps de retard, la Suisse elle-même.",
    fact: "Certaines régions suisses, comme le canton de Neuchâtel avec l'horlogerie, se sont industrialisées très tôt en Europe, à partir de savoir-faire artisanaux déjà anciens transformés progressivement en production semi-industrielle.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "cartographie_pouvoir",
    tier: "long",
    emoji: "🗺️",
    label: "Dresser une carte, un acte politique",
    text: "Les cartes produites lors des grandes explorations et de la colonisation n'étaient jamais de simples représentations neutres du territoire : elles servaient aussi à revendiquer une possession, à effacer symboliquement les populations déjà présentes, ou à préparer un futur partage de terres entre puissances rivales.",
    fact: "De nombreuses cartes coloniales laissaient volontairement en blanc, ou marquaient comme \"terra incognita\" (terre inconnue), des régions pourtant très bien connues et habitées par leurs populations locales depuis des siècles.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getHistoire10eObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_HISTOIRE_10E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_HISTOIRE_10E_OBJECTS = MUSEE_HISTOIRE_10E_OBJECTS;
window.getHistoire10eObjectsForParcours = getHistoire10eObjectsForParcours;
