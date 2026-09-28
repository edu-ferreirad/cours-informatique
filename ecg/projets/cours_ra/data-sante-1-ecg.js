// SALLE OSP OSP SANTÉ — 1re année (découverte) — paliers court/moyen/long
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_SANTE_ECG_1_OBJECTS = [
  { id:"sante_1re_1", tier:"court", emoji:"🩺", label:"Découverte : une matinée dans la peau d'un soignant",
    text:"Les élèves de 1re année reçoivent le programme fictif d'une matinée de soignant (accueil, prise de constantes, transmissions) et classent chaque tâche selon la compétence qu'elle demande : relationnelle, scientifique ou organisationnelle.",
    fact:"En 1re année le tronc commun est identique pour tous : cette activité aide à sentir si les compétences de l'OSP Santé (biologie, chimie, physique, psychologie) correspondent à ce qui vous attire.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"sante_1re_2", tier:"moyen", emoji:"🎤", label:"Découverte : préparer les questions à un professionnel invité",
    text:"Avant la venue d'un professionnel de la santé, chaque élève rédige deux questions sur le quotidien réel du métier (horaires, difficultés, formation) et les hiérarchise avec un camarade avant la rencontre.",
    fact:"Préparer ses questions à l'avance évite les rencontres d'orientation où l'on repart avec des généralités, et sert la démarche de construction progressive du projet de formation.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"sante_1re_3", tier:"long", emoji:"📋", label:"Découverte : comparer trois filières santé post-ECG",
    text:"À partir de la brochure ECG, les élèves comparent trois filières santé (par exemple infirmier, technicien en radiologie, ergothérapeute) selon la voie d'accès, la durée et les prérequis, et présentent leur comparaison en deux minutes.",
    fact:"La brochure distingue les filières accessibles avec le certificat (écoles supérieures) de celles qui exigent une maturité spécialisée ; les comparer aide à choisir l'OSP en connaissance de cause.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getSante1EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_SANTE_ECG_1_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_SANTE_ECG_1_OBJECTS = MUSEE_SANTE_ECG_1_OBJECTS;
window.getSante1EcgObjectsForParcours = getSante1EcgObjectsForParcours;
