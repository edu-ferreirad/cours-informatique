// ============================================================================
// SALLE MATHÉMATIQUES 11e — "Cabinet des nombres et stratégies"
// Contenu reformulé à partir des 5 axes du manuel 11e. Aucun énoncé
// d'exercice n'est copié tel quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_MATHS_11E_OBJECTS = [
  {
    id: "nombres_reels",
    tier: "court",
    emoji: "♾️",
    label: "L'ensemble des nombres réels",
    text: "Les nombres réels regroupent en une seule grande famille tous les nombres rationnels (qui s'écrivent en fraction) et tous les nombres irrationnels (comme π ou √2, dont les décimales ne s'arrêtent ni ne se répètent jamais). Visualiser cet ensemble, c'est imaginer une droite numérique entièrement remplie, sans le moindre trou.",
    fact: "Entre deux nombres réels, aussi proches soient-ils, il existe toujours une infinité d'autres nombres réels — une propriété qui a longtemps troublé les mathématiciens avant d'être rigoureusement démontrée.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "nombres_relatifs_11e",
    tier: "court",
    emoji: "➕➖",
    label: "Maîtriser les nombres relatifs",
    text: "Additionner, soustraire, multiplier des nombres positifs et négatifs suit des règles précises, en particulier pour les signes : le produit de deux nombres négatifs donne toujours un résultat positif, une règle qui surprend souvent au premier abord.",
    fact: "Cette règle du \"moins par moins donne plus\" a mis des siècles à être pleinement acceptée par les mathématiciens : certains, au XVIIIe siècle encore, doutaient de la légitimité même des nombres négatifs.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "randonnee_fractionnee",
    tier: "court",
    emoji: "🥾",
    label: "La randonnée fractionnée",
    text: "Un parcours de randonnée est découpé en plusieurs tronçons, chacun représentant une fraction de la distance totale. Comparer, additionner ou ordonner ces fractions permet de reconstituer la longueur exacte du trajet complet.",
    fact: "Comparer deux fractions sans les convertir au même dénominateur est un piège classique : 3/4 semble \"petit\" à cause du 4, mais reste bien plus grand que 3/8.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "notation_scientifique",
    tier: "court",
    emoji: "🔬",
    label: "Écrire les nombres immenses ou minuscules",
    text: "La notation scientifique permet d'écrire de façon compacte des nombres extrêmement grands (la distance Terre-Soleil) ou extrêmement petits (la taille d'un virus), en les exprimant comme un nombre entre 1 et 10 multiplié par une puissance de 10.",
    fact: "La distance moyenne Terre-Soleil s'écrit environ 1,5 × 10⁸ km — bien plus lisible que 150 000 000 km écrit en toutes lettres.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "nombres_rationnels",
    tier: "moyen",
    emoji: "🔢",
    label: "Fractions et décimaux périodiques",
    text: "Tout nombre rationnel peut s'écrire à la fois sous forme de fraction et sous forme décimale — mais cette forme décimale, une fois convertie, se termine parfois par une suite de chiffres qui se répète indéfiniment, comme 1/3 = 0,3333...",
    fact: "0,999999... répété à l'infini n'est pas \"presque\" égal à 1 : il lui est mathématiquement exactement égal, une égalité qui surprend presque tout le monde la première fois qu'on la démontre.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "racines_11e",
    tier: "moyen",
    emoji: "√",
    label: "Racines carrées et racines cubiques",
    text: "Après la racine carrée (qui cherche quel nombre multiplié deux fois par lui-même donne le résultat), la racine cubique cherche quel nombre multiplié trois fois par lui-même donne le résultat — une notion indispensable dès qu'on manipule des volumes.",
    fact: "Contrairement à la racine carrée, la racine cubique d'un nombre négatif existe bel et bien : la racine cubique de -8 est -2, car (-2)×(-2)×(-2) = -8.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "pyramide_decoree",
    tier: "moyen",
    emoji: "🔺",
    label: "La pyramide décorée",
    text: "Calculer le volume et la surface d'une pyramide demande de combiner la mesure de sa base et celle de sa hauteur — une compétence directement utile dès qu'on doit estimer une quantité de matière (peinture, décoration, matériaux) nécessaire pour recouvrir un solide en trois dimensions.",
    fact: "Le volume d'une pyramide est toujours égal au tiers du volume du prisme de même base et de même hauteur — un rapport que les Égyptiens de l'Antiquité maîtrisaient déjà empiriquement pour bâtir leurs monuments.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "multiplication_fractions",
    tier: "moyen",
    emoji: "✖️",
    label: "Multiplier et diviser des fractions",
    text: "Multiplier deux fractions consiste à multiplier les numérateurs entre eux, puis les dénominateurs entre eux. Diviser par une fraction, lui, revient à multiplier par son inverse — une transformation qui déroute beaucoup d'élèves avant de devenir un réflexe.",
    fact: "Diviser un nombre par une fraction inférieure à 1 donne toujours un résultat plus grand que le nombre de départ — l'inverse de ce que \"diviser\" évoque intuitivement.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "etude_fonctions",
    tier: "long",
    emoji: "📈",
    label: "Étudier une fonction",
    text: "Étudier une fonction, c'est chercher à en comprendre le comportement global : où elle croît, où elle décroît, si elle coupe l'axe horizontal, quelle est sa valeur de départ. Cette lecture globale permet souvent de résoudre un problème sans calculer chaque valeur une par une.",
    fact: "Une fonction affine (de la forme y = ax + b) trace toujours une droite ; dès que l'exposant de x dépasse 1, la courbe obtenue n'est plus jamais une droite, mais une courbe qui change de direction.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "appariement",
    tier: "long",
    emoji: "🔗",
    label: "Le bon appariement",
    text: "Face à deux listes d'éléments à relier entre eux selon une règle logique cachée (des objets et leurs propriétés, des personnes et leurs préférences), il faut combiner déduction et élimination progressive pour reconstituer l'unique appariement correct.",
    fact: "Ce type de casse-tête logique, où l'on élimine progressivement les possibilités impossibles à l'aide d'un tableau, est identique dans son principe aux célèbres grilles de logique publiées dans certains magazines.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "diagonales_polygone",
    tier: "long",
    emoji: "⭐",
    label: "Compter les diagonales d'un polygone",
    text: "Relier tous les sommets d'un polygone entre eux, sauf les côtés déjà existants, trace ses diagonales. Leur nombre augmente très vite avec le nombre de côtés — chercher une formule générale plutôt que de compter à la main devient vite indispensable.",
    fact: "Un simple hexagone (6 côtés) possède déjà 9 diagonales, et un polygone à 20 côtés en compte 170 — la croissance est bien plus rapide que le nombre de côtés lui-même.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "discussion_cas",
    tier: "long",
    emoji: "🗂️",
    label: "Raisonner par la discussion de cas",
    text: "Certains problèmes ne se résolvent pas par une seule formule, mais en distinguant plusieurs cas possibles (selon qu'un nombre est pair ou impair, positif ou négatif...) et en traitant chacun séparément avant de conclure. Cette démarche, appelée discussion de cas, est une stratégie centrale en recherche et stratégies.",
    fact: "Un raisonnement par discussion de cas n'est complet que si absolument toutes les possibilités ont été envisagées — oublier un seul cas invalide toute la démonstration, même si tous les autres cas ont été traités correctement.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getMaths11eObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_MATHS_11E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_MATHS_11E_OBJECTS = MUSEE_MATHS_11E_OBJECTS;
window.getMaths11eObjectsForParcours = getMaths11eObjectsForParcours;
