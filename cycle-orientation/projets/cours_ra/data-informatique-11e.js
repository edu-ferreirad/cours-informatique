// ============================================================================
// SALLE INFORMATIQUE 11e — "Programmer avec Python"
// Contenu reformulé à partir de la brochure officielle Informatique 11e
// (Genève) : premiers scripts Python dans Thonny, module turtle (tracer
// des figures), boucles, débogage, construction 3D par assemblage.
// Aucun énoncé n'est copié tel quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_INFORMATIQUE_11E_OBJECTS = [
  {
    id: "premier_script_python",
    tier: "court",
    emoji: "🐍",
    label: "Le premier script Python",
    text: "Contrairement à Scratch, où l'on assemble des blocs visuels, Python demande d'écrire directement des lignes de texte qui forment un programme (un script) — un changement d'approche qui demande de mémoriser une syntaxe précise, mais ouvre la porte à des programmes bien plus puissants et flexibles.",
    fact: "Python doit son nom non pas au serpent, mais à la série télévisée comique britannique \"Monty Python's Flying Circus\", dont son créateur, Guido van Rossum, était un grand admirateur au moment de choisir le nom du langage.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "executer_comprendre_script",
    tier: "court",
    emoji: "▶️",
    label: "Exécuter, observer, comprendre",
    text: "Faire tourner un script pour la première fois, observer ce qu'il produit réellement à l'écran, puis relier chaque instruction du code à son effet visible : cette démarche d'expérimentation active est souvent la façon la plus rapide de comprendre un langage de programmation, bien plus que la seule lecture théorique.",
    fact: "Même les programmeurs expérimentés testent en permanence de petits bouts de code isolés pour vérifier leur compréhension d'une nouvelle instruction, plutôt que de deviner son fonctionnement uniquement en la lisant.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "module_turtle",
    tier: "court",
    emoji: "🐢",
    label: "Le module turtle, dessiner avec du code",
    text: "Le module \"turtle\" de Python permet de contrôler une petite tortue virtuelle qui se déplace sur l'écran en laissant une trace : avancer, tourner, lever ou baisser le \"crayon\" — une façon ludique et visuelle d'apprendre à programmer, où l'on voit immédiatement le résultat de chaque ligne de code.",
    fact: "Le concept de la tortue graphique remonte aux années 1960 et au langage éducatif Logo, conçu spécifiquement pour initier les enfants à la programmation par le dessin — Python en a hérité le principe des décennies plus tard.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "modifier_valeurs_programme",
    tier: "court",
    emoji: "🔧",
    label: "Modifier un programme existant",
    text: "Avant même d'écrire un programme depuis zéro, modifier un programme déjà fonctionnel (changer une longueur, un angle, une couleur) permet de comprendre concrètement le rôle de chaque paramètre — une étape d'apprentissage essentielle avant de composer ses propres scripts complets.",
    fact: "Un tout petit changement dans un programme — modifier un seul chiffre dans une instruction — peut transformer complètement le résultat affiché à l'écran, ce qui illustre bien la précision exigée par la programmation.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "boucles_polygones",
    tier: "moyen",
    emoji: "🔁",
    label: "Une boucle pour tracer un polygone",
    text: "Tracer un carré demande de répéter quatre fois la même paire d'instructions (avancer, tourner) ; tracer un polygone régulier à n'importe quel nombre de côtés suit exactement le même principe, à condition d'ajuster l'angle de rotation et le nombre de répétitions — une boucle rend ce code bien plus court qu'en répétant chaque instruction à la main.",
    fact: "Pour tracer n'importe quel polygone régulier avec une tortue graphique, l'angle de rotation à chaque sommet se calcule toujours de la même façon : 360 degrés divisés par le nombre de côtés du polygone.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "angle_exterieur_polygone",
    tier: "moyen",
    emoji: "📐",
    label: "Le lien entre angle et géométrie",
    text: "Programmer un polygone avec la tortue graphique oblige à comprendre précisément la géométrie qu'on manipule : l'angle qu'il faut faire tourner la tortue à chaque sommet n'est pas l'angle intérieur de la figure, mais son angle extérieur — une distinction qui devient vite évidente dès qu'un programme produit une forme inattendue.",
    fact: "Cette même relation entre angle extérieur et nombre de côtés d'un polygone régulier est directement liée aux notions de géométrie étudiées en mathématiques — la programmation permet ici de vérifier concrètement, par l'expérimentation, une propriété géométrique abstraite.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "leve_baisse_crayon",
    tier: "moyen",
    emoji: "✏️",
    label: "Lever et baisser le crayon virtuel",
    text: "Les commandes \"penup\" (lever le crayon) et \"pendown\" (baisser le crayon) permettent à la tortue graphique de se déplacer sans laisser de trace, puis de recommencer à dessiner — indispensable pour tracer plusieurs formes séparées, ou une forme complexe qui nécessite des déplacements invisibles entre certaines parties du dessin.",
    fact: "Oublier de relever le crayon avant un déplacement est l'une des erreurs les plus fréquentes des débutants en tortue graphique : le résultat produit alors une ligne parasite reliant deux formes qui devaient rester séparées.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "debogage_python",
    tier: "moyen",
    emoji: "🐛",
    label: "Déboguer, corriger patiemment",
    text: "Un programme qui ne fonctionne pas comme prévu n'est presque jamais \"cassé\" au hasard : il exécute exactement ce qu'on lui a demandé, même si ce n'est pas ce qu'on voulait. Déboguer consiste à comparer, étape par étape, ce que le programme fait réellement avec ce qu'on avait l'intention de lui faire faire.",
    fact: "Le terme \"bug\" (insecte, en anglais) viendrait d'une anecdote célèbre en informatique : en 1947, une véritable mite retrouvée coincée dans un relais électromécanique aurait causé une panne d'un des tout premiers ordinateurs.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "polygone_qui_devient_cercle",
    tier: "long",
    emoji: "⭕",
    label: "Quand le polygone devient un cercle",
    text: "En programmant un polygone régulier avec un très grand nombre de côtés très courts (par exemple 100 côtés de 2 pixels), la figure obtenue finit par ressembler, à l'œil nu, à un cercle presque parfait — une démonstration concrète, par le code, du même principe mathématique qui permettait aux Anciens d'approcher la valeur de π.",
    fact: "Ce lien entre polygones à très nombreux côtés et cercle n'est pas propre à la programmation : c'est exactement la méthode utilisée par le mathématicien grec Archimède, des siècles avant l'invention de l'ordinateur, pour encadrer la valeur de π.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "construction_objets_3d",
    tier: "long",
    emoji: "🧱",
    label: "Construire un objet en 3D, pièce par pièce",
    text: "Au-delà du dessin à plat avec la tortue graphique, la conception assistée par ordinateur permet d'assembler des pièces virtuelles pour construire un objet en trois dimensions — sélectionner une pièce, la positionner précisément, l'orienter — un procédé qui rappelle directement l'assemblage physique de briques de construction, mais entièrement numérique.",
    fact: "La conception assistée par ordinateur en 3D est aujourd'hui utilisée aussi bien pour des jeux et des maquettes numériques que pour concevoir de véritables pièces mécaniques, ensuite fabriquées par impression 3D ou usinage industriel.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "decomposer_probleme_complexe",
    tier: "long",
    emoji: "🧩",
    label: "Décomposer un problème complexe",
    text: "Face à un dessin complexe à reproduire par du code, la meilleure stratégie n'est presque jamais d'écrire le programme entier d'un coup : il s'agit de décomposer la figure en formes plus simples déjà maîtrisées (carrés, triangles, polygones), puis de les assembler — exactement la même démarche de décomposition utilisée pour tout problème algorithmique complexe.",
    fact: "Cette capacité à décomposer un grand problème en sous-problèmes plus simples et déjà résolus est considérée, en informatique, comme l'une des compétences fondamentales de la pensée algorithmique, bien au-delà du seul cadre de la tortue graphique.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "du_bloc_au_texte",
    tier: "long",
    emoji: "🔀",
    label: "Des blocs Scratch au texte Python",
    text: "Passer d'un langage par blocs visuels comme Scratch (en 9e) à un langage textuel comme Python (en 11e) change la forme du code, mais pas sa logique profonde : boucles, conditions, variables restent les mêmes concepts fondamentaux, seulement exprimés différemment — une passerelle naturelle entre les deux façons de programmer.",
    fact: "De nombreux langages de programmation professionnels utilisés dans l'industrie (JavaScript, C++, Java) partagent avec Python cette même logique de base par instructions textuelles — les compétences apprises avec Python en 11e restent donc largement transférables à d'autres langages plus tard.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getInformatique11eObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_INFORMATIQUE_11E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_INFORMATIQUE_11E_OBJECTS = MUSEE_INFORMATIQUE_11E_OBJECTS;
window.getInformatique11eObjectsForParcours = getInformatique11eObjectsForParcours;
