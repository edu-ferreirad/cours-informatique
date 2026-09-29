// SALLE OSP SANTÉ — 1re année (découverte) — le texte s'adresse à l'élève, étape par étape
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_SANTE_1_ECG_OBJECTS = [
  { id:"sante_1_1", tier:"court", emoji:"🩺", label:"Étape 1 — Trie les tâches d'une matinée de soignant",
    text:"Voici une liste de sept tâches d'une matinée de soignant : accueillir un patient, prendre sa température, remplir le dossier, rassurer une personne inquiète, désinfecter le matériel, transmettre les informations à l'équipe, ranger la salle. Classe chacune dans une des trois colonnes que tu dessines sur une feuille : « relationnel », « scientifique », « organisation ». Certaines tâches vont dans deux colonnes à la fois : note-le.",
    fact:"Le métier de soignant mélange sans arrêt ces trois compétences ; c'est ce que tu commences à voir en triant.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"sante_1_2", tier:"court", emoji:"🎤", label:"Étape 2 — Prépare deux questions pour un professionnel",
    text:"Un professionnel de la santé va venir dans ta classe. Écris deux questions précises sur son quotidien réel — pas « est-ce que c'est intéressant ? » mais par exemple « qu'est-ce qui vous a le plus surpris la première semaine ? ». Échange tes deux questions avec un camarade et améliore-les ensemble avant la rencontre.",
    fact:"Une question précise obtient une réponse précise : c'est une règle qui vaut pour toute interview, pas seulement celle-ci.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"sante_1_3", tier:"court", emoji:"📋", label:"Étape 3 — Compare trois filières santé",
    text:"Ouvre la brochure de l'ECG à la page « Santé ». Choisis trois métiers différents (par exemple infirmier, technicien en radiologie, ergothérapeute) et note pour chacun : la durée de formation, si le certificat ECG suffit ou s'il faut la maturité spécialisée, et une compétence qui te semble essentielle pour ce métier.",
    fact:"Certains métiers s'atteignent directement avec le certificat ECG (écoles supérieures), d'autres seulement après la maturité spécialisée : ce n'est jamais le même chemin.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"sante_1_4", tier:"moyen", emoji:"🧪", label:"Étape 4 — Simule une prise de constantes",
    text:"Avec un camarade, simule la prise de trois constantes simples (pouls, respiration comptée sur 30 secondes, température si tu as un thermomètre) et note les résultats sur une fiche que tu inventes toi-même. Compare ensuite avec les valeurs normales que ton enseignant te donne : qu'est-ce qui est dans la norme, qu'est-ce qui ne l'est pas ?",
    fact:"Prendre une constante, c'est facile ; savoir si le chiffre obtenu est inquiétant ou pas, c'est déjà un vrai savoir professionnel.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"sante_1_5", tier:"moyen", emoji:"💬", label:"Étape 5 — Joue une annonce difficile",
    text:"Par deux, joue une courte scène où l'un annonce à l'autre un résultat d'examen qui demande un suivi (rien de grave, juste « il faut refaire une prise de sang »). Celui qui reçoit la nouvelle doit noter ce que l'autre a fait pour le mettre à l'aise, puis vous en discutez ensemble.",
    fact:"Annoncer une information médicale, même bénigne, demande une vraie technique relationnelle qui se travaille, elle ne vient pas seule.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"sante_1_6", tier:"long", emoji:"🗂️", label:"Étape 6 — Construis ton dossier d'orientation santé",
    text:"Rassemble tout ce que tu as produit dans les étapes précédentes (le tri des tâches, tes questions, ta comparaison de filières, ta fiche de constantes) dans un dossier d'une page. Ajoute une conclusion personnelle de trois phrases : est-ce que l'OSP Santé te correspond, et pourquoi ?",
    fact:"Un dossier d'orientation qui s'appuie sur des activités réelles vaut mieux qu'une intuition seule pour choisir son OSP.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"sante_1_7", tier:"long", emoji:"🎯", label:"Étape 7 — Présente ton choix à la classe",
    text:"En une minute, sans notes, présente à la classe ta conclusion de l'étape 6 : pourquoi l'OSP Santé t'attire ou pas, à partir d'un exemple concret vécu pendant les étapes précédentes. Un camarade te donne un retour sur la clarté de ta présentation, pas sur ton choix lui-même.",
    fact:"S'entraîner à expliquer un choix d'orientation à voix haute rend ce choix plus solide, même si tu changes d'avis plus tard.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getSante1EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_SANTE_1_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_SANTE_1_ECG_OBJECTS = MUSEE_SANTE_1_ECG_OBJECTS;
window.getSante1EcgObjectsForParcours = getSante1EcgObjectsForParcours;
