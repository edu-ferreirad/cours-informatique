// SALLE OSP OSP MUSIQUE — 1re année (découverte) — paliers court/moyen/long
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_MUSIQUE_ECG_1_OBJECTS = [
  { id:"musique_1re_1", tier:"court", emoji:"👂", label:"Découverte : reconnaître les instruments à l'écoute",
    text:"Les élèves écoutent trois extraits et notent les instruments et l'émotion perçue avant une mise en commun.",
    fact:"L'écoute active est une base de l'OSP Musique, qui associe pratique instrumentale, histoire et solfège.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"musique_1re_2", tier:"moyen", emoji:"🎼", label:"Découverte : un mini-test de solfège en autonomie",
    text:"Les élèves déchiffrent un court rythme écrit et tentent de le reproduire, puis évaluent avec l'enseignant ce qu'ils maîtrisent et ce qu'ils doivent travailler.",
    fact:"Le solfège figure dans les disciplines de l'OSP Musique ; se situer dès la 1re année aide à décider si l'option convient.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"musique_1re_3", tier:"long", emoji:"🎹", label:"Découverte : l'exigence de la pratique instrumentale",
    text:"Les élèves planifient une semaine de pratique instrumentale personnelle et notent la durée réelle, avant de comparer avec la charge attendue dans l'OSP.",
    fact:"La grille horaire mentionne une pratique instrumentale hors les murs en cours privé ; tester la régularité qu'elle demande est un bon indicateur d'orientation.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getMusique1EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_MUSIQUE_ECG_1_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_MUSIQUE_ECG_1_OBJECTS = MUSEE_MUSIQUE_ECG_1_OBJECTS;
window.getMusique1EcgObjectsForParcours = getMusique1EcgObjectsForParcours;
