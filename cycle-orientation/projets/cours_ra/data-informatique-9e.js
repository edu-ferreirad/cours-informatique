// ============================================================================
// SALLE INFORMATIQUE 9e — "Machine et information"
// Contenu reformulé à partir du manuel officiel romand Informatique 9e
// (SEE, Genève, éd. 2025) : algorithmes et programmation, dispositifs et
// interfaces, stockage, représentation binaire, réseaux, sécurité,
// intelligence artificielle, traces numériques. Aucun énoncé n'est copié
// tel quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_INFORMATIQUE_9E_OBJECTS = [
  {
    id: "algorithme_protocole",
    tier: "court",
    emoji: "🔁",
    label: "Un algorithme, comme un protocole",
    text: "Un algorithme n'est rien d'autre qu'une suite précise d'instructions à suivre dans un ordre donné pour arriver toujours au même résultat, à partir d'une même situation de départ — exactement comme une recette de cuisine ou le protocole d'un examen médical, bien avant même de parler d'ordinateur.",
    fact: "Si une seule étape d'un algorithme est mal exécutée ou mal ordonnée, le résultat final peut être complètement faussé — c'est pourquoi programmer demande une précision que le langage courant, plus tolérant à l'approximation, n'exige pas.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "boucle_optimisation",
    tier: "court",
    emoji: "🔂",
    label: "La boucle, pour ne pas se répéter",
    text: "Quand une même suite d'instructions se répète plusieurs fois de suite (par exemple avancer puis tourner, plusieurs fois), une boucle \"répéter X fois\" permet d'écrire cette instruction une seule fois plutôt que de la copier-coller à chaque répétition — un programme plus court, plus clair, et plus facile à corriger.",
    fact: "Repérer qu'une suite d'instructions se répète est souvent la première étape pour optimiser un programme : un même dessin peut ainsi passer de plus de dix blocs de code à seulement cinq blocs, une fois la boucle repérée.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "dispositifs_informatiques",
    tier: "court",
    emoji: "💻",
    label: "Une multitude de dispositifs",
    text: "Smartphone, tablette, ordinateur portable, console de jeux, ordinateur de bureau, serveur : tous ces appareils sont des dispositifs informatiques, mais ils diffèrent par leur connectivité, leur portabilité, leur capacité de stockage et leur puissance de calcul — des critères qui expliquent pourquoi on ne choisit pas le même appareil pour chaque usage.",
    fact: "Un serveur, contrairement aux autres dispositifs listés, n'est presque jamais pensé pour être utilisé directement par une seule personne : il est conçu pour répondre en permanence aux demandes de nombreux autres appareils à distance.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "peripheriques_entree_sortie",
    tier: "court",
    emoji: "🖱️",
    label: "Périphériques d'entrée et de sortie",
    text: "Autour de l'unité centrale d'un ordinateur, chaque périphérique se classe en deux grandes catégories : les périphériques d'entrée (clavier, souris) qui envoient de l'information vers l'ordinateur, et les périphériques de sortie (écran, haut-parleurs, imprimante) qui en reçoivent pour la restituer à l'utilisateur.",
    fact: "Certains périphériques, comme une clé USB ou un écran tactile, fonctionnent dans les deux sens à la fois : ils peuvent aussi bien envoyer que recevoir de l'information, ce qui en fait des périphériques à la fois d'entrée et de sortie.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "interfaces_graphiques",
    tier: "moyen",
    emoji: "🖥️",
    label: "Des interfaces qui se ressemblent",
    text: "Bureau, fenêtres, icônes, barre de menus : la plupart des systèmes d'exploitation et logiciels partagent aujourd'hui des éléments d'interface graphique très similaires — des standards qui permettent à un utilisateur habitué à un logiciel de s'y retrouver rapidement dans un autre, même inconnu.",
    fact: "Les icônes de \"copier\", \"couper\" et \"coller\" sont devenues des standards si universellement reconnus qu'elles restent presque identiques d'un logiciel à l'autre, quel que soit le système d'exploitation ou même la langue utilisée.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "arborescence_fichiers",
    tier: "moyen",
    emoji: "🗂️",
    label: "L'arborescence des fichiers",
    text: "Un ordinateur organise ses fichiers selon une structure en arborescence : des dossiers qui peuvent eux-mêmes contenir d'autres dossiers, formant une hiérarchie qu'on peut décrire par un chemin d'accès précis, comme une adresse qui indique exactement où se trouve un fichier au milieu de milliers d'autres.",
    fact: "Bien organiser son arborescence de fichiers dès le départ (avec des noms de dossiers clairs) permet de retrouver un document en quelques secondes des années plus tard, alors qu'un même dossier mal organisé peut devenir totalement incompréhensible en quelques mois seulement.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "sauvegarde_donnees",
    tier: "moyen",
    emoji: "💾",
    label: "Sauvegarder, mais où et combien de fois ?",
    text: "Conserver plusieurs copies d'un même fichier sur des supports et dans des lieux différents (clé USB, disque dur, service en ligne) permet de se protéger contre la perte de données : même si un support tombe en panne ou se perd, les autres copies restent disponibles.",
    fact: "Disposer de trois copies identiques d'un fichier important permet de faire face à deux événements malheureux simultanés (par exemple la perte d'une clé USB en même temps que la panne d'un disque dur) sans jamais perdre définitivement le fichier.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "systeme_binaire",
    tier: "moyen",
    emoji: "🔢",
    label: "Le système binaire",
    text: "Au cœur de tout ordinateur, chaque information (nombre, lettre, image, son) est finalement stockée sous forme de suites de 0 et de 1 — le système binaire — chaque groupe de 8 bits (un octet) permettant de coder jusqu'à 256 valeurs différentes, de 0 à 255.",
    fact: "Le nombre binaire 1111 1111 correspond exactement à 255 en écriture décimale — c'est pourquoi une valeur de couleur ou de son codée sur un seul octet ne peut jamais dépasser 255, une limite qu'on retrouve partout en informatique.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "codage_ascii",
    tier: "long",
    emoji: "🔤",
    label: "Coder une lettre en binaire (ASCII)",
    text: "La table ASCII associe à chaque lettre, chiffre ou symbole du clavier un code numérique précis, lui-même transformé en binaire pour être stocké par l'ordinateur : ainsi, un mot entier n'est jamais qu'une longue suite de 0 et de 1 correspondant, lettre après lettre, à cette table de correspondance.",
    fact: "Le fameux message \"Hello, World!\", traditionnellement affiché par un tout premier programme pour vérifier qu'il fonctionne sans erreur, se retrouve ainsi entièrement transformé, caractère par caractère, en une longue suite de zéros et de uns selon la table ASCII.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "images_numeriques_poids",
    tier: "long",
    emoji: "🖼️",
    label: "Pourquoi une image en couleur pèse plus lourd",
    text: "Une image en noir et blanc pur ne nécessite qu'un seul bit par pixel (noir ou blanc), une image en niveaux de gris un octet entier par pixel (256 nuances possibles), et une image en couleurs RVB trois octets par pixel (un pour le rouge, un pour le vert, un pour le bleu) — ce qui explique pourquoi une photo couleur \"pèse\" bien plus lourd qu'une image en noir et blanc de mêmes dimensions.",
    fact: "Une même image peut peser environ 24 fois plus lourd en couleurs qu'en noir et blanc pur, simplement parce que chaque pixel demande 24 bits (3 octets) au lieu d'un seul bit pour être codé.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "reseaux_technologies",
    tier: "long",
    emoji: "📡",
    label: "Wi-Fi, Bluetooth, LTE : chacun son usage",
    text: "Un smartphone, une montre connectée ou un routeur domestique n'utilisent pas tous la même technologie de connexion : le Bluetooth convient aux échanges à très courte portée (un casque audio), le Wi-Fi à un réseau local plus étendu (la maison), et le LTE/4G à une connexion mobile disponible presque partout, même loin de tout réseau Wi-Fi.",
    fact: "Le choix d'une technologie réseau est toujours un compromis entre portée, vitesse, consommation d'énergie et interférences possibles — c'est pourquoi une voiture connectée privilégie le LTE (disponible partout) plutôt que le Bluetooth (trop limité en portée) pour ses services en ligne.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "chiffrement_cesar",
    tier: "long",
    emoji: "🔐",
    label: "Le code de César, ancêtre du chiffrement",
    text: "Le code de César, une technique de chiffrement antique, décale chaque lettre d'un texte d'un même nombre de positions dans l'alphabet, rendant le message illisible sans connaître la clé de décalage — une méthode aujourd'hui bien trop simple pour un usage réel, mais qui illustre le principe de base de tout chiffrement : rendre l'information incompréhensible sans une clé de déchiffrement.",
    fact: "Pendant la Seconde Guerre mondiale, la machine allemande Enigma, bien plus complexe que le code de César, chiffrait les communications militaires nazies — jusqu'à ce qu'Alan Turing et son équipe parviennent à en déchiffrer les messages, un tournant majeur du conflit.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getInformatique9eObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_INFORMATIQUE_9E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_INFORMATIQUE_9E_OBJECTS = MUSEE_INFORMATIQUE_9E_OBJECTS;
window.getInformatique9eObjectsForParcours = getInformatique9eObjectsForParcours;
