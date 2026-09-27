// SALLE SÉQUENCES — PHYSIQUE — DF années 1-2 seulement (PY1/PY2), puis
// discipline uniquement via OS physique-applications des mathématiques
// (années 2-4) ou OC en 4e. Les séquences de 3e-4e sont marquées "OS uniquement".
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_SEQ_PHYSIQUE_COLLEGE_OBJECTS = [
  { id:"py1_ordre_grandeur_estimation", degree:"1", emoji:"📏", label:"Estimer avant de mesurer",
    text:"Avant toute mesure réelle, les élèves doivent estimer à l'œil un ordre de grandeur (la masse d'un objet, une distance) et écrire leur estimation au tableau ; la mesure réelle n'est révélée qu'ensuite, jamais l'inverse.",
    fact:"Le plan d'études cite explicitement l'estimation des ordres de grandeur comme aptitude fondamentale ; inverser l'ordre habituel (estimer puis mesurer) rend l'écart visible et mémorable.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"py1_protocole_simple", degree:"1", emoji:"🔬", label:"Observer, mesurer, analyser en trois temps",
    text:"Face à un phénomène simple (chute d'un objet, dilatation), les élèves suivent trois étapes strictement séparées — observation libre, mesure chiffrée, analyse — sans jamais mélanger les trois dans leur cahier.",
    fact:"Le plan d'études décrit la démarche scientifique comme un exercice permanent où observation, expérience et élaboration de modèles s'enchaînent dans un ordre précis, pas comme un mélange informel.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"py2_incertitude_mesure", degree:"2", emoji:"📊", label:"La mesure qui ne tombe jamais deux fois pareil",
    text:"Les élèves refont cinq fois la même mesure simple (longueur, temps de chute) et doivent calculer l'écart entre les résultats avant de comprendre pourquoi une seule mesure ne suffit jamais en physique.",
    fact:"Estimer la précision et l'incertitude inhérentes aux mesures est un objectif explicite du cours d'introduction à la démarche scientifique et de la discipline fondamentale.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"py2_graphique_interpretation", degree:"2", emoji:"📈", label:"Lire un graphique sans le texte",
    text:"Face à un graphique de résultats expérimentaux sans légende ni texte d'accompagnement, les élèves doivent reconstruire seuls l'expérience probable qui a produit ces données, avant de comparer avec l'énoncé réel.",
    fact:"Tracer et interpréter les graphiques est cité comme outil quotidien des sciences expérimentales ; partir du graphique seul muscle la lecture plutôt que la seule production de courbes.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"py3_calcul_incertitude_os", degree:"3", emoji:"🎯", label:"OS uniquement — Calculer l'impact d'une incertitude",
    text:"Les élèves de l'option spécifique calculent comment une petite erreur de mesure au départ se propage jusqu'au résultat final d'un calcul en plusieurs étapes, avant de juger si cette erreur reste acceptable.",
    fact:"Effectuer un calcul d'incertitude jusqu'à l'estimation de son impact sur les résultats est un objectif explicite de l'option spécifique, plus exigeant que la simple discipline fondamentale.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"py3_modelisation_numerique_os", degree:"3", emoji:"💻", label:"OS uniquement — Simuler avant de conclure",
    text:"À l'aide d'un outil informatique simple, les élèves de l'option font varier un paramètre d'un phénomène physique modélisé et observent l'effet sur le résultat avant de formuler une conclusion générale.",
    fact:"Le plan d'études cite la maîtrise de l'outil informatique pour l'acquisition, le traitement des données et la simulation des phénomènes comme objectif propre à l'option spécifique.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
  { id:"py4_physique_xxe_os", degree:"4", emoji:"🌌", label:"OS uniquement — Un paradoxe du XXe siècle",
    text:"Les élèves de l'option présentent, par petits groupes, un paradoxe ou une expérience célèbre de la physique du XXe siècle (relativité, quantique) à la classe, en devant l'expliquer sans aucune formule mathématique.",
    fact:"Le plan d'études prévoit l'étude de quelques éléments de la physique du XXe siècle en complément des domaines classiques, en option spécifique de fin de cursus.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"py4_lien_interdisciplinaire_os", degree:"4", emoji:"🔗", label:"OS uniquement — Un lien physique-biologie",
    text:"En lien avec la biologie, les élèves de l'option expliquent un phénomène physiologique (vision, audition) uniquement par des lois physiques déjà étudiées, sans recourir au vocabulaire biologique.",
    fact:"Le plan d'études cite explicitement l'étude de l'œil et des couleurs comme lien entre physique et biologie — un exemple concret de collaboration interdisciplinaire en fin de cursus.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqPhysiqueCollegeObjectsForDegree(degree){ return MUSEE_SEQ_PHYSIQUE_COLLEGE_OBJECTS.filter(o=>o.degree===degree); }
window.MUSEE_SEQ_PHYSIQUE_COLLEGE_OBJECTS = MUSEE_SEQ_PHYSIQUE_COLLEGE_OBJECTS;
window.getSeqPhysiqueCollegeObjectsForDegree = getSeqPhysiqueCollegeObjectsForDegree;
