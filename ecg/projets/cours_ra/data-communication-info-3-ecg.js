// SALLE OSP OSP COMMUNICATION ET INFORMATION — 3e année — paliers court/moyen/long
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_COMMUNICATION_INFO_ECG_3_OBJECTS = [
  { id:"audit_traces_numeriques", tier:"court", emoji:"🔍", label:"Numérique et société : l'audit de ses propres traces",
    text:"Chaque élève consulte les paramètres de confidentialité de deux applications qu'il utilise réellement et note trois informations personnelles collectées qu'il ignorait — un audit concret de sa propre exposition numérique, plutôt qu'un cours théorique sur la protection des données.",
    fact:"Découvrir concrètement dans ses propres réglages ce qu'une application collecte a un impact bien plus fort sur les habitudes numériques qu'un discours général sur les dangers d'internet.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"probleme_budget_reel_maths", tier:"court", emoji:"🔢", label:"Mathématiques appliquées : le budget d'un événement fictif",
    text:"Les élèves reçoivent un budget fixe pour organiser un événement fictif (salon touristique, lancement de produit) et doivent répartir les postes de dépense (location, communication, personnel) en respectant des contraintes de pourcentage imposées — les mathématiques au service d'une décision concrète.",
    fact:"Ce type de problème budgétaire, ancré dans un contexte professionnel réaliste, mobilise exactement les mêmes compétences de calcul que les exercices abstraits, mais rend visible leur utilité immédiate dans un futur métier de gestion.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"bilan_comptable_association", tier:"moyen", emoji:"🧮", label:"Gestion et comptabilité : tenir les comptes d'une association fictive",
    text:"Les élèves reçoivent une liste réaliste de recettes et dépenses sur une année pour une association fictive et doivent construire un bilan comptable simple, en repérant volontairement une erreur glissée dans les données de départ.",
    fact:"Glisser volontairement une erreur dans les données fournies transforme l'exercice de simple application mécanique en véritable vérification critique, une compétence bien plus proche de la réalité du métier de gestionnaire.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"pitch_option_complementaire", tier:"moyen", emoji:"🎯", label:"Choisir son option complémentaire : le pitch de motivation",
    text:"Avant de choisir son cours en option complémentaire de 3e année, chaque élève doit rédiger et présenter oralement en deux minutes les raisons précises de son choix — transformer une simple case à cocher en une véritable réflexion argumentée sur son propre parcours.",
    fact:"Verbaliser explicitement les raisons d'un choix d'orientation, plutôt que de le faire par simple préférence instinctive, aide souvent l'élève à repérer une incohérence ou, au contraire, à confirmer solidement sa décision.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
  { id:"simulation_conference_presse", tier:"long", emoji:"🎙️", label:"Simulation : la conférence de presse improvisée",
    text:"Un groupe présente un projet fictif devant la classe transformée en journalistes, qui doivent poser des questions imprévues et parfois difficiles — le groupe doit répondre en direct, sans préparer ses réponses à l'avance, comme dans une vraie conférence de presse.",
    fact:"Répondre à des questions réellement imprévues, plutôt qu'à des questions préparées à l'avance avec le groupe présentateur, entraîne une compétence de communication de crise directement utile dans de nombreux métiers de la communication.",
    anchor:{distance:2.3,angle:340,height:WALL_H} },
  { id:"revue_presse_hebdomadaire_classe", tier:"long", emoji:"📋", label:"Rituel hebdomadaire : la revue de presse tournante",
    text:"Chaque semaine, un élève différent présente en cinq minutes une sélection de trois actualités marquantes à toute la classe, en justifiant pourquoi il les a choisies plutôt que d'autres — un exercice régulier de tri et de hiérarchisation de l'information, pas seulement de résumé.",
    fact:"Devoir justifier un choix de sélection, et pas seulement résumer une actualité, entraîne directement la compétence de hiérarchisation attendue d'un futur journaliste ou spécialiste de l'information — décider ce qui mérite d'être mis en avant.",
    anchor:{distance:5.7,angle:15,height:SHELF_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getCommunicationInfo3EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_COMMUNICATION_INFO_ECG_3_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_COMMUNICATION_INFO_ECG_3_OBJECTS = MUSEE_COMMUNICATION_INFO_ECG_3_OBJECTS;
window.getCommunicationInfo3EcgObjectsForParcours = getCommunicationInfo3EcgObjectsForParcours;
