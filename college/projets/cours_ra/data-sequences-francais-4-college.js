// SALLE SÉQUENCES — FRANÇAIS — 4e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_FRANCAIS_4_COLLEGE_OBJECTS = [
  { id:"fr4_synthese_annuelle_thematique", tier:"court", emoji:"🧵", label:"Synthèse : le fil rouge des quatre années",
    text:"L'élève reprend trois œuvres étudiées au fil du cursus et doit construire, seul, un fil thématique commun (par exemple la figure de l'exil, du pouvoir ou de l'amour impossible), argumenté par un exemple précis tiré de chaque œuvre.",
    fact:"Ce travail de mise en relation sur quatre ans mobilise directement l'exigence du plan d'études : ne pas juxtaposer des connaissances isolées mais construire une compréhension globale et personnelle de la littérature étudiée.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"fr4_oral_blanc_maturite", tier:"moyen", emoji:"🎤", label:"Préparation à l'oral de maturité : la question surprise",
    text:"En condition proche de l'examen, l'élève tire au sort un extrait d'une œuvre du programme et dispose de 20 minutes de préparation avant un oral de 10 minutes devant deux camarades qui jouent le rôle de jury et notent selon une grille officielle simplifiée.",
    fact:"S'entraîner face à un vrai jury simulé, avec grille de notation et temps chronométré identiques à l'examen réel, réduit l'écart entre l'entraînement scolaire habituel et la pression spécifique du jour de la maturité.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
  { id:"fr4_atelier_dissertation_chronometree", tier:"long", emoji:"⏱️", label:"Dissertation chronométrée en conditions d'examen",
    text:"Une dissertation complète est rédigée en temps limité et sans documents, puis échangée entre élèves pour une première relecture croisée avant la correction de l'enseignant — chaque relecteur doit repérer un point fort et une faiblesse précise, pas une impression générale.",
    fact:"La double correction — un pair, puis l'enseignant — habitue l'élève à recevoir une critique construite avant le jour de l'examen, où aucune relecture ne sera possible avant la remise finale.",
    anchor:{distance:4.4, angle:185, height:DESK_H} },
];
function getSeqFrancais4CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_FRANCAIS_4_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_FRANCAIS_4_COLLEGE_OBJECTS = MUSEE_SEQ_FRANCAIS_4_COLLEGE_OBJECTS;
window.getSeqFrancais4CollegeObjectsForParcours = getSeqFrancais4CollegeObjectsForParcours;
