// ============================================================================
// SALLE SÉQUENCES — MATHÉMATIQUES — COLLÈGE DE GENÈVE
// Séquences concrètes par année, respectant la progression officielle :
// 1ère-2e = algèbre, fonctions, géométrie ; 3e-4e = analyse, géométrie
// vectorielle, statistiques et probabilités (plan d'études DIP 2018-2019,
// p. 27-29). MA1 (normal) et MA2 (avancé) sont mentionnés quand pertinent.
// Contenu original, pas une citation du plan d'études.
// ============================================================================
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_MATHS_COLLEGE_OBJECTS = [
  // ---------------- 1ère année : algèbre et premiers pas en fonctions ----------------
  { id:"ma1_boite_a_outils_algebre", degree:"1", emoji:"🧰", label:"Algèbre : construire sa « boîte à outils »",
    text:"Après chaque nouvelle technique de calcul littéral, l'élève l'ajoute sous forme de fiche courte (méthode + un exemple + un piège fréquent) dans un classeur personnel consulté librement lors des exercices — jamais lors des évaluations.",
    fact:"Le plan d'études parle explicitement d'organiser les connaissances en une « boîte à outils » dans laquelle on sait puiser à bon escient ; rendre cette métaphore concrète et manipulable aide les élèves qui peinent à mémoriser une règle sans repère visuel.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"ma1_va_et_vient_graphique", degree:"1", emoji:"📈", label:"Fonctions : le jeu du va-et-vient graphique",
    text:"Par binômes, un élève décrit oralement un graphique de fonction (croissance, point d'intersection, signe) sans le montrer ; son camarade doit le dessiner uniquement à partir de la description avant de comparer les deux versions.",
    fact:"Ce va-et-vient forcé entre langage et graphique correspond exactement à l'objectif du programme de 1ère : savoir passer de la description algébrique à la lecture graphique, et inversement, sans dépendre uniquement du support visuel.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"ma1_demonstration_hypotheses_modifiees", degree:"1", emoji:"📏", label:"Géométrie : que se passe-t-il si on change une hypothèse ?",
    text:"Après une démonstration classique, l'enseignant modifie une seule hypothèse de départ (un angle, une longueur) et les élèves doivent prédire puis vérifier si la conclusion reste vraie, devient fausse, ou reste indéterminée.",
    fact:"Le plan d'études insiste sur la capacité à distinguer hypothèses et conclusions et à envisager les conséquences d'une modification des hypothèses — un réflexe que la seule mémorisation d'une démonstration ne développe pas.",
    anchor:{distance:1.4, angle:160, height:DESK_H} },

  // ---------------- 2e année : fonctions, géométrie et esprit scientifique ----------------
  { id:"ma2_conjecture_avant_preuve", degree:"2", emoji:"🔎", label:"Esprit scientifique : conjecturer avant de prouver",
    text:"Face à une propriété géométrique nouvelle, les élèves testent d'abord plusieurs cas concrets avec des mesures pour formuler une conjecture par écrit, avant seulement ensuite de chercher — ou de recevoir — une démonstration rigoureuse.",
    fact:"Le plan d'études précise que la 2e année met l'accent sur l'exercice de l'esprit scientifique et le développement de l'aptitude à la démonstration ; séparer la phase d'exploration de la phase de preuve rend cette distinction concrète et vécue.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"ma2_modele_situation_reelle", degree:"2", emoji:"🌡️", label:"Fonctions : modéliser une situation concrète",
    text:"À partir d'un relevé réel (température sur une journée, remplissage d'une piscine), les élèves doivent choisir le type de fonction le plus adapté, justifier leur choix, puis évaluer les limites de leur modèle face aux données qui s'en écartent.",
    fact:"Mathématiser une situation concrète, avec ses écarts et ses limites, prépare directement à l'esprit du cours d'applications des mathématiques disponible dès la 3e — une continuité voulue par le programme.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"ma2_niveau_avance_sujet_choix", degree:"2", emoji:"⭐", label:"MA2 (niveau avancé) : le sujet à choix",
    text:"Les élèves de niveau avancé reçoivent en 2e année un court sujet supplémentaire hors programme normal (déterminé par l'établissement), qu'ils explorent en autonomie sur deux semaines avant une présentation orale de 5 minutes à la classe.",
    fact:"Le plan d'études prévoit explicitement, pour le niveau avancé, l'adjonction possible de sujets à choix qui n'empiètent pas sur le programme de l'année suivante — cette séquence rend concrète cette marge de manœuvre propre au MA2.",
    anchor:{distance:1.8, angle:210, height:DESK_H} },

  // ---------------- 3e année : analyse (dérivées) et géométrie vectorielle ----------------
  { id:"ma3_derivee_sens_physique", degree:"3", emoji:"🚗", label:"Analyse : la dérivée comme vitesse instantanée",
    text:"À partir d'un graphique de position d'une voiture en fonction du temps, les élèves calculent d'abord des vitesses moyennes sur des intervalles de plus en plus courts, jusqu'à percevoir intuitivement la notion de limite, avant que la dérivée ne soit formalisée.",
    fact:"Le plan d'études demande explicitement de caractériser les variations d'une grandeur à l'aide du taux de variation puis de sa limite ; partir d'un exemple physique concret évite que la dérivée ne reste un symbole abstrait sans signification.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"ma3_vecteurs_probleme_geometrie", degree:"3", emoji:"➡️", label:"Géométrie vectorielle : résoudre sans mesurer",
    text:"Les élèves reçoivent un problème de géométrie dans l'espace (alignement, parallélisme) à résoudre uniquement par le calcul vectoriel, sans jamais mesurer ou dessiner à l'échelle — la validité de la solution doit reposer entièrement sur le raisonnement.",
    fact:"Interdire volontairement la mesure directe force les élèves à mobiliser la notion de vecteur comme véritable outil de démonstration, et pas seulement comme une notation pour décrire un dessin déjà fait.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
  { id:"ma3_contre_exemple_graphique", degree:"3", emoji:"🧭", label:"Analyse : chasser le contre-exemple",
    text:"Face à une affirmation générale sur les fonctions (« si la dérivée est positive, la fonction croît toujours »), les élèves doivent chercher un contre-exemple graphique ou, s'ils n'en trouvent pas, expliquer pourquoi l'affirmation résiste à leurs essais.",
    fact:"Le plan d'études recommande d'exploiter les représentations graphiques pour chercher des exemples ou des contre-exemples aux résultats théoriques — un exercice qui muscle l'esprit critique autant que le calcul.",
    anchor:{distance:2.3, angle:340, height:WALL_H} },

  // ---------------- 4e année : analyse avancée, probabilités-statistiques, révisions ----------------
  { id:"ma4_probabilite_modele_reel", degree:"4", emoji:"🎲", label:"Probabilités : choisir le bon modèle",
    text:"Face à une situation aléatoire réelle décrite en une phrase (file d'attente, contrôle qualité), les élèves doivent d'abord identifier quel modèle probabiliste simple s'applique avant même de commencer le moindre calcul.",
    fact:"Le plan d'études met l'accent sur la capacité à identifier une situation aléatoire pour la relier à un modèle probabiliste simple — une compétence de reconnaissance souvent négligée au profit du seul calcul une fois le modèle déjà donné.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"ma4_etude_fonction_complete", degree:"4", emoji:"📊", label:"Analyse : l'étude complète, de A à Z",
    text:"En temps limité et sans correction intermédiaire, les élèves mènent seuls une étude complète d'une fonction (domaine, dérivée, variations, courbe) puis comparent leur courbe finale à celle d'un camarade avant la correction commune.",
    fact:"Enchaîner toutes les étapes d'une étude de fonction sans étayage intermédiaire reproduit fidèlement les conditions de l'examen de maturité, où aucune aide progressive n'est fournie entre les différentes parties d'un exercice.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
  { id:"ma4_atelier_erreurs_frequentes", degree:"4", emoji:"❌", label:"Révisions maturité : l'atelier des erreurs classiques",
    text:"L'enseignant présente une copie fictive contenant plusieurs erreurs typiques accumulées au fil des quatre années (signe oublié, confusion de dérivée, mauvaise lecture d'un graphique) ; les élèves doivent les repérer et rédiger la correction exacte.",
    fact:"Revoir des erreurs caractéristiques accumulées sur quatre ans, plutôt que de refaire uniquement des exercices neufs, cible directement les pièges qui reviennent le plus souvent le jour de l'examen final.",
    anchor:{distance:4.4, angle:185, height:DESK_H} },
];

function getSeqMathsCollegeObjectsForDegree(degree) {
  return MUSEE_SEQ_MATHS_COLLEGE_OBJECTS.filter(o => o.degree === degree);
}
window.MUSEE_SEQ_MATHS_COLLEGE_OBJECTS = MUSEE_SEQ_MATHS_COLLEGE_OBJECTS;
window.getSeqMathsCollegeObjectsForDegree = getSeqMathsCollegeObjectsForDegree;
