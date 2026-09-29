// SALLE OSP PÉDAGOGIE — 3e année — le texte s'adresse à l'élève, étape par étape
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_PEDAGOGIE_3_ECG_OBJECTS = [
  { id:"pedagogie_3_1", tier:"court", emoji:"🧠", label:"Étape 1 — Distingue deux styles d'apprentissage",
    text:"Lis deux courtes descriptions d'élèves qui apprennent différemment (l'un par le mouvement, l'autre par l'image) et propose pour chacun une activité adaptée sur une même notion.",
    fact:"Adapter une même notion à des styles d'apprentissage différents est une compétence pédagogique avancée.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"pedagogie_3_2", tier:"court", emoji:"📊", label:"Étape 2 — Lis une grille d'évaluation",
    text:"Observe une grille d'évaluation simplifiée d'un travail d'élève et détermine, à partir des critères, ce que l'élève a réussi et ce qu'il doit encore travailler.",
    fact:"Une grille d'évaluation doit permettre à n'importe qui de comprendre les points forts et les points faibles, pas seulement l'enseignant qui l'a écrite.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"pedagogie_3_3", tier:"court", emoji:"🗣️", label:"Étape 3 — Reformule une consigne mal comprise",
    text:"Voici une consigne qu'un élève fictif a mal comprise, avec son erreur. Identifie ce qui a causé le malentendu et réécris la consigne pour l'éviter.",
    fact:"Beaucoup d'erreurs d'élèves viennent d'une consigne ambiguë, pas d'un manque de compréhension de la notion elle-même.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"pedagogie_3_4", tier:"moyen", emoji:"🎓", label:"Étape 4 — Prépare une petite leçon de cinq minutes",
    text:"Choisis une notion scolaire simple et prépare une leçon de cinq minutes avec un début (accroche), un milieu (explication) et une fin (vérification rapide de la compréhension).",
    fact:"Structurer une leçon même courte en trois temps est la base de toute préparation de cours.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"pedagogie_3_5", tier:"moyen", emoji:"👥", label:"Étape 5 — Donne ta leçon et récolte un vrai retour",
    text:"Donne ta leçon de l'étape 4 à un petit groupe de camarades, puis pose-leur une question de vérification et note combien ont bien répondu.",
    fact:"Vérifier réellement la compréhension, avec une question, est ce qui distingue une leçon efficace d'une leçon qui semble juste avoir plu.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"pedagogie_3_6", tier:"long", emoji:"🔎", label:"Étape 6 — Analyse ta propre leçon",
    text:"Reprends ta leçon de l'étape 4 et le résultat de la vérification de l'étape 5. Identifie un moment qui n'a pas fonctionné et réécris-le pour la prochaine fois.",
    fact:"Analyser sa propre pratique pour l'améliorer est ce que font les enseignants tout au long de leur carrière.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"pedagogie_3_7", tier:"long", emoji:"🎤", label:"Étape 7 — Présente ton bilan à la classe",
    text:"Présente en deux minutes ce que tu as appris sur toi-même comme futur enseignant à travers ce parcours en trois étapes (préparer, donner, analyser), avec un exemple concret pour chaque partie.",
    fact:"Un bilan appuyé sur des exemples concrets vécus vaut bien plus qu'une impression générale sur son goût pour l'enseignement.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getPedagogie3EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_PEDAGOGIE_3_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_PEDAGOGIE_3_ECG_OBJECTS = MUSEE_PEDAGOGIE_3_ECG_OBJECTS;
window.getPedagogie3EcgObjectsForParcours = getPedagogie3EcgObjectsForParcours;
