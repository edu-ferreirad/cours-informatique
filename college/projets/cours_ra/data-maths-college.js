// ============================================================================
// SALLE MATHÉMATIQUES — COLLÈGE DE GENÈVE (DF, niveaux 1 et 2, 1ère-4e)
// Contenu reformulé à partir du Plan d'études du Collège de Genève,
// section Mathématiques p. 27-29 et Applications des mathématiques
// p. 30-31 : algèbre, fonctions, géométrie (1ère-2e années), analyse,
// géométrie vectorielle/algèbre linéaire, statistiques et probabilités
// (3e-4e années). Aucun énoncé n'est copié tel quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_MATHS_COLLEGE_OBJECTS = [
  {
    id: "deux_niveaux_ma1_ma2",
    tier: "court",
    emoji: "🔀",
    label: "Deux niveaux, un même programme de base",
    text: "Le collège propose deux niveaux de mathématiques : MA1 (niveau normal), qui assure la formation générale de base, et MA2 (niveau avancé), pour les élèves qui souhaitent approfondir — obligatoire pour l'option spécifique physique et applications des mathématiques, et conseillé pour des études supérieures scientifiques ou économiques.",
    fact: "En 1ère année, les deux niveaux partagent le même programme de base : ils se distinguent surtout par la manière de présenter les sujets et le degré d'approfondissement, pas encore par des contenus complètement différents.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "langage_mathematique_abstraction",
    tier: "court",
    emoji: "🔤",
    label: "Les mathématiques, un langage abstrait",
    text: "Le calcul littéral permet un passage du particulier au général : plutôt que de résoudre un problème avec des nombres précis, on raisonne avec des lettres qui représentent n'importe quelle valeur — une abstraction qui rend un même raisonnement valable pour une infinité de situations concrètes.",
    fact: "Le plan d'études insiste explicitement sur le fait que les mathématiques ne sont pas seulement un langage pour poser et résoudre un problème scientifique : elles ouvrent aussi un vaste champ de méthodes et de structures, dans un esprit rigoureux et précis.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "fonctions_relations_grandeurs",
    tier: "court",
    emoji: "📈",
    label: "Les fonctions, des relations entre grandeurs",
    text: "Étudier les fonctions, c'est apprendre à mathématiser des situations concrètes en mettant en évidence une relation entre des grandeurs — un lien qui prend tout son sens dans d'autres disciplines comme la physique, la biologie ou l'économie, où une grandeur dépend souvent directement d'une autre.",
    fact: "Le plan d'études attend que l'élève sache faire un \"va-et-vient\" constant entre l'aspect algébrique d'une fonction (son équation) et son aspect graphique (sa courbe) — deux façons de voir un même objet mathématique.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "geometrie_argumentation",
    tier: "court",
    emoji: "📐",
    label: "La géométrie, une école de la démonstration",
    text: "Étudier une figure géométrique oblige à en détailler les parties constitutives et les relations entre elles — un exercice qui permet une prise de contact directe avec l'argumentation logique et la démonstration, en distinguant précisément ce qui est une hypothèse de ce qui est une conclusion.",
    fact: "Le plan d'études encourage explicitement à envisager ce qui se passerait si l'on modifiait certaines hypothèses d'un problème géométrique — une façon de comprendre une propriété non pas en la mémorisant, mais en explorant ses limites.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "analyse_taux_variation",
    tier: "moyen",
    emoji: "📉",
    label: "L'analyse, ou l'étude de la variation",
    text: "À partir de la 3e année, l'analyse mathématique caractérise les variations d'une grandeur mesurable à l'aide du taux de variation et de sa limite, développant le raisonnement sur la relation entre une fonction et sa dérivée — un outil central pour modéliser des phénomènes en physique ou en sciences expérimentales.",
    fact: "Le plan d'études demande explicitement de réfléchir au sens de notions comme l'infiniment grand, l'infiniment petit ou le continu, et d'en comprendre le statut au cours de l'histoire des mathématiques — pas seulement de les manipuler techniquement.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "geometrie_vectorielle_espace",
    tier: "moyen",
    emoji: "➡️",
    label: "Le vecteur, un outil pour l'espace",
    text: "La géométrie vectorielle et l'algèbre linéaire développent la vision dans l'espace et la capacité à prévoir des résultats par l'argumentation, en maîtrisant la notion de vecteur dans le plan puis dans l'espace pour résoudre des problèmes géométriques plus complexes qu'à plat.",
    fact: "Le plan d'études présente le vecteur comme un pont entre plusieurs approches d'un même problème géométrique : une même situation peut se résoudre par le calcul vectoriel, par la géométrie analytique classique ou par d'autres méthodes complémentaires.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "statistiques_probabilites",
    tier: "moyen",
    emoji: "🎲",
    label: "Statistiques et probabilités, deux regards sur le hasard",
    text: "Les statistiques permettent de classer, regrouper et représenter des données numériques pour en tirer des conclusions fiables, tandis que les probabilités permettent de comprendre et d'expliquer des phénomènes aléatoires — deux outils complémentaires face à l'incertitude, aussi utiles en sciences qu'en économie.",
    fact: "Le plan d'études attend explicitement une posture critique : savoir analyser, interpréter mais aussi critiquer des résultats statistiques, plutôt que de les accepter tels quels — une compétence particulièrement utile face aux statistiques diffusées dans les médias.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "applications_maths_interdisciplinaire",
    tier: "moyen",
    emoji: "🔗",
    label: "Les applications des mathématiques, un pont vers le concret",
    text: "Le cours d'applications des mathématiques (lié à l'option spécifique physique) traduit sous forme mathématique des problèmes concrets venus de la physique, de la biologie, de l'économie ou de l'informatique, avant de les résoudre puis d'interroger les limites du modèle mathématique utilisé pour les représenter.",
    fact: "Le plan d'études qualifie cette discipline de \"caractère interdisciplinaire fondamental\" : les exercices et thèmes de recherche y sont volontairement choisis dans de très nombreux domaines différents, plutôt que centrés uniquement sur les mathématiques pures.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "esprit_scientifique_2e_annee",
    tier: "long",
    emoji: "🔬",
    label: "L'esprit scientifique, un objectif dès la 2e année",
    text: "Dès la 2e année, l'accent des mathématiques se déplace vers l'exercice de l'esprit scientifique : la recherche personnelle et le développement de l'aptitude à la démonstration deviennent aussi importants que la maîtrise des techniques de calcul elles-mêmes.",
    fact: "Le plan d'études distingue précisément les deux niveaux (normal et avancé) sur ce point : en 2e année, au-delà du contenu, c'est l'intensité de cet exercice de recherche et de démonstration qui les différencie le plus.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "attitudes_rigueur_intuition",
    tier: "long",
    emoji: "⚖️",
    label: "Rigueur et intuition, un équilibre à tenir",
    text: "Le plan d'études attend de l'élève une posture double et parfois délicate à concilier : rester rigoureux et critique vis-à-vis des méthodes, tout en sachant faire preuve de souplesse et d'esprit d'intuition, sans jamais renoncer à sa probité intellectuelle.",
    fact: "Parmi les attitudes attendues figure explicitement la capacité à \"apprécier l'aspect esthétique d'une théorie et les jeux de l'esprit\" — une dimension presque artistique des mathématiques, rarement mise en avant, mais pourtant citée dans le texte officiel.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "methodes_numeriques_algorithmique",
    tier: "long",
    emoji: "🧮",
    label: "Les méthodes numériques, approcher plutôt que résoudre",
    text: "Quand une solution exacte n'est pas accessible par le calcul direct, les méthodes numériques permettent de produire une approximation fiable d'un résultat, à condition de bien comprendre les performances et les limites des outils utilisés — une démarche qui exige une maîtrise des bases de l'algorithmique.",
    fact: "Le plan d'études relie ce volet numérique directement à l'algorithmique : comprendre et conduire une démarche algorithmique qui construit pas à pas la solution d'un problème est cité comme une aptitude fondamentale de cette discipline.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "histoire_des_mathematiques",
    tier: "long",
    emoji: "📜",
    label: "Les mathématiques, une science avec une histoire",
    text: "Le plan d'études précise que l'enseignement des mathématiques doit se référer au développement historique de cette science — les concepts étudiés (nombres réels, infini, calcul différentiel) ne sont pas apparus d'un coup, mais se sont construits progressivement, souvent à travers des débats et des controverses entre mathématiciens.",
    fact: "Comprendre le statut historique changeant d'objets comme l'infiniment grand ou l'infiniment petit fait partie des objectifs explicites de l'analyse mathématique en 3e et 4e années — l'histoire des idées y compte donc autant que leur maîtrise technique.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getMathsCollegeObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_MATHS_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_MATHS_COLLEGE_OBJECTS = MUSEE_MATHS_COLLEGE_OBJECTS;
window.getMathsCollegeObjectsForParcours = getMathsCollegeObjectsForParcours;
