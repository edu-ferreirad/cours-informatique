// ============================================================================
// SALLE BIOLOGIE 9e — "Voyage dans le vivant"
// Contenu original construit à partir des thèmes officiels du Programme
// cantonal Sciences de la nature — Biologie 9e (DIP Genève, prescriptions
// cantonales PER, juin 2023) : caractéristiques du vivant, niveaux
// d'organisation, diversité, écosystèmes, cellule, reproduction, système
// nerveux, système locomoteur. Aucun manuel disponible pour cette
// discipline : contenu rédigé pour être fidèle aux objectifs officiels.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_BIOLOGIE_9E_OBJECTS = [
  {
    id: "caracteristiques_vivant",
    tier: "court",
    emoji: "🌱",
    label: "Qu'est-ce qu'un être vivant ?",
    text: "Un être vivant se reconnaît à plusieurs caractéristiques réunies : il se nourrit, grandit, réagit à son environnement, et surtout, il est capable de se reproduire. Un cristal peut grandir, un robot peut réagir — mais aucun des deux ne remplit toutes ces conditions à la fois.",
    fact: "Les virus posent un vrai casse-tête aux biologistes : ils se reproduisent, mais seulement en détournant les cellules d'un autre organisme — ce qui les place à la frontière floue entre le vivant et le non-vivant.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "niveaux_organisation",
    tier: "court",
    emoji: "🧱",
    label: "De la cellule à l'écosystème",
    text: "Le vivant s'organise par niveaux emboîtés : une cellule forme un tissu, plusieurs tissus forment un organe, plusieurs organes un organisme complet — et de nombreux organismes en interaction forment un écosystème. Chaque niveau apporte de nouvelles propriétés qui n'existaient pas au niveau précédent.",
    fact: "Un seul organe, comme le cœur, ne \"bat\" pas tout seul de façon isolée : c'est l'organisation coordonnée de millions de cellules musculaires qui produit ce mouvement rythmique.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "diversite_parente_vivants",
    tier: "court",
    emoji: "🌳",
    label: "L'arbre de la parenté du vivant",
    text: "Toutes les espèces vivantes, aussi différentes soient-elles en apparence, partagent des liens de parenté qui peuvent se représenter comme un immense arbre généalogique — plus deux espèces partagent un ancêtre commun récent, plus elles sont génétiquement proches l'une de l'autre.",
    fact: "Les humains partagent plus de 98 % de leur ADN avec les chimpanzés — mais aussi, plus surprenant, environ 50 % avec... la banane, tant les mécanismes fondamentaux du vivant se ressemblent à l'échelle cellulaire.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "cellule_unite_base",
    tier: "court",
    emoji: "🔬",
    label: "La cellule, brique du vivant",
    text: "Toute forme de vie connue est constituée d'au moins une cellule — et le corps humain en compte plusieurs dizaines de milliers de milliards. Une cellule végétale et une cellule animale partagent une même structure de base, mais la première possède en plus une paroi rigide et des chloroplastes pour capter la lumière.",
    fact: "Certaines cellules nerveuses humaines (les neurones) peuvent mesurer plus d'un mètre de long, du bas de la colonne vertébrale jusqu'au bout des orteils — tout en restant une seule et même cellule.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "ecosystemes_reseaux_trophiques",
    tier: "moyen",
    emoji: "🕸️",
    label: "Qui mange qui ?",
    text: "Dans un écosystème, l'énergie circule des producteurs (les plantes, qui captent la lumière du soleil) vers les consommateurs, puis vers les décomposeurs qui recyclent la matière organique. Ce réseau d'interactions alimentaires, bien plus complexe qu'une simple chaîne, s'appelle un réseau trophique.",
    fact: "Retirer une seule espèce, même modeste en apparence, d'un réseau trophique peut déséquilibrer tout un écosystème — un phénomène observé lorsque la disparition d'un prédateur entraîne la surpopulation de ses proies.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "modes_reproduction",
    tier: "moyen",
    emoji: "🌸",
    label: "Se reproduire, seul ou à deux",
    text: "La reproduction asexuée (bourgeonnement, bouturage) produit un descendant génétiquement identique au parent unique, tandis que la reproduction sexuée mélange le matériel génétique de deux parents, produisant une descendance génétiquement différente et variée — un moteur essentiel de l'évolution des espèces.",
    fact: "Certains organismes, comme les pucerons, alternent stratégiquement entre reproduction asexuée (rapide, en période favorable) et reproduction sexuée (qui brasse les gènes, avant l'hiver) selon les conditions du moment.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "systeme_nerveux",
    tier: "moyen",
    emoji: "🧠",
    label: "Le système nerveux, chef d'orchestre",
    text: "Le cerveau, la moelle épinière et les nerfs forment un réseau de communication qui reçoit des informations des sens, les traite, puis envoie des ordres aux muscles et aux organes — permettant au corps de réagir à son environnement en une fraction de seconde.",
    fact: "L'influx nerveux peut circuler dans certains nerfs à plus de 100 mètres par seconde — plus vite qu'une voiture de course, pour permettre des réactions quasi instantanées.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "systeme_locomoteur",
    tier: "moyen",
    emoji: "🦴",
    label: "Le squelette et les muscles en équipe",
    text: "Le système locomoteur associe les os (qui donnent la structure et protègent les organes), les articulations (qui permettent le mouvement) et les muscles (qui, en se contractant, tirent sur les os pour créer ce mouvement) — un trio indissociable pour marcher, courir ou simplement tenir debout.",
    fact: "Un muscle ne peut que se contracter, jamais s'\"étirer\" activement : c'est pourquoi les muscles fonctionnent toujours par paires opposées, l'un se relâchant pendant que l'autre se contracte.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "adaptation_survie",
    tier: "long",
    emoji: "🦎",
    label: "S'adapter pour survivre",
    text: "Au fil des générations, les espèces développent des caractéristiques qui augmentent leurs chances de survie et de reproduction dans leur milieu — une couleur qui camoufle, une forme de bec adaptée à une nourriture précise. Ce processus lent, appelé sélection naturelle, façonne progressivement la diversité du vivant.",
    fact: "Les pinsons observés par Darwin aux îles Galápagos ont développé des becs de formes très différentes selon l'île et le type de nourriture disponible — un exemple devenu emblématique de l'adaptation par sélection naturelle.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "cellule_division",
    tier: "long",
    emoji: "➗",
    label: "Une cellule qui se divise",
    text: "Pour permettre la croissance d'un organisme ou remplacer des cellules usées, une cellule peut se diviser en deux cellules filles identiques, chacune recevant une copie complète du matériel génétique — un processus minutieusement régulé, indispensable au bon fonctionnement du corps.",
    fact: "Le corps humain remplace en permanence ses cellules : la plupart des cellules de la peau sont renouvelées en quelques semaines seulement, sans qu'on s'en rende compte.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "biodiversite_menacee",
    tier: "long",
    emoji: "🐝",
    label: "Une biodiversité sous pression",
    text: "La biodiversité — l'ensemble des espèces, des gènes et des écosystèmes présents sur Terre — recule aujourd'hui à un rythme préoccupant, sous l'effet combiné de la destruction des habitats, du changement climatique et de la pollution. Sa préservation est devenue un enjeu majeur, y compris à l'échelle locale.",
    fact: "Le canton de Genève s'est doté d'une stratégie officielle pour la biodiversité, avec des objectifs précis à l'horizon 2030 — la préservation des espèces n'est donc pas qu'un enjeu mondial lointain, mais aussi un projet local très concret.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "reflexe_nerveux",
    tier: "long",
    emoji: "⚡",
    label: "Le réflexe, plus rapide que la pensée",
    text: "Certaines réactions du corps (retirer la main d'une surface brûlante) ne passent pas par le cerveau : l'information fait un raccourci direct via la moelle épinière, ce qui rend le réflexe bien plus rapide qu'une réaction volontaire et consciente.",
    fact: "Retirer sa main d'une surface brûlante déclenche le réflexe avant même que le cerveau n'ait eu le temps de \"ressentir\" consciemment la douleur — la sensation de brûlure n'arrive à la conscience qu'un instant après le mouvement.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getBiologie9eObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_BIOLOGIE_9E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_BIOLOGIE_9E_OBJECTS = MUSEE_BIOLOGIE_9E_OBJECTS;
window.getBiologie9eObjectsForParcours = getBiologie9eObjectsForParcours;
