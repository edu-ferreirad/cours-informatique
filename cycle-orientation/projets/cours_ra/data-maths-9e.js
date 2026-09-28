// ============================================================================
// SALLE MATHÉMATIQUES 9e — "Cabinet des nombres et stratégies"
// Contenu reformulé à partir des 5 axes du Plan d'études romand / MSN
// couverts par le manuel 9e (Recherche et stratégies, Nombres et opérations,
// Fonctions et algèbre, Espace, Grandeurs et mesures). Aucun énoncé
// d'exercice n'est copié tel quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_MATHS_9E_OBJECTS = [
  {
    id: "coffre_combinaison",
    tier: "court",
    emoji: "🔐",
    label: "Le coffre à combinaison",
    text: "Un coffre-fort a perdu sa combinaison. Seuls quelques indices logiques (des sommes, des comparaisons entre chiffres) permettent de la retrouver, sans jamais tester tous les codes un par un — c'est tout l'art de la recherche et stratégies : réduire le champ des possibles par le raisonnement.",
    fact: "Ce type de problème s'appelle un \"problème ouvert\" : il n'impose pas de méthode, chaque élève doit inventer sa propre stratégie de résolution.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "decimaux_operations",
    tier: "court",
    emoji: "🔢",
    label: "La droite des décimaux",
    text: "Additionner, soustraire, multiplier ou diviser des nombres décimaux en colonnes demande de bien aligner les virgules et de suivre un ordre précis d'opérations. Placer ces nombres sur une droite numérique aide à vérifier si le résultat obtenu est plausible.",
    fact: "L'ordre des opérations (parenthèses, puissances, multiplications/divisions, puis additions/soustractions) est une convention internationale — sans elle, un même calcul donnerait des résultats différents selon les pays.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "proportionnalite",
    tier: "court",
    emoji: "⚖️",
    label: "La balance de la proportionnalité",
    text: "Deux grandeurs sont proportionnelles quand l'une est toujours obtenue en multipliant l'autre par le même nombre : doubler l'une double l'autre. Reconnaître une situation proportionnelle, c'est souvent la clé pour résoudre un problème de recette, d'échelle ou de vitesse.",
    fact: "Le symbole \"%\" (pourcentage) est une proportionnalité déguisée : \"20 % de\" signifie toujours \"multiplier par 20, puis diviser par 100\".",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "triangle_abc",
    tier: "court",
    emoji: "📐",
    label: "Le triangle ABC",
    text: "Construire un triangle à partir de mesures données (longueurs, angles) demande de choisir le bon outil : règle, équerre ou compas. Certaines combinaisons de mesures ne permettent de construire qu'un seul triangle possible — d'autres n'en permettent aucun.",
    fact: "Trois côtés ne suffisent pas toujours à faire un triangle : la somme des deux côtés les plus courts doit toujours dépasser la longueur du troisième, sinon la figure ne peut pas se refermer.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "graphique_fonction",
    tier: "moyen",
    emoji: "📈",
    label: "Le graphique qui raconte une histoire",
    text: "Un graphique peut représenter l'évolution d'une grandeur dans le temps (la vitesse d'un cycliste, le niveau d'une baignoire qui se remplit...). Savoir lire ses variations — montée, palier, descente — revient à raconter une histoire à partir d'une simple courbe.",
    fact: "En algèbre, une fonction associe à chaque nombre de départ un et un seul nombre d'arrivée — comme une machine qui transforme toujours une même entrée en la même sortie.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "symetrie",
    tier: "moyen",
    emoji: "🦋",
    label: "L'axe de symétrie",
    text: "Une figure possède un axe de symétrie quand elle se superpose exactement à elle-même après avoir été repliée le long de cet axe. Repérer ces axes — dans une figure géométrique comme dans un papillon ou un visage — entraîne le regard à voir les structures cachées.",
    fact: "Un cercle possède une infinité d'axes de symétrie : n'importe quel diamètre en est un.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "achat_musique",
    tier: "moyen",
    emoji: "🎧",
    label: "Le budget musique",
    text: "Face à un budget limité et plusieurs prix différents (abonnements, achats à l'unité), il faut comparer plusieurs stratégies d'achat pour trouver la plus avantageuse selon la quantité souhaitée — un problème de recherche et stratégies typique, où plusieurs méthodes de calcul peuvent mener à la bonne réponse.",
    fact: "Comparer deux offres commerciales (abonnement fixe vs prix à l'unité) revient mathématiquement à comparer deux fonctions affines — exactement ce que font les vrais comparateurs de prix en ligne.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "aire_perimetre",
    tier: "moyen",
    emoji: "📏",
    label: "Aire ou périmètre ?",
    text: "Le périmètre mesure le contour d'une figure (utile pour une clôture), l'aire mesure la surface qu'elle recouvre (utile pour un pot de peinture). Deux figures peuvent avoir le même périmètre mais des aires très différentes — ou l'inverse.",
    fact: "À périmètre égal, c'est toujours le cercle qui a l'aire la plus grande parmi toutes les figures possibles — un fait que les architectes et ingénieurs exploitent depuis l'Antiquité.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "essai_erreur",
    tier: "long",
    emoji: "🧩",
    label: "Essais, conjecture, preuve",
    text: "Face à un problème inconnu, la démarche du mathématicien suit souvent trois étapes : essayer plusieurs pistes, formuler une conjecture (une hypothèse qui semble vraie), puis chercher à la prouver — ou à trouver un contre-exemple qui la réfute.",
    fact: "Une conjecture peut sembler vraie pendant des siècles avant qu'on découvre un seul contre-exemple qui l'invalide complètement : en mathématiques, mille essais réussis ne valent pas une preuve.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "volume",
    tier: "long",
    emoji: "📦",
    label: "Remplir un volume",
    text: "Calculer le volume d'un solide (cube, prisme, cylindre) permet de savoir combien de matière il contient — de l'eau dans une piscine au béton dans un pilier. La formule change selon la forme, mais l'idée reste la même : mesurer l'espace occupé en trois dimensions.",
    fact: "Doubler toutes les dimensions d'un solide ne double pas son volume : elle le multiplie par 8 (2×2×2) — un piège classique quand on agrandit une recette ou une maquette.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "diagrammes",
    tier: "long",
    emoji: "📊",
    label: "Combien, et sous quelle forme ?",
    text: "Un même ensemble de données (résultats d'un sondage, notes d'une classe) peut se représenter en diagramme en bâtons, en secteurs (camembert) ou en tableau. Chaque représentation met en valeur une information différente — et peut aussi, mal choisie, induire en erreur.",
    fact: "Un diagramme en secteurs (camembert) n'a de sens que si toutes les parts additionnées représentent bien un tout (100 %) — un piège fréquent dans les infographies mal construites.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "onglets_codage",
    tier: "long",
    emoji: "🔑",
    label: "Le langage des signes",
    text: "Avant même de manipuler des lettres en algèbre, on peut coder des nombres inconnus par des symboles ou des lettres et chercher, à partir d'indices, à les retrouver — une première marche vers la résolution d'équations, où l'inconnue devient un x à découvrir.",
    fact: "Le symbole \"x\" pour désigner l'inconnue viendrait d'une déformation, au XVIIe siècle, du mot arabe \"chay\" (chose), traduit et transformé au fil des traductions latines et espagnoles.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getMaths9eObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_MATHS_9E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_MATHS_9E_OBJECTS = MUSEE_MATHS_9E_OBJECTS;
window.getMaths9eObjectsForParcours = getMaths9eObjectsForParcours;
