// SALLE SÉQUENCES — BIOLOGIE — 4e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_BIOLOGIE_4_COLLEGE_OBJECTS = [
  { id:"biologie_4_1", tier:"court", emoji:"⚖️", label:"Étape 1 — Prépare un débat de bioéthique (OS)",
    text:"Sur un dilemme bioéthique actuel, prépare un dossier de sources scientifiques et éthiques contradictoires avant un débat structuré où chaque argument doit être sourcé précisément.",
    fact:"Ce débat mobilise à la fois la rigueur scientifique et la réflexion éthique développées séparément au fil de tes années de biologie.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"biologie_4_2", tier:"court", emoji:"🌳", label:"Étape 2 — Reconstruis un arbre phylogénétique (OS)",
    text:"À partir d'un tableau de caractères communs et différents entre plusieurs espèces, reconstruis toi-même un arbre phylogénétique plausible, puis compare-le à l'arbre scientifiquement établi.",
    fact:"Reconstruire l'arbre toi-même évite qu'il ne reste une simple image à mémoriser sans en comprendre la logique.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"biologie_4_3", tier:"court", emoji:"🔭", label:"Étape 3 — Amorce ton travail personnel (OS)",
    text:"En vue d'un futur travail de maturité, formule seul une petite question de recherche expérimentale ou documentaire sur un sujet biologique qui t'intéresse vraiment.",
    fact:"Choisir une question qui t'intéresse vraiment, pas une question facile, rendra ton futur travail de maturité bien plus motivant.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"biologie_4_4", tier:"moyen", emoji:"🧫", label:"Étape 4 — Mène une petite recherche encadrée (OS)",
    text:"Avance sur ta question de recherche de l'étape 3 pendant deux semaines, avec un point d'étape encadré par ton enseignant pour vérifier que tu restes sur la bonne voie.",
    fact:"Un point d'étape régulier évite de découvrir trop tard qu'une question de recherche était mal posée dès le départ.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"biologie_4_5", tier:"moyen", emoji:"📊", label:"Étape 5 — Analyse tes premiers résultats (OS)",
    text:"Organise les premiers résultats de ta recherche dans un tableau ou un graphique, et identifie une première tendance, même provisoire.",
    fact:"Organiser ses résultats au fur et à mesure, plutôt qu'à la toute fin, évite la panique dans les derniers jours.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"biologie_4_6", tier:"long", emoji:"🗂️", label:"Étape 6 — Finalise ton dossier de recherche (OS)",
    text:"Rédige la version finale de ton dossier de recherche personnelle, avec introduction, méthode, résultats et conclusion, en citant toutes tes sources.",
    fact:"Ce format complet est un vrai entraînement à la structure attendue d'un travail de maturité scientifique.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"biologie_4_7", tier:"long", emoji:"🎓", label:"Étape 7 — Présente ta recherche et réponds aux questions (OS)",
    text:"Présente ta recherche finale à la classe en cinq minutes, puis réponds à deux questions critiques posées par tes camarades sur la fiabilité de tes résultats.",
    fact:"Défendre son travail face à des questions critiques est une étape réelle de toute recherche scientifique, y compris à ton niveau.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqBiologie4CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_BIOLOGIE_4_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_BIOLOGIE_4_COLLEGE_OBJECTS=MUSEE_SEQ_BIOLOGIE_4_COLLEGE_OBJECTS;
window.getSeqBiologie4CollegeObjectsForParcours=getSeqBiologie4CollegeObjectsForParcours;
