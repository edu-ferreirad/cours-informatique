// SALLE SÉQUENCES — ÉCONOMIE ET DROIT — 4e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ECONOMIE_DROIT_4_COLLEGE_OBJECTS = [
  { id:"economie_droit_4_1", tier:"court", emoji:"💼", label:"Étape 1 — Analyse une stratégie d'entreprise réelle (OS)",
    text:"Sur un cas d'entreprise réelle et récente, évalue sa stratégie économique dans le contexte national et international.",
    fact:"Évaluer et critiquer les stratégies d'entreprise est un objectif explicite de fin de cursus.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"economie_droit_4_2", tier:"court", emoji:"🇨🇭", label:"Étape 2 — Simule une votation fédérale (OS)",
    text:"Prépare puis simule le débat d'une votation fédérale fictive, en t'appuyant sur ta connaissance des institutions politiques suisses.",
    fact:"Connaître les institutions suisses, en particulier, est un objectif explicite du programme en fin de cursus.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"economie_droit_4_3", tier:"court", emoji:"🎓", label:"Étape 3 — Prépare ton oral blanc de maturité",
    text:"Choisis un sujet économique ou juridique du programme et prépare une présentation argumentée de cinq minutes, sans notes.",
    fact:"S'entraîner à l'oral sans notes prépare directement à l'épreuve orale de maturité.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"economie_droit_4_4", tier:"moyen", emoji:"⚖️", label:"Étape 4 — Résous un cas pratique complexe (OS)",
    text:"Face à un cas pratique juridique complexe, identifie les règles applicables et rédige une solution argumentée complète.",
    fact:"Résoudre des cas pratiques de plus en plus complexes est un objectif de fin de cursus.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"economie_droit_4_5", tier:"moyen", emoji:"🗳️", label:"Étape 5 — Débats un enjeu économique contemporain (OS)",
    text:"Sur un enjeu économique de société contemporain, débats avec la classe en citant des sources précises à l'appui de tes arguments.",
    fact:"Citer des sources précises, pas seulement des impressions, distingue un débat argumenté d'une simple discussion.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"economie_droit_4_6", tier:"long", emoji:"🗂️", label:"Étape 6 — Finalise ton dossier de fin de cursus (OS)",
    text:"Rassemble et retravaille tes meilleures productions de l'année (dossiers, cas pratiques) en un dossier final cohérent.",
    fact:"Ce dossier final synthétise plusieurs années d'apprentissage en une production personnelle cohérente.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"economie_droit_4_7", tier:"long", emoji:"🎤", label:"Étape 7 — Présente ton dossier final à l'oral",
    text:"Présente ton dossier final à la classe en cinq minutes, en expliquant ce que tu as le plus progressé cette année.",
    fact:"Identifier soi-même ses progrès, avec des exemples précis, est la meilleure façon de clore un parcours d'apprentissage.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqEconomieDroit4CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ECONOMIE_DROIT_4_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ECONOMIE_DROIT_4_COLLEGE_OBJECTS=MUSEE_SEQ_ECONOMIE_DROIT_4_COLLEGE_OBJECTS;
window.getSeqEconomieDroit4CollegeObjectsForParcours=getSeqEconomieDroit4CollegeObjectsForParcours;
