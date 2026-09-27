// SALLE SÉQUENCES — ÉCONOMIE ET DROIT — DF "introduction à l'économie et au
// droit" (IED) seulement en 1ère année (2h) ; discipline autonome ensuite
// uniquement via l'option spécifique économie-droit (2e-3e-4e, 4h/5h/8h).
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_SEQ_ECONOMIE_DROIT_COLLEGE_OBJECTS = [
  { id:"ed1_besoin_ressource_rare", degree:"1", emoji:"🍞", label:"Simuler la rareté des ressources",
    text:"La classe reçoit une quantité limitée d'un « bien » fictif (jetons) à répartir entre plusieurs besoins concurrents ; les élèves doivent négocier une répartition, puis comparer les résultats obtenus par différents groupes.",
    fact:"Le plan d'études du cours d'introduction (IED) vise à sensibiliser aux problèmes économiques de consommation, production et répartition des richesses — cette simulation rend la notion de rareté immédiatement concrète.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"ed1_cas_juridique_famille", degree:"1", emoji:"⚖️", label:"Un petit cas juridique du quotidien",
    text:"Face à une situation fictive simple (un objet prêté et cassé), les élèves doivent d'abord distinguer ce qui relève d'une règle morale de ce qui relève d'une règle de droit, avant de proposer une résolution du cas.",
    fact:"Le plan d'études cite explicitement une approche ponctuelle de diverses réalités juridiques dans le cadre de la famille comme objectif de l'introduction au droit.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"ed2_role_agents_economiques_os", degree:"2", emoji:"🏭", label:"OS uniquement — Le rôle des agents économiques",
    text:"Par groupes, les élèves de l'option spécifique construisent un schéma reliant ménages, entreprises et État par des flux (travail, salaires, impôts, services) à partir d'exemples concrets tirés de l'actualité suisse.",
    fact:"Comprendre le rôle des agents économiques dans la société et l'interdépendance de leurs mécanismes est un objectif explicite du plan d'études pour l'option spécifique.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"ed2_hierarchie_droit_os", degree:"2", emoji:"📚", label:"OS uniquement — La hiérarchie des règles de droit",
    text:"Face à un conflit fictif entre deux règles de niveaux différents (loi cantonale contre loi fédérale), les élèves de l'option doivent déterminer laquelle prévaut en s'appuyant sur la hiérarchie des normes étudiée en cours.",
    fact:"Comprendre la hiérarchie des règles de droit est un objectif explicite du plan d'études en option spécifique dès la 2e année.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"ed3_critique_politique_os", degree:"3", emoji:"🗳️", label:"OS uniquement — Évaluer une politique économique réelle",
    text:"À partir d'un article de presse récent sur une décision économique de l'État, les élèves de l'option évaluent et critiquent la mesure en identifiant les valeurs et intérêts qui la sous-tendent.",
    fact:"Évaluer et critiquer les politiques conjoncturelles et structurelles menées par l'État est un objectif explicite du plan d'études pour l'option spécifique.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"ed3_cas_pratique_droit_os", degree:"3", emoji:"⚖️", label:"OS uniquement — Résoudre un cas pratique",
    text:"Face à un cas pratique juridique de complexité moyenne (litige de travail), les élèves de l'option identifient les règles de droit applicables et rédigent une solution argumentée en citant les textes légaux pertinents.",
    fact:"Résoudre des cas pratiques simples en s'appuyant sur des textes légaux est un objectif explicite des aptitudes visées par le plan d'études en option spécifique.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
  { id:"ed4_strategie_entreprise_os", degree:"4", emoji:"📈", label:"OS uniquement — Évaluer la stratégie d'une entreprise",
    text:"Sur un cas d'entreprise réelle et récente, les élèves de l'option évaluent sa stratégie économique dans le contexte national et international, avant de proposer une alternative argumentée.",
    fact:"Évaluer et critiquer les objectifs, stratégies et politiques des entreprises est un objectif explicite de fin de cursus en option spécifique.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"ed4_institutions_suisses_os", degree:"4", emoji:"🇨🇭", label:"OS uniquement — Simuler une votation fédérale",
    text:"Les élèves de l'option préparent puis simulent le débat d'une votation fédérale fictive, en s'appuyant sur leur connaissance des institutions politiques suisses pour construire des arguments réalistes.",
    fact:"Connaître les institutions politiques en général, suisses en particulier, est un objectif explicite du plan d'études pour l'option spécifique de fin de cursus.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqEconomieDroitCollegeObjectsForDegree(degree){ return MUSEE_SEQ_ECONOMIE_DROIT_COLLEGE_OBJECTS.filter(o=>o.degree===degree); }
window.MUSEE_SEQ_ECONOMIE_DROIT_COLLEGE_OBJECTS = MUSEE_SEQ_ECONOMIE_DROIT_COLLEGE_OBJECTS;
window.getSeqEconomieDroitCollegeObjectsForDegree = getSeqEconomieDroitCollegeObjectsForDegree;
