// SALLE SÉQUENCES — ÉDUCATION PHYSIQUE ET SPORTS — 4e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_EPS_4_COLLEGE_OBJECTS = [
  { id:"eps_4_1", tier:"court", emoji:"🏃", label:"Étape 1 — Conçois ta propre séance (OC Sport)",
    text:"Si tu as choisi l'option Sport, conçois en petit groupe une séance complète d'entraînement pour le reste de la classe, avec échauffement et retour au calme.",
    fact:"Concevoir et animer sa propre séance est l'aboutissement concret de l'autonomie sportive visée par le programme.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"eps_4_2", tier:"court", emoji:"🔗", label:"Étape 2 — Relie sport et une autre discipline (OC Sport)",
    text:"En lien avec une autre discipline (biologie, économie), analyse un aspect du sport (physiologie de l'effort, industrie sportive) à partir d'un dossier documentaire.",
    fact:"Le programme signale les interactions entre sport, économie et médecine comme objectif de fin de cursus.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"eps_4_3", tier:"court", emoji:"🎯", label:"Étape 3 — Anime ta séance conçue à l'étape 1",
    text:"Anime réellement la séance que tu as conçue à l'étape 1 devant tes camarades, en ajustant si besoin en cours de route.",
    fact:"Animer soi-même une séance, avec les imprévus réels, est différent de simplement la concevoir sur papier.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"eps_4_4", tier:"moyen", emoji:"📊", label:"Étape 4 — Analyse les retours de ta séance",
    text:"Récolte les retours de tes camarades sur la séance animée à l'étape 3 et identifie une amélioration précise pour la prochaine fois.",
    fact:"Analyser les retours reçus, plutôt que de les ignorer, est ce qui fait progresser en tant qu'animateur sportif.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"eps_4_5", tier:"moyen", emoji:"🩺", label:"Étape 5 — Approfondis la physiologie de l'effort",
    text:"Recherche comment le corps s'adapte à un effort prolongé et présente une explication simple à la classe.",
    fact:"Comprendre la physiologie de l'effort enrichit ta pratique sportive d'une base scientifique.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"eps_4_6", tier:"long", emoji:"🎯", label:"Étape 6 — Prépare une deuxième séance plus ambitieuse",
    text:"Conçois une nouvelle séance plus ambitieuse que la première, en intégrant les améliorations identifiées à l'étape 4.",
    fact:"Intégrer ses propres améliorations d'une fois sur l'autre est la marque d'une vraie progression.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"eps_4_7", tier:"long", emoji:"🎤", label:"Étape 7 — Présente ton bilan de fin de cursus sportif",
    text:"Présente à la classe un bilan de ton parcours sportif au Collège, en identifiant ton progrès et ta découverte les plus marquants.",
    fact:"Ce bilan personnel clôt quatre années de pratique et de réflexion sportive au Collège.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqEps4CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_EPS_4_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_EPS_4_COLLEGE_OBJECTS=MUSEE_SEQ_EPS_4_COLLEGE_OBJECTS;
window.getSeqEps4CollegeObjectsForParcours=getSeqEps4CollegeObjectsForParcours;
