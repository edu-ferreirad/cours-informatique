// SALLE SÉQUENCES — PHYSIQUE — 1ère année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_PHYSIQUE_1_COLLEGE_OBJECTS = [
  { id:"physique_1_1", tier:"court", emoji:"📏", label:"Étape 1 — Estime avant de mesurer",
    text:"Avant toute mesure réelle, estime à l'œil un ordre de grandeur (la masse d'un objet, une distance) et écris ton estimation au tableau. La mesure réelle n'est révélée qu'ensuite.",
    fact:"Estimer des ordres de grandeur avant de mesurer est une aptitude explicitement visée par le programme.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"physique_1_2", tier:"court", emoji:"🔬", label:"Étape 2 — Observe, mesure, analyse en trois temps séparés",
    text:"Face à un phénomène simple (chute d'un objet), suis trois étapes strictement séparées dans ton cahier : observation libre, mesure chiffrée, analyse.",
    fact:"Séparer ces trois étapes t'entraîne à la démarche scientifique complète, pas seulement à mesurer.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"physique_1_3", tier:"court", emoji:"🧮", label:"Étape 3 — Convertis des unités concrètes",
    text:"Convertis une même grandeur physique dans trois unités différentes (par exemple une vitesse en m/s, km/h, et mph) et vérifie la cohérence de tes résultats.",
    fact:"Convertir des unités correctement est indispensable avant tout calcul physique plus complexe.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"physique_1_4", tier:"moyen", emoji:"📊", label:"Étape 4 — Trace et interprète un graphique",
    text:"À partir de mesures que tu prends toi-même, trace un graphique et identifie une tendance ou une relation entre deux grandeurs.",
    fact:"Tracer et interpréter des graphiques est un outil quotidien des sciences expérimentales.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"physique_1_5", tier:"moyen", emoji:"🔎", label:"Étape 5 — Vérifie les limites d'un modèle simple",
    text:"Utilise un modèle physique simple pour prédire un résultat, puis teste-le expérimentalement et note où la prédiction et la mesure divergent.",
    fact:"Reconnaître les limites d'un modèle est aussi important que de savoir l'utiliser.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"physique_1_6", tier:"long", emoji:"🧪", label:"Étape 6 — Mène une expérience complète",
    text:"Choisis un phénomène simple et mène une expérience complète : hypothèse, protocole, mesures, analyse, conclusion rédigée.",
    fact:"Cette démarche complète prépare directement aux exigences des années suivantes en sciences expérimentales.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"physique_1_7", tier:"long", emoji:"📝", label:"Étape 7 — Rédige et fais relire ton rapport",
    text:"Rédige un rapport d'expérience complet sur ton travail de l'étape 6, puis fais-le relire par un camarade qui vérifie s'il peut suivre ta démarche sans explication orale.",
    fact:"Un rapport doit être compréhensible sans toi à côté pour l'expliquer : c'est le vrai test de sa clarté.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqPhysique1CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_PHYSIQUE_1_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_PHYSIQUE_1_COLLEGE_OBJECTS=MUSEE_SEQ_PHYSIQUE_1_COLLEGE_OBJECTS;
window.getSeqPhysique1CollegeObjectsForParcours=getSeqPhysique1CollegeObjectsForParcours;
