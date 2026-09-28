// SALLE SÉQUENCES — MUSIQUE — 1ère année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_MUSIQUE_1_COLLEGE_OBJECTS = [
  { id:"mu1_reconnaissance_instruments", tier:"court", emoji:"🎻", label:"Reconnaître un instrument les yeux fermés",
    text:"Les élèves écoutent plusieurs extraits sonores et doivent identifier l'instrument entendu uniquement à son timbre, avant de vérifier leur réponse et de discuter des indices qui les ont mis sur la piste ou sur une fausse piste.",
    fact:"Reconnaître à l'audition les instruments les plus courants est un objectif explicite de la discipline fondamentale dès la 1ère année.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"mu1_pratique_collective", tier:"moyen", emoji:"🎤", label:"Chanter en canon pour sentir la structure",
    text:"La classe chante un canon simple en plusieurs groupes décalés, puis discute de ce que chacun a dû faire pour rester synchronisé malgré le décalage — une façon concrète de ressentir la structure musicale avant de l'expliquer.",
    fact:"La pratique du chant ou d'un instrument de manière individuelle ou collective est un objectif explicite des aptitudes visées en discipline fondamentale.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
];
function getSeqMusique1CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_MUSIQUE_1_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_MUSIQUE_1_COLLEGE_OBJECTS = MUSEE_SEQ_MUSIQUE_1_COLLEGE_OBJECTS;
window.getSeqMusique1CollegeObjectsForParcours = getSeqMusique1CollegeObjectsForParcours;
