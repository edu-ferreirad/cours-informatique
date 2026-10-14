// SALLE SÉQUENCES — ÉCONOMIE ET DROIT — 2e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ECONOMIE_DROIT_2_COLLEGE_OBJECTS = [
  { id:"economie_droit_2_1", tier:"court", emoji:"🏭", label:"Étape 1 — Schématise les agents économiques (OS)",
    text:"En groupe, construis un schéma reliant ménages, entreprises et État par des flux (travail, salaires, impôts) à partir d'exemples concrets suisses.",
    fact:"Comprendre le rôle des agents économiques et leur interdépendance est un objectif explicite de l'option spécifique.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"economie_droit_2_2", tier:"court", emoji:"📚", label:"Étape 2 — Explore la hiérarchie des règles de droit (OS)",
    text:"Face à un conflit fictif entre deux règles de niveaux différents, détermine laquelle prévaut en t'appuyant sur la hiérarchie des normes.",
    fact:"Comprendre la hiérarchie des règles de droit est un objectif explicite de cette année en option spécifique.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"economie_droit_2_3", tier:"court", emoji:"💶", label:"Étape 3 — Analyse un cas d'entreprise réel (OS)",
    text:"Choisis une entreprise suisse et analyse brièvement son organisation et son rôle économique à partir d'informations publiques.",
    fact:"Étudier un cas réel plutôt que théorique rend les mécanismes économiques plus concrets.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"economie_droit_2_4", tier:"moyen", emoji:"🗳️", label:"Étape 4 — Évalue une politique économique (OS)",
    text:"À partir d'un article de presse récent sur une décision économique de l'État, évalue et critique la mesure en identifiant les intérêts en jeu.",
    fact:"Évaluer et critiquer les politiques économiques est un objectif explicite de l'option spécifique.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"economie_droit_2_5", tier:"moyen", emoji:"⚖️", label:"Étape 5 — Résous un cas pratique juridique (OS)",
    text:"Face à un cas pratique de complexité moyenne, identifie les règles de droit applicables et rédige une solution argumentée.",
    fact:"Résoudre des cas pratiques en s'appuyant sur des textes légaux est un objectif explicite de cette année.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"economie_droit_2_6", tier:"long", emoji:"🗂️", label:"Étape 6 — Prépare un dossier économique (OS)",
    text:"Choisis un enjeu économique actuel et constitue un dossier documenté avec au moins deux sources fiables citées.",
    fact:"Un dossier bien sourcé développe ta capacité à argumenter sur des bases vérifiées, pas des impressions.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"economie_droit_2_7", tier:"long", emoji:"🎤", label:"Étape 7 — Présente et défends ton dossier (OS)",
    text:"Présente ton dossier de l'étape 6 à la classe et réponds à des questions critiques sur tes conclusions.",
    fact:"Défendre son dossier face à des questions critiques renforce la solidité de ton argumentation.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqEconomieDroit2CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ECONOMIE_DROIT_2_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ECONOMIE_DROIT_2_COLLEGE_OBJECTS=MUSEE_SEQ_ECONOMIE_DROIT_2_COLLEGE_OBJECTS;
window.getSeqEconomieDroit2CollegeObjectsForParcours=getSeqEconomieDroit2CollegeObjectsForParcours;
