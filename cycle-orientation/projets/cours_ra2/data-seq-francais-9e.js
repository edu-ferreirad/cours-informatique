// SALLE SÉQUENCES — FRANÇAIS 9e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_FRANCAIS_9E_OBJECTS = [
  {
    id: "seq_francais_9_1",
    tier: "court",
    emoji: "🎙️",
    label: "Qui parle, à qui, dans quelle situation ?",
    text: "Les élèves reçoivent quatre phrases isolées (« Tu viens ? », « C'est fini. ») et imaginent pour chacune deux situations d'énonciation différentes — qui parle, à qui, où, quand — avant de comparer leurs scénarios.",
    fact: "PER Langues (L1) : analyser la situation d'énonciation. Faire varier le contexte montre qu'une phrase seule ne suffit jamais à fixer un sens.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_francais_9_2",
    tier: "court",
    emoji: "✂️",
    label: "Du dialogue au discours rapporté",
    text: "À partir d'un dialogue de bande dessinée, chaque élève le réécrit en récit avec discours rapporté indirect et surligne tout ce qui change (pronoms, temps, ponctuation).",
    fact: "Le passage au discours rapporté rend visibles les transformations grammaticales, plus efficacement qu'une règle apprise par cœur.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_francais_9_3",
    tier: "moyen",
    emoji: "📖",
    label: "Trois débuts de roman, une situation initiale",
    text: "Après lecture de trois débuts de romans jeunesse, la classe relève ce qui installe personnage, lieu et temps, puis chacun rédige sa propre situation initiale en cinq lignes avec une contrainte de lieu imposée.",
    fact: "Lire pour écrire : s'appuyer sur des modèles authentiques est la démarche des séquences didactiques en production de textes narratifs.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_francais_9_4",
    tier: "moyen",
    emoji: "🔎",
    label: "Chasse aux déterminants",
    text: "Dans un court texte, les élèves entourent tous les déterminants puis les remplacent (le / un / mon / ce) pour observer comment le sens et la référence du nom changent.",
    fact: "La manipulation de la langue (remplacer, supprimer, déplacer) est une démarche centrale de l'enseignement de la grammaire au cycle 3.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_francais_9_5",
    tier: "long",
    emoji: "✍️",
    label: "Le récit d'aventure en trois temps",
    text: "Séquence complète : lecture d'un modèle, plan du récit, premier jet, puis relecture par un camarade avec une grille de cinq critères (situation initiale, péripéties, dénouement, temps verbaux, orthographe).",
    fact: "Écrire, relire, réécrire : la révision guidée par une grille est ce qui fait progresser l'écriture, plus que la simple correction finale de l'enseignant.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_francais_9_6",
    tier: "long",
    emoji: "🗣️",
    label: "Lecture à voix haute d'un extrait",
    text: "Chaque élève prépare la lecture d'un extrait de roman en marquant pauses et intonations, le lit devant la classe, puis reçoit un retour sur un seul critère choisi à l'avance.",
    fact: "La lecture à voix haute travaille la compréhension fine du texte autant que l'expression orale.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqFrancais9ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_FRANCAIS_9E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_FRANCAIS_9E_OBJECTS = MUSEE_SEQ_FRANCAIS_9E_OBJECTS;
window.getSeqFrancais9ObjectsForParcours = getSeqFrancais9ObjectsForParcours;
