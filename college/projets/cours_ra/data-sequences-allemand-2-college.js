// SALLE SÉQUENCES — ALLEMAND — 2e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ALLEMAND_2_COLLEGE_OBJECTS = [
  { id:"allemand_2_1", tier:"court", emoji:"💬", label:"Étape 1 — Défends ton avis sur un texte",
    text:"Après lecture d'un court texte allemand, prépare deux arguments personnels pour ou contre une affirmation qu'il contient, puis défends-les face à un camarade qui prend la position opposée.",
    fact:"Défendre et argumenter un point de vue sur un texte est un objectif explicite de cette année.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"allemand_2_2", tier:"court", emoji:"🎧", label:"Étape 2 — Note l'essentiel sans transcrire",
    text:"Après une seule écoute d'un reportage court, note uniquement les informations essentielles, puis compare avec un camarade avant une deuxième écoute de vérification.",
    fact:"L'interdiction de tout transcrire t'oblige à trier ce qui compte vraiment.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"allemand_2_3", tier:"court", emoji:"📅", label:"Étape 3 — Compare ton emploi du temps",
    text:"Complète un plan de semaine avec tes activités, puis compare-le en allemand avec celui d'un camarade en posant de vraies questions.",
    fact:"Comparer deux plans crée un vrai échange d'informations, pas un exercice mécanique.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"allemand_2_4", tier:"moyen", emoji:"🗺️", label:"Étape 4 — Guide un camarade sans le voir",
    text:"Sur un plan de ville, guide un camarade vers un lieu précis avec des indications de direction en allemand, sans jamais nommer la destination.",
    fact:"Le jeu d'orientation motive la production orale bien plus qu'un exercice de vocabulaire isolé.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"allemand_2_5", tier:"moyen", emoji:"🍕", label:"Étape 5 — Commande au restaurant",
    text:"Avec un camarade, joue une scène de commande au restaurant à partir d'un menu, en utilisant des formules de politesse appropriées.",
    fact:"La politesse fait partie intégrante de la compétence de communication, pas un simple détail de vocabulaire.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"allemand_2_6", tier:"long", emoji:"✉️", label:"Étape 6 — Écris à un correspondant fictif",
    text:"Rédige une lettre de présentation à un correspondant fictif (famille, goûts, ville), puis relis-la avec une grille de critères avant de la rendre.",
    fact:"Écrire à un vrai destinataire, même fictif, donne un objectif de communication réel à ton écriture.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"allemand_2_7", tier:"long", emoji:"🏔️", label:"Étape 7 — Prépare un projet sur une région suisse",
    text:"En groupe, prépare une affiche sur une région de Suisse alémanique (paysages, spécialités, transports) et présente-la à la classe.",
    fact:"Ce projet t'ouvre à la culture germanophone au-delà du seul apprentissage de la langue.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqAllemand2CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ALLEMAND_2_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ALLEMAND_2_COLLEGE_OBJECTS=MUSEE_SEQ_ALLEMAND_2_COLLEGE_OBJECTS;
window.getSeqAllemand2CollegeObjectsForParcours=getSeqAllemand2CollegeObjectsForParcours;
