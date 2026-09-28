// ============================================================================
// SALLE SÉQUENCES — INFORMATIQUE — 1ère ANNÉE (2h/semaine)
// Basé sur la réforme genevoise 2021 : l'informatique devient discipline
// obligatoire dès la 1ère année (edu.ge.ch/enseignement/esii-enseignement-
// secondaire-ii/informatique + IRDP, grilles horaires gymnase 2021-2022).
// Axes officiels : représentation de l'information et des données,
// organisation (réseaux, bases de données), traitement automatique
// (algorithmique et programmation), usage responsable (sécurité, bonnes
// pratiques). Contenu original, pas une citation du programme.
// ============================================================================
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_INFORMATIQUE_1_COLLEGE_OBJECTS = [
  // ---- court : premiers pas, représentation de l'information ----
  { id:"in1c_binaire_main", degree:"1", tier:"court", emoji:"🔢", label:"Compter en binaire avec ses doigts",
    text:"Avant toute théorie, les élèves apprennent à compter en binaire sur leurs doigts (chaque doigt = une puissance de 2) et doivent atteindre un nombre cible donné par l'enseignant, avant seulement ensuite de formaliser l'écriture binaire au tableau.",
    fact:"Représenter l'information est le premier axe du programme genevois d'informatique ; partir du corps plutôt que d'un cours magistral rend concret un système de numération qui n'a rien d'intuitif au premier abord.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"in1c_pixel_art", degree:"1", tier:"court", emoji:"🖼️", label:"Coder une image en tableau de nombres",
    text:"Les élèves reçoivent une petite grille d'image en noir et blanc (pixel art) et doivent la coder entièrement comme une suite de 0 et de 1 sur papier, avant qu'un camarade ne la redécode et compare son dessin à l'original.",
    fact:"Ce va-et-vient encodage/décodage manuel rend tangible l'idée qu'une image n'est, au fond, qu'une suite structurée de nombres — un préalable indispensable avant tout traitement numérique d'image.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  // ---- moyen : premiers algorithmes ----
  { id:"in1m_algo_papier_avant_code", degree:"1", tier:"moyen", emoji:"🧩", label:"Écrire un algorithme avant d'écrire du code",
    text:"Face à un petit problème concret (trier trois nombres, deviner un nombre mystère), les élèves rédigent d'abord leur solution en français structuré, étape par étape, et la font vérifier par un camarade avant de la traduire dans un langage de programmation.",
    fact:"Séparer la conception algorithmique de l'écriture du code évite de mélanger deux difficultés distinctes — un principe pédagogique central en 1ère année d'introduction à la programmation.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"in1m_debug_erreur_cachee", degree:"1", tier:"moyen", emoji:"🐛", label:"Traquer l'erreur dans un programme qui presque fonctionne",
    text:"Les élèves reçoivent un très court programme contenant une seule erreur volontaire et doivent la localiser en exécutant le code mentalement, ligne par ligne, avant de le corriger et de vérifier leur correction à l'ordinateur.",
    fact:"Le débogage guidé développe la capacité à raisonner de manière structurée sur un programme existant, une compétence aussi importante que la capacité à écrire du code neuf.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"in1m_boucle_motif", degree:"1", tier:"moyen", emoji:"🔁", label:"Répéter sans copier-coller",
    text:"Face à un motif répétitif à afficher (un triangle d'étoiles, une frise), les élèves doivent d'abord l'écrire ligne par ligne sans boucle, puis réécrire le même résultat en utilisant une boucle, et comparer la longueur et la lisibilité des deux versions.",
    fact:"Comparer une solution répétitive naïve à une solution avec boucle rend visible, par contraste direct, l'intérêt réel de cette structure de contrôle fondamentale.",
    anchor:{distance:1.8, angle:210, height:DESK_H} },
  // ---- long : usage responsable, projet ----
  { id:"in1l_securite_mot_de_passe", degree:"1", tier:"long", emoji:"🔐", label:"Casser un mot de passe faible pour comprendre pourquoi il est faible",
    text:"À l'aide d'un outil pédagogique simulant des tentatives de connexion, les élèves mesurent combien de temps il faudrait pour deviner différents mots de passe (court, prévisible, long et aléatoire) et en tirent eux-mêmes des règles de bonne pratique.",
    fact:"L'usage responsable des technologies numériques, notamment la sécurité, est un axe explicite du programme genevois ; faire vivre l'attaque plutôt que de réciter des règles rend la leçon mémorable.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"in1l_projet_mini_jeu", degree:"1", tier:"long", emoji:"🎮", label:"Mini-projet de fin de semestre : un jeu très simple",
    text:"En binôme, les élèves programment un très petit jeu (deviner un nombre, pierre-feuille-ciseaux) en réutilisant exactement les briques vues en classe (variables, boucle, condition), présenté ensuite en 2 minutes devant la classe qui le teste en direct.",
    fact:"Ce petit projet de synthèse mobilise volontairement les mêmes briques déjà vues plutôt que d'en introduire de nouvelles, pour que chaque élève puisse réellement terminer un programme fonctionnel en 1ère année.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
];
function getSeqInformatique1CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_INFORMATIQUE_1_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_INFORMATIQUE_1_COLLEGE_OBJECTS = MUSEE_SEQ_INFORMATIQUE_1_COLLEGE_OBJECTS;
window.getSeqInformatique1CollegeObjectsForParcours = getSeqInformatique1CollegeObjectsForParcours;
