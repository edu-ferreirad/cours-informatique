// ============================================================================
// SALLE BIOLOGIE — COLLÈGE DE GENÈVE (DF/OS, 1ère-4e)
// Contenu reformulé à partir du Plan d'études du Collège de Genève,
// section Biologie p. 36-37. Aucun énoncé n'est copié tel quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_BIOLOGIE_COLLEGE_OBJECTS = [
  {
    id: "regard_biologique",
    tier: "court",
    emoji: "👁️",
    label: "Adopter un \"regard biologique\"",
    text: "Le plan d'études attend de l'élève qu'il adopte progressivement un \"regard biologique\" sur le monde — une pensée comparative et globale, devenue nécessaire dans la société actuelle, qui permet de prendre des décisions personnelles, politiques, économiques ou éthiques éclairées par une vraie compréhension du vivant.",
    fact: "Ce \"regard biologique\" est présenté comme utile bien au-delà des sciences : il éclaire des décisions aussi variées qu'un choix alimentaire personnel, un vote sur une politique de santé publique ou une question éthique liée aux biotechnologies.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "respecter_vie_mecanismes",
    tier: "court",
    emoji: "🌿",
    label: "Respecter la vie en la comprenant",
    text: "Comprendre les mécanismes du vivant s'accompagne d'une attitude explicitement demandée par le plan d'études : respecter la vie et ses mécanismes en ayant conscience de faire soi-même partie intégrante de la nature — la biologie ne se contente donc pas de décrire le vivant de l'extérieur, elle y inclut l'élève lui-même.",
    fact: "Cette conscience de faire \"partie intégrante de la nature\" plutôt que d'en être un simple observateur extérieur distingue la posture attendue en biologie d'une approche purement technique ou détachée du vivant étudié.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "demarche_scientifique_hypotheses",
    tier: "court",
    emoji: "🧪",
    label: "Formuler et tester une hypothèse",
    text: "Au terme de sa formation, l'élève doit savoir formuler des hypothèses, les tester en élaborant un protocole expérimental, puis réaliser une expérience en utilisant du matériel de laboratoire — la démarche scientifique complète, de l'idée initiale jusqu'à sa vérification concrète.",
    fact: "Le plan d'études insiste sur le fait que cette démarche doit aussi être communiquée : savoir exprimer oralement et par écrit les résultats obtenus, et les représenter graphiquement, fait partie intégrante des aptitudes attendues, pas seulement la manipulation en elle-même.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "diversite_unite_lois_vie",
    tier: "court",
    emoji: "🌳",
    label: "Diversité des espèces, unité des lois du vivant",
    text: "L'élève doit se familiariser avec les caractéristiques principales du monde vivant : une immense diversité des espèces, mais aussi une unité surprenante des lois fondamentales de la vie, ainsi que les interactions et équilibres entre les espèces et leur environnement (écologie générale et appliquée).",
    fact: "Cette tension entre diversité extrême des formes de vie et unité profonde de leurs mécanismes biologiques de base (l'ADN, la cellule) est l'un des constats les plus fondamentaux et les plus fascinants de la biologie moderne.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "manifestations_du_vivant",
    tier: "moyen",
    emoji: "🧬",
    label: "Les manifestations du vivant, du moléculaire au comportemental",
    text: "Le programme couvre un spectre très large de manifestations du vivant : structures moléculaires et cellulaires, métabolisme, procréation, croissance, différenciation, comportement, et relations avec le milieu — du niveau le plus microscopique jusqu'aux interactions les plus visibles entre un organisme et son environnement.",
    fact: "Ce spectre très large, du moléculaire au comportemental, explique pourquoi la biologie du collège touche presque tous les autres domaines scientifiques : chimie pour le moléculaire, physique pour certains mécanismes, sciences humaines pour le comportement.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "genetique_evolution",
    tier: "moyen",
    emoji: "🔬",
    label: "Génétique et évolution, deux piliers",
    text: "Parmi les savoirs attendus figurent explicitement des connaissances solides en matière de génétique et d'évolution — deux domaines de la biologie moderne indissociables, puisque comprendre l'évolution des espèces au fil du temps nécessite de comprendre au préalable comment l'information génétique se transmet et se transforme.",
    fact: "Le plan d'études présente ces connaissances non comme une fin en soi, mais comme des \"outils intellectuels\" destinés à permettre à l'élève d'intégrer, tout au long de sa vie future, les nombreuses découvertes que la biologie continuera de produire après sa scolarité.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "methode_experimentale_os",
    tier: "moyen",
    emoji: "⚗️",
    label: "La méthode expérimentale, privilégiée en option (OS)",
    text: "Alors que la discipline fondamentale vise surtout à susciter la curiosité intellectuelle pour la nature, l'option spécifique biologie-chimie privilégie tout particulièrement la méthode expérimentale — un approfondissement qui prépare plus directement à des études scientifiques supérieures.",
    fact: "Cette distinction entre \"susciter la curiosité\" (DF) et \"privilégier la méthode expérimentale\" (OS) révèle deux missions pédagogiques différentes mais complémentaires : donner une culture scientifique à tous, et former plus spécifiquement les futurs spécialistes.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "histoire_epistemologie_biologie",
    tier: "moyen",
    emoji: "📜",
    label: "Une double perspective : historique et épistémologique",
    text: "L'enseignement initie l'élève aux méthodes qui ont permis la construction de connaissances objectives en biologie, aussi bien dans une perspective historique (l'histoire des sciences, la transformation des modèles au fil du temps) qu'épistémologique (la théorie de la connaissance elle-même).",
    fact: "Cette double perspective signifie que l'élève n'apprend pas seulement CE que l'on sait aujourd'hui en biologie, mais aussi COMMENT on l'a su, et comment certains modèles scientifiques anciens ont dû être révisés ou abandonnés face à de nouvelles preuves.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "biologie_chimie_physique_maths",
    tier: "long",
    emoji: "🔗",
    label: "Chimie, physique, mathématiques : des outils partagés",
    text: "La biologie utilise directement les connaissances et méthodes des disciplines de son domaine d'études, en particulier la chimie et la physique, ainsi que les mathématiques et l'informatique — aucun de ces phénomènes biologiques ne pouvant être pleinement compris sans emprunter les outils d'autres sciences.",
    fact: "Cette dépendance mutuelle est particulièrement forte avec la chimie : comprendre le métabolisme cellulaire, par exemple, exige de comprendre au préalable les réactions chimiques qui s'y déroulent — d'où l'existence de l'option spécifique combinée biologie-chimie.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "biologie_sciences_humaines",
    tier: "long",
    emoji: "🌍",
    label: "Un pont vers les sciences humaines",
    text: "La biologie est directement reliée aux sciences humaines, avec lesquelles elle partage des champs d'étude : la géographie (via l'écologie), l'histoire (l'histoire des sciences), l'économie (les biotechnologies), et le droit avec la philosophie (via la bioéthique) — la biologie posant souvent des questions qui dépassent le seul cadre scientifique.",
    fact: "Le lien avec la bioéthique est particulièrement révélateur : des avancées biologiques comme les manipulations génétiques ou la procréation médicalement assistée posent des questions que la seule science ne peut trancher, nécessitant un dialogue avec le droit et la philosophie.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "biologie_arts_eps",
    tier: "long",
    emoji: "🎨",
    label: "Des liens jusqu'aux arts et au sport",
    text: "La biologie est aussi en relation avec les arts visuels, dont elle utilise les techniques médiatiques (illustration scientifique, imagerie), avec l'éducation physique pour la connaissance du corps humain, et avec les langues vivantes — notamment l'anglais, devenu la principale langue de communication scientifique internationale.",
    fact: "Le plan d'études mentionne explicitement l'anglais comme \"la principale langue de communication scientifique\" — un rappel concret que la biologie moderne, comme la plupart des sciences, se pratique et se publie aujourd'hui très largement dans cette langue à l'échelle mondiale.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "capacite_analyser_synthetiser",
    tier: "long",
    emoji: "🧩",
    label: "Analyser, synthétiser, critiquer une observation",
    text: "Au-delà de la simple observation, l'élève développe sa capacité à analyser, synthétiser, justifier et critiquer les observations biologiques, de manière à comprendre lui-même comment se construit le savoir scientifique — pas seulement à le recevoir comme une vérité déjà établie et figée.",
    fact: "Cette insistance sur la construction du savoir, plutôt que sa simple réception, rejoint directement l'objectif épistémologique du plan d'études : comprendre non seulement les résultats de la science, mais aussi le processus incertain et progressif qui y mène.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getBiologieCollegeObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_BIOLOGIE_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_BIOLOGIE_COLLEGE_OBJECTS = MUSEE_BIOLOGIE_COLLEGE_OBJECTS;
window.getBiologieCollegeObjectsForParcours = getBiologieCollegeObjectsForParcours;
