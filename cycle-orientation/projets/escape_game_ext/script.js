/* ============================================================
   MATRIX_1602 — Escalade outdoor (Vieille Ville de Genève)
   v3 — reconstruit après relecture complète du dossier 2024-2025
   (feuille du juge + les 8 dossiers "Élève X" + Organisation).

   Nouveautés de cette version :
   - Chaque secteur affiche d'abord une TRANSITION narrative (textes
     authentiques du dossier "Bravo, vous avez trouvé...") avant la
     tâche elle-même — plus de saut sec d'une énigme à l'autre.
   - Un PORTE-DOCUMENTS (bouton 📁 permanent) réunit les outils du
     jeu physique : table de conversion chiffres romains, roue de
     César numérique, annexe complète du « Cé qu'è lainô ».
   - Énigme 7 (canonnade) devient une mission PHOTO au vrai Ancien
     Arsenal (Rue de l'Hôtel-de-Ville 1), qui expose 5 canons
     d'époque — remplace l'ancienne réponse texte à la Tertasse,
     dont le lieu exact n'était pas vérifié.
   - Énigme 5 : la charade ("j'entre en premier, je sors en
     dernier") est maintenant LA question posée, plus un indice cité.
   - Un second mini-puzzle (reconstituer le blason de Genève, recadré
     depuis la même carte ancienne) clôt le parcours au Bourg-de-Four.
   - Un "collier de marmites" façon Foxtrail (une pièce gagnée par
     secteur) remplace la mini-carte SVG précédente.
   - QR codes retirés (trop de préparation terrain) : le site reste
     100% clé en main, sans rien à imprimer ni installer physiquement.

   Structure du parcours : UN SEUL secteur affiché à la fois, aucun
   retour en arrière possible.

   PERSONNALISATION avant de jouer :
   1) Coordonnées GPS de chaque secteur (voir README).
   2) CULPRIT_ANSWERS  : qui est "démasqué" (nom réel de la personne).
   3) LOCATION_STEP.gps : lieu de ralliement final réel.
   4) CONSTRUCTION_PASSWORD : mot de passe de chantier (PAS une vraie
      sécurité, juste un frein pendant que le site est en travaux).
   ============================================================ */

const CONSTRUCTION_PASSWORD = "drize2025";

// ---- MODE TEST : à utiliser uniquement pour tester le site depuis
// chez vous, sans être sur place. Ouvre le lien avec ?test=1 à la fin
// de l'URL (ex. index.html?test=1) pour désactiver la vérification de
// position GPS sur les missions photo — tout le reste (textes,
// puzzles, quiz, dossier, badges...) fonctionne normalement. Une
// bannière "🧪 MODE TEST" reste affichée en permanence tant que c'est
// actif, pour ne jamais l'oublier allumé le jour J.
const TEST_MODE = new URLSearchParams(location.search).get("test") === "1";

const PROLOGUE = {
  title: "DOSSIER D'ENQUÊTE — Cycle de Drize",
  mail: `De : anonyme@anonyme.com — À : la direction\n"Cette année, c'est votre école qui payera ma marmite en chocolat !"`,
  text: "Inquiétée par ce message, la direction a découvert que des indices, disséminés dans la Vieille Ville, désignent le véritable coupable et le lieu où la marmite a été cachée. Ces indices suivent l'ordre de l'histoire de l'Escalade de 1602. Ouvrez votre porte-documents (bouton 📁 en haut) si vous avez besoin des tables de décodage. Suivez l'histoire dans l'ordre : à chaque secteur validé, un mot du dossier s'assemble, et une pièce rejoint votre collier de marmites."
};

/* Chaque secteur :
   - transition : texte affiché EN ARRIVANT sur le secteur, avant la
     tâche (reprend les textes authentiques "Bravo, vous avez
     trouvé..." du dossier original, adaptés au parcours extérieur).
   - funFact / bonus / hint : inchangés dans l'esprit des versions
     précédentes.
*/
const STEPS = [
  {
    id: 1,
    locationCode: "2", // décode en « B » (table numérique)
    type: "puzzle",
    title: "ÉNIGME 1 — La carte des espions",
    transition: "L'histoire se déroule il y a fort longtemps. Deux contrées voisines, mal en paix, en étaient venues à un traité fragile. Mais un chef ambitieux, entêté, continuait de provoquer l'autre camp — jusqu'à décider d'envahir la cité, malgré le traité. Il envoya d'abord des espions étudier la géographie des lieux : leur carte, déchirée par le temps, doit être reconstituée.",
    brief: "Reconstituez la carte ancienne, morceau par morceau, pour découvrir le nom de la cité menacée.",
    gps: { lat: 46.2020, lng: 6.1480, label: "Promenade de la Treille" },
    question: "Reconstituez la carte pour révéler le nom de la cité menacée.",
    image: "assets/carte-geneve.jpg",
    gridSize: 3,
    hint: "Il paraît qu'il faut toujours commencer par les coins.",
    fragment: "LE",
    cipher: "12-5",
    cipherTool: "numérique (1=A, 2=B, 3=C…)",
    funFact: "La Promenade de la Treille abrite le plus long banc en bois du monde (env. 120 m) et son marronnier sert, depuis 1818, à annoncer officiellement l'arrivée du printemps à Genève.",
    bonus: { question: "Bonus (+5 pts) : quel arbre annonce le printemps depuis la Treille ?", answer: "MARRONNIER" }
  },
  {
    id: 2,
    locationCode: "15-21", // décode en « OU » (table numérique)
    type: "photo",
    title: "ÉNIGME 2 — L'assaut des murailles",
    transition: "Bravo ! Vous avez trouvé Genève ! La carte reconstituée représente la cité à cette époque passée. Les espions ayant fini leur récolte d'informations, ils la transmirent à une armée de 2000 hommes qui s'avança par une froide nuit de décembre. Restait à franchir la muraille…",
    brief: "Une partie des soldats a lancé l'assaut à 2h du matin, à l'aide d'un objet démontable en bois, peint en noir pour ne pas être vu de nuit. Les échelles originales de 1602 sont conservées à quelques pas d'ici, à la Maison Tavel, qui retrace l'histoire de l'Escalade.",
    gps: { lat: 46.20148, lng: 6.14703, label: "Maison Tavel (Rue du Puits-Saint-Pierre 6)" },
    question: "Quel objet leur a permis d'escalader la muraille ? Prenez en photo la façade de la Maison Tavel pour valider votre passage.",
    answer: "ECHELLE",
    refPhoto: "assets/ref-maison-tavel.jpg",
    arIcon: "🪜",
    hint: "Le nom de cet objet est presque caché dans le nom même du jeu que vous êtes en train de jouer... « Escalade » vient de l'italien scalata, l'action de grimper avec une scala — une échelle.",
    fragment: "COUPABLE",
    cipher: "III-XV-XXI-XVI-I-II-XII-V",
    cipherTool: "romaine (I=A, II=B…)",
    funFact: "Chaque échelle démontable pesait une dizaine de kilos par section et mesurait environ 1,70 m assemblée à d'autres — pratiques à transporter discrètement de nuit.",
    bonus: { question: "Bonus (+5 pts) : de quelle couleur les échelles étaient-elles peintes pour ne pas être vues ?", answer: "NOIR" }
  },
  {
    id: 3,
    locationCode: "18", // décode en « R » (table numérique)
    type: "text",
    title: "ÉNIGME 3 — L'alerte",
    transition: "Bravo, vous avez trouvé : c'est bien grâce à 3 échelles démontables comme celle-ci qu'une partie des soldats (environ 300) lancèrent l'assaut à 2h du matin, montant par-dessus la muraille. Mais Genève avait des vigiles, et l'un d'entre eux donna l'alerte.",
    brief: "Levez les yeux vers les tours de la cathédrale : aujourd'hui encore, chaque année pour l'anniversaire de l'Escalade, des coups de mousquet commémoratifs sont tirés depuis la tour nord.",
    gps: { lat: 46.20111, lng: 6.14861, label: "Cathédrale Saint-Pierre" },
    question: "Déchiffrez le mot suivant avec la table de conversion romaine du porte-documents : III-XII-XV-III-VIII-V (S=XIX pour vérifier votre méthode).",
    answer: "CLOCHE",
    hint: "III=C, XII=L, XV=O, III=C, VIII=H, V=E.",
    fragment: "EST",
    cipher: "V-XIX-XX",
    cipherTool: "romaine (I=A, II=B…)",
    funFact: "Avant les cloches, l'alerte aurait d'abord été donnée par un coup de feu tiré par un soldat qui avait repéré les assaillants — la Clémence (la grosse cloche) et le tocsin n'ont suivi que quelques instants plus tard.",
    bonus: { question: "Bonus (+5 pts) : quel est le nom donné à la grosse cloche de la cathédrale ?", answer: "CLEMENCE" }
  },
  {
    id: 4,
    locationCode: "7", // décode en « G » (table numérique)
    type: "photo",
    title: "ÉNIGME 4 — La marmite de laiton",
    transition: "Effectivement, c'est bien grâce aux cloches de la ville que les citoyens ont pu être alertés. L'alarme est donnée vers 4h30. Les citoyens se lèvent, saisissent des armes et, en chemise de nuit, viennent prêter main-forte aux troupes de défense — même les femmes s'en mêlent ! Voici notre première héroïne.",
    brief: "Elle aurait renversé sa marmite en laiton sur la tête d'un envahisseur, depuis sa fenêtre. Sa maison se serait en réalité trouvée plus bas, vers l'ancienne porte de la Monnaie — mais le 7, rue de la Corraterie, où une tête sculptée orne la façade au pied de la tour, lui est aujourd'hui associé par la tradition populaire.",
    gps: { lat: 46.20333, lng: 6.14333, label: "7, Rue de la Corraterie (tour de l'Escalade, près du Grand Théâtre)" },
    question: "Prenez en photo la tour dite « de l'Escalade », au 7 rue de la Corraterie, et notez le nom complet de cette héroïne.",
    refPhoto: "assets/ref-corraterie.jpg",
    arIcon: "🍲",
    hint: "Une recherche rapide en ligne (« héroïne Escalade Genève marmite ») vous donnera son nom complet.",
    fragment: "PARMI",
    cipher: "XVI-I-XVIII-XIII-IX",
    cipherTool: "romaine (I=A, II=B…)",
    funFact: "Certains historiens doutent même de la soupe : son mari, Pierre Royaume, était graveur de monnaie et leur logement donnait sur la porte de la Monnaie — il est possible qu'elle ait simplement attrapé un pot en étain qu'il avait fabriqué, plutôt qu'une marmite de soupe aux légumes en pleine nuit. La chanson populaire « La Belle Escalade » raconte pourtant qu'elle « prit sa marmite sur le feu » avant de coiffer un Savoyard — la tradition populaire et les historiens ne sont donc pas tout à fait d'accord ! La tradition de la marmite en chocolat, elle, n'a été inventée qu'en 1881, presque trois siècles après les faits.",
    bonus: { question: "Bonus (+5 pts) : en quelle année la marmite en chocolat a-t-elle été inventée ?", answer: "1881" }
  },
  {
    id: 5,
    locationCode: "4-5", // décode en « DE » (table numérique)
    type: "photo",
    title: "ÉNIGME 5 — La charade de Dame Piaget",
    transition: "Mais la Mère Royaume n'est pas la seule à avoir lancé quelque chose ce soir-là. Notre seconde héroïne, Dame Piaget (Jeanne Baud), fit de même avec un autre objet, depuis sa fenêtre, pour aider les défenseurs à ouvrir un passage secret dans la muraille.",
    brief: "Charade : je rentre toujours en premier, et je sors toujours en dernier. Qui suis-je ? Le passage qu'elle a permis d'ouvrir existe encore aujourd'hui, tout près de la tour de la Corraterie : le Passage de la Petite-Corraterie, entièrement rénové, mais qui garde près de son entrée un souvenir de cette nuit-là (source : Ville de Genève).",
    gps: { lat: 46.20096, lng: 6.14690, label: "Passage de la Petite-Corraterie (Rue de la Corraterie / Rue de la Cité)" },
    question: "Je rentre toujours en premier, et je sors toujours en dernier : quel est cet objet ? Prenez en photo l'entrée du Passage de la Petite-Corraterie pour valider votre passage.",
    refPhoto: "assets/ref-petite-corraterie.jpg",
    arIcon: "🗝️",
    hint: "Vous en avez sûrement une sur vous, ou dans une poche de votre sac.",
    fragment: "NOUS",
    cipher: "XIV-XV-XXI-XIX",
    cipherTool: "romaine (I=A, II=B…)",
    funFact: "Une lourde porte barrait l'accès de ce passage, et les Savoyards n'ont pas réussi à la faire exploser cette nuit-là. C'est en jetant la clé du passage aux Genevois, depuis sa fenêtre, que Dame Piaget leur a permis de prendre les assaillants à revers.",
    bonus: { question: "Bonus (+5 pts) : quelle autre rue relie ce passage à la Corraterie ?", answer: "CITE", altAnswers: ["RUE DE LA CITE"] },
    // ---- Digression facultative : un AUTRE passage secret de la même
    // époque, distinct de celui de Piaget. Honnêteté historique : ce
    // passage n'est pas documenté comme lié à un acte précis de la nuit
    // de l'Escalade — c'est une curiosité de la même période, pas un
    // second lieu de l'intrigue. D'où : facultatif, jamais bloquant,
    // clairement présenté comme un à-côté.
    digression: {
      intro: "🔍 Digression facultative (+5 pts, ne bloque rien) : à deux pas d'ici se trouve un AUTRE passage secret de la même époque, le Passage de Monetier (Rue du Perron 19). Contrairement au Passage de la Petite-Corraterie, celui-ci n'est pas documenté comme lié à un épisode précis de cette nuit-là — c'est simplement une curiosité qui date de la même période, fermée au public toute l'année sauf le week-end de l'Escalade. Sa grille, frappée des armoiries de Genève, reste visible depuis la rue, avec le tracé du passage gravé juste à l'entrée.",
      gps: { lat: 46.2015, lng: 6.1484, label: "Rue du Perron 19 (grille du Passage de Monetier — ⚠ à vérifier sur place)" },
      refPhoto: "assets/ref-monetier.jpg",
      arIcon: "🔑"
    }
  },
  {
    id: 6,
    locationCode: "6-15", // décode en « FO » (table numérique)
    type: "text",
    title: "ÉNIGME 6 — Le héros de la Porte-Neuve",
    transition: "Bravo, vous avez deviné : une clé ! En jetant depuis sa fenêtre la clef de l'allée traversante de son immeuble, Dame Piaget permit aux Genevois d'ouvrir le passage et de contre-attaquer. Venons-en à notre troisième héros, Isaac Mercier. Les combats continuaient au nord de la cité, à la Porte-Neuve, où l'ennemi comptait faire sauter l'entrée pour laisser passer le gros de ses troupes.",
    brief: "Consultez l'annexe « Cé qu'è lainô » de votre porte-documents : une strophe précise raconte l'exploit d'Isaac Mercier, qui fit tomber la coulisse (herse) juste à temps. La place actuelle occupe l'emplacement exact de cette ancienne porte de ville, où une vraie plaque commémore encore aujourd'hui son exploit.",
    gps: { lat: 46.2009, lng: 6.1434, label: "Place Neuve (ancienne Porte-Neuve)" },
    question: "Quel est le numéro de cette strophe ? (calcul : (4×7)×(36/18), puis vérifiez avec 1+4/2+(8-5-2))",
    answer: "14",
    hint: "Cherchez dans l'annexe le mot « coulisse » — la strophe qui le contient est votre réponse.",
    // (plus de fragment ici : "LE COUPABLE EST PARMI NOUS" est déjà complet après 5 mots)
    cipher: "IV-I-XIV-XIX",
    cipherTool: "romaine (I=A, II=B…)",
    funFact: "Le « Cé qu'è lainô » est chanté en francoprovençal (patois genevois) et compte 68 strophes qui racontent toute la nuit de l'Escalade, minute par minute.",
    bonus: { question: "Bonus (+5 pts) : dans quelle langue régionale est chanté le Cé qu'è lainô ?", answer: "FRANCOPROVENCAL", altAnswers: ["PATOIS"] },
    photoRequired: true,
    refPhoto: "assets/ref-porte-neuve.jpg",
    arIcon: "🛡️",
    photoQuestion: "Prenez aussi en photo la plaque commémorative d'Isaac Mercier, à Place Neuve."
  },
  {
    id: 7,
    locationCode: "21-18", // décode en « UR » (table numérique)
    type: "photo",
    title: "ÉNIGME 7 — La déroute des envahisseurs",
    transition: "Félicitations ! Isaac Mercier est resté aussi célèbre que la herse qu'il libéra sur la Porte-Neuve. Entendant le bruit, les soldats ennemis restés hors les murs se précipitèrent, croyant la porte enfin ouverte — grave erreur. Après trois ou quatre heures de combat, un dernier coup décisif mit fin à l'assaut. Le canon utilisé venait d'ici.",
    brief: "Le canon décisif — parti du boulevard de l'Oye, tout près de la Treille — avait été acheminé depuis l'arsenal de l'époque. Sous les arcades de l'Ancien Arsenal, cinq canons d'époque sont toujours visibles aujourd'hui.",
    gps: { lat: 46.2013, lng: 6.1478, label: "Ancien Arsenal (Rue de l'Hôtel-de-Ville 1 — ⚠ à vérifier sur place)" },
    question: "Par quel moyen les Genevois ont-ils fait fuir les envahisseurs ? Prenez en photo les canons sous les arcades de l'Ancien Arsenal pour valider votre passage.",
    refPhoto: "assets/ref-arsenal.jpg",
    arIcon: "💥",
    hint: "Ce qui fait beaucoup de bruit et de dégâts en une seule salve...",
    // (idem : pas de fragment, la phrase du coupable est déjà complète)
    cipher: "III-I-XIV-XV-XIV-XIV-I-IV-V",
    cipherTool: "romaine (I=A, II=B…)",
    funFact: "Le tir décisif serait parti du boulevard de l'Oye, à l'emplacement approximatif de l'actuel Musée Rath, brisant au moins une des échelles et semant la panique chez les assaillants restés hors les murs.",
    bonus: { question: "Bonus (+5 pts) : de quel bastion est parti le coup de canon décisif ?", answer: "OYE", altAnswers: ["BASTION DE L'OYE", "BASTION DE LOYE"] },
    minigame: "cannon" // mini-jeu de tir de précision facultatif, +5 pts
  }
];

/* ---- ÉTAPE 8 : démasquer le coupable ------------------------- */
const CULPRIT_ANSWERS = ["ENSEIGNANT", "ENSEIGNANTE", "PROFESSEUR", "PROF", "ACCOMPAGNATEUR", "ACCOMPAGNATRICE"];

const ACCUSATION_STEP = {
  id: 8,
  type: "text",
  title: "ÉNIGME 8 — Le dossier assemblé",
  transition: "C'est bien une canonnade qui mit en fuite les envahisseurs ! Au petit matin, 18 Genevois étaient morts pour sauver leur ville et leurs libertés. Il ne reste qu'un mystère à percer : votre dossier d'enquête, assemblé secteur après secteur, forme maintenant une phrase complète.",
  brief: "Relisez la phrase assemblée dans le dossier, en haut de page : elle désigne le coupable, caché parmi vous depuis le début. Personne n'a quitté votre groupe depuis le départ de la Treille...",
  question: "Qui, parmi les adultes présents aujourd'hui, est le véritable coupable ?",
  isAccusation: true
};

/* ---- ÉTAPE 9 : le point de ralliement final (2e puzzle) -------- */
// (l'ancien fallback "LOCATION_ANSWERS" a été retiré : l'énigme 9 est
// maintenant un puzzle visuel, plus une réponse texte à taper.)

const LOCATION_STEP = {
  id: 9,
  type: "puzzle2",
  title: "ÉNIGME 9 — Le blason de la victoire",
  transition: "Coupable démasqué ! Il ne reste plus qu'à sceller cette victoire comme les Genevois l'ont fait en 1602 : en reconstituant le blason de la cité, avant de rejoindre le point de ralliement pour partager la marmite.",
  brief: "Reconstituez le blason de Genève, recadré depuis la même carte ancienne que votre tout premier puzzle.",
  gps: { lat: 46.20024, lng: 6.14922, label: "Bourg-de-Four" },
  question: "Reconstituez le blason pour sceller la victoire, puis rendez-vous au Bourg-de-Four.",
  image: "assets/blason-geneve.jpg",
  gridSize: 3,
  hint: "Commencez par les angles du blason, comme pour la toute première carte — la technique est la même.",
  // ---- Portail de décodage : révèle le lieu de ralliement (et son
  // lien GPS) seulement une fois le code numérique assemblé décodé.
  codeGate: {
    question: "Décodez le lieu de ralliement avec la table numérique de votre porte-documents (1=A, 2=B, 3=C…).",
    answer: "BOURG DE FOUR",
    altAnswers: ["BOURGDEFOUR", "BOURG-DE-FOUR"]
  }
};

const FINAL = {
  email: "escaladepointdrize@gmail.com",
  code: "drize081121"
};

const ALL_STEPS = [...STEPS, ACCUSATION_STEP, LOCATION_STEP];

const POINTS_PER_STEP = 10;
const HINT_PENALTY = 5;
const BONUS_POINTS = 5;
const MAX_SCORE = ALL_STEPS.length * POINTS_PER_STEP + STEPS.filter((s) => s.bonus).length * BONUS_POINTS;

// Tolérance GPS : remontée à 20 m (contre 3 m avant) pour éviter les
// faux blocages — un smartphone en Vieille Ville (rues étroites,
// façades hautes) tombe rarement sous 5-20 m de précision réelle. Une
// tolérance trop serrée bloquait des équipes pourtant bien placées.
const GEO_TOLERANCE_M = 20;

/* ---- Annexe : table de conversion + Cé qu'è lainô (domaine public) */
const ROMAN_TABLE = [
  ["I","A"],["II","B"],["III","C"],["IV","D"],["V","E"],["VI","F"],["VII","G"],
  ["VIII","H"],["IX","I"],["X","J"],["XI","K"],["XII","L"],["XIII","M"],
  ["XIV","N"],["XV","O"],["XVI","P"],["XVII","Q"],["XVIII","R"],["XIX","S"],
  ["XX","T"],["XXI","U"],["XXII","V"],["XXIII","W"],["XXIV","X"],["XXV","Y"],["XXVI","Z"]
];

// "Cé qu'è lainô" — chant traditionnel de l'Escalade (1602), domaine
// public. Traduction française moderne complète (68 strophes), pour
// que le parcours reste jouable sans connexion Internet.
// ⚠ Repère utile pour l'énigme 6 : la strophe 14 décrit très
// précisément l'exploit d'Isaac Mercier ("bouta bas la coulisse") —
// à ne pas confondre avec la strophe 11, qui parle d'un tout autre
// épisode (la tentative ratée de Picot au pétard). Le "11" qui
// apparaît par ailleurs dans le jeu de salle physique (sur le
// calendrier) désigne le mois de novembre, pas un numéro de strophe.
const CE_QUE_LAINO_FULL = [
  [1, "Celui qui est en haut, le Maître des batailles, qui se moque et se rit des canailles, a bien fait voir, par une nuit de samedi, qu'il était patron des Genevois."],
  [2, "Ils sont venus le douze de décembre, par une nuit aussi noire que d'encre ; c'était l'an mil six cent et deux, qu'ils vinrent parler un peu trop tôt."],
  [3, "Par une nuit qui était la plus noire, ils vinrent ; ce n'était pas pour boire : c'était pour piller nos maisons, et nous tuer, sans aucune raison."],
  [4, "Petits et grands, ayez en souvenance par un matin d'un beau dimanche, et par un jour où il faisait bien froid, sans le bon Dieu, nous étions tous pris !"],
  [5, "On vous dira que c'était la canaille. Les Savoyards contre notre muraille trois échelles ont dressé et planté, et par là deux cents sont montés."],
  [6, "Entrés, ils vinrent au corps de garde où ils firent une rude montre. Ils avaient des tenailles, des marteaux qui étaient faits avec du bon acier,"],
  [7, "Pour arracher les clous et les serrures, les verrous et toute cette ferraille qu'on rencontre en pareils endroits et qu'on met pour ne pas être surpris."],
  [8, "Ils avaient pénétré dans une étable ; et, avec un pétard qu'ils avaient tiré, ils croyaient déjà être à cheval : ils n'étaient pas assez montés haut."],
  [9, "Son Altesse se trouvait dessus Pinchat. Un d'entre eux accourut pour lui dire que le pétard avait fait son effort, qu'on allait faire entrer tout le gros."],
  [10, "Ils avaient des lanternes sourdes ; ils contrefaisaient les grosses grenouilles. C'était pour aller et venir, sans que jamais on les pût découvrir."],
  [11, "Picot venait avec grande hardiesse. Pour faire voir qu'il avait de l'adresse, il voulait faire sauter la porte : et c'est ici qu'il fut bien attrapé."],
  [12, "Il a voulu faire de telle sorte que toute la porte s'effondrât ; il l'aurait mise en lambeaux et morceaux ; puis serait allé tout droit sur le pont."],
  [13, "Les ponts-levis ils les auraient abaissés, ils auraient ôté tout ce qui les gênait, pour faire entrer l'escadron de Savoie. Vous les verrez bientôt en désarroi."],
  [14, "Car un soldat qui aperçut tout cela, tout bellement bouta bas la coulisse, puis alla crier qu'il se fallait armer, ou autrement nous serions tous tués."],
  [15, "Il fut haché comme des herbettes, puis enfilé comme des alouettes ; il fut crevé comme un fier crapaud, et puis taillé comme des atriaux."],
  [16, "Droit au clocher, on va sonner l'alarme ; en même temps, on crie : « Aux armes, aux armes ! » De tous endroits on vit des gens sortir qui disaient : « Il faut vaincre ou mourir ! »"],
  [17, "Ils s'en allèrent vite sur la Treille ; un d'entre eux s'avança avec adresse et fit aller chercher les mantelets pour s'en servir comme de parapets."],
  [18, "Ils roulaient avec une telle furie ! Et par bonheur ils étaient tous rouillés ; ils faisaient encore plus de bruit qu'un bouvier avec cinq cents charrues."],
  [19, "Par ce moyen on prit le corps de garde, où l'ennemi faisait bien bonne garde ; il fallut le laisser aux Genevois, au déshonneur de toute la Savoie."],
  [20, "Les Savoyards vite prirent la fuite, quand ils virent renverser la marmite où ils avaient mis cuire le dîner pour tous ceux qu'ils y avaient amenés."],
  [21, "Ils se rendirent vite à la Tertasse où l'ennemi criait de grande rage : « Vive Espagne ! Hourra ! Vive Savoie ! C'est maintenant qu'on tient les Genevois ! »"],
  [22, "Les Genevois, qui avaient grand courage, firent bien voir qu'ils étaient des braves, de se battre contre des gens armés du menton et jusqu'aux souliers."],
  [23, "On entendait ce vipérin Alexandre, qui disait : « Il ne vous faut rien craindre. Las ! mes enfants, dépêchez de monter en paradis, je vous fais tous aller. »"],
  [24, "Son Altesse, avec grande diligence, envoya une poste au roi de France : que Genève il avait surpris, que cette nuit il y ferait son lit."],
  [25, "« Ventre Saint-Gris ! » se dit le roi de France, « que Genève se soit ainsi laissée prendre ! Las ! mon cousin s'y est trop hasardé ; il ne pourra guère la conserver. »"],
  [26, "En même temps, une lettre arrive, dont il risqua fort de crever de rire. Elle disait : « Les Savoyards sont pris, les Genevois les pendent maintenant. »"],
  [27, "Cependant voici bien d'autres épisodes : quand ils virent leurs trois échelles rompues ils ne pouvaient descendre ni monter ; et c'est ici qu'ils furent domptés."],
  [28, "On leur donna d'abord la réplique : des Genevois ils sentirent l'épée qui résonnait d'une belle façon. Ils savaient bien jouer de l'espadon."],
  [29, "Un Savoyard, auprès de la Monnaie, fut tué d'un grand coup de marmite qu'une femme lui expédia dessus ; il tomba mort, froid et raide étendu."],
  [30, "On en prit treize qui étaient bien vivants ; ils disaient : « De nous ayez pitié ! » Tout en croyant qu'en payant leur rançon, ils s'en iraient chacun dans leur maison."],
  [31, "Mais le Conseil en grande diligence fit leur procès, prononça leur sentence : qu'ils seraient tous pendus et étranglés sur l'Oie, ce beau belluard."],
  [32, "Voici venir Messieurs de la Justice, et le sautier qui commença de dire : « La Bravade, va quérir Tabazan ! » « Oui, sans faillir, Monsieur, j'y vais tout de suite. »"],
  [33, "« Tu ne sais pas, il y a bien de la besogne : ils sont treize qui auront de la vergogne. Il les faut tous pendre et étrangler. Dépêche-toi, car je veux m'en aller. »"],
  [34, "Il faut mettre de l'ordre à la potence et puis avoir des cordes en suffisance, pour les lier et les bien garrotter, qu'ils ne puissent ni virer ni tourner."],
  [35, "Voilà pourquoi toute cette canaille a ressauté bientôt notre muraille. En retombant ils se rompaient le cou, pour se garder du licou du bourreau."],
  [36, "On jeta beaucoup de paille enflammée dans les fossés où elle s'est bientôt allumée. On voyait avec un grand plaisir que la frayeur les avait tous saisis."],
  [37, "En attendant, ils demandaient grâce, et ils priaient Notre Dame de Grâce ; et ils faisaient le signe de la croix pour se faire passer le froid des doigts."],
  [38, "Ils disaient : « De nous aussi ayez pitié. Nous vous prions de nous sauver la vie ! » C'était Sonas et Chaffardon qui ne purent avoir aucun pardon."],
  [39, "Il y avait huit jours qu'en cette ville, un président de Chambéry la belle, faisant semblant de rafraîchir l'union, vint tramer votre grande trahison."],
  [40, "Vous auriez tout forcé, femmes et filles ; puis vous auriez pris leurs plus belles dépouilles ; et puis après vous les auriez tuées. Les Ministres vous les auriez brûlés."],
  [41, "Les Ministres qui étaient les plus jeunes, vous les auriez enchaînés tous ensemble ; à Rome vous les auriez menés, pour les montrer à sa Satanité,"],
  [42, "Aux cardinaux et à la cardinaille, aux évêques et à la cafardaille, qui les auraient écorchés tout vifs ; sur des charbons ils les auraient rôtis."],
  [43, "Pour les Seigneurs, vous auriez fait la fête ; vous leur auriez à tous coupé la tête ; et puis, vous seriez entrés dans leurs maisons ; et de leur bien vous auriez pris à foison."],
  [44, "Vous aviez dit par devant son Altesse que vous n'auriez ni pitié ni tendresse, que vous vouliez tuer grands et petits, nous étrangler et nous faire tous mourir."],
  [45, "On vous donnera des cordes apprêtées, qui seront bien tordues et bien filées, ou bien plutôt, salade de Gascon : la corde au cou par-dessous le menton."],
  [46, "Tabazan vint en grande magnificence, et il leur fit à tous la révérence. Il tenait le chapeau à la main : « Que veniez-vous faire ici, galants ? »"],
  [47, "« Nous venions pour faire la sainte messe à Saint-Pierre, le plus haut de la ville, à Saint-Gervais, et puis à Saint-Germain, oui, sans faillir, Monsieur le Tabazan. »"],
  [48, "« Passez devant, je vous la dirai belle, quand vous serez au sommet de l'échelle ! Ou bien plutôt ce seront les corbeaux. Voyez-vous pas qu'ils vous attendent là. »"],
  [49, "En voici déjà une terrible troupe ! Les voyez-vous qui sont déjà rassemblés là ? En vous mangeant, ils chanteront : « Cro, cro ! Vous sentez bien les raves bouillies. »"],
  [50, "Ils disaient : « Sainte Vierge Marie, qu'il vous plaise d'avoir pitié de nous ! » Tabazan dit : « Je perds patience ; allez danser une allemande en l'air. »"],
  [51, "Que dira-t-il votre duc de Savoie ? Il maudira le belluard de l'Oie ; je crois bien qu'il va mourir de regret de vous voir tous pendus à un gibet."],
  [52, "Vous devriez bien avoir de la vergogne de venir me donner tant de besogne, car je m'en vais vous dévêtir tout nus, et à tous vous faire montrer le cul."],
  [53, "Il y en avait un qui avait barbe rousse, qui fit presque rire toute la troupe ; il disait qu'il ne voulait pas, par un valet être si haut monté."],
  [54, "Mais Tabazan, qui perdait patience, sauta dessus, et puis après l'étrangle : « Morte la bête et mort le venin ! Tu ne feras plus jamais ni mal ni bien ! »"],
  [55, "On leur trouva des billets dans leurs poches, qu'ils avaient pris, afin qu'ils les charmassent ; mais le charme n'était pas assez fort pour les pouvoir garantir de la mort."],
  [56, "Ils avaient vu courir des lièvres blancs, des petits aussi bien que des grands, qui ne faisaient que tourner et virer : ils firent manquer le cœur à d'Albigny."],
  [57, "Ils prirent bien une telle épouvante que la Jeunesse avec toute la bande, Vatteville, puis après d'Andelot, s'enfuyaient tous comme font les levrauts."],
  [58, "Son Altesse, aussi bien, s'enfuyait et croyait qu'après lui on courait, ce dont il était comme désespéré, ne sachant plus de quel côté aller."],
  [59, "Et il disait : « La pauvre matinée ! Ma noblesse sera déshonorée d'être passée par la main des courtauds, encore pis, par celle du bourreau."],
  [60, "Que dira-t-il, ce grand roi de France, les Hollandais et le prince d'Orange ! Que diront-ils encore les Anglais ! Ils se riront du grand duc de Savoie !"],
  [61, "Je suis pris d'une grande tristesse d'avoir perdu la fleur de ma noblesse. Le cœur me manque, venez me secourir, apportez-moi un peu de rossolis."],
  [62, "Je m'enfermerai tout seul dans ma chambre : la vergogne n'en sera pas si grande ; je fermerai la porte du château, qu'on ne verra point de jour à travers."],
  [63, "Ici dedans, je ferai pénitence : de trente jours ne mangerai pitance sinon des raves bouillies, trognons de choux avec des escargots."],
  [64, "Soixante-sept têtes ils ont laissées, que le bourreau a coupées et tranchées pour les mettre sur deux ou trois chevrons, pour les montrer à ceux qui voudront."],
  [65, "On vous dira que toute la prêtraille, près de Thonon, au couvent de Ripaille, firent là leur conspiration, mais le Bon Dieu rompit leur trahison."],
  [66, "Il a fait voir qu'avec un peu de paille, il pouvait renverser la canaille qui venait profaner son Saint Nom, et se moquer de la Religion."],
  [67, "Pour ses enfants il a de la tendresse, a bien voulu se mettre à la brèche, et renverser les ennemis mordants, qui venaient faire les arrogants."],
  [68, "Dedans sa main il tient la victoire, à lui seul en demeure la gloire. À tout jamais son Saint Nom soit béni, amen, amen, ainsi, ainsi soit-il !"]
];

/* ---- Cartes de personnages historiques (collection) ------------- */
const CHARACTER_CARDS = {
  1: { name: "Charles-Emmanuel Ier", role: "Duc de Savoie", icon: "👑",
       blurb: "L'ambitieux duc qui rompt le traité de paix et envoie ses espions étudier Genève avant d'y lancer son armée." },
  4: { name: "Mère Royaume", role: "Héroïne de la marmite", icon: "🍲",
       blurb: "Selon la légende, elle renverse sa marmite sur un envahisseur depuis sa fenêtre — un geste qui deviendra un symbole genevois, même si les historiens débattent de ce qu'elle contenait vraiment." },
  5: { name: "Dame Piaget", role: "Héroïne de la clé", icon: "🗝️",
       blurb: "Elle jette la clé de son immeuble aux défenseurs pour leur ouvrir un passage stratégique en pleine bataille." },
  6: { name: "Isaac Mercier", role: "Le soldat vigilant", icon: "⚔️",
       blurb: "Ce soldat repère la manœuvre ennemie à la Porte-Neuve et fait tomber la coulisse juste à temps, empêchant l'invasion." }
};

/* ---- Noms de code d'équipe (façon roman d'espionnage) ------------ */
const CODENAME_ADJECTIVES = ["Silencieux", "Vigilant", "Intrépide", "Discret", "Rusé", "Audacieux", "Furtif", "Tenace"];
const CODENAME_NOUNS = ["Faucon", "Renard", "Corbeau", "Sentinelle", "Ombre", "Guetteur", "Lynx", "Phénix"];
function generateCodename() {
  const a = CODENAME_ADJECTIVES[Math.floor(Math.random() * CODENAME_ADJECTIVES.length)];
  const n = CODENAME_NOUNS[Math.floor(Math.random() * CODENAME_NOUNS.length)];
  return `${n} ${a}`;
}

/* ---- Quiz final (bilan de connaissances, ne change pas le score) - */
const FINAL_QUIZ = [
  { q: "En quelle année a eu lieu l'Escalade ?", options: ["1602", "1789", "1291", "1848"], correct: 0 },
  { q: "Quel objet Mère Royaume a-t-elle lancé sur la tête d'un envahisseur ?", options: ["Une pierre", "Sa marmite", "Un livre", "Une lanterne"], correct: 1 },
  { q: "Quel objet Dame Piaget a-t-elle lancé aux défenseurs ?", options: ["Une pierre", "Un chandelier", "Une clé", "Un livre"], correct: 2 },
  { q: "D'où est parti le coup de canon décisif ?", options: ["De la Cathédrale", "Du bastion de l'Oye", "De la Treille", "Du Bourg-de-Four"], correct: 1 },
  { q: "En quelle année la marmite en chocolat a-t-elle été inventée ?", options: ["1602", "1720", "1881", "1950"], correct: 2 }
];

/* ---- Temps de marche estimé entre secteurs (vitesse de groupe) --- */
const WALK_SPEED_M_PER_MIN = 65; // rythme d'un groupe scolaire, arrêts compris
function walkTimeToStep(step) {
  const idx = ALL_STEPS.findIndex((s) => s.id === step.id);
  let prev = null;
  for (let i = idx - 1; i >= 0; i--) {
    if (ALL_STEPS[i].gps) { prev = ALL_STEPS[i]; break; }
  }
  if (!prev || !step.gps) return null;
  const d = haversine(prev.gps.lat, prev.gps.lng, step.gps.lat, step.gps.lng);
  return Math.max(1, Math.round(d / WALK_SPEED_M_PER_MIN));
}


const BADGES = [
  { id: "sherlock", icon: "🕵️", label: "Sherlock de la Treille", desc: "Terminé sans utiliser un seul indice payant.", check: (s) => s.hintsUsed.length === 0 },
  { id: "photographe", icon: "📸", label: "Œil de photographe", desc: "Les missions photo validées du premier coup.", check: (s) => STEPS.filter((st) => st.type === "photo").every((st) => (s.photoRetries[st.id] || 0) === 0 && s.completed.includes(st.id)) },
  { id: "historien", icon: "🧠", label: "Historien en herbe", desc: "Toutes les questions bonus réussies.", check: (s) => STEPS.filter((st) => st.bonus).every((st) => s.bonusCorrect.includes(st.id)) },
  { id: "strategue", icon: "🃏", label: "Stratège", desc: "A su utiliser son joker au bon moment.", check: (s) => s.jokerUsed },
  { id: "eclair", icon: "⚡", label: "Éclair", desc: "Mission bouclée en moins de 45 minutes.", check: (s) => s.startedAt && (Date.now() - s.startedAt) / 60000 < 45 }
];

/* ============================================================
   ÉTAT DE JEU + PERSISTANCE
   ============================================================ */

const LS_KEY = "m1602_save";
const GATE_KEY = "m1602_gate_ok";

function defaultState() {
  return {
    teamName: "", teamMembers: "", teamCodename: "", startedAt: null, completed: [],
    hintsUsed: [], sobre: false, jokerUsed: false, bonusCorrect: [],
    photoRetries: {}, muted: false, patoisTranslation: "", quizAnswers: {}, ambientSound: true,
    doublePointsActive: false
  };
}

let state = loadFromLocalStorage() || defaultState();

function loadFromLocalStorage() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || typeof data !== "object") return null;
    return { ...defaultState(), ...data };
  } catch (e) { console.warn("Sauvegarde locale illisible :", e); return null; }
}

function persist() {
  try { localStorage.setItem(LS_KEY, JSON.stringify(state)); }
  catch (e) { console.warn("Autosauvegarde impossible :", e); }
}

function currentScore() {
  return MAX_SCORE - state.hintsUsed.length * HINT_PENALTY + state.bonusCorrect.length * BONUS_POINTS;
}

function ensureStarted() {
  if (!state.startedAt) { state.startedAt = Date.now(); persist(); }
}

function downloadSave() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const safeName = (state.teamName || "equipe").toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 30);
  const horodatage = new Date().toISOString().slice(0, 16).replace(/[:T]/g, "-");
  a.href = url; a.download = `matrix1602_${safeName}_${horodatage}.json`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function loadSaveFromFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    let data;
    try { data = JSON.parse(e.target.result); }
    catch (err) { alert("✘ Fichier de sauvegarde invalide."); return; }
    if (!data || typeof data !== "object" || !Array.isArray(data.completed)) {
      alert("✘ Fichier de sauvegarde invalide."); return;
    }
    state = { ...defaultState(), ...data };
    persist();
    location.reload();
  };
  reader.readAsText(file);
  event.target.value = "";
}

/* ============================================================
   SONS (Web Audio API)
   ============================================================ */

let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (Ctx) audioCtx = new Ctx();
  }
  return audioCtx;
}
function playTone(freq, startTime, duration, type = "sine", gainValue = 0.08) {
  const ctx = getAudioCtx();
  if (!ctx || state.muted) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type; osc.frequency.value = freq;
  gain.gain.setValueAtTime(gainValue, ctx.currentTime + startTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + startTime + duration);
  osc.connect(gain); gain.connect(ctx.destination);
  osc.start(ctx.currentTime + startTime); osc.stop(ctx.currentTime + startTime + duration);
}
function playSuccessChime() { playTone(660, 0, 0.12); playTone(880, 0.1, 0.18); }
function playFinalFanfare() { playTone(523, 0, 0.15); playTone(659, 0.15, 0.15); playTone(784, 0.3, 0.3); }
function playBonusChime() { playTone(990, 0, 0.1, "triangle", 0.06); }

// ---- Ambiance sonore discrète (cloches lointaines, en boucle) ----
// Séparée du bouton 🔊/🔇 principal : purement décorative, jamais
// nécessaire pour comprendre le jeu.
let ambientTimerId = null;
function playAmbientChime() {
  if (!state.ambientSound || state.muted) return;
  const base = 220 + Math.random() * 80;
  playTone(base, 0, 2.2, "sine", 0.02);
  playTone(base * 1.5, 0.3, 1.8, "sine", 0.012);
}
function startAmbientLoop() {
  stopAmbientLoop();
  if (!state.ambientSound) return;
  const tick = () => {
    playAmbientChime();
    ambientTimerId = setTimeout(tick, 14000 + Math.random() * 12000);
  };
  ambientTimerId = setTimeout(tick, 4000);
}
function stopAmbientLoop() {
  if (ambientTimerId) { clearTimeout(ambientTimerId); ambientTimerId = null; }
}

/* ============================================================
   OUTILS
   ============================================================ */

// ---- Comparaison visuelle indicative (jamais bloquante) -----------
// Compare la photo prise par l'équipe à la photo de référence en
// réduisant les deux images à une grille de petites couleurs moyennes
// (8×8) puis en mesurant leur écart. C'est une heuristique grossière
// (pas de reconnaissance d'objet réelle) : elle sert uniquement de
// signal indicatif pour l'équipe et pour vous, jamais pour bloquer.
function imageSignature(imgEl, size = 8) {
  const canvas = document.createElement("canvas");
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(imgEl, 0, 0, size, size);
  return ctx.getImageData(0, 0, size, size).data;
}
function signatureSimilarity(a, b) {
  let diff = 0;
  for (let i = 0; i < a.length; i += 4) {
    diff += Math.abs(a[i] - b[i]) + Math.abs(a[i + 1] - b[i + 1]) + Math.abs(a[i + 2] - b[i + 2]);
  }
  const maxDiff = (a.length / 4) * 3 * 255;
  return Math.round((1 - diff / maxDiff) * 100);
}
function compareToReference(refSrc, userImgEl, resultEl) {
  if (!refSrc) return;
  const refImg = new Image();
  refImg.crossOrigin = "anonymous";
  refImg.onload = () => {
    try {
      const sim = signatureSimilarity(imageSignature(refImg), imageSignature(userImgEl));
      resultEl.textContent = `🎨 Ressemblance visuelle avec la référence : ≈${sim}% (indicatif — couleurs moyennes seulement, ça ne remplace pas un vrai coup d'œil, et ça ne bloque jamais).`;
    } catch (e) {
      // Échec silencieux (ex. image pas encore décodée) : l'indicateur
      // n'est qu'un bonus, son absence ne doit rien casser.
    }
  };
  refImg.onerror = () => {};
  refImg.src = refSrc;
}

function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1), dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}
function normalize(str) {
  return str.trim().toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function mapsUrl(gps) { return `https://www.google.com/maps/dir/?api=1&destination=${gps.lat},${gps.lng}`; }
function bearingDegrees(lat1, lng1, lat2, lng2) {
  const toRad = (d) => (d * Math.PI) / 180, toDeg = (r) => (r * 180) / Math.PI;
  const y = Math.sin(toRad(lng2 - lng1)) * Math.cos(toRad(lat2));
  const x = Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) - Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(toRad(lng2 - lng1));
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}
function cardinalDirection(deg) {
  const dirs = ["Nord", "Nord-Est", "Est", "Sud-Est", "Sud", "Sud-Ouest", "Ouest", "Nord-Ouest"];
  return dirs[Math.round(deg / 45) % 8];
}

/* ============================================================
   PORTE-DOCUMENTS (panneau permanent)
   ============================================================ */

function initPorteDocuments() {
  const btn = document.getElementById("btn-porte-documents");
  const modal = document.getElementById("porte-documents-modal");
  if (!btn || !modal) return;

  const romanRows = ROMAN_TABLE.map(([r, l]) => `<div class="roman-cell"><b>${r}</b> = ${l}</div>`).join("");
  const numericRows = ROMAN_TABLE.map(([, l], i) => `<div class="roman-cell"><b>${i + 1}</b> = ${l}</div>`).join("");
  const laino = CE_QUE_LAINO_FULL.map(([n, txt]) =>
    `<p class="laino-strophe"><b>Strophe ${n}.</b> ${txt}</p>`
  ).join("");

  modal.innerHTML = `
    <div class="porte-documents-inner">
      <button type="button" class="porte-documents-close" id="btn-close-documents">✕ Fermer</button>
      <h2>📁 Porte-documents</h2>

      <details open>
        <summary>🔤 Table de conversion (chiffres romains → lettres)</summary>
        <div class="roman-table">${romanRows}</div>
      </details>

      <details>
        <summary>🔢 Table de conversion (chiffres → lettres)</summary>
        <div class="roman-table">${numericRows}</div>
      </details>

      <details>
        <summary>🔐 Roue de César numérique</summary>
        <div class="caesar-tool">
          <label>Lettre chiffrée
            <input type="text" id="caesar-input" maxlength="1" placeholder="ex: D">
          </label>
          <label>Décalage
            <input type="number" id="caesar-shift" min="-25" max="25" value="3">
          </label>
          <button type="button" id="caesar-compute" class="validate-btn">Déchiffrer</button>
          <p id="caesar-result" class="caesar-result"></p>
          <p class="caesar-help">La roue de César décale chaque lettre de l'alphabet d'un nombre de crans fixe (le décalage). Ex : décalage 3, D → A.</p>
        </div>
      </details>

      <details>
        <summary>🎶 Annexe — « Cé qu'è lainô » (chant traditionnel complet, 68 strophes)</summary>
        <div class="laino-annexe">${laino}</div>
      </details>
    </div>
  `;

  function openModal() { modal.classList.remove("hidden"); }
  function closeModal() { modal.classList.add("hidden"); }

  btn.addEventListener("click", openModal);
  modal.querySelector("#btn-close-documents").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  modal.querySelector("#caesar-compute").addEventListener("click", () => {
    const letter = normalize(modal.querySelector("#caesar-input").value || "");
    const shift = parseInt(modal.querySelector("#caesar-shift").value, 10) || 0;
    const result = modal.querySelector("#caesar-result");
    if (!letter || letter.length !== 1 || alphabet.indexOf(letter) === -1) {
      result.textContent = "Entrez une seule lettre.";
      return;
    }
    const idx = (alphabet.indexOf(letter) - shift + 26 * 10) % 26;
    result.textContent = `${letter} → ${alphabet[idx]}`;
  });
}

/* ============================================================
   PORTAIL DE CHANTIER
   ============================================================ */

function initGate() {
  const gate = document.getElementById("gate-screen");
  const welcome = document.getElementById("welcome-screen");
  if (localStorage.getItem(GATE_KEY) === "1") {
    gate.classList.add("hidden"); welcome.classList.remove("hidden");
    initWelcomeScreen(); return;
  }
  gate.classList.remove("hidden"); welcome.classList.add("hidden");
  const form = document.getElementById("gate-form");
  const input = document.getElementById("input-gate-password");
  const error = document.getElementById("gate-error");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value === CONSTRUCTION_PASSWORD) {
      localStorage.setItem(GATE_KEY, "1");
      gate.classList.add("hidden"); welcome.classList.remove("hidden");
      initWelcomeScreen();
    } else {
      error.textContent = "✘ Mot de passe incorrect."; input.value = ""; input.focus();
    }
  });
}

/* ============================================================
   ÉCRAN D'ACCUEIL
   ============================================================ */

function initWelcomeScreen() {
  const welcome = document.getElementById("welcome-screen");
  const form = document.getElementById("team-form");
  const nameInput = document.getElementById("input-team-name");
  const membersInput = document.getElementById("input-team-members");
  const codenameInput = document.getElementById("input-team-codename");
  const generateBtn = document.getElementById("btn-generate-codename");
  const sobreCheckbox = document.getElementById("checkbox-sobre");
  const restoreBtn = document.getElementById("btn-restore-save");

  const startLabel = document.getElementById("start-point-label");
  if (startLabel && STEPS[0] && STEPS[0].gps) {
    const startGps = STEPS[0].gps;
    startLabel.innerHTML = `🚩 Le jeu commence à : <strong>${startGps.label}</strong>. Rendez-vous physiquement à cette adresse avant même d'ouvrir le formulaire ci-dessous. ` +
      `<a href="${mapsUrl(startGps)}" target="_blank" rel="noopener" class="start-point-link">◎ Itinéraire</a>` +
      `<br><span class="gps-reminder">📶 Vérifiez aussi, dès maintenant, que le GPS et les données mobiles (ou le Wi-Fi) de votre téléphone sont activés — le jeu en a besoin à chaque secteur.</span>`;
  }

  generateBtn.addEventListener("click", () => { codenameInput.value = generateCodename(); });

  sobreCheckbox.checked = !!state.sobre;
  document.body.classList.toggle("sobre", !!state.sobre);
  sobreCheckbox.addEventListener("change", () => {
    state.sobre = sobreCheckbox.checked;
    document.body.classList.toggle("sobre", state.sobre);
    persist();
  });

  const ambientCheckbox = document.getElementById("checkbox-ambient");
  if (ambientCheckbox) {
    ambientCheckbox.checked = state.ambientSound !== false; // activé par défaut
    ambientCheckbox.addEventListener("change", () => {
      state.ambientSound = ambientCheckbox.checked;
      persist();
      if (state.ambientSound) startAmbientLoop(); else stopAmbientLoop();
    });
  }

  if (state.teamName && (state.completed.length > 0 || state.startedAt)) {
    restoreBtn.classList.remove("hidden");
    restoreBtn.textContent = `💾 Reprendre « ${state.teamName} » (${state.completed.length}/${ALL_STEPS.length} secteurs)`;
    restoreBtn.addEventListener("click", () => startGame(welcome));
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    if (!name) return;
    state.teamName = name;
    state.teamMembers = membersInput.value.trim();
    state.teamCodename = codenameInput.value.trim() || generateCodename();
    persist();
    startGame(welcome);
  });
}

function startGame(welcomeEl) {
  welcomeEl.classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  const codenamePart = state.teamCodename ? ` — "${state.teamCodename}"` : "";
  document.getElementById("team-display").textContent = state.teamName
    ? `// équipe : ${state.teamName}${codenamePart}` : "// parcours outdoor — Vieille Ville de Genève";
  init();
  startAmbientLoop();
}

/* ============================================================
   RENDU DU JEU — UN SEUL SECTEUR À LA FOIS
   ============================================================ */

let prologueRendered = false;

function renderProgress() {
  const pct = Math.round((state.completed.length / ALL_STEPS.length) * 100);
  document.getElementById("progress-fill").style.width = pct + "%";
}

function renderDossier() {
  const box = document.getElementById("dossier-words");
  const scoreBox = document.getElementById("dossier-score");
  const codeBox = document.getElementById("dossier-location-code");
  if (box) {
    const words = STEPS.filter((s) => state.completed.includes(s.id) && s.fragment).map((s) => s.fragment);
    box.textContent = words.length ? words.join(" · ") : "— aucun mot recueilli pour l'instant —";
  }
  if (codeBox) {
    const codes = STEPS.filter((s) => state.completed.includes(s.id) && s.locationCode).map((s) => s.locationCode);
    codeBox.textContent = codes.length ? codes.join(" · ") : "— aucun chiffre recueilli pour l'instant —";
  }
  if (scoreBox) scoreBox.textContent = `${currentScore()} / ${MAX_SCORE} pts`;
  renderMarmiteNecklace();
}

// ---- Collier de marmites façon Foxtrail : une pièce par secteur ----
function renderMarmiteNecklace() {
  const box = document.getElementById("marmite-necklace");
  if (!box) return;
  box.innerHTML = STEPS.map((s) => {
    const done = state.completed.includes(s.id);
    return `<span class="marmite-piece ${done ? "won" : ""}" title="Secteur ${s.id}">${done ? "🏺" : "▫️"}</span>`;
  }).join("");
}

function renderPrologueOnce() {
  if (prologueRendered) return;
  const game = document.getElementById("game");
  const box = document.createElement("section");
  box.className = "prologue";
  box.innerHTML = `
    <h2>${PROLOGUE.title}</h2>
    <pre class="prologue-mail">${PROLOGUE.mail}</pre>
    <p>${PROLOGUE.text}</p>
    <div class="dossier"><span class="dossier-label">Dossier assemblé :</span> <span id="dossier-words"></span></div>
    <div class="dossier"><span class="dossier-label">Lieu final codé (chiffres) :</span> <span id="dossier-location-code"></span></div>
    <div class="dossier score-line"><span class="dossier-label">Score :</span> <span id="dossier-score"></span></div>
    <div class="dossier"><span class="dossier-label">Collier de marmites :</span></div>
    <div id="marmite-necklace" class="marmite-necklace"></div>
  `;
  game.insertBefore(box, document.getElementById("step-container"));
  prologueRendered = true;
}

function renderFunFactCard(container, step) {
  const card = document.createElement("details");
  card.className = "fun-fact-card";
  card.innerHTML = `<summary>📖 En savoir plus</summary><p class="fun-fact-text">${step.funFact}</p>`;
  container.appendChild(card);
}

function renderBonusBlock(container, step) {
  if (!step.bonus) return;
  const already = state.bonusCorrect.includes(step.id);
  const block = document.createElement("div");
  block.className = "bonus-block";
  block.innerHTML = `
    <p class="bonus-question">${step.bonus.question}</p>
    <div class="answer-row">
      <input type="text" class="bonus-input answer-input" placeholder="RÉPONSE BONUS…" autocomplete="off" ${already ? "disabled" : ""}>
      <button class="validate-btn bonus-validate" ${already ? "disabled" : ""}>${already ? "✔ Acquis" : "Valider"}</button>
    </div>
    <p class="bonus-feedback"></p>
  `;
  container.appendChild(block);
  if (already) return;

  const input = block.querySelector(".bonus-input");
  const btn = block.querySelector(".bonus-validate");
  const feedback = block.querySelector(".bonus-feedback");
  const acceptable = [step.bonus.answer, ...(step.bonus.altAnswers || [])].map(normalize);

  const submit = () => {
    const given = normalize(input.value);
    if (!given) return;
    if (acceptable.includes(given)) {
      const doubled = state.doublePointsActive;
      const pts = doubled ? BONUS_POINTS * 2 : BONUS_POINTS;
      feedback.textContent = doubled ? `✔ +${pts} points bonus (power-up doublé !)` : `✔ +${pts} points bonus !`;
      feedback.className = "bonus-feedback ok";
      input.disabled = true; btn.disabled = true; btn.textContent = "✔ Acquis";
      if (!state.bonusCorrect.includes(step.id)) { state.bonusCorrect.push(step.id); }
      if (doubled) { state.bonusCorrect.push("double-" + step.id); state.doublePointsActive = false; }
      persist();
      playBonusChime();
      renderDossier();
    } else {
      feedback.textContent = "✘ Pas tout à fait — vous pouvez réessayer.";
      feedback.className = "bonus-feedback err";
    }
  };
  btn.addEventListener("click", submit);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") submit(); });
}

// ---- Digression facultative avec photo (ex. Passage de Monetier) ----
// Jamais bloquante : pas de vérification GPS stricte (juste indicative),
// une simple photo suffit pour +5 pts, une seule fois.
function renderDigressionBlock(container, step) {
  if (!step.digression) return;
  const dg = step.digression;
  const already = state.bonusCorrect.includes("digression-" + step.id);
  const block = document.createElement("div");
  block.className = "bonus-block digression-block";
  block.innerHTML = `
    <p class="bonus-question">${dg.intro}</p>
    ${dg.gps ? `<a class="gps-link digression-gps-link" target="_blank" rel="noopener"><span class="gps-icon">◎</span> Itinéraire (facultatif) : ${dg.gps.label}</a>` : ""}
    <label class="file-btn">Photo de la digression (facultatif)<input type="file" accept="image/*" capture="environment" class="digression-input" ${already ? "disabled" : ""}></label>
    <p class="bonus-feedback digression-feedback">${already ? "✔ Digression déjà complétée." : ""}</p>
  `;
  container.appendChild(block);
  if (dg.gps) block.querySelector(".digression-gps-link").href = mapsUrl(dg.gps);
  if (already) return;

  const input = block.querySelector(".digression-input");
  const feedback = block.querySelector(".digression-feedback");
  input.addEventListener("change", () => {
    const file = input.files[0];
    if (!file) return;
    feedback.textContent = `✔ Photo reçue — +${BONUS_POINTS} points bonus ! Merci d'avoir exploré ce à-côté.`;
    feedback.className = "bonus-feedback ok digression-feedback";
    input.disabled = true;
    if (!state.bonusCorrect.includes("digression-" + step.id)) {
      state.bonusCorrect.push("digression-" + step.id);
      persist();
    }
    playBonusChime();
    renderDossier();
  });
}

// ---- Mini-jeu de tir de précision (canon, énigme 7) — facultatif ----
function renderCannonMinigame(container, step) {
  if (step.minigame !== "cannon") return;
  const already = state.bonusCorrect.includes("minigame-" + step.id);
  const block = document.createElement("div");
  block.className = "bonus-block cannon-block";
  block.innerHTML = `
    <p class="bonus-question">🎯 Tir de précision facultatif (+5 pts) : cliquez sur « Tirer ! » quand le curseur passe dans la zone verte.</p>
    <div class="cannon-track"><div class="cannon-cursor"></div><div class="cannon-zone"></div></div>
    <button type="button" class="validate-btn cannon-fire-btn" ${already ? "disabled" : ""}>${already ? "✔ Réussi" : "💥 Tirer !"}</button>
    <p class="bonus-feedback cannon-feedback"></p>
  `;
  container.appendChild(block);
  if (already) return;

  const cursor = block.querySelector(".cannon-cursor");
  const zone = block.querySelector(".cannon-zone");
  const fireBtn = block.querySelector(".cannon-fire-btn");
  const feedback = block.querySelector(".cannon-feedback");

  // Zone verte placée aléatoirement (entre 55% et 80% de la piste)
  const zoneStart = 55 + Math.random() * 20;
  const zoneWidth = 12;
  zone.style.left = zoneStart + "%";
  zone.style.width = zoneWidth + "%";

  let pos = 0, direction = 1, animId = null;
  function animate() {
    pos += direction * 1.6;
    if (pos >= 100) { pos = 100; direction = -1; }
    if (pos <= 0) { pos = 0; direction = 1; }
    cursor.style.left = pos + "%";
    animId = requestAnimationFrame(animate);
  }
  animId = requestAnimationFrame(animate);

  fireBtn.addEventListener("click", () => {
    const hit = pos >= zoneStart && pos <= zoneStart + zoneWidth;
    if (hit) {
      cancelAnimationFrame(animId);
      feedback.textContent = `✔ Tir réussi ! +${BONUS_POINTS} points bonus.`;
      feedback.className = "bonus-feedback ok cannon-feedback";
      fireBtn.disabled = true; fireBtn.textContent = "✔ Réussi";
      block.classList.add("hit");
      if (!state.bonusCorrect.includes("minigame-" + step.id)) {
        state.bonusCorrect.push("minigame-" + step.id);
        persist();
      }
      playSuccessChime();
      renderDossier();
    } else {
      feedback.textContent = "✘ Raté — trop tôt ou trop tard, réessayez !";
      feedback.className = "bonus-feedback err cannon-feedback";
    }
  });
}

function attachGpsAndHints(node, section, step) {
  // On cherche depuis "section" (toujours un élément vivant du document,
  // avant et après appendChild) plutôt que "node" : "node" est un
  // DocumentFragment qui se vide dès qu'il est inséré dans le document —
  // le requêter à nouveau après coup (ex. depuis le portail de décodage
  // de l'énigme 9) renverrait toujours null.
  const gpsLink = section.querySelector(".gps-link");
  if (step.gps && gpsLink) {
    gpsLink.href = mapsUrl(step.gps);
    section.querySelector(".gps-label").textContent = "Itinéraire (Google Maps) : " + step.gps.label;

    const lostBtn = document.createElement("button");
    lostBtn.type = "button"; lostBtn.className = "lost-btn"; lostBtn.textContent = "🧭 Je suis perdu";
    const lostStatus = document.createElement("p");
    lostStatus.className = "lost-status";
    gpsLink.insertAdjacentElement("afterend", lostStatus);
    gpsLink.insertAdjacentElement("afterend", lostBtn);
    lostBtn.addEventListener("click", () => {
      if (!navigator.geolocation) { lostStatus.textContent = "Géolocalisation indisponible sur cet appareil."; return; }
      lostStatus.textContent = "Calcul de la direction…";
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const d = haversine(pos.coords.latitude, pos.coords.longitude, step.gps.lat, step.gps.lng);
          const dir = cardinalDirection(bearingDegrees(pos.coords.latitude, pos.coords.longitude, step.gps.lat, step.gps.lng));
          lostStatus.textContent = `Le repère est à environ ${Math.round(d)} m, vers le ${dir}.`;
        },
        () => { lostStatus.textContent = "Position non accessible — réessayez ou utilisez le lien Google Maps."; },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    });
  } else if (gpsLink) {
    gpsLink.remove();
  }

  const hintBtn = section.querySelector(".hint-btn");
  const hintText = section.querySelector(".hint-text");
  if (!hintBtn) return;
  if (step.hint) {
    hintBtn.addEventListener("click", () => {
      hintText.classList.remove("hidden");
      hintText.textContent = "» " + step.hint;
      hintBtn.disabled = true;
      hintBtn.textContent = `Indice utilisé (−${HINT_PENALTY} pts)`;
      if (jokerBtn) jokerBtn.remove();
      if (!state.hintsUsed.includes(step.id)) { state.hintsUsed.push(step.id); persist(); }
      renderDossier();
    });
    var jokerBtn = null;
    if (!state.jokerUsed) {
      jokerBtn = document.createElement("button");
      jokerBtn.type = "button"; jokerBtn.className = "hint-btn joker-btn";
      jokerBtn.textContent = "🃏 Utiliser mon Joker (indice gratuit)";
      jokerBtn.addEventListener("click", () => {
        hintText.classList.remove("hidden");
        hintText.textContent = "» " + step.hint;
        hintBtn.remove();
        jokerBtn.disabled = true; jokerBtn.textContent = "🃏 Joker utilisé ici";
        state.jokerUsed = true; persist();
      });
      hintBtn.insertAdjacentElement("afterend", jokerBtn);
    }
  } else {
    hintBtn.remove();
  }
}

function renderCharacterCard(container, step) {
  const card = CHARACTER_CARDS[step.id];
  if (!card) return;
  const el = document.createElement("div");
  el.className = "character-card-unlock";
  el.innerHTML = `
    <span class="character-card-label">🃏 Carte débloquée !</span>
    <div class="character-card">
      <span class="character-card-icon">${card.icon}</span>
      <div>
        <p class="character-card-name">${card.name}</p>
        <p class="character-card-role">${card.role}</p>
        <p class="character-card-blurb">${card.blurb}</p>
      </div>
    </div>
  `;
  container.appendChild(el);
}

function onStepSuccess(section, step) {
  playSuccessChime();
  if (step.funFact) renderFunFactCard(section, step);
  if (CHARACTER_CARDS[step.id]) renderCharacterCard(section, step);
  if (step.bonus) renderBonusBlock(section, step);
  if (step.digression) renderDigressionBlock(section, step);
  if (step.minigame) renderCannonMinigame(section, step);
  markComplete(step.id);
}

/* ---- Rendu d'une transition narrative avant la tâche ------------ */
function speakText(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "fr-FR";
  utter.rate = 0.95;
  window.speechSynthesis.speak(utter);
}

// ---- Mot du jour en patois genevois (tiré du Cé qu'è lainô, domaine
// public), un par secteur de terrain — simple curiosité linguistique. ----
const PATOIS_WORD = {
  1: ["la nai", "la nuit"],
  2: ["eitiella", "échelle"],
  3: ["armé", "armes"],
  4: ["marmita", "marmite"],
  5: ["fenna", "femme"],
  6: ["coulice", "coulisse"],
  7: ["canaille", "canaille (les envahisseurs, dans le chant)"]
};

function renderTransition(step, container, onContinue) {
  const box = document.createElement("section");
  box.className = "step transition-card";
  const cipherLine = step.cipher
    ? `<p class="cipher-hint">🔐 Fragment codé (table ${step.cipherTool}) : <span class="cipher-code">${step.cipher}</span> — à déchiffrer avec votre porte-documents si vous êtes curieux.</p>`
    : "";
  const walkMin = walkTimeToStep(step);
  const walkLine = walkMin ? `<p class="walk-time">🚶 ≈ ${walkMin} min à pied jusqu'au prochain repère.</p>` : "";
  const speechSupported = !!window.speechSynthesis;
  const pw = PATOIS_WORD[step.id];
  const patoisLine = pw ? `<p class="patois-word">🗣️ Mot du jour (patois genevois) : <b>${pw[0]}</b> — « ${pw[1]} »</p>` : "";

  box.innerHTML = `
    <div class="step-head"><span class="step-num">SECTEUR ${step.id}/${ALL_STEPS.length}</span></div>
    <p class="transition-text">${step.transition}</p>
    ${speechSupported ? `<button type="button" class="lost-btn speak-btn">🔊 Écouter</button>` : ""}
    ${walkLine}
    ${patoisLine}
    ${cipherLine}
    <button type="button" class="validate-btn continue-btn">Continuer →</button>
  `;
  container.appendChild(box);
  box.querySelector(".continue-btn").addEventListener("click", () => {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    onContinue();
  });
  const speakBtn = box.querySelector(".speak-btn");
  if (speakBtn) speakBtn.addEventListener("click", () => speakText(step.transition));

  // ---- Mini-activité facultative (non notée) : traduire le patois ----
  if (step.id === 6) {
    const activity = document.createElement("div");
    activity.className = "bonus-block patois-activity";
    activity.innerHTML = `
      <p class="bonus-question">✍️ Petit défi facultatif (non noté) : « Car on seudar qu'aperçu to sozice, to bellaman bouta bas la coulice... » — essayez de traduire ce vers du patois genevois à votre façon !</p>
      <textarea class="patois-input" rows="2" placeholder="Votre traduction libre…">${state.patoisTranslation || ""}</textarea>
      <button type="button" class="validate-btn patois-save">Enregistrer mon interprétation</button>
      <p class="bonus-feedback patois-feedback"></p>
    `;
    box.appendChild(activity);
    const textarea = activity.querySelector(".patois-input");
    const saveBtn = activity.querySelector(".patois-save");
    const fb = activity.querySelector(".patois-feedback");
    saveBtn.addEventListener("click", () => {
      state.patoisTranslation = textarea.value.trim();
      persist();
      fb.textContent = "✔ Belle interprétation, enregistrée dans votre carnet !";
      fb.className = "bonus-feedback ok patois-feedback";
    });
  }
}

function renderTextStep(step, container) {
  const tpl = document.getElementById("tpl-text");
  const node = tpl.content.cloneNode(true);
  const section = node.querySelector(".step");
  if (step.isAccusation) section.classList.add("accusation");

  node.querySelector(".step-num").textContent = `SECTEUR ${step.id}/${ALL_STEPS.length}`;
  node.querySelector(".step-title").textContent = step.title;
  node.querySelector(".step-brief").textContent = step.brief;
  node.querySelector(".step-question").textContent = step.question;
  attachGpsAndHints(node, section, step);

  const feedback = node.querySelector(".feedback");
  const input = node.querySelector(".answer-input");
  const btn = node.querySelector(".validate-btn");
  const acceptable = step.isAccusation ? CULPRIT_ANSWERS
    : step.answer ? [step.answer, ...(step.altAnswers || [])] : [];

  let textOk = false;
  let photoOk = !step.photoRequired; // vrai d'office si aucune photo requise
  const maybeComplete = () => {
    if (textOk && photoOk) {
      input.disabled = true; btn.disabled = true;
      onStepSuccess(section, step);
    }
  };

  btn.addEventListener("click", () => {
    ensureStarted();
    const given = normalize(input.value);
    if (acceptable.map(normalize).includes(given)) {
      textOk = true;
      feedback.textContent = step.photoRequired
        ? "✔ Code validé — il reste la photo à envoyer ci-dessous."
        : "✔ Code validé — secteur suivant débloqué.";
      feedback.className = "feedback ok";
      input.disabled = true; btn.disabled = true;
      maybeComplete();
    } else if (step.isAccusation && given === "SAVOYARD") {
      // ---- Easter egg : réponse fausse mais amusante, ne compte pas ----
      feedback.textContent = "😂 Un Savoyard, ici, en 2026 ? Ça m'étonnerait — mais on aime l'humour. Réfléchissez encore un peu !";
      feedback.className = "feedback err";
    } else {
      feedback.textContent = "✘ Mauvais code — relisez l'indice de mission.";
      feedback.className = "feedback err";
    }
  });
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") btn.click(); });

  // ---- Bloc photo optionnel, en plus du texte (ex. plaque commémorative) ----
  if (step.photoRequired) {
    const photoBox = document.createElement("div");
    photoBox.className = "extra-photo-block";
    photoBox.innerHTML = `
      <p class="step-question">${step.photoQuestion || "Prenez aussi une photo pour valider ce secteur."}</p>
      <div class="compare-row">
        <figure class="ref-photo"><img alt="Photo de référence"><figcaption>Repère à retrouver sur place</figcaption></figure>
        <figure class="user-photo"><div class="photo-placeholder">Votre photo</div><img class="hidden" alt="Votre photo"><figcaption>Votre preuve</figcaption></figure>
      </div>
      <label class="file-btn">Prendre / choisir une photo<input type="file" accept="image/*" capture="environment" class="extra-photo-input"></label>
      <button type="button" class="ar-toggle-btn">📷 Vue en direct (effet spécial)</button>
      <div class="ar-camera-wrap hidden">
        <video class="ar-video" autoplay playsinline muted></video>
        <span class="ar-icon-overlay"></span>
        <button type="button" class="validate-btn ar-capture-btn">📸 Capturer</button>
        <button type="button" class="btn-secondary ar-cancel-btn">Annuler</button>
      </div>
      <canvas class="ar-canvas hidden"></canvas>
      <p class="ar-status"></p>
      <p class="similarity-status"></p>
      <p class="geo-status extra-geo-status"></p>
    `;
    section.appendChild(photoBox);

    const refImg = photoBox.querySelector(".ref-photo img");
    if (step.refPhoto) {
      refImg.src = step.refPhoto;
      refImg.onerror = () => {
        refImg.replaceWith(Object.assign(document.createElement("div"), {
          className: "photo-placeholder", textContent: "Photo de référence à ajouter : " + step.refPhoto
        }));
      };
    }

    const extraInput = photoBox.querySelector(".extra-photo-input");
    const extraPlaceholder = photoBox.querySelector(".photo-placeholder");
    const extraUserImg = photoBox.querySelector(".user-photo img");
    const extraGeoStatus = photoBox.querySelector(".extra-geo-status");
    const extraSimStatus = photoBox.querySelector(".similarity-status");

    function handleExtraPhoto(srcUrl) {
      ensureStarted();
      extraUserImg.src = srcUrl; extraUserImg.classList.remove("hidden"); extraPlaceholder.classList.add("hidden");
      extraUserImg.onload = () => compareToReference(step.refPhoto, extraUserImg, extraSimStatus);

      const finishPhoto = (msg, cls) => {
        extraGeoStatus.textContent = msg; extraGeoStatus.className = "geo-status extra-geo-status " + cls;
        photoOk = true; extraInput.disabled = true;
        maybeComplete();
      };

      if (TEST_MODE) { finishPhoto("🧪 Mode test : vérification GPS ignorée.", "warn"); return; }
      if (!navigator.geolocation || !step.gps) { finishPhoto("Position non vérifiable sur cet appareil — photo acceptée.", "warn"); return; }
      extraGeoStatus.textContent = "Vérification de la position…"; extraGeoStatus.className = "geo-status extra-geo-status";
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const d = haversine(pos.coords.latitude, pos.coords.longitude, step.gps.lat, step.gps.lng);
          if (d <= GEO_TOLERANCE_M) {
            finishPhoto(`✔ Position confirmée (≈${d.toFixed(1)} m du repère).`, "ok");
          } else {
            extraGeoStatus.textContent = `✘ Trop loin du repère (≈${d.toFixed(1)} m, tolérance ${GEO_TOLERANCE_M} m). Rapprochez-vous et réessayez.`;
            extraGeoStatus.className = "geo-status extra-geo-status warn";
          }
        },
        () => finishPhoto("Position non accessible — photo acceptée sans vérification.", "warn"),
        { enableHighAccuracy: true, timeout: 10000 }
      );
    }

    extraInput.addEventListener("change", () => {
      const file = extraInput.files[0];
      if (!file) return;
      handleExtraPhoto(URL.createObjectURL(file));
    });

    attachArCamera(photoBox, step, (blob) => {
      handleExtraPhoto(URL.createObjectURL(blob));
    });
  }

  container.appendChild(node);
  input.focus({ preventScroll: true });
}

// ---- Effet "AR-like" : vue caméra en direct avec badge superposé ----
// Fonction partagée : câble le bouton "vue en direct", la capture et
// le badge superposé sur n'importe quel bloc photo (mission photo
// classique OU bloc photo additionnel d'une énigme texte+photo comme
// l'énigme 6). onCapture(blob) reçoit l'image capturée, badge inclus.
function attachArCamera(scope, step, onCapture) {
  const arToggleBtn = scope.querySelector(".ar-toggle-btn");
  if (!arToggleBtn) return;
  const arWrap = scope.querySelector(".ar-camera-wrap");
  const arVideo = scope.querySelector(".ar-video");
  const arIconOverlay = scope.querySelector(".ar-icon-overlay");
  const arCaptureBtn = scope.querySelector(".ar-capture-btn");
  const arCancelBtn = scope.querySelector(".ar-cancel-btn");
  const arCanvas = scope.querySelector(".ar-canvas");
  const arStatus = scope.querySelector(".ar-status");
  let arStream = null;

  arIconOverlay.textContent = step.arIcon || "🏺";

  function stopArCamera() {
    if (arStream) { arStream.getTracks().forEach((t) => t.stop()); arStream = null; }
    arWrap.classList.add("hidden");
  }

  if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
    arToggleBtn.disabled = true;
    arToggleBtn.textContent = "📷 Vue en direct indisponible sur cet appareil";
    return;
  }

  arToggleBtn.addEventListener("click", async () => {
    arStatus.textContent = "Démarrage de la caméra…";
    try {
      arStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
      arVideo.srcObject = arStream;
      arWrap.classList.remove("hidden");
      arStatus.textContent = "";
    } catch (e) {
      arStatus.textContent = "✘ Caméra refusée ou indisponible — utilisez « Prendre / choisir une photo » ci-dessus à la place.";
    }
  });
  arCancelBtn.addEventListener("click", stopArCamera);
  arCaptureBtn.addEventListener("click", () => {
    ensureStarted();
    const w = arVideo.videoWidth || 640, h = arVideo.videoHeight || 480;
    arCanvas.width = w; arCanvas.height = h;
    const ctx = arCanvas.getContext("2d");
    ctx.drawImage(arVideo, 0, 0, w, h);
    // Badge superposé, façon sticker AR, en bas à droite de la capture
    const size = Math.round(Math.min(w, h) * 0.22);
    const cx = w - size * 0.75, cy = h - size * 0.75;
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, size / 2 + 8, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(10,8,5,0.75)";
    ctx.fill();
    ctx.strokeStyle = "#ffb347";
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.font = `${size}px serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(step.arIcon || "🏺", cx, cy);
    ctx.restore();

    arCanvas.toBlob((blob) => {
      if (!blob) return;
      onCapture(blob);
      stopArCamera();
    }, "image/jpeg", 0.9);
  });
}

function renderPhotoStep(step, container) {
  const tpl = document.getElementById("tpl-photo");
  const node = tpl.content.cloneNode(true);
  const section = node.querySelector(".step");

  node.querySelector(".step-num").textContent = `SECTEUR ${step.id}/${ALL_STEPS.length}`;
  node.querySelector(".step-title").textContent = step.title;
  node.querySelector(".step-brief").textContent = step.brief;
  node.querySelector(".step-question").textContent = step.question;
  attachGpsAndHints(node, section, step);

  const refImg = node.querySelector(".ref-photo img");
  if (step.refPhoto) {
    refImg.src = step.refPhoto;
    refImg.onerror = () => {
      refImg.replaceWith(Object.assign(document.createElement("div"), {
        className: "photo-placeholder", textContent: "Photo de référence à ajouter : " + step.refPhoto
      }));
    };
  } else {
    // Pas de photo de référence pour ce secteur (ex. "n'importe quelle clé").
    node.querySelector(".ref-photo").replaceWith(Object.assign(document.createElement("p"), {
      className: "photo-note", textContent: step.photoNote || "Aucune photo de référence nécessaire pour ce secteur."
    }));
  }

  const fileInput = node.querySelector(".photo-input");
  const placeholder = node.querySelector(".photo-placeholder");
  const userImg = node.querySelector(".user-photo img");
  const geoStatus = node.querySelector(".geo-status");
  const simStatus = node.querySelector(".similarity-status");
  const validateBtn = node.querySelector(".photo-validate");
  const feedback = node.querySelector(".feedback");
  let photoTaken = false;

  fileInput.addEventListener("change", () => {
    ensureStarted();
    const file = fileInput.files[0];
    if (!file) return;
    photoTaken = true;
    const url = URL.createObjectURL(file);
    userImg.src = url; userImg.classList.remove("hidden"); placeholder.classList.add("hidden");
    geoStatus.textContent = "Comparez votre photo au repère, puis appuyez sur Valider.";
    geoStatus.className = "geo-status";
    userImg.onload = () => compareToReference(step.refPhoto, userImg, simStatus);
  });

  // ---- Effet "AR-like" : vue caméra en direct avec badge superposé ----
  attachArCamera(node, step, (blob) => {
    photoTaken = true;
    const url = URL.createObjectURL(blob);
    userImg.src = url; userImg.classList.remove("hidden"); placeholder.classList.add("hidden");
    geoStatus.textContent = "Comparez votre photo au repère, puis appuyez sur Valider.";
    geoStatus.className = "geo-status";
    userImg.onload = () => compareToReference(step.refPhoto, userImg, simStatus);
  });

  function checkLocationAndValidate() {
    if (TEST_MODE) {
      geoStatus.textContent = "🧪 Mode test : vérification GPS ignorée.";
      geoStatus.className = "geo-status warn";
      completePhotoStep(); return;
    }
    if (!navigator.geolocation) {
      geoStatus.textContent = "Géolocalisation indisponible sur cet appareil — photo acceptée sans vérification de position.";
      geoStatus.className = "geo-status warn";
      completePhotoStep(); return;
    }
    geoStatus.textContent = "Vérification de la position…"; geoStatus.className = "geo-status";
    validateBtn.disabled = true;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const d = haversine(pos.coords.latitude, pos.coords.longitude, step.gps.lat, step.gps.lng);
        const acc = pos.coords.accuracy ? Math.round(pos.coords.accuracy) : null;
        if (d <= GEO_TOLERANCE_M) {
          geoStatus.textContent = `✔ Position confirmée (≈${d.toFixed(1)} m du repère).`;
          geoStatus.className = "geo-status ok";
          completePhotoStep();
        } else {
          state.photoRetries[step.id] = (state.photoRetries[step.id] || 0) + 1; persist();
          geoStatus.textContent = `✘ Trop loin du repère (≈${d.toFixed(1)} m, tolérance ${GEO_TOLERANCE_M} m` +
            (acc ? `, précision GPS actuelle ≈${acc} m` : "") + `). Rapprochez-vous et réessayez.`;
          geoStatus.className = "geo-status warn";
          feedback.textContent = "✘ Secteur non validé : vous n'êtes pas assez près du repère GPS.";
          feedback.className = "feedback err";
          validateBtn.disabled = false;
        }
      },
      () => {
        geoStatus.textContent = "Position non accessible (GPS refusé ou hors service) — photo acceptée sans vérification.";
        geoStatus.className = "geo-status warn";
        completePhotoStep();
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }

  function completePhotoStep() {
    feedback.textContent = "✔ Preuve reçue — secteur suivant débloqué.";
    feedback.className = "feedback ok";
    validateBtn.disabled = true; fileInput.disabled = true;
    onStepSuccess(section, step);
  }

  validateBtn.addEventListener("click", () => {
    if (!photoTaken) {
      feedback.textContent = "✘ Ajoutez une photo avant de valider ce secteur.";
      feedback.className = "feedback err"; return;
    }
    checkLocationAndValidate();
  });

  container.appendChild(node);
}

/* ---- Puzzle glissant générique (utilisé pour énigme 1 et 9) ----- */
function renderSlidingPuzzle(step, container) {
  const tpl = document.getElementById("tpl-puzzle");
  const node = tpl.content.cloneNode(true);
  const section = node.querySelector(".step");

  node.querySelector(".step-num").textContent = `SECTEUR ${step.id}/${ALL_STEPS.length}`;
  node.querySelector(".step-title").textContent = step.title;
  node.querySelector(".step-brief").textContent = step.brief;

  // Toutes les références DOM sont capturées ICI, avant tout
  // appendChild — un DocumentFragment se vide dès qu'il est inséré
  // dans le document, donc re-quérir "node" après coup renverrait null.
  const questionEl = node.querySelector(".step-question");
  const gpsLinkEl = node.querySelector(".gps-link");
  const grid = node.querySelector(".puzzle-grid");
  const puzzleInstrEl = node.querySelector(".puzzle-instructions");
  const feedback = node.querySelector(".feedback");

  function setupPuzzleGrid() {
    const n = step.gridSize;
    grid.style.setProperty("--n", n);

    let order = Array.from({ length: n * n }, (_, i) => i);
    do {
      for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }
    } while (order.every((v, i) => v === i));

    let selected = null;
    const tiles = [];
    const isSolved = () => order.every((v, i) => v === i);

    function renderTiles() {
      grid.innerHTML = "";
      order.forEach((pieceIndex, pos) => {
        const tile = document.createElement("button");
        tile.type = "button"; tile.className = "puzzle-tile";
        const col = pieceIndex % n, row = Math.floor(pieceIndex / n);
        tile.style.backgroundImage = `url('${step.image}')`;
        tile.style.backgroundSize = `${n * 100}% ${n * 100}%`;
        tile.style.backgroundPosition = `${(col * 100) / (n - 1)}% ${(row * 100) / (n - 1)}%`;
        tile.dataset.pos = pos;
        tile.addEventListener("click", () => handleTileClick(pos));
        grid.appendChild(tile);
        tiles.push(tile);
      });
    }

    function handleTileClick(pos) {
      if (isSolved()) return;
      if (selected === null) { selected = pos; tiles[pos].classList.add("selected"); return; }
      if (selected === pos) { tiles[pos].classList.remove("selected"); selected = null; return; }
      [order[selected], order[pos]] = [order[pos], order[selected]];
      tiles[selected].classList.remove("selected"); selected = null;
      renderTiles();
      if (isSolved()) {
        feedback.textContent = "✔ Puzzle reconstitué !";
        feedback.className = "feedback ok";
        grid.classList.add("solved");
        onStepSuccess(section, step);
      }
    }

    renderTiles();
  }

  if (step.codeGate) {
    // ---- Portail de décodage : GPS et puzzle restent masqués (pas
    // supprimés — attachGpsAndHints doit pouvoir les retrouver plus
    // tard) tant que l'équipe n'a pas décodé le lieu de ralliement. ----
    if (gpsLinkEl) gpsLinkEl.classList.add("hidden");
    grid.classList.add("hidden");
    puzzleInstrEl.classList.add("hidden");
    questionEl.textContent = step.codeGate.question;

    const gateBox = document.createElement("div");
    gateBox.className = "answer-row code-gate";
    gateBox.innerHTML = `
      <input type="text" class="answer-input code-gate-input" placeholder="LIEU DÉCODÉ…" autocomplete="off">
      <button class="validate-btn code-gate-btn">Valider</button>
    `;
    const gateFeedback = document.createElement("p");
    gateFeedback.className = "feedback code-gate-feedback";
    questionEl.insertAdjacentElement("afterend", gateFeedback);
    questionEl.insertAdjacentElement("afterend", gateBox);

    const gateInput = gateBox.querySelector(".code-gate-input");
    const gateBtn = gateBox.querySelector(".code-gate-btn");
    const acceptable = [step.codeGate.answer, ...(step.codeGate.altAnswers || [])].map(normalize);
    const submitGate = () => {
      ensureStarted();
      if (acceptable.includes(normalize(gateInput.value))) {
        gateFeedback.textContent = "✔ Lieu décodé — l'itinéraire et le puzzle final sont débloqués !";
        gateFeedback.className = "feedback ok code-gate-feedback";
        gateInput.disabled = true; gateBtn.disabled = true;
        questionEl.textContent = step.question;
        attachGpsAndHints(node, section, step);
        if (gpsLinkEl) gpsLinkEl.classList.remove("hidden");
        grid.classList.remove("hidden");
        puzzleInstrEl.classList.remove("hidden");
        setupPuzzleGrid();
      } else {
        gateFeedback.textContent = "✘ Ce n'est pas le bon lieu — revérifiez votre décodage.";
        gateFeedback.className = "feedback err code-gate-feedback";
      }
    };
    gateBtn.addEventListener("click", submitGate);
    gateInput.addEventListener("keydown", (e) => { if (e.key === "Enter") submitGate(); });

    container.appendChild(node);
    return;
  }

  // Pas de portail de code pour ce puzzle : tout s'affiche normalement.
  questionEl.textContent = step.question;
  attachGpsAndHints(node, section, step);
  setupPuzzleGrid();
  container.appendChild(node);
}

/* ---- Affichage du secteur courant : transition puis tâche ------- */
function renderCurrentStep() {
  const container = document.getElementById("step-container");
  container.innerHTML = "";
  const next = ALL_STEPS.find((s) => !state.completed.includes(s.id));
  if (!next) { showFinal(); return; }

  const showTask = () => {
    container.innerHTML = "";
    if (next.type === "text") renderTextStep(next, container);
    else if (next.type === "photo") renderPhotoStep(next, container);
    else if (next.type === "puzzle" || next.type === "puzzle2") renderSlidingPuzzle(next, container);
    container.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (next.transition) {
    renderTransition(next, container, showTask);
    container.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    showTask();
  }
}

// ---- Power-up aléatoire : ~1 chance sur 3 par secteur de terrain ----
function showToast(message, cls = "") {
  const toast = document.createElement("div");
  toast.className = "toast " + cls;
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 4200);
}

function maybeTriggerPowerUp(id) {
  const isFieldStep = STEPS.some((s) => s.id === id);
  if (!isFieldStep || state.doublePointsActive) return;
  if (Math.random() < 1 / 3) {
    state.doublePointsActive = true;
    persist();
    playBonusChime();
    showToast("🎁 Power-up trouvé ! Vos prochains points bonus comptent double.", "powerup");
  }
}

function markComplete(id) {
  if (!state.completed.includes(id)) { state.completed.push(id); persist(); }
  renderProgress();
  renderDossier();
  maybeTriggerPowerUp(id);
  setTimeout(() => {
    try {
      renderCurrentStep();
    } catch (e) {
      // Filet de sécurité : si un bug empêche l'affichage du secteur
      // suivant, on ne laisse jamais l'écran bloqué en silence.
      console.error("Erreur à l'affichage du secteur suivant :", e);
      const container = document.getElementById("step-container");
      if (container) {
        container.innerHTML = `<section class="step"><p class="feedback err">
          ✘ Un problème technique a bloqué l'affichage. Rechargez la page
          (votre progression est sauvegardée) pour continuer.
        </p></section>`;
      }
    }
  }, 900);
}

function computeBadges() { return BADGES.map((b) => ({ ...b, earned: b.check(state) })); }

function renderFinalBadgesAndCarnet(el) {
  const badges = computeBadges();
  el.querySelector(".final-badges").innerHTML = badges.map((b) =>
    `<div class="badge ${b.earned ? "earned" : "locked"}" title="${b.desc}">
       <span class="badge-icon">${b.icon}</span><span class="badge-label">${b.label}</span>
     </div>`
  ).join("");

  const facts = STEPS.filter((s) => state.completed.includes(s.id) && s.funFact);
  const cards = STEPS.filter((s) => state.completed.includes(s.id) && CHARACTER_CARDS[s.id]);
  const cardsHtml = cards.length
    ? `<p class="carnet-title">🃏 Personnages rencontrés</p><div class="character-collection">` +
      cards.map((s) => {
        const c = CHARACTER_CARDS[s.id];
        return `<div class="character-card small"><span class="character-card-icon">${c.icon}</span>
                 <div><p class="character-card-name">${c.name}</p><p class="character-card-role">${c.role}</p></div></div>`;
      }).join("") + `</div>`
    : "";
  const factsHtml = facts.length
    ? `<p class="carnet-title">📖 Carnet de l'enquête</p>` +
      facts.map((s) => `<p class="carnet-entry"><strong>${s.title.split("— ")[1] || s.title}</strong> — ${s.funFact}</p>`).join("")
    : "";
  const patoisHtml = state.patoisTranslation
    ? `<p class="carnet-title">✍️ Votre traduction du patois</p><p class="carnet-entry">« ${state.patoisTranslation} »</p>`
    : "";
  el.querySelector(".final-carnet").innerHTML = cardsHtml + factsHtml + patoisHtml;
}

function renderFinalRecap(el) {
  const box = el.querySelector(".final-recap");
  if (!box) return;
  const lines = STEPS.filter((s) => state.completed.includes(s.id)).map((s) => {
    const lieu = s.title.split("— ")[1] || s.title;
    const trouve = s.answer ? s.answer.charAt(0) + s.answer.slice(1).toLowerCase() : "une preuve validée";
    return `${lieu} → ${trouve}.`;
  });
  const coupableTrouve = state.completed.includes(8);
  box.innerHTML = `
    <p class="carnet-title">📜 Résumé de la mission</p>
    <p class="recap-line">${lines.join(" ")}</p>
    ${coupableTrouve ? `<p class="recap-line">Le coupable a été démasqué, le blason reconstitué, et la marmite retrouvée. Mission accomplie !</p>` : ""}
  `;
}

// ---- Fiche "pour aller plus loin" : vraies sources, pour les curieux ----
const FURTHER_READING = [
  { name: "Musée d'art et d'histoire de Genève (MAH)", url: "https://www.mah-geneve.ch/", note: "conserve les échelles originales de 1602" },
  { name: "Ville de Genève — Histoire de l'Escalade", url: "https://www.geneve.ch/faire-geneve/decouvrir-geneve-quartiers/histoire-geneve/histoire-escalade", note: "histoire complète et actualités de la fête" },
  { name: "Compagnie de 1602", url: "https://www.1602.ch/", note: "association qui organise le cortège historique chaque année depuis 1926" }
];

function renderFurtherReading(el) {
  const box = el.querySelector(".final-further-reading");
  if (!box) return;
  box.innerHTML = `
    <p class="carnet-title">🔎 Pour aller plus loin</p>
    <ul class="further-reading-list">
      ${FURTHER_READING.map((r) => `<li><a href="${r.url}" target="_blank" rel="noopener">${r.name}</a> — ${r.note}</li>`).join("")}
    </ul>
  `;
}

function registerServiceWorker() {
  if (navigator.serviceWorker) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch((e) => {
        console.warn("Service worker non enregistré (mode hors-ligne indisponible) :", e);
      });
    });
  }
}

const QUIZ_POINTS_PER_Q = 5;
const QUIZ_TIME_SECONDS = 60;

function renderFinalQuiz(el) {
  const box = el.querySelector(".final-quiz");
  if (!box) return;
  const maxQuizScore = FINAL_QUIZ.length * QUIZ_POINTS_PER_Q;
  let quizScore = 0;
  let timeLeft = QUIZ_TIME_SECONDS;
  let timerId = null;

  box.innerHTML = `
    <p class="carnet-title">🎓 Sprint final : quiz chronométré (+${QUIZ_POINTS_PER_Q} pts/bonne réponse)</p>
    <p class="quiz-timer">⏱️ <span id="quiz-time-left">${timeLeft}</span>s — Score quiz : <span id="quiz-score">0</span> / ${maxQuizScore} pts</p>
    ${FINAL_QUIZ.map((item, qi) => `
      <div class="quiz-item" data-qi="${qi}">
        <p class="quiz-question">${qi + 1}. ${item.q}</p>
        <div class="quiz-options">
          ${item.options.map((opt, oi) => `<button type="button" class="quiz-option" data-oi="${oi}">${opt}</button>`).join("")}
        </div>
      </div>
    `).join("")}
    <div class="reflection-block">
      <p class="quiz-question">💭 Question de recul (facultative, non notée) : plus de 400 ans après les faits, l'Escalade est encore fêtée chaque année à Genève — la Course de l'Escalade rassemble plus de 45'000 coureurs chaque premier week-end de décembre depuis 1978, avant le traditionnel défilé costumé et le bris de la marmite. À votre avis, pourquoi cette histoire est-elle encore célébrée aujourd'hui ?</p>
      <textarea class="reflection-input" rows="3" placeholder="Votre avis…"></textarea>
    </div>
  `;

  const timeEl = box.querySelector("#quiz-time-left");
  const scoreEl = box.querySelector("#quiz-score");

  function lockRemaining() {
    box.querySelectorAll(".quiz-item:not(.answered)").forEach((itemEl) => {
      itemEl.classList.add("answered", "timed-out");
      const qi = parseInt(itemEl.dataset.qi, 10);
      const correct = FINAL_QUIZ[qi].correct;
      itemEl.querySelectorAll(".quiz-option")[correct].classList.add("correct");
      itemEl.querySelectorAll(".quiz-option").forEach((b) => (b.disabled = true));
    });
  }

  function tick() {
    timeLeft -= 1;
    timeEl.textContent = timeLeft;
    if (timeLeft <= 10) box.querySelector(".quiz-timer").classList.add("urgent");
    if (timeLeft <= 0) {
      clearInterval(timerId);
      timeEl.textContent = "0";
      lockRemaining();
    }
  }
  timerId = setInterval(tick, 1000);

  box.querySelectorAll(".quiz-item").forEach((itemEl) => {
    const qi = parseInt(itemEl.dataset.qi, 10);
    const correct = FINAL_QUIZ[qi].correct;
    itemEl.querySelectorAll(".quiz-option").forEach((optBtn) => {
      optBtn.addEventListener("click", () => {
        if (itemEl.classList.contains("answered")) return;
        itemEl.classList.add("answered");
        const oi = parseInt(optBtn.dataset.oi, 10);
        optBtn.classList.add(oi === correct ? "correct" : "wrong");
        itemEl.querySelectorAll(".quiz-option")[correct].classList.add("correct");
        if (oi === correct) {
          quizScore += QUIZ_POINTS_PER_Q;
          scoreEl.textContent = quizScore;
          playBonusChime();
        }
        if (box.querySelectorAll(".quiz-item.answered").length === FINAL_QUIZ.length) {
          clearInterval(timerId);
        }
      });
    });
  });
}

// ---- Confettis (pur CSS/JS, sans dépendance externe) --------------
function launchConfetti() {
  if (state.sobre) return;
  const colors = ["#39ff8f", "#ffb347", "#7ffcff", "#e8dcb8"];
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (2.5 + Math.random() * 1.5) + "s";
    piece.style.animationDelay = (Math.random() * 0.6) + "s";
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 4500);
  }
}

// ---- Carte mentale finale : personnages / lieux / dates reliés ----
const MIND_MAP_NODES = [
  { label: "1602", sub: "L'Escalade", angle: 0, center: true },
  { label: "Mère Royaume", sub: "la marmite", angle: 0 },
  { label: "Dame Piaget", sub: "la clé", angle: 51 },
  { label: "Isaac Mercier", sub: "la coulisse", angle: 102 },
  { label: "L'échelle", sub: "l'assaut", angle: 154 },
  { label: "La Clémence", sub: "l'alerte", angle: 206 },
  { label: "La canonnade", sub: "la déroute", angle: 257 },
  { label: "Bourg-de-Four", sub: "la marmite partagée", angle: 309 }
];

function renderMindMap(el) {
  const box = el.querySelector(".final-mindmap");
  if (!box) return;
  const w = 340, h = 340, cx = w / 2, cy = h / 2, r = 120;
  let svg = `<svg viewBox="0 0 ${w} ${h}" class="mindmap-svg" id="mindmap-svg" xmlns="http://www.w3.org/2000/svg">`;
  svg += `<rect width="${w}" height="${h}" fill="#0a1410"/>`;
  const satellites = MIND_MAP_NODES.filter((n) => !n.center);
  satellites.forEach((n) => {
    const rad = (n.angle * Math.PI) / 180;
    const x = cx + r * Math.cos(rad), y = cy + r * Math.sin(rad);
    svg += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#1c7a4c" stroke-width="1.5"/>`;
  });
  svg += `<circle cx="${cx}" cy="${cy}" r="34" fill="#39ff8f" opacity="0.15" stroke="#39ff8f" stroke-width="2"/>`;
  svg += `<text x="${cx}" y="${cy - 3}" text-anchor="middle" fill="#39ff8f" font-size="15" font-weight="700" font-family="serif">1602</text>`;
  svg += `<text x="${cx}" y="${cy + 13}" text-anchor="middle" fill="#39ff8f" font-size="8">L'Escalade</text>`;
  satellites.forEach((n) => {
    const rad = (n.angle * Math.PI) / 180;
    const x = cx + r * Math.cos(rad), y = cy + r * Math.sin(rad);
    svg += `<circle cx="${x}" cy="${y}" r="26" fill="#0a1410" stroke="#ffb347" stroke-width="1.5"/>`;
    svg += `<text x="${x}" y="${y - 2}" text-anchor="middle" fill="#e8dcb8" font-size="8" font-weight="700">${n.label}</text>`;
    svg += `<text x="${x}" y="${y + 9}" text-anchor="middle" fill="#7ffcff" font-size="6">${n.sub}</text>`;
  });
  svg += `</svg>`;
  box.innerHTML = `
    <p class="carnet-title">🗺️ Carte mentale de l'enquête</p>
    ${svg}
    <button type="button" class="btn-secondary mindmap-download-btn">💾 Télécharger l'image</button>
  `;

  box.querySelector(".mindmap-download-btn").addEventListener("click", () => {
    const svgEl = box.querySelector("#mindmap-svg");
    const svgData = new XMLSerializer().serializeToString(svgEl);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = w * 2; canvas.height = h * 2;
      const ctx = canvas.getContext("2d");
      ctx.scale(2, 2);
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      canvas.toBlob((blob) => {
        const dlUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = dlUrl; a.download = "carte-mentale-escalade.png";
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        URL.revokeObjectURL(dlUrl);
      });
    };
    img.src = url;
  });
}

// ---- Diplôme final téléchargeable (canvas, aucune dépendance) ----
function renderDiploma(el) {
  const box = el.querySelector(".final-diploma");
  if (!box) return;
  box.innerHTML = `
    <p class="carnet-title">📜 Diplôme de la mission</p>
    <canvas id="diploma-canvas" class="diploma-preview" width="800" height="560"></canvas>
    <button type="button" class="btn-secondary diploma-download-btn">💾 Télécharger le diplôme</button>
  `;

  const canvas = box.querySelector("#diploma-canvas");
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;

  // Fond parchemin + cadre décoratif
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, "#e8dcb8"); grad.addColorStop(1, "#d8c79a");
  ctx.fillStyle = grad; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "#8a5a1f"; ctx.lineWidth = 10; ctx.strokeRect(20, 20, w - 40, h - 40);
  ctx.strokeStyle = "#39ff8f"; ctx.lineWidth = 2; ctx.strokeRect(34, 34, w - 68, h - 68);

  ctx.textAlign = "center"; ctx.fillStyle = "#3a2f1a";
  ctx.font = "700 34px Georgia, serif";
  ctx.fillText("DIPLÔME DE L'ESCALADE", w / 2, 110);
  ctx.font = "italic 18px Georgia, serif";
  ctx.fillText("Mission accomplie — Vieille Ville de Genève, 1602", w / 2, 145);

  ctx.font = "700 30px Georgia, serif"; ctx.fillStyle = "#8a5a1f";
  ctx.fillText(state.teamName || "Équipe anonyme", w / 2, 240);
  if (state.teamCodename) {
    ctx.font = "italic 18px Georgia, serif"; ctx.fillStyle = "#3a2f1a";
    ctx.fillText(`« ${state.teamCodename} »`, w / 2, 270);
  }

  const totalSec = Math.round((Date.now() - state.startedAt) / 1000);
  const m = Math.floor(totalSec / 60), s = totalSec % 60;
  ctx.font = "22px Georgia, serif"; ctx.fillStyle = "#3a2f1a";
  ctx.fillText(`Score : ${currentScore()} / ${MAX_SCORE} points`, w / 2, 340);
  ctx.fillText(`Temps : ${m} min ${s.toString().padStart(2, "0")} s`, w / 2, 375);

  const badges = computeBadges().filter((b) => b.earned);
  ctx.font = "26px serif";
  ctx.fillText(badges.map((b) => b.icon).join("  ") || "🏺", w / 2, 440);

  ctx.font = "14px Georgia, serif"; ctx.fillStyle = "#6b5a3a";
  ctx.fillText(new Date().toLocaleDateString("fr-CH", { day: "numeric", month: "long", year: "numeric" }), w / 2, 500);

  box.querySelector(".diploma-download-btn").addEventListener("click", () => {
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = "diplome-escalade.png";
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  });
}

function showFinal() {
  stopAmbientLoop();
  const el = document.getElementById("final-screen");
  el.querySelector(".final-email").textContent = "Adresse de transmission : " + FINAL.email;
  el.querySelector(".final-code").textContent = "Code secret final : " + FINAL.code;
  const totalSec = Math.round((Date.now() - state.startedAt) / 1000);
  const m = Math.floor(totalSec / 60), s = totalSec % 60;
  const team = state.teamName
    ? `${state.teamName}${state.teamCodename ? ` ("${state.teamCodename}")` : ""} — `
    : "";
  document.getElementById("final-time-value").textContent =
    `${team}${m} min ${s.toString().padStart(2, "0")} s — Score : ${currentScore()} / ${MAX_SCORE} pts`;
  renderFinalBadgesAndCarnet(el);
  renderFinalRecap(el);
  renderFinalQuiz(el);
  renderMindMap(el);
  renderDiploma(el);
  renderFurtherReading(el);
  el.classList.remove("hidden");
  playFinalFanfare();
  launchConfetti();
  el.scrollIntoView({ behavior: "smooth" });
}

function init() {
  renderPrologueOnce();
  renderProgress();
  renderDossier();
  renderCurrentStep();
}

/* ============================================================
   DÉMARRAGE — uniquement si on est sur la page de jeu principale
   ============================================================ */

const btnSave = document.getElementById("btn-save");
if (btnSave) btnSave.addEventListener("click", downloadSave);
const btnLoad = document.getElementById("btn-load");
if (btnLoad) btnLoad.addEventListener("click", () => document.getElementById("file-load").click());
const fileLoadInput = document.getElementById("file-load");
if (fileLoadInput) fileLoadInput.addEventListener("change", loadSaveFromFile);

const muteBtn = document.getElementById("btn-mute");
if (muteBtn) {
  muteBtn.textContent = state.muted ? "🔇" : "🔊";
  muteBtn.addEventListener("click", () => {
    state.muted = !state.muted;
    muteBtn.textContent = state.muted ? "🔇" : "🔊";
    persist();
  });
}

if (document.getElementById("gate-screen")) {
  initGate();
  initPorteDocuments();
  registerServiceWorker();

  const enableTestBtn = document.getElementById("btn-enable-test-mode");
  if (enableTestBtn) {
    if (TEST_MODE) {
      enableTestBtn.textContent = "🧪 Mode test déjà actif";
      enableTestBtn.disabled = true;
    } else {
      enableTestBtn.addEventListener("click", () => {
        const url = new URL(location.href);
        url.searchParams.set("test", "1");
        location.href = url.toString();
      });
    }
  }

  if (TEST_MODE) {
    const welcomeBanner = document.getElementById("test-mode-banner");
    const topBanner = document.getElementById("topbar-test-banner");
    if (welcomeBanner) {
      welcomeBanner.textContent = "🧪 MODE TEST actif : la vérification GPS des missions photo est désactivée. Ne partagez pas ce lien avec « ?test=1 » aux équipes le jour J.";
      welcomeBanner.classList.remove("hidden");
    }
    if (topBanner) topBanner.classList.remove("hidden");
  }
}
