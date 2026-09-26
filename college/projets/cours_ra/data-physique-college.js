// ============================================================================
// SALLE PHYSIQUE — COLLÈGE DE GENÈVE (DF/OS, 1ère-4e)
// Contenu reformulé à partir du Plan d'études du Collège de Genève,
// section Physique p. 34-35. Aucun énoncé n'est copié tel quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_PHYSIQUE_COLLEGE_OBJECTS = [
  {
    id: "modeles_simples_phenomenes",
    tier: "court",
    emoji: "🧠",
    label: "Élaborer des modèles pour comprendre",
    text: "L'enseignement de la physique permet à l'élève d'élaborer et d'utiliser des modèles simples pour décrire et comprendre les phénomènes naturels et les réalisations de la technique — un modèle n'étant jamais la réalité elle-même, mais une simplification volontaire qui permet de raisonner sur elle.",
    fact: "Le plan d'études précise que cette discipline se fonde à la fois sur la pratique expérimentale et sur la description mathématique, s'inscrivant ainsi dans une démarche scientifique qui conjugue systématiquement expérience et théorie, jamais l'une sans l'autre.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "demarche_scientifique_cycle",
    tier: "court",
    emoji: "🔁",
    label: "Le cycle de la démarche scientifique",
    text: "Observation, expérience, élaboration de modèles, vérification et prédiction : cet exercice permanent, répété tour à tour, conduit progressivement l'élève à acquérir la capacité d'abstraction nécessaire à la conceptualisation des lois naturelles — une compétence qui se construit par la répétition de la démarche, pas d'un seul coup.",
    fact: "Le plan d'études présente cette capacité d'abstraction comme progressive : elle ne s'acquiert pas dès la première expérience de laboratoire, mais se développe au fil des quatre années, à mesure que l'élève répète et affine cette démarche.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "cinq_domaines_physique",
    tier: "court",
    emoji: "⚡",
    label: "Cinq grands domaines, de l'atome à l'univers",
    text: "En discipline fondamentale, cinq grands domaines structurent l'enseignement : la matière, le mouvement (cinématique et dynamique), l'énergie et la chaleur, l'optique et les ondes, l'électricité et le magnétisme — étudiés dans une perspective historique et culturelle, de l'échelle de l'atome aux dimensions de l'univers.",
    fact: "Le plan d'études précise que ces domaines classiques sont ensuite complétés par quelques éléments de la physique du XXe siècle : relativité, physique quantique, physique des particules et astrophysique — les théories les plus récentes de la discipline.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "esprit_scientifique_citoyen",
    tier: "court",
    emoji: "🏛️",
    label: "Former des citoyens éclairés par la science",
    text: "Au-delà des connaissances techniques, l'enseignement de la physique développe le goût d'une information scientifique sérieuse et contribue à former des esprits autonomes et responsables, capables de jouer pleinement leur rôle de citoyen dans une société marquée par le progrès des sciences et des techniques.",
    fact: "Cette dimension citoyenne est prise très au sérieux par le plan d'études : elle explique pourquoi la physique, même en discipline fondamentale non spécialisée, reste obligatoire pour tous les élèves du collège, quelle que soit leur orientation future.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "mener_experience_complete",
    tier: "moyen",
    emoji: "🔬",
    label: "Mener une expérience de bout en bout",
    text: "Une compétence centrale attendue est de savoir mener complètement une expérience : du choix des mesures à effectuer jusqu'au traitement des données expérimentales et à l'analyse critique des résultats — l'expérience scientifique n'étant jamais réduite à une simple manipulation technique isolée.",
    fact: "Le plan d'études exige explicitement de savoir effectuer un calcul d'incertitude des mesures, jusqu'à estimer l'impact de cette incertitude sur les résultats des calculs finaux — une rigueur qui distingue une véritable démarche scientifique d'une simple observation approximative.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "outil_informatique_laboratoire",
    tier: "moyen",
    emoji: "💻",
    label: "L'informatique, un outil de laboratoire",
    text: "Maîtriser l'outil informatique pour l'acquisition et le traitement des données d'expérience, ainsi que pour la simulation des phénomènes, fait partie des savoirs attendus — la physique moderne s'appuyant largement sur des outils numériques pour mesurer, traiter et modéliser ce qui serait sinon inaccessible à l'œil ou au calcul manuel.",
    fact: "Cette exigence informatique crée un lien direct et explicite entre la physique et le cours d'informatique du collège, tous deux orientés vers l'acquisition et le traitement rigoureux de données numériques.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "esprit_critique_theorie_os",
    tier: "moyen",
    emoji: "🧐",
    label: "Un regard critique sur toute théorie (OS)",
    text: "En option spécifique, l'élève apprend à aborder avec un esprit attentif et critique une théorie scientifique — ses limites, son domaine de validité — ainsi que les résultats d'une expérience ou d'un calcul théorique, en questionnant leur ordre de grandeur et leur précision, plutôt que de les accepter sans les interroger.",
    fact: "Cette exigence critique porte aussi bien sur la stratégie adoptée que sur la précision et la rigueur de l'étude conduite — l'option spécifique physique ne se contente donc jamais d'un résultat juste \"par hasard\", elle exige de comprendre pourquoi la démarche suivie était la bonne.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "notation_vectorielle_os",
    tier: "moyen",
    emoji: "➡️",
    label: "Des outils mathématiques plus élaborés (OS)",
    text: "L'enseignement en option spécifique développe les mêmes savoirs que la discipline fondamentale, mais dans une démarche plus approfondie qui fait progressivement appel à des outils mathématiques plus élaborés, comme la notation vectorielle — un lien direct avec le cours de mathématiques niveau avancé.",
    fact: "Ce recours croissant à la notation vectorielle en physique explique pourquoi l'option spécifique physique-applications des mathématiques exige un niveau mathématique avancé (MA2) : les deux disciplines progressent volontairement main dans la main.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "liens_chimie_biologie",
    tier: "long",
    emoji: "🔗",
    label: "Des liens tissés avec presque toutes les disciplines",
    text: "Le plan d'études liste explicitement de nombreux liens interdisciplinaires : avec la chimie (étude microscopique de la matière), la biologie (étude de l'œil, des couleurs, effet de serre), la musique (ondes, acoustique), les sciences humaines (problèmes énergétiques, physique du globe) et l'informatique (acquisition et traitement des données).",
    fact: "Le lien avec la musique via l'acoustique est particulièrement révélateur : un phénomène ondulatoire étudié en physique (la propagation du son) est exactement le même objet physique que celui exploité artistiquement en cours de musique, sous un angle complètement différent.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "physique_xxe_siecle",
    tier: "long",
    emoji: "🌌",
    label: "Relativité et physique quantique, un aperçu",
    text: "Au-delà des cinq domaines classiques, le programme de physique fondamentale s'ouvre à quelques éléments de la physique du XXe siècle : relativité, physique quantique, physique des particules et astrophysique — des théories qui ont profondément bouleversé la vision classique du monde physique.",
    fact: "Ces théories du XXe siècle sont volontairement présentées \"dans une perspective historique et culturelle\" : le plan d'études cherche moins à en maîtriser tous les calculs qu'à en comprendre l'importance et la portée dans l'histoire des idées scientifiques.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "vision_globale_situation_nouvelle",
    tier: "long",
    emoji: "🔭",
    label: "Aborder une situation totalement nouvelle (OS)",
    text: "En option spécifique, l'élève est entraîné à aborder avec la vision la plus globale possible une situation nouvelle, expérimentale ou théorique, en s'appuyant sur une synthèse des notions déjà acquises — une compétence de transfert qui dépasse la simple application mécanique de formules déjà vues en classe.",
    fact: "Cette capacité à transférer des connaissances vers une situation encore jamais rencontrée est explicitement présentée comme un objectif de haut niveau, préparant directement aux exigences des études supérieures scientifiques après le collège.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "physique_progres_technique",
    tier: "long",
    emoji: "⚙️",
    label: "Comprendre les réalisations de la technique",
    text: "Le plan d'études précise dès ses objectifs généraux que la physique doit permettre de comprendre non seulement les phénomènes naturels, mais aussi les réalisations de la technique — les objets et technologies conçus par l'être humain reposant, eux aussi, sur les mêmes lois physiques que la nature elle-même.",
    fact: "Cette double ambition — comprendre la nature ET la technique humaine avec les mêmes outils conceptuels — explique pourquoi la physique du collège navigue constamment entre phénomènes naturels (la foudre, les couleurs de l'arc-en-ciel) et objets techniques (un moteur, un circuit électrique).",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getPhysiqueCollegeObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_PHYSIQUE_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_PHYSIQUE_COLLEGE_OBJECTS = MUSEE_PHYSIQUE_COLLEGE_OBJECTS;
window.getPhysiqueCollegeObjectsForParcours = getPhysiqueCollegeObjectsForParcours;
