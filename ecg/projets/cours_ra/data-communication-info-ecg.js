// ============================================================================
// SALLE OSP COMMUNICATION ET INFORMATION — ÉCOLE DE CULTURE GÉNÉRALE
// (2e-3e années). Chaque objet = une séquence ou activité concrète en
// lien avec les disciplines réelles de la grille horaire OSP CI (brochure
// "Concrétisez vos projets" ECG Genève, éd. 2026-2027, p. 7). Contenu
// original — pas une citation du plan d'études.
// ============================================================================
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_COMMUNICATION_INFO_ECG_OBJECTS = [
  { id:"meme_info_trois_formats", tier:"court", emoji:"📰", label:"Atelier culture et langue : une info, trois formats",
    text:"À partir d'un même fait divers fourni, chaque élève doit le reformuler en trois versions : un tweet de 280 caractères, un chapeau d'article de 50 mots, un message vocal de trente secondes — même information, trois contraintes d'écriture totalement différentes.",
    fact:"Ce même exercice, répété sur des sujets variés au fil de l'année, entraîne un réflexe professionnel réel : savoir adapter instantanément le format d'un message selon le support, sans jamais trahir l'information de départ.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"audit_traces_numeriques", tier:"court", emoji:"🔍", label:"Numérique et société : l'audit de ses propres traces",
    text:"Chaque élève consulte les paramètres de confidentialité de deux applications qu'il utilise réellement et note trois informations personnelles collectées qu'il ignorait — un audit concret de sa propre exposition numérique, plutôt qu'un cours théorique sur la protection des données.",
    fact:"Découvrir concrètement dans ses propres réglages ce qu'une application collecte a un impact bien plus fort sur les habitudes numériques qu'un discours général sur les dangers d'internet.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"capsule_video_60_secondes", tier:"court", emoji:"🎬", label:"Multimédias : la capsule de 60 secondes",
    text:"Par groupes de trois, les élèves produisent une courte vidéo explicative de 60 secondes maximum sur un sujet donné, en respectant un cahier des charges précis (sous-titres obligatoires, un seul plan fixe, musique libre de droits) — contraintes techniques réelles d'un vrai brief de production.",
    fact:"Imposer une durée aussi courte oblige à des choix de montage radicaux : couper une information secondaire devient plus formateur, pour apprendre la hiérarchisation, qu'un montage sans limite de temps.",
    anchor:{distance:1.4,angle:160,height:DESK_H} },
  { id:"probleme_budget_reel_maths", tier:"court", emoji:"🔢", label:"Mathématiques appliquées : le budget d'un événement fictif",
    text:"Les élèves reçoivent un budget fixe pour organiser un événement fictif (salon touristique, lancement de produit) et doivent répartir les postes de dépense (location, communication, personnel) en respectant des contraintes de pourcentage imposées — les mathématiques au service d'une décision concrète.",
    fact:"Ce type de problème budgétaire, ancré dans un contexte professionnel réaliste, mobilise exactement les mêmes compétences de calcul que les exercices abstraits, mais rend visible leur utilité immédiate dans un futur métier de gestion.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"campagne_marketing_produit_fictif", tier:"moyen", emoji:"📈", label:"Économie et marketing : lancer un produit fictif",
    text:"Par groupes, les élèves inventent un produit ou service fictif et doivent en définir le public cible, le positionnement prix et une accroche publicitaire, avant de présenter leur stratégie face à la classe qui joue le rôle d'investisseurs à convaincre.",
    fact:"Jouer le rôle d'investisseurs sceptiques plutôt que de simples camarades bienveillants pousse les groupes présentateurs à anticiper de vraies objections commerciales, pas seulement à décrire une idée sans la défendre.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"bilan_comptable_association", tier:"moyen", emoji:"🧮", label:"Gestion et comptabilité : tenir les comptes d'une association fictive",
    text:"Les élèves reçoivent une liste réaliste de recettes et dépenses sur une année pour une association fictive et doivent construire un bilan comptable simple, en repérant volontairement une erreur glissée dans les données de départ.",
    fact:"Glisser volontairement une erreur dans les données fournies transforme l'exercice de simple application mécanique en véritable vérification critique, une compétence bien plus proche de la réalité du métier de gestionnaire.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"decryptage_une_journal", tier:"moyen", emoji:"🗞️", label:"Sociologie des médias : décrypter une une de journal",
    text:"Face à la une du jour de trois journaux différents traitant du même événement, les élèves comparent choix de titre, de photo et d'angle, puis formulent une hypothèse sur le public visé par chaque journal en fonction de ces choix éditoriaux.",
    fact:"Comparer plusieurs unes le même jour révèle immédiatement, de façon très concrète, que le choix d'une photo ou d'un titre n'est jamais neutre : chaque rédaction fait des choix éditoriaux visibles dès la première page.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"pitch_option_complementaire", tier:"moyen", emoji:"🎯", label:"Choisir son option complémentaire : le pitch de motivation",
    text:"Avant de choisir son cours en option complémentaire de 3e année, chaque élève doit rédiger et présenter oralement en deux minutes les raisons précises de son choix — transformer une simple case à cocher en une véritable réflexion argumentée sur son propre parcours.",
    fact:"Verbaliser explicitement les raisons d'un choix d'orientation, plutôt que de le faire par simple préférence instinctive, aide souvent l'élève à repérer une incohérence ou, au contraire, à confirmer solidement sa décision.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
  { id:"dossier_veille_medias_langues", tier:"long", emoji:"🌍", label:"Vers la MS : constituer un dossier de veille en langue étrangère",
    text:"En préparation du séjour linguistique exigé pour la maturité spécialisée, l'élève constitue sur plusieurs semaines un dossier de veille médiatique dans l'une de ses langues secondes, résumant chaque semaine un article d'actualité lu en version originale.",
    fact:"Cette veille régulière en langue étrangère, plus qu'un simple cours de grammaire, prépare concrètement à comprendre l'information locale une fois arrivé en immersion, où l'actualité du pays devient un sujet de conversation quotidien.",
    anchor:{distance:6.0,angle:70,height:SHELF_H} },
  { id:"simulation_conference_presse", tier:"long", emoji:"🎙️", label:"Simulation : la conférence de presse improvisée",
    text:"Un groupe présente un projet fictif devant la classe transformée en journalistes, qui doivent poser des questions imprévues et parfois difficiles — le groupe doit répondre en direct, sans préparer ses réponses à l'avance, comme dans une vraie conférence de presse.",
    fact:"Répondre à des questions réellement imprévues, plutôt qu'à des questions préparées à l'avance avec le groupe présentateur, entraîne une compétence de communication de crise directement utile dans de nombreux métiers de la communication.",
    anchor:{distance:2.3,angle:340,height:WALL_H} },
  { id:"carnet_observation_stage_ci", tier:"long", emoji:"📓", label:"Pendant le stage : le carnet d'observation métier",
    text:"Durant le stage pratique obligatoire, l'élève note chaque jour une tâche de communication ou de gestion de l'information observée ou réalisée, et identifie en fin de semaine laquelle lui a demandé le plus de rigueur méthodologique, au-delà de la seule créativité.",
    fact:"Ce suivi révèle souvent aux élèves que les métiers de la communication reposent sur bien plus de rigueur organisationnelle (délais, validation, coordination) qu'ils ne l'imaginaient avant leur premier contact réel avec le milieu professionnel.",
    anchor:{distance:4.4,angle:185,height:DESK_H} },
  { id:"revue_presse_hebdomadaire_classe", tier:"long", emoji:"📋", label:"Rituel hebdomadaire : la revue de presse tournante",
    text:"Chaque semaine, un élève différent présente en cinq minutes une sélection de trois actualités marquantes à toute la classe, en justifiant pourquoi il les a choisies plutôt que d'autres — un exercice régulier de tri et de hiérarchisation de l'information, pas seulement de résumé.",
    fact:"Devoir justifier un choix de sélection, et pas seulement résumer une actualité, entraîne directement la compétence de hiérarchisation attendue d'un futur journaliste ou spécialiste de l'information — décider ce qui mérite d'être mis en avant.",
    anchor:{distance:5.7,angle:15,height:SHELF_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getCommunicationInfoEcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_COMMUNICATION_INFO_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_COMMUNICATION_INFO_ECG_OBJECTS = MUSEE_COMMUNICATION_INFO_ECG_OBJECTS;
window.getCommunicationInfoEcgObjectsForParcours = getCommunicationInfoEcgObjectsForParcours;
