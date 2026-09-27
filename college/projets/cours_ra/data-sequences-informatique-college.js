// SALLE SÉQUENCES — INFORMATIQUE — particularité : pas de cours "informatique"
// dédié en 2e-3e année (grille horaire DIP 2018-2019) ; seule la 1ère année
// propose l'IDS (introduction à la démarche scientifique, incluant des bases
// numériques) et seule la 4e année propose un vrai cours d'informatique en
// option complémentaire (4h). Les années 2-3 sont honnêtement signalées vides.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_SEQ_INFORMATIQUE_COLLEGE_OBJECTS = [
  { id:"in1_notation_scientifique_tableur", degree:"1", emoji:"🔢", label:"IDS : première prise en main d'un tableur",
    text:"Dans le cadre du cours IDS du premier semestre, les élèves entrent des mesures réelles dans un tableur, tracent un graphique automatique et comparent son rendu à un graphique fait main pour repérer les erreurs de saisie.",
    fact:"Il n'existe pas de cours d'informatique autonome en 1ère année : les bases numériques (tracer et interpréter un graphique, notation scientifique) sont vues via le cours IDS, au premier semestre seulement (1h).",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"in2_info_pas_de_cours", degree:"2", emoji:"ℹ️", label:"Pas de cours d'informatique dédié en 2e année",
    text:"Contrairement à d'autres disciplines, l'informatique ne réapparaît pas comme cours autonome en 2e année du Collège de Genève : elle est traitée ponctuellement à l'intérieur d'autres disciplines (traitement de données en sciences, tableurs) sans horaire dédié.",
    fact:"C'est une particularité réelle de la grille horaire — mieux vaut le savoir à l'avance qu'être surpris de ne pas avoir d'informatique entre la 1ère et la 4e année.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"in3_info_pas_de_cours", degree:"3", emoji:"ℹ️", label:"Pas de cours d'informatique dédié en 3e année",
    text:"Comme en 2e année, aucun horaire n'est réservé à l'informatique en 3e année : les compétences numériques utiles continuent d'être mobilisées ponctuellement dans d'autres disciplines, notamment en applications des mathématiques.",
    fact:"Le vrai retour de l'informatique comme discipline autonome n'a lieu qu'en 4e année, sous forme d'option complémentaire (4h) — voir cet onglet.",
    anchor:{distance:1.8, angle:210, height:DESK_H} },
  { id:"in4_algorithme_papier_avant_code", degree:"4", emoji:"🧩", label:"Algorithme sur papier avant le code",
    text:"Face à un petit problème concret (trier une liste, calculer une moyenne pondérée), les élèves écrivent d'abord l'algorithme en pseudo-code sur papier et le font vérifier par un camarade avant de l'implémenter dans un langage de programmation.",
    fact:"Le plan d'études insiste sur l'analyse et la modélisation d'un problème avant l'automatisation ; séparer la conception de l'écriture du code évite de mélanger deux difficultés à la fois.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"in4_comparaison_solutions", degree:"4", emoji:"⚖️", label:"Comparer deux solutions au même problème",
    text:"Après avoir résolu un même petit problème de deux façons différentes, les élèves comparent les deux solutions selon trois critères précis (rapidité, lisibilité, facilité de modification) avant de choisir la meilleure et de justifier leur choix.",
    fact:"Le plan d'études demande explicitement la comparaison critique de plusieurs solutions au regard de la faisabilité et des ressources nécessaires — pas la seule capacité à produire une solution qui fonctionne.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
  { id:"in4_projet_equipe_convivialite", degree:"4", emoji:"👥", label:"Mini-projet en équipe évalué sur la convivialité",
    text:"En binôme, les élèves développent un petit outil informatique simple (calculatrice, quiz) puis le font tester par un autre binôme qui doit relever un point positif et un point à améliorer du point de vue de l'utilisateur, pas seulement du code.",
    fact:"Le plan d'études cite la pertinence, l'efficacité et la convivialité des solutions informatiques comme critères d'évaluation, au même titre que leur bon fonctionnement technique.",
    anchor:{distance:2.3, angle:340, height:WALL_H} },
];
function getSeqInformatiqueCollegeObjectsForDegree(degree){ return MUSEE_SEQ_INFORMATIQUE_COLLEGE_OBJECTS.filter(o=>o.degree===degree); }
window.MUSEE_SEQ_INFORMATIQUE_COLLEGE_OBJECTS = MUSEE_SEQ_INFORMATIQUE_COLLEGE_OBJECTS;
window.getSeqInformatiqueCollegeObjectsForDegree = getSeqInformatiqueCollegeObjectsForDegree;
