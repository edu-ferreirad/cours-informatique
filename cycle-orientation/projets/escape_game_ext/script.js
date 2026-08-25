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
    type: "photo",
    title: "ÉNIGME 2 — L'assaut des murailles",
    transition: "Bravo ! Vous avez trouvé Genève ! La carte reconstituée représente la cité à cette époque passée. Les espions ayant fini leur récolte d'informations, ils la transmirent à une armée de 2000 hommes qui s'avança par une froide nuit de décembre. Restait à franchir la muraille…",
    brief: "Une partie des soldats a lancé l'assaut à 2h du matin, à l'aide d'un objet démontable en bois, peint en noir pour ne pas être vu de nuit. Les échelles originales de 1602 sont conservées à quelques pas d'ici, à la Maison Tavel, qui retrace l'histoire de l'Escalade.",
    gps: { lat: 46.2016, lng: 6.1489, label: "Maison Tavel (Rue du Puits-Saint-Pierre 6)" },
    question: "Quel objet leur a permis d'escalader la muraille ? Prenez en photo la façade de la Maison Tavel pour valider votre passage.",
    answer: "ECHELLE",
    refPhoto: "assets/ref-maison-tavel.jpg",
    arIcon: "🪜",
    hint: "Le matériel de départ peut vous être utile.",
    fragment: "COUPABLE",
    cipher: "III-XV-XXI-XVI-I-II-XII-V",
    cipherTool: "romaine (I=A, II=B…)",
    funFact: "Chaque échelle démontable pesait une dizaine de kilos par section et mesurait environ 1,70 m assemblée à d'autres — pratiques à transporter discrètement de nuit.",
    bonus: { question: "Bonus (+5 pts) : de quelle couleur les échelles étaient-elles peintes pour ne pas être vues ?", answer: "NOIR" }
  },
  {
    id: 3,
    type: "text",
    title: "ÉNIGME 3 — L'alerte",
    transition: "Bravo, vous avez trouvé : c'est bien grâce à 3 échelles démontables comme celle-ci qu'une partie des soldats (environ 300) lancèrent l'assaut à 2h du matin, montant par-dessus la muraille. Mais Genève avait des vigiles, et l'un d'entre eux donna l'alerte.",
    brief: "Levez les yeux vers les tours de la cathédrale : aujourd'hui encore, chaque année pour l'anniversaire de l'Escalade, des coups de mousquet commémoratifs sont tirés depuis la tour nord.",
    gps: { lat: 46.2044, lng: 6.1487, label: "Cathédrale Saint-Pierre" },
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
    type: "photo",
    title: "ÉNIGME 4 — La marmite de laiton",
    transition: "Effectivement, c'est bien grâce aux cloches de la ville que les citoyens ont pu être alertés. L'alarme est donnée vers 4h30. Les citoyens se lèvent, saisissent des armes et, en chemise de nuit, viennent prêter main-forte aux troupes de défense — même les femmes s'en mêlent ! Voici notre première héroïne.",
    brief: "Elle aurait renversé sa marmite en laiton sur la tête d'un envahisseur, depuis sa fenêtre. Sa maison se serait en réalité trouvée plus bas, vers l'ancienne porte de la Monnaie — mais un immeuble de la Corraterie, tout près de la maison de notre prochaine héroïne, lui est aujourd'hui associé par la tradition populaire.",
    gps: { lat: 46.2018, lng: 6.1464, label: "Rue de la Corraterie (Tour de la Corraterie)" },
    question: "Prenez en photo la tour dite « de l'Escalade », sur la façade de la Corraterie, et notez le nom complet de cette héroïne.",
    refPhoto: "assets/ref-corraterie.jpg",
    arIcon: "🍲",
    hint: "Les nouvelles technologies peuvent être utiles parfois.",
    fragment: "PARMI",
    cipher: "XVI-I-XVIII-XIII-IX",
    cipherTool: "romaine (I=A, II=B…)",
    funFact: "La tradition de la marmite en chocolat garnie de légumes en massepain n'a été inventée qu'en 1881 par un confiseur genevois — presque trois siècles après les faits.",
    bonus: { question: "Bonus (+5 pts) : en quelle année la marmite en chocolat a-t-elle été inventée ?", answer: "1881" }
  },
  {
    id: 5,
    type: "photo",
    title: "ÉNIGME 5 — La charade de Dame Piaget",
    transition: "Mais la Mère Royaume n'est pas la seule à avoir lancé quelque chose ce soir-là. Notre seconde héroïne, Dame Piaget, fit de même avec un autre objet, depuis sa fenêtre, pour aider les défenseurs à ouvrir un passage.",
    brief: "Charade : je rentre toujours en premier, et je sors toujours en dernier. Qui suis-je ? Sa maison se trouvait juste à côté de la tour de la Corraterie — un visage sculpté (un mascaron) orne encore aujourd'hui la façade du 7, rue de la Corraterie, près du Grand Théâtre. Les historiens débattent pour savoir s'il représente Dame Piaget ou Mère Royaume : à vous de vous faire votre propre avis !",
    gps: { lat: 46.2011, lng: 6.1462, label: "7, Rue de la Corraterie (mascaron, près du Grand Théâtre)" },
    question: "Je rentre toujours en premier, et je sors toujours en dernier : quel est cet objet ? Prenez en photo le mascaron du 7 rue de la Corraterie pour valider votre passage.",
    refPhoto: "assets/ref-corraterie-piaget.jpg",
    arIcon: "🗝️",
    hint: "Vous en avez sûrement une sur vous, ou dans une poche de votre sac.",
    fragment: "NOUS",
    cipher: "XIV-XV-XXI-XIX",
    cipherTool: "romaine (I=A, II=B…)",
    funFact: "Une légende (probablement inventée bien plus tard, à la fin du XIXe siècle) raconte qu'elle aurait aussi barricadé sa porte avec une lourde armoire, tant elle avait peur cette nuit-là.",
    bonus: { question: "Bonus (+5 pts) : quel meuble aurait-elle poussé contre sa porte, par peur ?", answer: "ARMOIRE" }
  },
  {
    id: 6,
    type: "text",
    title: "ÉNIGME 6 — Le héros de la Porte-Neuve",
    transition: "Bravo, vous avez deviné : une clé ! En jetant depuis sa fenêtre la clef de l'allée traversante de son immeuble, Dame Piaget permit aux Genevois d'ouvrir le passage et de contre-attaquer. Venons-en à notre troisième héros, Isaac Mercier. Les combats continuaient au nord de la cité, à la Porte-Neuve, où l'ennemi comptait faire sauter l'entrée pour laisser passer le gros de ses troupes.",
    brief: "Consultez l'annexe « Cé qu'è lainô » de votre porte-documents : une strophe précise raconte l'exploit d'Isaac Mercier, qui fit tomber la coulisse (herse) juste à temps. La place actuelle occupe l'emplacement exact de cette ancienne porte de ville.",
    gps: { lat: 46.2009, lng: 6.1434, label: "Place Neuve (ancienne Porte-Neuve)" },
    question: "Quel est le numéro de cette strophe ? (calcul : (4×7)×(36/18), puis vérifiez avec 1+4/2+(8-5-2))",
    answer: "14",
    hint: "Cherchez dans l'annexe le mot « coulisse » — la strophe qui le contient est votre réponse.",
    fragment: "DANS",
    cipher: "IV-I-XIV-XIX",
    cipherTool: "romaine (I=A, II=B…)",
    funFact: "Le « Cé qu'è lainô » est chanté en francoprovençal (patois genevois) et compte 68 strophes qui racontent toute la nuit de l'Escalade, minute par minute.",
    bonus: { question: "Bonus (+5 pts) : dans quelle langue régionale est chanté le Cé qu'è lainô ?", answer: "FRANCOPROVENCAL", altAnswers: ["PATOIS"] }
  },
  {
    id: 7,
    type: "photo",
    title: "ÉNIGME 7 — La déroute des envahisseurs",
    transition: "Félicitations ! Isaac Mercier est resté aussi célèbre que la herse qu'il libéra sur la Porte-Neuve. Entendant le bruit, les soldats ennemis restés hors les murs se précipitèrent, croyant la porte enfin ouverte — grave erreur. Après trois ou quatre heures de combat, un dernier coup décisif mit fin à l'assaut. Le canon utilisé venait d'ici.",
    brief: "Le canon décisif — parti du boulevard de l'Oye, tout près de la Treille — avait été acheminé depuis l'arsenal de l'époque. Sous les arcades de l'Ancien Arsenal, cinq canons d'époque sont toujours visibles aujourd'hui.",
    gps: { lat: 46.2016, lng: 6.1483, label: "Ancien Arsenal (Rue de l'Hôtel-de-Ville 1)" },
    question: "Par quel moyen les Genevois ont-ils fait fuir les envahisseurs ? Prenez en photo les canons sous les arcades de l'Ancien Arsenal pour valider votre passage.",
    refPhoto: "assets/ref-arsenal.jpg",
    arIcon: "💥",
    hint: "Ce qui fait beaucoup de bruit et de dégâts en une seule salve...",
    fragment: "LA",
    cipher: "III-I-XIV-XV-XIV-XIV-I-IV-V",
    cipherTool: "romaine (I=A, II=B…)",
    funFact: "Le tir décisif serait parti du boulevard de l'Oye, à l'emplacement approximatif de l'actuel Musée Rath, brisant au moins une des échelles et semant la panique chez les assaillants restés hors les murs.",
    bonus: { question: "Bonus (+5 pts) : de quel bastion est parti le coup de canon décisif ?", answer: "OYE", altAnswers: ["BASTION DE L'OYE", "BASTION DE LOYE"] }
  }
];

/* ---- ÉTAPE 8 : démasquer le coupable ------------------------- */
const CULPRIT_ANSWERS = ["ENSEIGNANT", "ENSEIGNANTE", "PROFESSEUR", "PROF", "ACCOMPAGNATEUR", "ACCOMPAGNATRICE"];

const ACCUSATION_STEP = {
  id: 8,
  type: "text",
  title: "ÉNIGME 8 — Le dossier assemblé",
  transition: "C'est bien une canonnade qui mit en fuite les envahisseurs ! Au petit matin, 18 Genevois étaient morts pour sauver leur ville et leurs libertés. Il ne reste qu'un mystère à percer : votre dossier d'enquête, assemblé secteur après secteur, forme maintenant une phrase complète.",
  brief: "Relisez la phrase assemblée dans le dossier, en haut de page : elle désigne le coupable, caché parmi vous depuis le début. Rien ni personne n'a jamais quitté la salle de classe...",
  question: "Qui, parmi les adultes présents aujourd'hui, est le véritable coupable ?",
  isAccusation: true
};

/* ---- ÉTAPE 9 : le point de ralliement final (2e puzzle) -------- */
const LOCATION_ANSWERS = ["MARMITE"];

const LOCATION_STEP = {
  id: 9,
  type: "puzzle2",
  title: "ÉNIGME 9 — Le blason de la victoire",
  transition: "Coupable démasqué ! Il ne reste plus qu'à sceller cette victoire comme les Genevois l'ont fait en 1602 : en reconstituant le blason de la cité, avant de rejoindre le point de ralliement pour partager la marmite.",
  brief: "Reconstituez le blason de Genève, recadré depuis la même carte ancienne que votre tout premier puzzle.",
  gps: { lat: 46.2012, lng: 6.1487, label: "Bourg-de-Four" },
  question: "Reconstituez le blason pour sceller la victoire, puis rendez-vous au Bourg-de-Four.",
  image: "assets/blason-geneve.jpg",
  gridSize: 3,
  hint: "C'est l'objet que Dame Royaume a lancé par sa fenêtre — sa version sucrée vous attend au bout du chemin."
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

const GEO_TOLERANCE_M = 3;
// ⚠ voir README : précision GPS réelle rarement sous 5-20 m en Vieille Ville.

/* ---- Annexe : table de conversion + Cé qu'è lainô (domaine public) */
const ROMAN_TABLE = [
  ["I","A"],["II","B"],["III","C"],["IV","D"],["V","E"],["VI","F"],["VII","G"],
  ["VIII","H"],["IX","I"],["X","J"],["XI","K"],["XII","L"],["XIII","M"],
  ["XIV","N"],["XV","O"],["XVI","P"],["XVII","Q"],["XVIII","R"],["XIX","S"],
  ["XX","T"],["XXI","U"],["XXII","V"],["XXIII","W"],["XXIV","X"],["XXV","Y"],["XXVI","Z"]
];

// Extrait du "Cé qu'è lainô" (chant traditionnel de l'Escalade, domaine
// public) — traduction française moderne, strophes utiles au parcours.
const CE_QUE_LAINO_EXCERPT = [
  [5, "On vous dira que c'était la canaille. Les Savoyards contre notre muraille trois échelles ont dressé et planté, et par là deux cents sont montés."],
  [13, "Les ponts-levis ils les auraient abaissés, ils auraient ôté tout ce qui les gênait, pour faire entrer l'escadron de Savoie. Vous les verrez bientôt en désarroi."],
  [14, "Car un soldat qui aperçut tout cela, tout bellement bouta bas la coulisse, puis alla crier qu'il se fallait armer, ou autrement nous serions tous tués."],
  [15, "Il fut haché comme des herbettes, puis enfilé comme des alouettes ; il fut crevé comme un fier crapaud, et puis taillé comme des atriaux."],
  [16, "Droit au clocher, on va sonner l'alarme ; en même temps, on crie : « Aux armes, aux armes ! » De tous endroits on vit des gens sortir qui disaient : « Il faut vaincre ou mourir ! »"],
  [20, "Les Savoyards vite prirent la fuite, quand ils virent renverser la marmite où ils avaient mis cuire le dîner pour tous ceux qu'ils y avaient amenés."],
  [29, "Un Savoyard, auprès de la Monnaie, fut tué d'un grand coup de marmite qu'une femme lui expédia dessus ; il tomba mort, froid et raide étendu."]
];

/* ---- Cartes de personnages historiques (collection) ------------- */
const CHARACTER_CARDS = {
  1: { name: "Charles-Emmanuel Ier", role: "Duc de Savoie", icon: "👑",
       blurb: "L'ambitieux duc qui rompt le traité de paix et envoie ses espions étudier Genève avant d'y lancer son armée." },
  4: { name: "Mère Royaume", role: "Héroïne de la marmite", icon: "🍲",
       blurb: "Selon la légende, elle renverse sa marmite de soupe bouillante sur un envahisseur depuis sa fenêtre — un geste qui deviendra un symbole genevois." },
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
  { q: "Que faisait Mère Royaume quand elle a repéré l'envahisseur ?", options: ["Elle dormait", "Elle faisait la soupe", "Elle lisait", "Elle priait"], correct: 1 },
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
    photoRetries: {}, muted: false, patoisTranslation: "", quizAnswers: {}
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

/* ============================================================
   OUTILS
   ============================================================ */

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
  const laino = CE_QUE_LAINO_EXCERPT.map(([n, txt]) =>
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
        <summary>🎶 Annexe — « Cé qu'è lainô » (extrait, chant traditionnel)</summary>
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

  generateBtn.addEventListener("click", () => { codenameInput.value = generateCodename(); });

  sobreCheckbox.checked = !!state.sobre;
  document.body.classList.toggle("sobre", !!state.sobre);
  sobreCheckbox.addEventListener("change", () => {
    state.sobre = sobreCheckbox.checked;
    document.body.classList.toggle("sobre", state.sobre);
    persist();
  });

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
  if (box) {
    const words = STEPS.filter((s) => state.completed.includes(s.id)).map((s) => s.fragment);
    box.textContent = words.length ? words.join(" · ") : "— aucun mot recueilli pour l'instant —";
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
    <div class="dossier score-line"><span class="dossier-label">Score :</span> <span id="dossier-score"></span></div>
    <div class="dossier"><span class="dossier-label">Collier de marmites :</span></div>
    <div id="marmite-necklace" class="marmite-necklace"></div>
  `;
  game.insertBefore(box, document.getElementById("step-container"));
  prologueRendered = true;
}

function renderFunFactCard(container, step) {
  const card = document.createElement("div");
  card.className = "fun-fact-card";
  card.innerHTML = `<span class="fun-fact-label">💡 Le saviez-vous ?</span> ${step.funFact}`;
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
      feedback.textContent = `✔ +${BONUS_POINTS} points bonus !`;
      feedback.className = "bonus-feedback ok";
      input.disabled = true; btn.disabled = true; btn.textContent = "✔ Acquis";
      if (!state.bonusCorrect.includes(step.id)) { state.bonusCorrect.push(step.id); persist(); }
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

function attachGpsAndHints(node, section, step) {
  const gpsLink = node.querySelector(".gps-link");
  if (step.gps) {
    gpsLink.href = mapsUrl(step.gps);
    node.querySelector(".gps-label").textContent = "Itinéraire (Google Maps) : " + step.gps.label;

    const lostBtn = document.createElement("button");
    lostBtn.type = "button"; lostBtn.className = "lost-btn"; lostBtn.textContent = "🧭 Je suis perdu";
    const lostStatus = document.createElement("p");
    lostStatus.className = "lost-status";
    gpsLink.insertAdjacentElement("afterend", lostStatus);
    gpsLink.insertAdjacentElement("afterend", lostBtn);
    lostBtn.addEventListener("click", () => {
      if (!("geolocation" in navigator)) { lostStatus.textContent = "Géolocalisation indisponible sur cet appareil."; return; }
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

  const hintBtn = node.querySelector(".hint-btn");
  const hintText = node.querySelector(".hint-text");
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
  markComplete(step.id);
}

/* ---- Rendu d'une transition narrative avant la tâche ------------ */
function speakText(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "fr-FR";
  utter.rate = 0.95;
  window.speechSynthesis.speak(utter);
}

function renderTransition(step, container, onContinue) {
  const box = document.createElement("section");
  box.className = "step transition-card";
  const cipherLine = step.cipher
    ? `<p class="cipher-hint">🔐 Fragment codé (table ${step.cipherTool}) : <span class="cipher-code">${step.cipher}</span> — à déchiffrer avec votre porte-documents si vous êtes curieux.</p>`
    : "";
  const walkMin = walkTimeToStep(step);
  const walkLine = walkMin ? `<p class="walk-time">🚶 ≈ ${walkMin} min à pied jusqu'au prochain repère.</p>` : "";
  const speechSupported = "speechSynthesis" in window;

  box.innerHTML = `
    <div class="step-head"><span class="step-num">SECTEUR ${step.id}/${ALL_STEPS.length}</span></div>
    <p class="transition-text">${step.transition}</p>
    ${speechSupported ? `<button type="button" class="lost-btn speak-btn">🔊 Écouter</button>` : ""}
    ${walkLine}
    ${cipherLine}
    <button type="button" class="validate-btn continue-btn">Continuer →</button>
  `;
  container.appendChild(box);
  box.querySelector(".continue-btn").addEventListener("click", () => {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
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
    : step.answer ? [step.answer, ...(step.altAnswers || [])] : LOCATION_ANSWERS;

  btn.addEventListener("click", () => {
    ensureStarted();
    const given = normalize(input.value);
    if (acceptable.map(normalize).includes(given)) {
      feedback.textContent = "✔ Code validé — secteur suivant débloqué.";
      feedback.className = "feedback ok";
      input.disabled = true; btn.disabled = true;
      onStepSuccess(section, step);
    } else {
      feedback.textContent = "✘ Mauvais code — relisez l'indice de mission.";
      feedback.className = "feedback err";
    }
  });
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") btn.click(); });

  container.appendChild(node);
  input.focus({ preventScroll: true });
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
  refImg.src = step.refPhoto;
  refImg.onerror = () => {
    refImg.replaceWith(Object.assign(document.createElement("div"), {
      className: "photo-placeholder", textContent: "Photo de référence à ajouter : " + step.refPhoto
    }));
  };

  const fileInput = node.querySelector(".photo-input");
  const placeholder = node.querySelector(".photo-placeholder");
  const userImg = node.querySelector(".user-photo img");
  const geoStatus = node.querySelector(".geo-status");
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
  });

  // ---- Effet "AR-like" : vue caméra en direct avec badge superposé ----
  const arToggleBtn = node.querySelector(".ar-toggle-btn");
  const arWrap = node.querySelector(".ar-camera-wrap");
  const arVideo = node.querySelector(".ar-video");
  const arIconOverlay = node.querySelector(".ar-icon-overlay");
  const arCaptureBtn = node.querySelector(".ar-capture-btn");
  const arCancelBtn = node.querySelector(".ar-cancel-btn");
  const arCanvas = node.querySelector(".ar-canvas");
  const arStatus = node.querySelector(".ar-status");
  let arStream = null;

  arIconOverlay.textContent = step.arIcon || "🏺";

  function stopArCamera() {
    if (arStream) { arStream.getTracks().forEach((t) => t.stop()); arStream = null; }
    arWrap.classList.add("hidden");
  }

  if (arToggleBtn) {
    if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      arToggleBtn.disabled = true;
      arToggleBtn.textContent = "📷 Vue en direct indisponible sur cet appareil";
    } else {
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
    }
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
        photoTaken = true;
        const url = URL.createObjectURL(blob);
        userImg.src = url; userImg.classList.remove("hidden"); placeholder.classList.add("hidden");
        geoStatus.textContent = "Comparez votre photo au repère, puis appuyez sur Valider.";
        geoStatus.className = "geo-status";
        stopArCamera();
      }, "image/jpeg", 0.9);
    });
  }

  function checkLocationAndValidate() {
    if (TEST_MODE) {
      geoStatus.textContent = "🧪 Mode test : vérification GPS ignorée.";
      geoStatus.className = "geo-status warn";
      completePhotoStep(); return;
    }
    if (!("geolocation" in navigator)) {
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
    stopArCamera();
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
  node.querySelector(".step-question").textContent = step.question;
  attachGpsAndHints(node, section, step);

  const feedback = node.querySelector(".feedback");
  const grid = node.querySelector(".puzzle-grid");
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

function markComplete(id) {
  if (!state.completed.includes(id)) { state.completed.push(id); persist(); }
  renderProgress();
  renderDossier();
  setTimeout(renderCurrentStep, 900);
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

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch((e) => {
        console.warn("Service worker non enregistré (mode hors-ligne indisponible) :", e);
      });
    });
  }
}

function renderFinalQuiz(el) {
  const box = el.querySelector(".final-quiz");
  if (!box) return;
  box.innerHTML = `<p class="carnet-title">🎓 Petit bilan (facultatif, ne change pas votre score)</p>` +
    FINAL_QUIZ.map((item, qi) => `
      <div class="quiz-item" data-qi="${qi}">
        <p class="quiz-question">${qi + 1}. ${item.q}</p>
        <div class="quiz-options">
          ${item.options.map((opt, oi) => `<button type="button" class="quiz-option" data-oi="${oi}">${opt}</button>`).join("")}
        </div>
      </div>
    `).join("");

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

function showFinal() {
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
