// ============================================================================
// SALLE FRANÇAIS 9e — "Musée des mots"
// Contenu reformulé à partir de L'Atelier du langage 9e
// (Grammaire, Vocabulaire, Orthographe, Conjugaison). Aucun énoncé n'est
// copié tel quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_FRANCAIS_9E_OBJECTS = [
  {
    id: "situation_enonciation",
    tier: "court",
    emoji: "🗣️",
    label: "Qui parle, à qui, quand ?",
    text: "Une même phrase change complètement de sens selon qui la prononce, à qui elle s'adresse et dans quel contexte. Repérer la situation d'énonciation — l'émetteur, le destinataire, le moment, le lieu — est la première clé pour vraiment comprendre un texte.",
    fact: "Un simple pronom comme \"je\" ne désigne jamais la même personne deux fois : son sens change à chaque nouvel énonciateur, contrairement à un nom comme \"table\".",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "paroles_rapportees",
    tier: "court",
    emoji: "💭",
    label: "Rapporter les paroles de l'autre",
    text: "Pour restituer ce que quelqu'un a dit, on peut citer ses mots exacts entre guillemets (discours direct) ou les intégrer dans sa propre phrase en les transformant (discours indirect) — un changement qui touche les pronoms, les temps et parfois le sens même du propos.",
    fact: "Passer du discours direct à l'indirect oblige souvent à changer aussi les marques de temps : \"hier\" devient \"la veille\", \"demain\" devient \"le lendemain\".",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "classe_determinants",
    tier: "court",
    emoji: "🔖",
    label: "Le déterminant, petit mais essentiel",
    text: "Devant presque chaque nom se cache un déterminant (article, possessif, démonstratif...) qui en précise le sens : \"un chat\" n'est pas \"le chat\", ni \"mon chat\", ni \"ce chat\" — un même nom, quatre nuances de sens très différentes.",
    fact: "Certaines langues, comme le russe ou le japonais, n'utilisent quasiment pas de déterminants équivalents aux articles français — une différence qui pose souvent de vrais défis aux apprenants francophones de ces langues.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "nom_expansions",
    tier: "court",
    emoji: "🌿",
    label: "Le nom et ses expansions",
    text: "Un nom peut s'enrichir d'un adjectif, d'un complément ou d'une proposition relative pour préciser son sens : \"la maison\" devient \"la vieille maison abandonnée que personne n'ose approcher\". Ces expansions transforment une simple information en une véritable image.",
    fact: "Enlever toutes les expansions d'une phrase littéraire en révèle le squelette grammatical minimal — un exercice qui aide à comprendre comment un auteur construit ses effets de style.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "classe_adjectif",
    tier: "moyen",
    emoji: "🎨",
    label: "L'adjectif, teinture du nom",
    text: "L'adjectif qualifie un nom en lui donnant une couleur, une texture, une intensité particulière — mais il doit toujours s'accorder en genre et en nombre avec lui, même lorsqu'il en est éloigné dans la phrase.",
    fact: "Certains adjectifs de couleur composés (comme \"bleu marine\" ou \"vert pomme\") restent invariables, contrairement à la règle générale d'accord des adjectifs.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "champ_lexical",
    tier: "moyen",
    emoji: "🕸️",
    label: "Le champ lexical",
    text: "Tous les mots qui se rapportent à une même idée, même de manière indirecte, forment un champ lexical. Repérer le champ lexical dominant d'un texte (la peur, la guerre, la mer...) révèle souvent son atmosphère générale avant même d'en comprendre chaque phrase.",
    fact: "Un même mot peut appartenir à plusieurs champs lexicaux à la fois selon le contexte : \"glacial\" appartient au champ lexical du froid, mais aussi à celui de l'indifférence quand il qualifie un accueil.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "formation_mots",
    tier: "moyen",
    emoji: "🧱",
    label: "Construire un mot",
    text: "La plupart des mots français se construisent à partir d'un radical auquel s'ajoutent des préfixes (avant) ou des suffixes (après) qui en modifient le sens : \"faire\", \"refaire\", \"défaire\", \"faisable\" partagent la même racine pour des sens très différents.",
    fact: "Le préfixe \"in-\" peut exprimer soit une négation (\"inutile\"), soit au contraire un mouvement vers l'intérieur (\"inclure\") — un même préfixe, deux origines et deux fonctions bien distinctes.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "etymologie",
    tier: "moyen",
    emoji: "🏺",
    label: "L'étymologie, une enquête sur les mots",
    text: "Chaque mot a une histoire : la plupart des mots français descendent du latin, mais beaucoup viennent aussi du grec, de l'arabe, de l'italien ou de l'anglais. Remonter à l'origine d'un mot éclaire souvent son sens actuel d'une manière inattendue.",
    fact: "Le mot \"hasard\" vient de l'arabe \"az-zahr\" (le dé à jouer), arrivé en français via l'espagnol au Moyen Âge — un souvenir linguistique des échanges entre mondes arabe et européen.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "synonymes_antonymes",
    tier: "long",
    emoji: "🔄",
    label: "Synonymes, antonymes, homonymes",
    text: "Deux mots peuvent avoir un sens proche (synonymes), opposé (antonymes) ou une prononciation identique pour un sens totalement différent (homonymes) — trois relations entre les mots qui permettent d'éviter les répétitions ou, au contraire, de jouer volontairement sur les mots.",
    fact: "Aucun synonyme n'est jamais parfaitement interchangeable avec un autre : \"content\" et \"ravi\" partagent un sens proche, mais pas la même intensité ni les mêmes contextes d'emploi.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "vocabulaire_espace_temps",
    tier: "long",
    emoji: "🧭",
    label: "Dire l'espace, le temps, les sensations",
    text: "Situer une action dans l'espace (ici, là-bas, au-dessus) ou dans le temps (hier, bientôt, autrefois), et décrire une sensation (un parfum, un bruit, une texture) demande un vocabulaire précis, souvent négligé à l'oral mais essentiel pour rendre un récit vivant.",
    fact: "Le vocabulaire des sensations olfactives (l'odorat) est réputé l'un des plus pauvres du français courant : on décrit bien plus facilement ce que l'on voit que ce que l'on sent.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "orthographe_grammaticale",
    tier: "long",
    emoji: "✅",
    label: "Les accords, une chaîne à ne pas briser",
    text: "L'accord du sujet avec le verbe, du nom avec l'adjectif, du participe passé avec l'auxiliaire : l'orthographe grammaticale fonctionne comme une chaîne où chaque maillon dépend du précédent — une erreur en amont se répercute souvent en aval.",
    fact: "L'accord du participe passé avec \"avoir\" (accordé seulement si le complément d'objet direct est placé avant le verbe) reste l'une des règles les plus discutées de l'orthographe française, y compris par les linguistes eux-mêmes.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "voyage_vocabulaire",
    tier: "long",
    emoji: "🌋",
    label: "Le vocabulaire du voyage extraordinaire",
    text: "Un texte de Jules Verne décrivant une descente vers le centre de la Terre déploie tout un vocabulaire de l'exploration et de l'inconnu — l'occasion d'observer comment un auteur choisit précisément ses mots pour installer un univers et un suspense.",
    fact: "Jules Verne écrivait ses romans d'aventures scientifiques en se documentant énormément à l'avance, au point que certaines de ses inventions imaginaires ont fini, des décennies plus tard, par devenir réalité.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getFrancais9eObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_FRANCAIS_9E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_FRANCAIS_9E_OBJECTS = MUSEE_FRANCAIS_9E_OBJECTS;
window.getFrancais9eObjectsForParcours = getFrancais9eObjectsForParcours;
