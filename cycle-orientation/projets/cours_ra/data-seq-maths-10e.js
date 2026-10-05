// SALLE SÉQUENCES — MATHÉMATIQUES 10e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_MATHS_10E_OBJECTS = [
  {
    id: "seq_maths_10_1",
    tier: "court",
    emoji: "⚖️",
    label: "L'équation comme balance",
    text: "Sur une balance dessinée avec des inconnues et des masses, les élèves cherchent la valeur de x en gardant la balance équilibrée, puis traduisent chaque geste en écriture d'équation.",
    fact: "PER MSN : algèbre. La métaphore de la balance ancre la règle « faire la même chose des deux côtés ».",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_maths_10_2",
    tier: "court",
    emoji: "🍕",
    label: "Comparer 3/4 et 5/8 avec des bandes",
    text: "Avec des bandes de papier pliées, les élèves comparent des fractions, cherchent un dénominateur commun et justifient leur résultat par un dessin avant tout calcul.",
    fact: "Passer par le dessin donne du sens à la mise au même dénominateur.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_maths_10_3",
    tier: "moyen",
    emoji: "📈",
    label: "Une marche, un graphique, une formule",
    text: "Les élèves mesurent la distance parcourue lors d'une marche à vitesse constante, la représentent dans un tableau, un graphique puis une formule, et passent de l'un à l'autre.",
    fact: "Passer d'une représentation à l'autre est l'enjeu central de l'étude des fonctions au cycle 3.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_maths_10_4",
    tier: "moyen",
    emoji: "📦",
    label: "Patron et volume d'un prisme",
    text: "Chaque élève construit un prisme en carton à partir d'un patron, calcule son volume, puis vérifie en le remplissant de petits cubes.",
    fact: "Manipuler avant de calculer relie la formule du volume à un vrai remplissage.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_maths_10_5",
    tier: "long",
    emoji: "💶",
    label: "Budget d'une sortie de classe",
    text: "En groupes, les élèves construisent le budget d'une sortie (transport, repas, entrées) dans un tableur, calculent des pourcentages de réduction et présentent leur meilleur choix.",
    fact: "Une tâche complexe mobilise plusieurs notions en situation, avec un enjeu de décision.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_maths_10_6",
    tier: "long",
    emoji: "🎲",
    label: "Cent lancers contre la théorie",
    text: "Les élèves lancent un dé cent fois, comparent les fréquences observées aux probabilités théoriques et expliquent les écarts.",
    fact: "La comparaison expérience/théorie prépare à l'idée de loi des grands nombres.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqMaths10ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_MATHS_10E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_MATHS_10E_OBJECTS = MUSEE_SEQ_MATHS_10E_OBJECTS;
window.getSeqMaths10ObjectsForParcours = getSeqMaths10ObjectsForParcours;
