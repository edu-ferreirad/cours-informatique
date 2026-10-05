// SALLE SÉQUENCES — FRANÇAIS 11e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_FRANCAIS_11E_OBJECTS = [
  {
    id: "seq_francais_11_1",
    tier: "court",
    emoji: "🎭",
    label: "Trois procédés dans un poème",
    text: "Après lecture d'un poème, les élèves repèrent une comparaison, une métaphore et un effet de rythme, expliquent ce que chacun produit chez le lecteur, puis comparent avec un poème d'une autre époque.",
    fact: "PER L1 : lecture de textes poétiques. Nommer les procédés n'a de sens que s'ils sont reliés à un effet de lecture.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_francais_11_2",
    tier: "court",
    emoji: "🔗",
    label: "Le paragraphe remis en ordre",
    text: "Les phrases d'un paragraphe argumentatif sont découpées et mélangées ; les élèves les remettent en ordre en justifiant chaque choix par un connecteur logique ou un indice de cohérence.",
    fact: "Reconstruire un texte désordonné rend tangible le rôle des connecteurs dans la cohésion textuelle.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_francais_11_3",
    tier: "moyen",
    emoji: "🎬",
    label: "Roman et adaptation",
    text: "Après la lecture d'un chapitre et le visionnage de la scène correspondante d'une adaptation, les élèves relèvent trois choix de mise en scène et discutent de ce qui est gagné ou perdu.",
    fact: "Comparer deux supports d'un même récit développe l'analyse critique, en lien avec l'éducation aux médias.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_francais_11_4",
    tier: "moyen",
    emoji: "🎤",
    label: "Exposé de trois minutes sur un auteur",
    text: "Chaque élève prépare une fiche à mots-clés, présente un auteur en trois minutes sans lire, et répond à une question de la classe ; un critère unique est évalué à chaque passage.",
    fact: "Limiter la durée et les critères permet de multiplier les prises de parole sans surcharger l'évaluation.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_francais_11_5",
    tier: "long",
    emoji: "🕵️",
    label: "Nouvelle à chute : lire puis écrire",
    text: "Étude de deux nouvelles à chute, repérage des indices qui préparent le dénouement, puis écriture d'une nouvelle dont la chute doit être annoncée par au moins deux indices discrets.",
    fact: "L'écriture guidée par un genre étudié permet d'utiliser activement les procédés observés en lecture.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_francais_11_6",
    tier: "long",
    emoji: "⏱️",
    label: "Texte argumentatif en temps limité",
    text: "En conditions proches de l'évaluation de fin d'année, les élèves rédigent un texte argumentatif en 45 minutes avec une grille connue à l'avance, puis s'auto-évaluent avant la correction.",
    fact: "L'auto-évaluation à partir d'une grille connue prépare aux évaluations de fin de cycle et développe l'autonomie.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqFrancais11ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_FRANCAIS_11E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_FRANCAIS_11E_OBJECTS = MUSEE_SEQ_FRANCAIS_11E_OBJECTS;
window.getSeqFrancais11ObjectsForParcours = getSeqFrancais11ObjectsForParcours;
