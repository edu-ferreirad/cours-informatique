// SALLE SÉQUENCES — INFORMATIQUE — 4e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_INFORMATIQUE_4_COLLEGE_OBJECTS = [
  { id:"informatique_4_1", tier:"court", emoji:"🧩", label:"Étape 1 — Modélise un problème avant de coder (OC)",
    text:"Face à un problème concret complexe (organiser un tournoi, optimiser un trajet), identifie d'abord les données pertinentes et simplifie-les en un modèle abstrait, avant même d'envisager un algorithme.",
    fact:"Modéliser avant de coder est une étape souvent négligée quand on se précipite vers le code.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"informatique_4_2", tier:"court", emoji:"⚖️", label:"Étape 2 — Compare deux algorithmes (OC)",
    text:"Résous un même problème avec deux algorithmes différents (par exemple deux méthodes de tri) et compare leurs performances sur des données de tailles croissantes.",
    fact:"Comparer empiriquement deux algorithmes fait vraiment ressentir la différence, pas juste la comprendre en théorie.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"informatique_4_3", tier:"court", emoji:"📝", label:"Étape 3 — Rédige un cahier des charges (OC)",
    text:"Avant de commencer un projet de groupe, rédige un court cahier des charges précisant les fonctionnalités attendues et les contraintes.",
    fact:"Cette étape reproduit une vraie pratique professionnelle et évite qu'un projet ne change constamment de direction.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"informatique_4_4", tier:"moyen", emoji:"👥", label:"Étape 4 — Fais tester ton prototype par une équipe voisine (OC)",
    text:"Une fois ton prototype fonctionnel, fais-le tester par une équipe voisine sans aucune explication préalable, et note tous les moments où l'utilisateur hésite ou se trompe.",
    fact:"Observer un utilisateur réel se tromper révèle des problèmes qu'aucune relecture du code seul ne montre.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"informatique_4_5", tier:"moyen", emoji:"🔗", label:"Étape 5 — Relie ton projet aux applications des mathématiques (OC)",
    text:"En lien avec le cours d'applications des mathématiques, implémente une méthode numérique simple déjà étudiée en mathématiques, pour comparer les deux approches.",
    fact:"Ce lien direct entre informatique et mathématiques clôt ton parcours sur une note transversale.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"informatique_4_6", tier:"long", emoji:"🚀", label:"Étape 6 — Finalise ton projet de l'OC",
    text:"Corrige ton prototype à partir des retours reçus à l'étape 4, puis prépare une démonstration en direct de la version finale.",
    fact:"Intégrer les retours d'utilisateurs réels est ce qui distingue un prototype d'un vrai produit fini.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"informatique_4_7", tier:"long", emoji:"🎤", label:"Étape 7 — Présente ton projet final",
    text:"Présente ton projet final devant la classe avec une démonstration en direct, en expliquant tes choix de conception et les difficultés rencontrées, puis réponds à des questions techniques improvisées.",
    fact:"Défendre ses choix de conception devant des questions techniques est un vrai exercice professionnel, même à ton niveau.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqInformatique4CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_INFORMATIQUE_4_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_INFORMATIQUE_4_COLLEGE_OBJECTS=MUSEE_SEQ_INFORMATIQUE_4_COLLEGE_OBJECTS;
window.getSeqInformatique4CollegeObjectsForParcours=getSeqInformatique4CollegeObjectsForParcours;
