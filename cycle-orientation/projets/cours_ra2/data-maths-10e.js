// ============================================================================
// SALLE MATHÉMATIQUES 10e — "Cabinet des nombres et stratégies"
// Contenu reformulé à partir des 5 axes du manuel 10e (Recherche et
// stratégies, Nombres et opérations, Fonctions et algèbre, Espace,
// Grandeurs et mesures). Aucun énoncé d'exercice n'est copié tel quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_MATHS_10E_OBJECTS = [
  {
    id: "drole_de_montres",
    tier: "court",
    emoji: "🕰️",
    label: "Drôles de montres",
    text: "Des cadrans de montres affichent des graduations inhabituelles, parfois décalées ou incomplètes. Il faut déduire, par le raisonnement, quelle heure ils indiquent réellement — un problème de recherche et stratégies qui entraîne à lire des échelles graduées non standard.",
    fact: "Lire une échelle inhabituelle (comme un thermomètre gradué différemment, ou une jauge à l'envers) est une compétence directement transférable à la lecture de nombreux appareils de mesure réels.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "plongee_apnee",
    tier: "court",
    emoji: "🤿",
    label: "Nombres relatifs et profondeur",
    text: "En plongée en apnée, la profondeur se compte en nombres négatifs par rapport à la surface (0 m). Comparer, additionner ou soustraire des profondeurs revient donc à manipuler des nombres relatifs — un domaine où le signe compte autant que la valeur.",
    fact: "Les records mondiaux de profondeur en apnée sans palmes dépassent aujourd'hui les 100 mètres sous la surface — soit une pression corporelle plus de dix fois supérieure à celle de l'air libre.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "suites_nombres",
    tier: "court",
    emoji: "🔗",
    label: "Des suites qui se répètent",
    text: "Une suite de nombres peut suivre une régularité cachée : on ajoute toujours le même nombre, on multiplie toujours par le même facteur, ou on combine les deux derniers termes pour trouver le suivant. Découvrir la règle, c'est pouvoir prédire n'importe quel terme sans tous les calculer un par un.",
    fact: "La suite de Fibonacci (0, 1, 1, 2, 3, 5, 8, 13...), où chaque terme est la somme des deux précédents, apparaît spontanément dans la disposition des graines de tournesol ou des écailles de pomme de pin.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "pythagore",
    tier: "court",
    emoji: "📐",
    label: "Le théorème de Pythagore",
    text: "Dans un triangle rectangle, le carré de la longueur de l'hypoténuse (le côté le plus long, opposé à l'angle droit) est toujours égal à la somme des carrés des deux autres côtés. Cette relation permet de calculer une longueur manquante sans jamais la mesurer directement.",
    fact: "Le théorème porte le nom de Pythagore, mais des tablettes babyloniennes datées de plus de mille ans avant lui montrent que cette relation était déjà connue et utilisée bien avant la Grèce antique.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "aladin_proportions",
    tier: "moyen",
    emoji: "🧞",
    label: "Aladin et le partage du trésor",
    text: "Un récit inspiré des Mille et Une Nuits sert de prétexte à un problème de proportionnalité : répartir un trésor, une récolte ou une quantité selon des parts inégales mais liées entre elles par un même rapport.",
    fact: "Les contes des Mille et Une Nuits, dont est tiré le personnage d'Aladin, sont un recueil de récits populaires du monde arabo-persan compilés sur plusieurs siècles, bien avant leur diffusion en Europe.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "polygone_disque",
    tier: "moyen",
    emoji: "⭕",
    label: "Du polygone au disque",
    text: "En augmentant progressivement le nombre de côtés d'un polygone régulier inscrit dans un cercle, sa forme se rapproche de plus en plus de celle du disque. Cette idée permet d'approcher, étape par étape, la formule de l'aire du cercle.",
    fact: "C'est exactement cette méthode — approcher un cercle par des polygones à un très grand nombre de côtés — que le mathématicien grec Archimède a utilisée, sans calculatrice, pour encadrer la valeur du nombre π.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "graphique_expression",
    tier: "moyen",
    emoji: "📉",
    label: "Du graphique à la formule",
    text: "Un même phénomène (un trajet, une évolution de prix, une croissance) peut se décrire par un graphique, un tableau de valeurs ou une expression algébrique. Savoir passer de l'un à l'autre est une compétence centrale de l'algèbre au secondaire.",
    fact: "Deux droites qui se croisent sur un graphique représentent souvent, dans un problème concret, le moment exact où deux options (deux offres, deux vitesses) deviennent équivalentes.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "alpinisme_altitude",
    tier: "moyen",
    emoji: "🏔️",
    label: "Alpinisme et pourcentage de pente",
    text: "En montagne, la pente d'un sentier s'exprime souvent en pourcentage : un pourcentage qui compare le dénivelé parcouru à la distance horizontale, pas à la distance réellement marchée. Un même sommet peut ainsi sembler plus ou moins raide selon la façon dont on calcule.",
    fact: "Une pente de 100 % ne signifie pas un mur vertical : elle correspond à un angle de 45°, où la montée verticale égale exactement la distance horizontale parcourue.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "racine_carree",
    tier: "long",
    emoji: "√",
    label: "La racine carrée, l'opération inverse",
    text: "Si élever un nombre au carré revient à le multiplier par lui-même, la racine carrée fait le chemin inverse : elle cherche quel nombre, multiplié par lui-même, donne le résultat de départ. Cette opération est indispensable dès qu'on utilise le théorème de Pythagore pour trouver une longueur.",
    fact: "La racine carrée de la plupart des nombres entiers n'est pas un nombre \"rond\" : elle possède une infinité de décimales sans aucune répétition — on parle de nombre irrationnel.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "equations",
    tier: "long",
    emoji: "🎯",
    label: "Résoudre une équation",
    text: "Une équation cache un nombre inconnu, désigné par une lettre, derrière une égalité. La résoudre consiste à isoler cette inconnue en appliquant les mêmes opérations des deux côtés du signe \"=\", jusqu'à ce qu'elle se retrouve seule.",
    fact: "Le mot \"algèbre\" vient de l'arabe \"al-jabr\", qui signifie littéralement \"la réunion des morceaux cassés\" — une référence directe à la façon de réorganiser les termes d'une équation.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "echelles_cartes",
    tier: "long",
    emoji: "🗺️",
    label: "Agrandir, réduire, respecter l'échelle",
    text: "Une carte, une maquette ou un plan représente toujours une réalité à une échelle donnée : un rapport constant entre les distances réelles et les distances dessinées. Changer d'échelle sans respecter ce rapport déforme immédiatement les proportions de l'objet représenté.",
    fact: "Sur une carte à l'échelle 1:25 000 — très utilisée en randonnée — un centimètre sur le papier représente 250 mètres sur le terrain.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "moyenne_mediane",
    tier: "long",
    emoji: "📊",
    label: "Moyenne ou médiane ?",
    text: "Pour résumer une série de données par un seul nombre, la moyenne (la somme divisée par le nombre de valeurs) et la médiane (la valeur du milieu, une fois les données triées) racontent parfois des histoires très différentes — surtout quand une valeur extrême vient fausser la moyenne.",
    fact: "Le salaire \"moyen\" d'un pays peut donner une image trompeuse de la réalité si quelques très hauts revenus tirent la moyenne vers le haut : la médiane résiste beaucoup mieux à ce genre de valeurs extrêmes.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getMaths10eObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_MATHS_10E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_MATHS_10E_OBJECTS = MUSEE_MATHS_10E_OBJECTS;
window.getMaths10eObjectsForParcours = getMaths10eObjectsForParcours;
