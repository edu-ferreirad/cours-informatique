// SALLE SÉQUENCES — CHIMIE — 2e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_CHIMIE_2_COLLEGE_OBJECTS = [
  { id:"ch2_equilibrer_reaction", tier:"court", emoji:"⚗️", label:"Équilibrer une réaction par tâtonnement contrôlé",
    text:"Face à une équation chimique non équilibrée, les élèves doivent trouver les bons coefficients par essais successifs justifiés, en vérifiant à chaque étape la conservation du nombre d'atomes de chaque élément.",
    fact:"Formaliser et équilibrer des réactions chimiques simples est un objectif explicite de fin de discipline fondamentale, avec une maîtrise des aspects quantitatifs associés.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"ch2_rapport_experience_ph", tier:"moyen", emoji:"📝", label:"Rapport d'expérience : mesurer un pH",
    text:"Après une manipulation mesurant le pH de plusieurs solutions du quotidien, les élèves rédigent un rapport complet suivant une structure imposée, avant un échange de rapports pour une relecture critique croisée.",
    fact:"La rédaction de rapports d'expérience conclut la discipline fondamentale de chimie, dernière compétence commune à tous les élèves avant que la discipline ne devienne optionnelle.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
];
function getSeqChimie2CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_CHIMIE_2_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_CHIMIE_2_COLLEGE_OBJECTS = MUSEE_SEQ_CHIMIE_2_COLLEGE_OBJECTS;
window.getSeqChimie2CollegeObjectsForParcours = getSeqChimie2CollegeObjectsForParcours;
