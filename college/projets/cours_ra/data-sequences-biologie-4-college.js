// SALLE SÉQUENCES — BIOLOGIE — 4e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_BIOLOGIE_4_COLLEGE_OBJECTS = [
  { id:"bio4_debat_bioethique_argumente", tier:"court", emoji:"⚖️", label:"OS uniquement — Bioéthique : débat argumenté encadré",
    text:"Sur un dilemme bioéthique réel et actuel (par exemple un enjeu lié aux biotechnologies), les élèves de l'option préparent un dossier de sources scientifiques et éthiques contradictoires avant un débat structuré où chaque argument doit être sourcé précisément.",
    fact:"Le plan d'études relie explicitement la biologie à la philosophie par la bioéthique ; ce débat en fin de cursus mobilise à la fois la rigueur scientifique et la réflexion éthique développées séparément au fil des quatre années.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"bio4_arbre_evolution_reconstruction", tier:"moyen", emoji:"🌳", label:"OS uniquement — Évolution : reconstruire un arbre phylogénétique",
    text:"À partir d'un tableau de caractères communs et différents entre plusieurs espèces, les élèves de l'option reconstruisent eux-mêmes un arbre phylogénétique plausible avant de le comparer à l'arbre scientifiquement établi et d'expliquer les éventuels écarts.",
    fact:"Cette reconstruction active met en pratique la connaissance en matière de génétique et d'évolution exigée par le plan d'études, en évitant que l'arbre de l'évolution ne soit reçu comme une simple image à mémoriser.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
  { id:"bio4_travail_personnel_labo", tier:"long", emoji:"🔭", label:"OS uniquement — Amorcer un travail personnel encadré",
    text:"En vue du travail de maturité, les élèves de l'option biologie-chimie amorcent seuls une petite recherche expérimentale ou documentaire sur une question qu'ils ont eux-mêmes formulée, avec un point d'étape encadré par l'enseignant toutes les deux semaines.",
    fact:"Ce format encadré prépare directement à l'autonomie exigée par un futur travail de maturité en lien avec les sciences expérimentales, en gardant un filet de sécurité pédagogique régulier plutôt qu'une autonomie totale et déstabilisante d'un coup.",
    anchor:{distance:4.4, angle:185, height:DESK_H} },
];
function getSeqBiologie4CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_BIOLOGIE_4_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_BIOLOGIE_4_COLLEGE_OBJECTS = MUSEE_SEQ_BIOLOGIE_4_COLLEGE_OBJECTS;
window.getSeqBiologie4CollegeObjectsForParcours = getSeqBiologie4CollegeObjectsForParcours;
