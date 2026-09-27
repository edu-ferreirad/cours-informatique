// SALLE SÉQUENCES — MUSIQUE — DF années 1-2, puis OS années 2-4. Séquences
// 3e-4e marquées "OS uniquement".
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_SEQ_MUSIQUE_COLLEGE_OBJECTS = [
  { id:"mu1_reconnaissance_instruments", degree:"1", emoji:"🎻", label:"Reconnaître un instrument les yeux fermés",
    text:"Les élèves écoutent plusieurs extraits sonores et doivent identifier l'instrument entendu uniquement à son timbre, avant de vérifier leur réponse et de discuter des indices qui les ont mis sur la piste ou sur une fausse piste.",
    fact:"Reconnaître à l'audition les instruments les plus courants est un objectif explicite de la discipline fondamentale dès la 1ère année.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"mu1_pratique_collective", degree:"1", emoji:"🎤", label:"Chanter en canon pour sentir la structure",
    text:"La classe chante un canon simple en plusieurs groupes décalés, puis discute de ce que chacun a dû faire pour rester synchronisé malgré le décalage — une façon concrète de ressentir la structure musicale avant de l'expliquer.",
    fact:"La pratique du chant ou d'un instrument de manière individuelle ou collective est un objectif explicite des aptitudes visées en discipline fondamentale.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"mu2_vocabulaire_critique", degree:"2", emoji:"💬", label:"Construire une critique argumentée",
    text:"Après l'écoute d'un morceau inconnu, chaque élève rédige une courte critique utilisant au moins trois termes de vocabulaire musical précis vus en classe, avant d'échanger son texte avec un camarade pour vérification du vocabulaire employé.",
    fact:"Disposer d'un vocabulaire permettant une argumentation critique est un objectif explicite de fin de discipline fondamentale.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"mu2_histoire_musique_frise", degree:"2", emoji:"🕰️", label:"Situer un morceau sur la frise musicale",
    text:"Face à un extrait musical non identifié, les élèves doivent le situer approximativement dans le temps en s'appuyant sur des indices sonores précis (instrumentation, structure), avant de vérifier la période réelle.",
    fact:"Connaître les grandes articulations de l'histoire de la musique, des genres et des formes est un objectif explicite de fin de discipline fondamentale.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"mu3_improvisation_encadree_os", degree:"3", emoji:"🎹", label:"OS uniquement — Improviser sur une contrainte",
    text:"Les élèves de l'option spécifique improvisent à tour de rôle sur un instrument ou avec la voix, en respectant une contrainte simple imposée (une gamme, un rythme), avant un retour bref du groupe sur ce qui a fonctionné.",
    fact:"Exprimer et développer son potentiel artistique par l'interprétation, l'improvisation et la création est un objectif explicite propre à l'option spécifique.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"mu3_ecriture_musicale_os", degree:"3", emoji:"🎼", label:"OS uniquement — Écrire une courte mélodie",
    text:"Les élèves de l'option composent une très courte mélodie sur une base rythmique donnée, en utilisant les bases de l'écriture musicale étudiées, avant de la faire jouer ou chanter par la classe.",
    fact:"Acquérir les bases de l'écriture musicale est un objectif explicite du plan d'études pour l'option spécifique, en plus des savoirs déjà requis en discipline fondamentale.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
  { id:"mu4_musiques_civilisations_os", degree:"4", emoji:"🌍", label:"OS uniquement — Comparer deux traditions musicales",
    text:"Les élèves de l'option comparent un extrait musical occidental à un extrait d'une autre tradition musicale du monde, en identifiant les différences de structure, de gamme ou de fonction sociale.",
    fact:"Apprendre à connaître des musiques de différents styles et de différentes civilisations est un objectif explicite de fin de cursus pour l'option spécifique.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"mu4_projet_final_os", degree:"4", emoji:"🎭", label:"OS uniquement — Petit projet musical de fin de cursus",
    text:"Les élèves de l'option préparent en petit groupe une courte production musicale originale (interprétation ou composition) présentée à la classe, avec une explication orale des choix artistiques effectués.",
    fact:"Ce projet final mobilise l'ensemble des aptitudes développées en option spécifique : interprétation, improvisation et création, dans un même travail cohérent.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqMusiqueCollegeObjectsForDegree(degree){ return MUSEE_SEQ_MUSIQUE_COLLEGE_OBJECTS.filter(o=>o.degree===degree); }
window.MUSEE_SEQ_MUSIQUE_COLLEGE_OBJECTS = MUSEE_SEQ_MUSIQUE_COLLEGE_OBJECTS;
window.getSeqMusiqueCollegeObjectsForDegree = getSeqMusiqueCollegeObjectsForDegree;
