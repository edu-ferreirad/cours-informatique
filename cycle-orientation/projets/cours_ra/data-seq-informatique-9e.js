// SALLE SÉQUENCES — INFORMATIQUE 9e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_INFORMATIQUE_9E_OBJECTS = [
  {
    id: "seq_informatique_9_1",
    tier: "court",
    emoji: "🍳",
    label: "L'algorithme, une recette",
    text: "Les élèves écrivent une recette précise (faire un sandwich) qu'un camarade « robot » exécute à la lettre, révélant ambiguïtés et oublis.",
    fact: "PER MITIC : notion d'algorithme sans ordinateur (informatique débranchée).",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_informatique_9_2",
    tier: "court",
    emoji: "🧭",
    label: "Programmer un robot sur quadrillage",
    text: "Sur un quadrillage papier, les élèves écrivent une suite d'instructions pour guider un camarade vers un objectif, puis corrigent leurs erreurs.",
    fact: "Déboguer un programme papier fait comprendre la rigueur des instructions.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_informatique_9_3",
    tier: "moyen",
    emoji: "🔢",
    label: "Mon prénom en binaire",
    text: "Avec un tableau de codage, les élèves traduisent leur prénom en suite de 0 et de 1, puis échangent pour se faire décoder.",
    fact: "Coder l'information est l'un des concepts de base de la science informatique.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_informatique_9_4",
    tier: "moyen",
    emoji: "🧩",
    label: "Les composants d'un ordinateur",
    text: "Sur des photos de composants, les élèves identifient processeur, mémoire, disque et carte mère et associent chacun à sa fonction.",
    fact: "Comprendre la machine évite de la voir comme une boîte magique.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_informatique_9_5",
    tier: "long",
    emoji: "🎬",
    label: "Une animation avec une boucle",
    text: "Avec un environnement à blocs, les élèves programment une courte animation qui utilise une boucle, puis la présentent.",
    fact: "La boucle introduit la répétition sans copier-coller.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_informatique_9_6",
    tier: "long",
    emoji: "🔐",
    label: "Créer un bon mot de passe",
    text: "Les élèves testent la robustesse de mots de passe fictifs avec un outil pédagogique et rédigent trois règles de sécurité.",
    fact: "La sécurité numérique fait partie de l'éducation au numérique du cycle 3.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqInformatique9ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_INFORMATIQUE_9E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_INFORMATIQUE_9E_OBJECTS = MUSEE_SEQ_INFORMATIQUE_9E_OBJECTS;
window.getSeqInformatique9ObjectsForParcours = getSeqInformatique9ObjectsForParcours;
