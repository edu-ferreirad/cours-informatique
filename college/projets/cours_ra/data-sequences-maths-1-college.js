// SALLE SÉQUENCES — MATHÉMATIQUES — 1ère année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_MATHS_1_COLLEGE_OBJECTS = [
  { id:"ma1_boite_a_outils_algebre", tier:"court", emoji:"🧰", label:"Algèbre : construire sa « boîte à outils »",
    text:"Après chaque nouvelle technique de calcul littéral, l'élève l'ajoute sous forme de fiche courte (méthode + un exemple + un piège fréquent) dans un classeur personnel consulté librement lors des exercices — jamais lors des évaluations.",
    fact:"Le plan d'études parle explicitement d'organiser les connaissances en une « boîte à outils » dans laquelle on sait puiser à bon escient ; rendre cette métaphore concrète et manipulable aide les élèves qui peinent à mémoriser une règle sans repère visuel.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"ma1_va_et_vient_graphique", tier:"moyen", emoji:"📈", label:"Fonctions : le jeu du va-et-vient graphique",
    text:"Par binômes, un élève décrit oralement un graphique de fonction (croissance, point d'intersection, signe) sans le montrer ; son camarade doit le dessiner uniquement à partir de la description avant de comparer les deux versions.",
    fact:"Ce va-et-vient forcé entre langage et graphique correspond exactement à l'objectif du programme de 1ère : savoir passer de la description algébrique à la lecture graphique, et inversement, sans dépendre uniquement du support visuel.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"ma1_demonstration_hypotheses_modifiees", tier:"long", emoji:"📏", label:"Géométrie : que se passe-t-il si on change une hypothèse ?",
    text:"Après une démonstration classique, l'enseignant modifie une seule hypothèse de départ (un angle, une longueur) et les élèves doivent prédire puis vérifier si la conclusion reste vraie, devient fausse, ou reste indéterminée.",
    fact:"Le plan d'études insiste sur la capacité à distinguer hypothèses et conclusions et à envisager les conséquences d'une modification des hypothèses — un réflexe que la seule mémorisation d'une démonstration ne développe pas.",
    anchor:{distance:1.4, angle:160, height:DESK_H} },
];
function getSeqMaths1CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_MATHS_1_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_MATHS_1_COLLEGE_OBJECTS = MUSEE_SEQ_MATHS_1_COLLEGE_OBJECTS;
window.getSeqMaths1CollegeObjectsForParcours = getSeqMaths1CollegeObjectsForParcours;
