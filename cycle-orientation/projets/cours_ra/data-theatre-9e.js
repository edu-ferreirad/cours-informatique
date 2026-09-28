// ============================================================================
// SALLE THÉÂTRE — EXPRESSION ORALE 9e — données du musée
// Textes reformulés à partir de "Expression orale — Parcours de l'élève 9e"
// (SEESE, éd. 2015) — aucune phrase copiée du document.
// Mêmes conventions que le Musée de l'Antiquité (voir data-rome.js).
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_THEATRE_9E_OBJECTS = [
  {
    id: "relaxation_trac",
    tier: "court",
    emoji: "🧘",
    label: "Gérer le trac",
    text: "Allongé au sol, une main posée sur le ventre, on inspire lentement par le nez en sentant l'abdomen se soulever, puis on relâche l'air par la bouche. Cet exercice de décontraction sert souvent d'échauffement avant de prendre la parole.",
    fact: "Une astuce d'entraîneur théâtral consiste à imaginer une fleur entre les sourcils et à \"en sentir l'odeur\" en inspirant : cela aide à faire entrer l'air plus profondément par le nez.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "respiration_voix",
    tier: "court",
    emoji: "🌬️",
    label: "Poser sa voix",
    text: "Debout, pieds bien ancrés au sol, épaules basses, on porte son attention sur le trajet du souffle : narines, gorge, poitrine, puis ventre. Une fois le corps centré, on amplifie l'expiration en un son continu et murmuré.",
    fact: "Cette technique de \"colonne d'air\" ressentie de la tête aux pieds est directement empruntée à l'entraînement des comédiens professionnels avant d'entrer en scène.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "articulation_virelangues",
    tier: "court",
    emoji: "👄",
    label: "Grimaces et virelangues",
    text: "Avant d'articuler, on échauffe les muscles du visage par toutes sortes de grimaces (bâiller, tirer la langue, mâcher dans le vide). Vient ensuite une série de virelangues à répéter en variant le volume, le rythme et la vitesse.",
    fact: "\"Les chausettes de l'archiduchesse\" ou \"un chasseur sachant chasser\" existent dans presque toutes les langues : chaque culture a ses propres pièges de prononciation.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "expression_corporelle",
    tier: "court",
    emoji: "🤸",
    label: "Le corps qui raconte",
    text: "Un élève choisit une action simple (cueillir une fleur, servir au tennis...) et la rejoue de plus en plus lentement, jusqu'au ralenti complet, en prenant conscience de chaque partie du corps. Le visage et le regard viennent ensuite enrichir le geste.",
    fact: "Ralentir un geste à l'extrême oblige le cerveau à \"redécouvrir\" un mouvement pourtant automatique — c'est une technique utilisée aussi bien au théâtre qu'en danse contemporaine.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "masque_neutre",
    tier: "moyen",
    emoji: "🎭",
    label: "Le masque neutre",
    text: "Assis, un élève met un masque neutre : son visage devient inexpressif, et chaque geste, même minuscule, doit alors porter le sens à sa place. Il apprend à toujours orienter la face du masque vers le public.",
    fact: "L'\"œil\" du masque neutre se situe au centre du front, comme un cyclope — un symbole d'une attention totale, tournée vers l'extérieur plutôt que vers soi.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "ecoute_haiku",
    tier: "moyen",
    emoji: "👂",
    label: "Le haïku qui circule",
    text: "Un élève lit un très court poème (haïku). Ses camarades tentent ensuite, chacun leur tour, de le reconstituer de mémoire — comme un puzzle collectif — jusqu'à ce que le sens et le rythme du texte émergent à nouveau.",
    fact: "Sans s'en rendre compte, les élèves finissent souvent par mémoriser le petit texte par cœur simplement en participant à ce jeu d'écoute.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "imagination_langage",
    tier: "moyen",
    emoji: "🔗",
    label: "La chaîne des mots",
    text: "En cercle, un élève lance un mot ; son voisin doit immédiatement répondre par un mot que ce premier mot lui évoque, sans temps mort, sans répétition et sans hésitation (\"euh\"). Une variante se joue à deux, dos à dos, en imaginant un appel téléphonique imprévu.",
    fact: "La contrainte des trois secondes pour répondre oblige à couper le \"filtre\" qui freine normalement la prise de parole spontanée.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "prise_de_parole",
    tier: "moyen",
    emoji: "🎙️",
    label: "Le journal de 20 heures",
    text: "Assis bien droit comme un présentateur du journal télévisé, l'élève se présente devant des camarades-journalistes : nom, âge, centres d'intérêt. Ceux-ci doivent se lever pour demander la parole, la formuler avec soin, et l'élève reformule chaque question avant d'y répondre.",
    fact: "Le vouvoiement et l'interdiction de répondre \"je ne sais pas\" obligent l'élève à toujours reformuler et développer sa pensée, plutôt que de se dérober.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "dialogue_valentin",
    tier: "long",
    emoji: "💬",
    label: "Une conversation absurde",
    text: "Deux élèves jouent un dialogue comique de Karl Valentin, en respectant une contrainte précise : laisser deux secondes de silence entre chaque réplique, occupées par une action non verbale (soupirer, lacer sa chaussure, essuyer ses lunettes...).",
    fact: "Karl Valentin, humoriste munichois du début du XXe siècle, a fortement influencé Bertolt Brecht et le théâtre de l'absurde par ses dialogues volontairement circulaires.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "narration_description",
    tier: "long",
    emoji: "📖",
    label: "Décrire, puis raconter",
    text: "Face à un objet choisi, l'élève en fait d'abord une description précise (forme, couleur, matière), puis invente une histoire dont il devient le héros. Une variante consiste à imaginer ce qui se passe derrière une porte fermée ou un paravent.",
    fact: "Distinguer clairement décrire (ce que l'on voit) et raconter (ce qui se passe dans le temps) est l'une des compétences les plus travaillées de toute l'année en expression orale.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "lecture_publique",
    tier: "long",
    emoji: "📢",
    label: "Lire à voix haute, pour de vrai",
    text: "Par groupes de trois, les élèves repèrent ensemble la ponctuation d'un texte, puis chacun lit à voix haute la partie qui lui est confiée, phrase après phrase, en gardant le regard tourné vers le public plutôt que collé à la feuille.",
    fact: "Repérer la ponctuation avant de lire à voix haute permet d'anticiper les pauses et les intonations — un texte mal ponctué à l'oral devient souvent incompréhensible, même bien articulé.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "interpretation_moliere",
    tier: "long",
    emoji: "🎪",
    label: "Jouer une scène de Molière",
    text: "Après un travail de mémorisation, les élèves interprètent un extrait de Molière (L'École des femmes, Le Médecin malgré lui, Le Bourgeois gentilhomme) en maîtrisant le volume, le rythme, le regard et les intentions du personnage.",
    fact: "Molière était lui-même acteur et jouait souvent les rôles comiques de ses propres pièces sur scène, devant le public de la cour de Louis XIV.",
    anchor: { distance: 1.6, angle: 280, height: DESK_H }
  },
  {
    id: "improvisation",
    tier: "long",
    emoji: "✨",
    label: "Improviser, sans filet",
    text: "Avant d'entrer en scène, on imagine son personnage, une action et un but. Une fois en jeu, la règle d'or est simple : accepter toutes les propositions du partenaire, écouter, réagir, et ne jamais s'arrêter parce qu'on se trouve \"nul\".",
    fact: "Au théâtre d'improvisation, refuser systématiquement les propositions d'un partenaire de jeu (dire \"non\" à tout) est considéré comme la pire erreur possible : cela bloque toute l'histoire.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getTheatre9eObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_THEATRE_9E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_THEATRE_9E_OBJECTS = MUSEE_THEATRE_9E_OBJECTS;
window.getTheatre9eObjectsForParcours = getTheatre9eObjectsForParcours;
