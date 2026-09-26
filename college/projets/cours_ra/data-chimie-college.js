// ============================================================================
// SALLE CHIMIE — COLLÈGE DE GENÈVE (DF/OS, 1ère-4e)
// Contenu reformulé à partir du Plan d'études du Collège de Genève,
// section Chimie p. 38-40. Aucun énoncé n'est copié tel quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_CHIMIE_COLLEGE_OBJECTS = [
  {
    id: "chimie_environnement_quotidien",
    tier: "court",
    emoji: "🧴",
    label: "La chimie, pour comprendre son quotidien",
    text: "L'étude de la chimie amène à mieux comprendre notre environnement quotidien et les informations scientifiques dispensées par les médias — une compétence utile bien au-delà du laboratoire, pour évaluer avec plus de discernement des informations touchant à la santé ou à l'environnement.",
    fact: "Le plan d'études relie explicitement cette compréhension chimique à un comportement responsable face à l'environnement et à sa propre santé — la chimie fournissant les bases théoriques qui fondent, selon le texte officiel, cette nécessité d'agir de façon responsable.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "hypotheses_deductions_chimie",
    tier: "court",
    emoji: "🔬",
    label: "Émettre des hypothèses, en tirer des déductions",
    text: "La pratique conjointe de l'expérience et de l'élaboration de modèles théoriques simples initie l'élève à la méthode scientifique : l'exercice de cette démarche renforce son aptitude au raisonnement logique, lui apprenant à émettre des hypothèses puis à en tirer des déductions rigoureuses.",
    fact: "Le plan d'études précise que l'utilisation d'un formalisme précis (symboles, équations chimiques) habitue l'élève à un vocabulaire spécifique, développant son sens de la rigueur aussi bien dans le raisonnement que dans la communication écrite ou orale.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "langage_specifique_chimie",
    tier: "court",
    emoji: "🔤",
    label: "Un langage propre : formules et équations",
    text: "Utiliser un langage spécifique — vocabulaire, formules, équations chimiques, nomenclature — est l'une des premières aptitudes développées : la chimie possède son propre système d'écriture, capable de décrire de façon compacte et universelle la composition et les transformations de la matière.",
    fact: "Ce langage chimique fonctionne comme une écriture universelle : une même formule chimique (comme H₂O pour l'eau) est comprise de façon identique par des scientifiques du monde entier, quelle que soit leur langue maternelle.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "tableau_periodique",
    tier: "court",
    emoji: "🧪",
    label: "Le tableau périodique, une carte de la matière",
    text: "Parmi les savoirs attendus dès la discipline fondamentale figure l'exploitation des informations contenues dans le tableau périodique des éléments — un outil qui organise l'ensemble de la matière connue selon des régularités précises, permettant de prédire les propriétés d'un élément à partir de sa position.",
    fact: "Le plan d'études attend aussi que l'élève sache reconnaître les états de la matière et choisir une méthode de séparation adaptée en fonction des propriétés physiques des substances concernées — un savoir-faire pratique autant que théorique.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "structure_moleculaire_liaisons",
    tier: "moyen",
    emoji: "🔗",
    label: "Modéliser la structure de la matière",
    text: "L'élève utilise un modèle simple pour décrire la structure de la matière aux niveaux moléculaire (liaisons chimiques, ions, polarité) et intermoléculaire — comprendre pourquoi certaines substances se mélangent et d'autres non demande de descendre jusqu'à cette échelle invisible à l'œil nu.",
    fact: "La notion de polarité d'une molécule, citée explicitement par le plan d'études, explique par exemple pourquoi l'eau et l'huile ne se mélangent jamais spontanément : leurs molécules ont des structures électriques incompatibles entre elles.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "reactions_chimiques_equilibrer",
    tier: "moyen",
    emoji: "⚖️",
    label: "Formaliser et équilibrer une réaction",
    text: "Savoir formaliser et équilibrer des réactions chimiques simples, tout en maîtrisant les aspects quantitatifs comme les calculs de masses, fait partie des savoirs centraux de la discipline fondamentale — une réaction chimique devant toujours respecter une conservation stricte de la matière entre réactifs et produits.",
    fact: "Cette exigence d'équilibrer précisément une équation chimique reflète directement le principe de conservation de la matière énoncé au XVIIIe siècle par Lavoisier : aucun atome ne peut apparaître ou disparaître au cours d'une réaction chimique.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "familles_composes_ph",
    tier: "moyen",
    emoji: "🧫",
    label: "Familles de composés, pH et énergie",
    text: "Reconnaître et décrire les grandes familles de composés (organiques, minéraux, ioniques) ainsi que les phénomènes associés aux transformations chimiques — équilibre, échanges d'énergie, potentiels électriques, pH — permet de classer et de prédire le comportement de substances jamais rencontrées auparavant.",
    fact: "Le pH, mentionné explicitement dans les savoirs attendus, mesure l'acidité ou la basicité d'une solution sur une échelle logarithmique : chaque unité de pH représente en réalité une différence d'acidité d'un facteur dix, pas d'un simple facteur un.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "chimie_orientation_options",
    tier: "moyen",
    emoji: "🧭",
    label: "Une pratique dès la première année, pour orienter ses choix",
    text: "La pratique de la chimie dès la première année du collège permet à l'élève d'orienter progressivement son choix d'option spécifique et complémentaire — un premier contact concret avec la discipline qui aide à décider si l'on souhaite ou non l'approfondir davantage plus tard dans son parcours.",
    fact: "Cette fonction d'orientation explique pourquoi le plan d'études prévoit un enseignement de chimie identique en discipline fondamentale pour tous les élèves durant les deux premières années, avant que les choix d'option spécifique ne différencient réellement les parcours.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "chimie_organique_biochimie_os",
    tier: "long",
    emoji: "🧬",
    label: "De la chimie organique à la biochimie (OS)",
    text: "En option spécifique, l'élève apprend à prévoir et décrire les principales réactions de chimie organique, puis à appliquer ces connaissances à la compréhension de phénomènes biochimiques — un pont direct vers la biologie, puisque les mécanismes du vivant reposent en grande partie sur des réactions chimiques organiques.",
    fact: "Ce lien explique pourquoi l'option spécifique combine biologie et chimie dans une même filière au collège : comprendre en profondeur le fonctionnement d'une cellule vivante exige une solide compréhension des réactions chimiques organiques qui s'y déroulent en permanence.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "radioactivite_big_bang",
    tier: "long",
    emoji: "☢️",
    label: "De la radioactivité à la naissance de l'univers",
    text: "L'option spécifique amène l'élève à comprendre et formaliser les phénomènes radioactifs et leurs différentes utilisations, ainsi qu'à décrire l'évolution de la matière dans l'univers à la lumière des théories récentes — big-bang, naissance des atomes — reliant directement la chimie aux plus grandes questions de la cosmologie.",
    fact: "Cette ouverture vers le big-bang et la naissance des atomes montre que la chimie ne s'arrête pas à l'échelle du laboratoire : comprendre pourquoi certains éléments chimiques sont abondants dans l'univers et d'autres rares exige de remonter jusqu'aux premiers instants de son histoire.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "energie_chimique_piles",
    tier: "long",
    emoji: "🔋",
    label: "De la réaction chimique à l'énergie utile",
    text: "L'option spécifique développe la compréhension des principes de production d'énergie mécanique, thermique ou électrique à partir de phénomènes chimiques — combustions, explosions, piles — montrant comment une simple réaction chimique peut être exploitée pour produire une énergie directement utilisable.",
    fact: "Le principe de la pile électrique, cité explicitement, repose sur une réaction chimique dite d'oxydoréduction qui produit spontanément un courant électrique — exactement le même principe physico-chimique qui alimente aujourd'hui les batteries de nos appareils électroniques.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "chimie_cycles_elements",
    tier: "long",
    emoji: "🌍",
    label: "Les cycles des éléments, un lien avec les sciences humaines",
    text: "Les références aux cycles des éléments chimiques (comme le carbone ou l'azote) et aux conséquences de l'intervention humaine sur ces cycles tissent des liens directs entre la chimie et les sciences humaines — comprendre le changement climatique, par exemple, exige de comprendre le cycle chimique du carbone.",
    fact: "Le plan d'études conclut cette section en rappelant qu'une collaboration avec l'ensemble des sciences est nécessaire pour résoudre les problèmes abordés en sciences naturelles — la chimie n'étant jamais présentée comme une discipline isolée des autres.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getChimieCollegeObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_CHIMIE_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_CHIMIE_COLLEGE_OBJECTS = MUSEE_CHIMIE_COLLEGE_OBJECTS;
window.getChimieCollegeObjectsForParcours = getChimieCollegeObjectsForParcours;
