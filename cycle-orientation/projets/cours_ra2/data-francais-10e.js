// ============================================================================
// SALLE FRANÇAIS 10e — "Musée des mots"
// Contenu reformulé à partir de L'Atelier du langage 10e (Énonciation et
// texte, Grammaire de la phrase, Vocabulaire/orthographe/conjugaison).
// Aucun énoncé n'est copié tel quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_FRANCAIS_10E_OBJECTS = [
  {
    id: "texte_narratif_descriptif",
    tier: "court",
    emoji: "📖",
    label: "Narrer, décrire : deux gestes différents",
    text: "Un texte narratif fait avancer une histoire dans le temps (des événements s'enchaînent), tandis qu'un passage descriptif suspend l'action pour détailler un lieu, un personnage ou une atmosphère. Un même récit alterne en réalité constamment entre ces deux gestes d'écriture.",
    fact: "Un roman entièrement descriptif, sans aucune action, finirait par lasser le lecteur : c'est le dosage entre narration et description qui crée le rythme d'un texte.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "texte_explicatif_argumentatif",
    tier: "court",
    emoji: "⚖️",
    label: "Expliquer n'est pas convaincre",
    text: "Un texte explicatif cherche à faire comprendre un phénomène de façon neutre (pourquoi le ciel est bleu), tandis qu'un texte argumentatif cherche à faire adhérer le lecteur à une opinion, à l'aide d'arguments et d'exemples choisis pour convaincre.",
    fact: "Un même sujet peut donner lieu aux deux types de textes : \"pourquoi le climat se réchauffe\" est explicatif, \"pourquoi il faut agir maintenant contre le réchauffement\" devient argumentatif.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "registres_langue",
    tier: "court",
    emoji: "🎭",
    label: "Changer de registre de langue",
    text: "On ne s'adresse pas de la même façon à un ami, à un professeur ou dans une lettre officielle : le registre familier, courant ou soutenu module le vocabulaire, la syntaxe et le ton d'un même message selon la situation de communication.",
    fact: "\"Je ne sais pas\", \"j'sais pas\" et \"je l'ignore\" expriment exactement la même idée dans trois registres de langue différents — familier, courant et soutenu.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "dialogue_paroles_rapportees",
    tier: "court",
    emoji: "💬",
    label: "Le dialogue sur la page",
    text: "Restituer une conversation à l'écrit demande des outils précis : guillemets, tirets de dialogue, verbes introducteurs de parole (\"dit-il\", \"s'exclama-t-elle\") qui indiquent qui parle et sur quel ton, sans jamais perdre le lecteur au fil des répliques.",
    fact: "Le choix du verbe introducteur de parole (\"murmurer\", \"hurler\", \"bredouiller\") en dit souvent plus long sur l'état émotionnel du personnage que la réplique elle-même.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "images_comparaison_metaphore",
    tier: "moyen",
    emoji: "🌙",
    label: "Comparaison, métaphore, personnification",
    text: "Une comparaison relie deux éléments à l'aide d'un mot-outil (\"comme\", \"tel que\"), une métaphore fait le même rapprochement sans ce mot-outil, et une personnification prête des comportements humains à un objet ou une idée. Ces trois figures d'images transforment une phrase ordinaire en une phrase visuelle.",
    fact: "\"Le vent hurlait\" est une personnification : le vent ne peut littéralement pas hurler, mais l'image rend immédiatement sensible la violence de la tempête.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "vocabulaire_melioratif_pejoratif",
    tier: "moyen",
    emoji: "⚡",
    label: "Un même fait, deux vocabulaires",
    text: "Décrire un même événement avec un vocabulaire mélioratif (valorisant) ou péjoratif (dévalorisant) change complètement l'impression laissée au lecteur, sans même changer les faits rapportés — un outil que la presse, la publicité et la propagande exploitent volontairement.",
    fact: "\"Un groupe de manifestants déterminés\" et \"une horde d'agitateurs\" peuvent décrire exactement la même scène — seul le choix du vocabulaire change radicalement le jugement qu'on en tire.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "etymologie_histoire_mots",
    tier: "moyen",
    emoji: "🏛️",
    label: "L'histoire cachée d'un mot",
    text: "Retracer l'étymologie d'un mot — son origine latine, grecque ou étrangère, ses transformations au fil des siècles — révèle souvent des liens de sens surprenants entre des mots aujourd'hui très éloignés dans le dictionnaire.",
    fact: "\"Salaire\" vient du latin \"salarium\", la ration de sel donnée aux soldats romains dans l'Antiquité — le sel étant à l'époque une denrée précieuse servant parfois de monnaie d'échange.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "organisateurs_temporels_spatiaux",
    tier: "moyen",
    emoji: "🧭",
    label: "Les repères qui organisent un texte",
    text: "Des mots comme \"d'abord\", \"ensuite\", \"plus loin\" ou \"au-dessus\" (organisateurs temporels et spatiaux) balisent un texte comme des panneaux indicateurs, permettant au lecteur de se repérer dans le temps du récit ou dans l'espace décrit sans jamais se perdre.",
    fact: "Supprimer tous les organisateurs temporels d'un récit d'événements en rend souvent la chronologie presque incompréhensible, même si chaque phrase reste individuellement correcte.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "groupe_nominal",
    tier: "long",
    emoji: "🧩",
    label: "Le groupe nominal, une équipe autour du nom",
    text: "Autour d'un nom se rassemblent souvent un déterminant, un ou plusieurs adjectifs, parfois un complément du nom : ensemble, ils forment un groupe nominal, une unité grammaticale qui fonctionne comme un seul bloc dans la phrase.",
    fact: "Un groupe nominal peut s'étendre presque indéfiniment en empilant les compléments du nom les uns aux autres — une technique que certains auteurs exploitent volontairement pour créer des phrases interminables et haletantes.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "phrase_simple_complexe",
    tier: "long",
    emoji: "🔀",
    label: "Phrase simple, phrase complexe",
    text: "Une phrase simple contient un seul verbe conjugué ; une phrase complexe en contient plusieurs, reliés entre eux par juxtaposition, coordination ou subordination. Savoir varier entre ces structures évite un texte monotone tout en gardant chaque idée claire.",
    fact: "Enchaîner uniquement des phrases très courtes peut créer un effet de tension ou d'urgence — un procédé stylistique volontairement utilisé dans les scènes d'action.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "homophones_grammaticaux",
    tier: "long",
    emoji: "🎧",
    label: "Les pièges des homophones",
    text: "\"Ces\", \"ses\", \"c'est\", \"s'est\" se prononcent tous de façon identique, mais s'écrivent différemment selon leur fonction grammaticale dans la phrase. Distinguer ces homophones grammaticaux demande de repérer ce que chaque mot remplace ou introduit, pas seulement comment il sonne.",
    fact: "Le français compte plusieurs dizaines de séries d'homophones grammaticaux courants — une des principales sources d'erreurs orthographiques, y compris chez les adultes.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "accords_groupe_nominal",
    tier: "long",
    emoji: "✅",
    label: "L'accord dans le groupe nominal",
    text: "Déterminant, nom et adjectif doivent s'accorder ensemble en genre et en nombre à l'intérieur d'un groupe nominal — une chaîne d'accord qui doit rester cohérente même lorsque plusieurs mots s'insèrent entre le nom et son adjectif.",
    fact: "Certains adjectifs de couleur issus d'un nom (comme \"orange\" ou \"marron\") restent invariables, contrairement à la règle générale d'accord du groupe nominal.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getFrancais10eObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_FRANCAIS_10E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_FRANCAIS_10E_OBJECTS = MUSEE_FRANCAIS_10E_OBJECTS;
window.getFrancais10eObjectsForParcours = getFrancais10eObjectsForParcours;
