// SALLE SÉQUENCES — INFORMATIQUE 11e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_INFORMATIQUE_11E_OBJECTS = [
  {
    id: "seq_informatique_11_1",
    tier: "court",
    emoji: "🐍",
    label: "Mon premier programme Python",
    text: "Les élèves affichent un message, demandent le prénom à l'utilisateur et le réutilisent dans une phrase, en découvrant variables et affichage.",
    fact: "PER MITIC : programmer est une compétence du cycle 3.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_informatique_11_2",
    tier: "court",
    emoji: "🔀",
    label: "Quiz de calcul mental",
    text: "Les élèves programment un quiz avec une condition pour dire si la réponse est correcte, puis testent avec plusieurs valeurs.",
    fact: "La condition introduit la prise de décision d'un programme.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_informatique_11_3",
    tier: "moyen",
    emoji: "🔁",
    label: "La table de multiplication",
    text: "Avec une boucle, les élèves affichent une table de multiplication choisie, puis modifient le programme pour changer de table.",
    fact: "La boucle évite la répétition et montre l'intérêt de l'automatisation.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_informatique_11_4",
    tier: "moyen",
    emoji: "🐢",
    label: "Dessiner un polygone avec la tortue",
    text: "À l'aide d'une bibliothèque de tortue graphique, les élèves dessinent un carré puis un polygone quelconque avec une boucle.",
    fact: "La visualisation immédiate motive et rend l'erreur lisible.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_informatique_11_5",
    tier: "long",
    emoji: "🎯",
    label: "Le jeu de devinette",
    text: "En binôme, les élèves programment un jeu où l'ordinateur choisit un nombre et donne des indices « plus grand / plus petit ».",
    fact: "Un mini-projet combine variables, conditions et boucles.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_informatique_11_6",
    tier: "long",
    emoji: "🐞",
    label: "Déboguer à deux",
    text: "Chaque binôme reçoit un programme contenant trois erreurs, les repère en le lisant à voix haute, puis les corrige.",
    fact: "La lecture à voix haute est une méthode de débogage efficace.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqInformatique11ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_INFORMATIQUE_11E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_INFORMATIQUE_11E_OBJECTS = MUSEE_SEQ_INFORMATIQUE_11E_OBJECTS;
window.getSeqInformatique11ObjectsForParcours = getSeqInformatique11ObjectsForParcours;
