// SALLE SÉQUENCES — MATHÉMATIQUES — 3e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_MATHS_3_COLLEGE_OBJECTS = [
  { id:"ma3_derivee_sens_physique", tier:"court", emoji:"🚗", label:"Analyse : la dérivée comme vitesse instantanée",
    text:"À partir d'un graphique de position d'une voiture en fonction du temps, les élèves calculent d'abord des vitesses moyennes sur des intervalles de plus en plus courts, jusqu'à percevoir intuitivement la notion de limite, avant que la dérivée ne soit formalisée.",
    fact:"Le plan d'études demande explicitement de caractériser les variations d'une grandeur à l'aide du taux de variation puis de sa limite ; partir d'un exemple physique concret évite que la dérivée ne reste un symbole abstrait sans signification.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"ma3_vecteurs_probleme_geometrie", tier:"moyen", emoji:"➡️", label:"Géométrie vectorielle : résoudre sans mesurer",
    text:"Les élèves reçoivent un problème de géométrie dans l'espace (alignement, parallélisme) à résoudre uniquement par le calcul vectoriel, sans jamais mesurer ou dessiner à l'échelle — la validité de la solution doit reposer entièrement sur le raisonnement.",
    fact:"Interdire volontairement la mesure directe force les élèves à mobiliser la notion de vecteur comme véritable outil de démonstration, et pas seulement comme une notation pour décrire un dessin déjà fait.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
  { id:"ma3_contre_exemple_graphique", tier:"long", emoji:"🧭", label:"Analyse : chasser le contre-exemple",
    text:"Face à une affirmation générale sur les fonctions (« si la dérivée est positive, la fonction croît toujours »), les élèves doivent chercher un contre-exemple graphique ou, s'ils n'en trouvent pas, expliquer pourquoi l'affirmation résiste à leurs essais.",
    fact:"Le plan d'études recommande d'exploiter les représentations graphiques pour chercher des exemples ou des contre-exemples aux résultats théoriques — un exercice qui muscle l'esprit critique autant que le calcul.",
    anchor:{distance:2.3, angle:340, height:WALL_H} },
];
function getSeqMaths3CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_MATHS_3_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_MATHS_3_COLLEGE_OBJECTS = MUSEE_SEQ_MATHS_3_COLLEGE_OBJECTS;
window.getSeqMaths3CollegeObjectsForParcours = getSeqMaths3CollegeObjectsForParcours;
