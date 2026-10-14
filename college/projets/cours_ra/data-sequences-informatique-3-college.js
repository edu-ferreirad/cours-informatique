// SALLE SÉQUENCES — INFORMATIQUE — 3e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_INFORMATIQUE_3_COLLEGE_OBJECTS = [
  { id:"informatique_3_1", tier:"court", emoji:"ℹ️", label:"Étape 1 — Découvre le format spécial de cette année",
    text:"En 3e année, l'informatique se fait sous forme d'une semaine décloisonnée de culture numérique. Note dans ton cahier ce que cela signifie concrètement pour ton emploi du temps cette semaine-là.",
    fact:"Toutes les disciplines participent à cette semaine avec une approche interdisciplinaire, pas un cours isolé.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"informatique_3_2", tier:"court", emoji:"🕵️", label:"Étape 2 — Enquête sur une fausse information",
    text:"En groupe, vérifie l'authenticité d'une information douteuse trouvée en ligne, en utilisant la recherche d'image inversée et la vérification de la source. Présente ton enquête à la classe.",
    fact:"L'usage responsable des technologies numériques passe par des méthodes concrètes de vérification, pas seulement par la méfiance.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"informatique_3_3", tier:"court", emoji:"🌍", label:"Étape 3 — Calcule l'empreinte de tes usages numériques",
    text:"Estime, à l'aide des données fournies, l'impact environnemental de tes propres habitudes numériques sur une semaine type.",
    fact:"Partir de tes propres habitudes rend ce sujet transversal immédiatement concret.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"informatique_3_4", tier:"moyen", emoji:"🤖", label:"Étape 4 — Teste les limites d'une intelligence artificielle",
    text:"Teste un outil d'intelligence artificielle sur des tâches précises et note systématiquement où il se trompe ou produit un résultat biaisé.",
    fact:"Tester activement, plutôt que d'écouter une présentation théorique, développe un usage réfléchi de l'IA.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"informatique_3_5", tier:"moyen", emoji:"💡", label:"Étape 5 — Identifie des pistes de réduction",
    text:"À partir de ton estimation de l'étape 3, identifie avec ton groupe deux pistes concrètes pour réduire ton empreinte numérique.",
    fact:"Passer du constat à l'action est l'objectif final de ce travail sur l'empreinte numérique.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"informatique_3_6", tier:"long", emoji:"🎨", label:"Étape 6 — Prépare ta restitution interdisciplinaire",
    text:"En groupe, prépare une production courte (affiche, mini-diaporama) combinant ta discipline principale et un enjeu numérique traité cette semaine.",
    fact:"Combiner une discipline classique et un enjeu numérique est l'esprit même de cette semaine décloisonnée.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"informatique_3_7", tier:"long", emoji:"🎤", label:"Étape 7 — Présente ta production devant plusieurs classes",
    text:"Présente ta production de l'étape 6 devant plusieurs classes réunies, en expliquant le lien entre ta discipline et l'enjeu numérique choisi.",
    fact:"Présenter devant plusieurs classes est la meilleure façon de vérifier que ton lien est vraiment compris de tous.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqInformatique3CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_INFORMATIQUE_3_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_INFORMATIQUE_3_COLLEGE_OBJECTS=MUSEE_SEQ_INFORMATIQUE_3_COLLEGE_OBJECTS;
window.getSeqInformatique3CollegeObjectsForParcours=getSeqInformatique3CollegeObjectsForParcours;
