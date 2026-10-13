// SALLE SÉQUENCES — HISTOIRE DE L'INFORMATIQUE — de la Pascaline (1642) à l'IA (2022)
// Dates vérifiées (Wikipédia FR + recoupement). Texte adressé à l'élève, étape par étape.
// 11 des 12 étapes ont une photo réelle, libre de droits, sourcée sur Wikimedia Commons
// (étape "IA 2022" volontairement sans photo : rien de vraiment libre et neutre à ce sujet).
// Détail des licences et auteurs : voir credits.html, section « Histoire de l'informatique ».
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_INFORMATIQUE_HISTOIRE_OBJECTS = [
  {
    id: "seq_info_histoire_1",
    tier: "court",
    emoji: "🧮",
    label: "1642 — La Pascaline, calculer avec des roues dentées",
    text: "Imagine une machine entièrement mécanique, sans électricité, qui additionne et soustrait toute seule grâce à des roues dentées qui s'entraînent les unes les autres. C'est la Pascaline, construite par Blaise Pascal en 1642 pour aider son père, percepteur d'impôts, à ne plus se tromper dans ses calculs. Observe une roue dentée (horloge, vélo) et imagine comment un engrenage pourrait « retenir » un calcul.",
    fact: "Pascal avait 19 ans quand il a construit sa première Pascaline : c'est l'une des toutes premières machines à calculer de l'histoire.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Arts_et_Metiers_Pascaline_dsc03869.jpg?width=1000"
  },
  {
    id: "seq_info_histoire_2",
    tier: "court",
    emoji: "🧵",
    label: "1801 — Le métier Jacquard, un objet piloté par des cartes perforées",
    text: "Imagine un métier à tisser qui change tout seul de motif selon une carte en carton trouée qu'on lui donne à lire. C'est l'invention de Joseph-Marie Jacquard, en 1801 : chaque trou de la carte commande un fil précis. Dessine trois petits trous sur un bout de papier et imagine quel motif simple ils pourraient commander à une machine.",
    fact: "Cette carte perforée n'a rien à voir avec un ordinateur, mais l'idée — donner des instructions à une machine sous forme codée — est exactement celle qui fera tourner les premiers vrais ordinateurs un siècle plus tard.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jacquard_Loom_-_geograph.org.uk_-_2326269.jpg?width=1000"
  },
  {
    id: "seq_info_histoire_3",
    tier: "court",
    emoji: "⚙️",
    label: "1834 — La machine analytique de Babbage, un ordinateur jamais construit",
    text: "Imagine un inventeur anglais, Charles Babbage, qui dessine en 1834 les plans d'une machine mécanique capable de calculer N'IMPORTE QUEL calcul si on lui donne les bonnes instructions — un peu comme un ordinateur, mais sans électricité, et jamais vraiment terminée de son vivant. Regarde une photo de ses plans et compte combien de roues dentées tu arrives à distinguer.",
    fact: "Babbage s'était inspiré des cartes perforées du métier Jacquard pour piloter sa machine : la première trace d'un lien entre ces deux inventions très différentes.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/AnalyticalMachine_Babbage_London.jpg?width=1000"
  },
  {
    id: "seq_info_histoire_4",
    tier: "court",
    emoji: "👩‍💻",
    label: "1843 — Ada Lovelace écrit le tout premier programme, sur papier",
    text: "Imagine une mathématicienne anglaise, Ada Lovelace, qui en 1843 rédige la suite d'instructions précises que la machine de Babbage devrait suivre pour calculer une suite de nombres compliquée — sans qu'aucune machine n'existe encore pour l'exécuter. Écris sur une feuille trois instructions très précises pour qu'un camarade range correctement cinq objets, sans rien lui montrer.",
    fact: "On considère souvent Ada Lovelace comme la première personne à avoir écrit un programme informatique, près de cent ans avant les premiers ordinateurs électroniques.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ada_Lovelace_portrait.jpg?width=1000"
  },
  {
    id: "seq_info_histoire_5",
    tier: "moyen",
    emoji: "🔓",
    label: "1939-1945 — Turing et la machine qui casse les codes secrets",
    text: "Imagine la Seconde Guerre mondiale : l'armée allemande communique dans un code jugé impossible à casser, produit par une machine appelée Enigma. Le mathématicien britannique Alan Turing conçoit alors une machine capable de tester énormément de combinaisons très vite pour percer ce code. Compte combien de combinaisons existent avec un simple cadenas à 3 chiffres (000 à 999) : c'est ce genre de problème, en bien plus grand, que Turing devait résoudre.",
    fact: "Le travail de Turing à Bletchley Park aurait raccourci la guerre de plusieurs années selon certains historiens — et a posé les bases théoriques de l'ordinateur moderne.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/EnigmaMachine.jpg?width=1000"
  },
  {
    id: "seq_info_histoire_6",
    tier: "moyen",
    emoji: "💡",
    label: "1945 — L'ENIAC, le premier ordinateur électronique, 30 tonnes et deux pièces",
    text: "Imagine une machine si grande qu'elle remplit une salle entière, pèse environ 30 tonnes et contient presque 18'000 tubes électroniques qui chauffent énormément : c'est l'ENIAC, construit aux États-Unis par Mauchly et Eckert, achevé en 1945. Compare sa taille à celle de ta salle de classe : combien de fois l'ENIAC y tiendrait-il ?",
    fact: "Pour reprogrammer l'ENIAC, il fallait débrancher et rebrancher physiquement des centaines de câbles à la main — reprogrammer un ordinateur aujourd'hui est infiniment plus rapide.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Classic_shot_of_the_ENIAC_%28full_resolution%29.jpg?width=1000"
  },
  {
    id: "seq_info_histoire_7",
    tier: "moyen",
    emoji: "⚡",
    label: "1947 — Le transistor remplace les tubes qui chauffent et cassent",
    text: "Imagine remplacer chaque grosse ampoule fragile de l'ENIAC par un minuscule composant en silicium qui fait le même travail, sans chauffer ni griller : c'est le transistor, inventé en 1947 par trois chercheurs des laboratoires Bell Labs. Cherche dans ta trousse ou ta poche un objet qui tient dans la paume de la main : imagine-le remplacer un objet cent fois plus gros faisant la même chose.",
    fact: "Le transistor a permis aux ordinateurs de devenir plus petits, plus fiables et beaucoup moins chers — sans lui, aucun ordinateur personnel n'existerait aujourd'hui.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Replica-of-first-transistor.jpg?width=1000"
  },
  {
    id: "seq_info_histoire_8",
    tier: "moyen",
    emoji: "🔲",
    label: "1971 — Le microprocesseur, un ordinateur entier sur une puce",
    text: "Imagine réussir à faire tenir, sur une puce de silicium grande comme un ongle, presque tout ce dont un ordinateur a besoin pour calculer. C'est l'Intel 4004, dévoilé en novembre 1971, le premier microprocesseur commercial : il exécutait environ 60'000 opérations par seconde. Compare ce chiffre à un microprocesseur actuel qui en exécute plusieurs milliards par seconde : combien de fois plus rapide est-il, très approximativement ?",
    fact: "Le 4004 contenait environ 2300 transistors ; un processeur de smartphone actuel en contient plusieurs milliards sur une surface comparable.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Intel_C4004.jpg?width=1000"
  },
  {
    id: "seq_info_histoire_9",
    tier: "long",
    emoji: "🖥️",
    label: "1977-1981 — L'ordinateur entre dans les maisons",
    text: "Imagine l'ordinateur sortir des laboratoires et des grandes entreprises pour arriver chez les gens ordinaires : c'est ce qui se passe avec l'Apple II en 1977 puis l'IBM PC en 1981, les premiers ordinateurs personnels vendus en grand nombre. Demande à un proche plus âgé s'il se souvient de son premier ordinateur à la maison, et note une chose qu'il te raconte dessus.",
    fact: "En quelques années, l'ordinateur est passé d'une machine réservée aux scientifiques et aux militaires à un objet que des millions de familles pouvaient posséder chez elles.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Apple_II_IMG_4214.jpg?width=1000"
  },
  {
    id: "seq_info_histoire_10",
    tier: "long",
    emoji: "🌐",
    label: "1989-1991 — Le Web rend Internet accessible à tous",
    text: "Imagine Internet sans aucun site web, seulement des connexions techniques entre ordinateurs sans façon simple de les parcourir. Le Britannique Tim Berners-Lee invente alors le World Wide Web, entre 1989 et 1991, avec les adresses, les liens cliquables et les pages que tu connais aujourd'hui. Compte combien de sites web différents tu as visités rien qu'aujourd'hui.",
    fact: "Le premier site web de l'histoire, créé par Tim Berners-Lee lui-même, est toujours en ligne aujourd'hui et explique ce qu'est le World Wide Web.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/First_Web_Server.jpg?width=1000"
  },
  {
    id: "seq_info_histoire_11",
    tier: "long",
    emoji: "📱",
    label: "2007 — Le smartphone réunit téléphone, ordinateur et appareil photo",
    text: "Imagine devoir emporter un téléphone, un appareil photo, un lecteur de musique et un ordinateur séparément : c'est ce que le premier iPhone, lancé en 2007, a commencé à réunir en un seul appareil tenant dans une poche. Liste trois appareils séparés qu'un smartphone a remplacés à lui seul.",
    fact: "En à peine quinze ans, le smartphone est devenu l'ordinateur le plus utilisé au monde, loin devant les ordinateurs de bureau.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/First_iPhone_Macworld_2007_DSCF1283.agr.jpg?width=1000"
  },
  {
    id: "seq_info_histoire_12",
    tier: "long",
    emoji: "🤖",
    label: "2022 — L'intelligence artificielle générative arrive au grand public",
    text: "Imagine pouvoir discuter en langage courant avec un programme capable de répondre, d'écrire ou de résumer un texte presque comme une personne : c'est ce que l'intelligence artificielle générative, popularisée en 2022, a rendu accessible à tout le monde, pas seulement aux spécialistes. Note une tâche pour laquelle tu as déjà utilisé, ou vu quelqu'un utiliser, ce type d'outil.",
    fact: "De la Pascaline de 1642 à l'intelligence artificielle de 2022, il s'est écoulé 380 ans — et la plupart des grands changements de cette histoire se sont produits dans les cent dernières années seulement.",
    anchor: { distance: 3.1, angle: 160, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqInformatiqueHistoireObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_INFORMATIQUE_HISTOIRE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_INFORMATIQUE_HISTOIRE_OBJECTS = MUSEE_SEQ_INFORMATIQUE_HISTOIRE_OBJECTS;
window.getSeqInformatiqueHistoireObjectsForParcours = getSeqInformatiqueHistoireObjectsForParcours;
