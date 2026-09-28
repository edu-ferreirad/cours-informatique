// ============================================================================
// SALLE FRANÇAIS 11e — "Musée des mots"
// Contenu reformulé à partir de L'Atelier du langage 11e (Grammaire du
// discours et du texte, Grammaire de la phrase, Vocabulaire/orthographe/
// conjugaison). Aucun énoncé n'est copié tel quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_FRANCAIS_11E_OBJECTS = [
  {
    id: "modalisation",
    tier: "court",
    emoji: "🎚️",
    label: "La modalisation, le degré de certitude",
    text: "Un locuteur ne présente jamais une idée de façon totalement neutre : certains mots (\"peut-être\", \"sans doute\", \"certainement\") indiquent le degré de certitude ou d'engagement de celui qui parle. Repérer cette modalisation permet de distinguer un fait affirmé d'une simple hypothèse.",
    fact: "Un même événement rapporté avec \"il semblerait que\" ou avec \"il est certain que\" engage la responsabilité du locuteur de façon radicalement différente, même si le fait rapporté reste identique.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "connecteurs_logiques",
    tier: "court",
    emoji: "🔗",
    label: "Les connecteurs logiques",
    text: "Des mots comme \"cependant\", \"donc\", \"car\" ou \"néanmoins\" articulent les idées entre elles en signalant une opposition, une conséquence ou une cause — sans eux, un texte argumentatif ne serait qu'une suite d'affirmations sans lien logique visible.",
    fact: "Remplacer \"mais\" par \"cependant\" ou \"néanmoins\" ne change pas le sens logique de la phrase, seulement son registre : plus soutenu à l'écrit, plus formel à l'oral.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "discours_narratif_descriptif_11e",
    tier: "court",
    emoji: "🖋️",
    label: "Narrer et décrire, en 11e",
    text: "Au-delà de la simple distinction entre récit et description, il s'agit désormais de maîtriser leur articulation fine dans un texte long : quand ralentir l'action pour décrire, quand accélérer pour faire avancer l'intrigue — un dosage qui définit le style propre d'un auteur.",
    fact: "Certains auteurs sont reconnaissables rien qu'à la proportion de description qu'ils insèrent dans leurs récits — un \"rythme\" d'écriture aussi identifiable qu'une signature.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "paroles_rapportees_11e",
    tier: "court",
    emoji: "💬",
    label: "Rapporter la parole, avec finesse",
    text: "Au-delà du simple discours direct et indirect, un texte peut aussi restituer les pensées d'un personnage sans marque grammaticale explicite (discours indirect libre) — une technique littéraire qui brouille volontairement la frontière entre la voix du narrateur et celle du personnage.",
    fact: "Le discours indirect libre est une technique très prisée en littérature car elle permet au lecteur d'accéder directement aux pensées d'un personnage, sans que le narrateur n'ait besoin d'annoncer \"il pensa que...\".",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "figures_de_style_11e",
    tier: "moyen",
    emoji: "🎨",
    label: "Le grand bestiaire des figures de style",
    text: "Au-delà de la métaphore et de la comparaison, tout un éventail de figures existe pour créer un effet particulier : l'hyperbole exagère, la litote atténue pour mieux suggérer, l'antithèse oppose deux idées contraires dans une même phrase pour les faire résonner l'une contre l'autre.",
    fact: "La litote \"je ne te déteste pas\" est une manière détournée de dire quelque chose de plus fort (\"je t'aime bien\") en semblant dire moins — un procédé fréquent en poésie amoureuse classique.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "connotations",
    tier: "moyen",
    emoji: "🌗",
    label: "Sens dénoté, sens connoté",
    text: "Un mot a toujours un sens premier, objectif, défini dans le dictionnaire (la dénotation) — mais il porte aussi souvent des associations d'idées supplémentaires, culturelles ou affectives, qui varient selon le contexte (la connotation).",
    fact: "Le mot \"renard\" désigne objectivement un animal, mais sa connotation de ruse et de malice, très présente dans la culture occidentale, n'est pas du tout universelle dans d'autres cultures.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "champ_semantique",
    tier: "moyen",
    emoji: "🕸️",
    label: "Le champ sémantique, tous les sens d'un mot",
    text: "Alors que le champ lexical rassemble plusieurs mots autour d'une même idée, le champ sémantique explore, à l'inverse, les différents sens que peut prendre un seul et même mot selon le contexte dans lequel il est employé.",
    fact: "Le mot \"feuille\" peut désigner, selon le champ sémantique concerné, une partie d'un arbre, une page de papier, ou même un document administratif (\"une feuille de paie\") — un même mot, plusieurs univers de sens.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "vocabulaire_portrait",
    tier: "moyen",
    emoji: "🖼️",
    label: "Le vocabulaire du portrait",
    text: "Décrire une personne, physiquement ou moralement, mobilise un vocabulaire spécifique et précis — bien au-delà des adjectifs les plus courants — pour faire naître une image vivante chez le lecteur plutôt qu'une simple liste de traits.",
    fact: "En littérature, le portrait physique d'un personnage révèle très souvent, en filigrane, des indices sur son caractère ou son destin — un procédé narratif que les grands romanciers du XIXe siècle maîtrisaient particulièrement bien.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "phrase_subordonnee_relative",
    tier: "long",
    emoji: "🔀",
    label: "La subordonnée relative",
    text: "Introduite par \"qui\", \"que\", \"dont\" ou \"où\", la proposition subordonnée relative vient enrichir un nom en apportant une information supplémentaire sans avoir besoin de créer une nouvelle phrase complète — un outil de construction de phrases complexes plus fluides.",
    fact: "Une subordonnée relative peut être essentielle au sens de la phrase (impossible à supprimer sans la rendre incompréhensible) ou simplement explicative (une précision qu'on pourrait retirer) — une nuance qui change même parfois la ponctuation à l'écrit.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "degres_adjectif",
    tier: "long",
    emoji: "📶",
    label: "Les degrés de l'adjectif",
    text: "Un adjectif peut s'intensifier (comparatif : \"plus grand que\", superlatif : \"le plus grand\") pour situer un élément par rapport à un ou plusieurs autres — un outil essentiel dès qu'on cherche à comparer, classer ou hiérarchiser dans un texte.",
    fact: "Quelques adjectifs français ont des comparatifs et superlatifs irréguliers hérités directement du latin : \"bon\" devient \"meilleur\", jamais \"plus bon\".",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "accord_participe_passe_11e",
    tier: "long",
    emoji: "✅",
    label: "L'accord du participe passé, en profondeur",
    text: "Au-delà de la règle de base avec \"avoir\" et \"être\", certains cas plus rares — verbes pronominaux, participe passé suivi d'un infinitif — demandent une analyse grammaticale plus fine pour déterminer si l'accord doit se faire, et avec quel élément de la phrase.",
    fact: "Même les correcteurs orthographiques automatiques se trompent parfois sur les cas les plus complexes d'accord du participe passé — ces règles restent, aujourd'hui encore, parmi les plus discutées de la langue française.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "monologue_theatre",
    tier: "long",
    emoji: "🎭",
    label: "Écrire un monologue de théâtre",
    text: "Un monologue donne à entendre la voix intérieure d'un personnage seul en scène, sans dialogue pour la relancer : il doit donc porter à lui seul la tension, les doutes ou les émotions du personnage, dans un texte pensé pour être dit à voix haute, pas seulement lu.",
    fact: "Écrire un bon monologue de théâtre demande souvent de le lire à voix haute pendant sa rédaction : un texte qui \"sonne\" mal à l'oral, même bien écrit sur le papier, ne fonctionnera pas sur scène.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getFrancais11eObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_FRANCAIS_11E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_FRANCAIS_11E_OBJECTS = MUSEE_FRANCAIS_11E_OBJECTS;
window.getFrancais11eObjectsForParcours = getFrancais11eObjectsForParcours;
