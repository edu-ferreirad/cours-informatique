// SALLE SÉQUENCES — ÉCONOMIE ET DROIT — 3e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ECONOMIE_DROIT_3_COLLEGE_OBJECTS = [
  { id:"economie_droit_3_1", tier:"court", emoji:"🗳️", label:"Étape 1 — Évalue une politique économique réelle (OS)",
    text:"À partir d'un article de presse récent, évalue et critique une décision économique de l'État en identifiant les valeurs et intérêts en jeu.",
    fact:"Évaluer et critiquer les politiques conjoncturelles et structurelles est un objectif explicite de cette année.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"economie_droit_3_2", tier:"court", emoji:"⚖️", label:"Étape 2 — Résous un cas pratique de droit du travail (OS)",
    text:"Face à un litige de travail fictif, identifie les règles de droit applicables et rédige une solution argumentée en citant les textes pertinents.",
    fact:"Résoudre des cas pratiques en s'appuyant sur des textes légaux est un objectif central de l'option spécifique.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"economie_droit_3_3", tier:"court", emoji:"🇨🇭", label:"Étape 3 — Explore les institutions suisses (OS)",
    text:"Choisis une institution politique suisse (Conseil fédéral, Parlement) et explique son rôle en trois phrases précises.",
    fact:"Connaître les institutions politiques suisses est un objectif explicite du programme.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"economie_droit_3_4", tier:"moyen", emoji:"💼", label:"Étape 4 — Analyse la stratégie d'une entreprise (OS)",
    text:"Choisis une entreprise et analyse sa stratégie économique dans le contexte national et international, avant de proposer une alternative argumentée.",
    fact:"Évaluer et critiquer les stratégies d'entreprise est un objectif explicite de cette étape du cursus.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"economie_droit_3_5", tier:"moyen", emoji:"📊", label:"Étape 5 — Utilise des méthodes quantitatives simples (OS)",
    text:"Utilise des principes de comptabilité ou de représentation graphique simples pour analyser une situation économique donnée.",
    fact:"Le programme cite explicitement l'usage d'outils quantitatifs comme la comptabilité et les graphiques.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"economie_droit_3_6", tier:"long", emoji:"🗂️", label:"Étape 6 — Constitue un dossier économique approfondi (OS)",
    text:"Choisis un enjeu économique ou juridique actuel et constitue un dossier plus approfondi qu'en 2e année, avec plusieurs sources fiables.",
    fact:"Approfondir un dossier, plutôt que le survoler, est attendu à ce stade de l'option spécifique.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"economie_droit_3_7", tier:"long", emoji:"🎤", label:"Étape 7 — Présente et défends ton dossier approfondi (OS)",
    text:"Présente ton dossier de l'étape 6 à la classe et réponds à des questions critiques sur tes conclusions et tes sources.",
    fact:"Défendre un dossier plus approfondi face à des questions plus exigeantes prépare à la 4e année.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqEconomieDroit3CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ECONOMIE_DROIT_3_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ECONOMIE_DROIT_3_COLLEGE_OBJECTS=MUSEE_SEQ_ECONOMIE_DROIT_3_COLLEGE_OBJECTS;
window.getSeqEconomieDroit3CollegeObjectsForParcours=getSeqEconomieDroit3CollegeObjectsForParcours;
