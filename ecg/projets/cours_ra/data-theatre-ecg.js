// ============================================================================
// SALLE OSP THÉÂTRE — ÉCOLE DE CULTURE GÉNÉRALE (2e-3e années)
// Chaque objet = une séquence ou activité concrète en lien avec les
// disciplines réelles de la grille horaire OSP Théâtre (brochure
// "Concrétisez vos projets" ECG Genève, éd. 2026-2027, p. 6). Contenu
// original — pas une citation du plan d'études.
// ============================================================================
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_THEATRE_ECG_OBJECTS = [
  { id:"marche_neutre_puis_caracterisee", tier:"court", emoji:"🚶", label:"Échauffement plateau : la marche qui se transforme",
    text:"Les élèves marchent neutre dans l'espace, puis l'enseignant lance des consignes qui transforment progressivement la marche (porter un poids invisible, être en retard, se sentir observé) sans jamais mimer explicitement — le corps doit raconter avant que la tête n'explique.",
    fact:"Cet échauffement classique du théâtre-mouvement évite le piège du \"jeu illustratif\" (faire semblant très visiblement) en demandant une transformation intérieure d'abord, dont le mouvement n'est que la conséquence naturelle.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"scene_muette_deux_intentions", tier:"court", emoji:"🎭", label:"Atelier jeu : la scène muette à double intention",
    text:"Deux élèves improvisent une scène sans un mot, chacun ayant reçu en secret une intention contradictoire de l'autre (l'un veut partir, l'autre veut retenir) — le public doit ensuite deviner les deux intentions rien qu'en observant le jeu corporel.",
    fact:"Retirer la parole oblige les comédiens à faire porter tout le sens par le regard, la posture et le rythme des déplacements — un entraînement direct à la précision du jeu physique, indépendamment du texte.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"fresque_chronologique_theatre", tier:"court", emoji:"📜", label:"Histoire du théâtre : construire une fresque murale",
    text:"Par petits groupes, les élèves recherchent et affichent sur un mur de classe une frise chronologique illustrée des grandes périodes théâtrales étudiées, chaque groupe étant responsable d'une période et devant la présenter aux autres en cinq minutes.",
    fact:"Faire construire et présenter la frise par les élèves eux-mêmes, plutôt que de la leur donner déjà faite, transforme une simple mémorisation de dates en une activité de recherche et de synthèse active.",
    anchor:{distance:1.4,angle:160,height:DESK_H} },
  { id:"decoupage_scene_intentions", tier:"court", emoji:"✂️", label:"Dramaturgie : découper une scène en intentions",
    text:"Face à un court extrait de pièce, les élèves doivent découper le texte en segments correspondant chacun à une intention différente du personnage (convaincre, séduire, menacer) et nommer précisément chaque intention en marge du texte, avant même de penser à le jouer.",
    fact:"Ce travail de découpage dramaturgique, fait avant toute mise en voix, évite le réflexe de jouer \"au ton\" sans comprendre ce que le personnage cherche vraiment à obtenir de son interlocuteur à chaque instant.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"chorégraphie_groupe_sans_musique", tier:"moyen", emoji:"💃", label:"Mouvement : chorégraphier sans musique",
    text:"Un groupe de six élèves doit créer une courte séquence chorégraphiée en silence total, uniquement rythmée par leur propre respiration audible — sans repère musical extérieur, le groupe doit se synchroniser uniquement par l'écoute mutuelle des corps.",
    fact:"Travailler sans musique révèle immédiatement les décalages de rythme entre les élèves, invisibles quand une musique extérieure masque les imprécisions individuelles de timing.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"maquette_scenographie_papier", tier:"moyen", emoji:"🏗️", label:"Création de spectacle : la maquette en carton",
    text:"Avant de mettre en scène un extrait choisi, chaque groupe construit une maquette en carton de son espace scénique (décor, entrées, positions du public) et doit justifier chaque choix par une intention dramaturgique précise, pas seulement esthétique.",
    fact:"Penser l'espace scénique à l'échelle réduite, avant de l'occuper physiquement, oblige à anticiper des problèmes concrets de déplacement et de visibilité que l'improvisation directe sur plateau ne révèle souvent que trop tard.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"filage_puis_debrief_chaud", tier:"moyen", emoji:"🔥", label:"Rituel : le filage suivi du débrief à chaud",
    text:"Après chaque répétition complète d'une scène (le filage), la classe a trois minutes strictement chronométrées pour donner des retours à chaud, un par un, sans discussion ni justification — avant une reprise immédiate intégrant ces retours, sans attendre la séance suivante.",
    fact:"Ce format de retour rapide et sans débat, courant dans les compagnies professionnelles, évite les discussions interminables qui retardent la vraie amélioration concrète du jeu sur le plateau.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"reecriture_texte_epoque", tier:"moyen", emoji:"✍️", label:"Dramaturgie appliquée : transposer une scène classique",
    text:"Les élèves reprennent une scène classique étudiée et doivent la transposer dans un contexte contemporain (un couloir de lycée, un groupe de discussion en ligne) en conservant exactement la même structure dramatique et les mêmes enjeux entre les personnages.",
    fact:"Ce travail de transposition révèle souvent, mieux qu'un commentaire théorique, ce qui rend une structure dramatique universelle : les mêmes rapports de pouvoir ou de séduction fonctionnent, presque intacts, quel que soit le contexte choisi.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
  { id:"audition_blanche_ms_theatre", tier:"long", emoji:"🏆", label:"Préparer le concours : l'audition blanche filmée",
    text:"En vue du concours d'admission à la maturité spécialisée théâtre, chaque élève présente ses deux monologues préparés devant la classe, filmé, puis revisionne sa propre prestation en notant trois points précis à corriger avant la vraie audition.",
    fact:"Se revoir filmé révèle presque toujours des tics de jeu (regard fuyant, gestes parasites répétitifs) totalement invisibles pour l'acteur au moment même où il joue — un outil de correction bien plus efficace qu'un simple retour verbal.",
    anchor:{distance:6.0,angle:70,height:SHELF_H} },
  { id:"spectacle_public_reel", tier:"long", emoji:"🎫", label:"Aboutissement : jouer devant un vrai public payant",
    text:"La création de spectacle de fin de 3e année n'est pas présentée qu'à la classe : elle est jouée au moins une fois devant un public extérieur réel (familles, autre classe, public invité) — l'enjeu de jouer pour des inconnus change radicalement la nature de l'engagement des élèves.",
    fact:"Un même filage peut sembler abouti en classe mais s'effondrer face à un vrai public — l'énergie, l'écoute et les réactions d'une salle inconnue révèlent des failles de jeu qu'aucune répétition entre élèves ne peut simuler.",
    anchor:{distance:2.3,angle:340,height:WALL_H} },
  { id:"journal_bord_stage_theatre", tier:"long", emoji:"📓", label:"Pendant le stage : le journal de bord quotidien",
    text:"Durant son stage pratique obligatoire (compagnie, théâtre, structure culturelle), l'élève tient un journal de bord quotidien listant une tâche accomplie, une difficulté rencontrée et une chose apprise sur le métier réel — au-delà de la seule image de comédien sur scène.",
    fact:"Ce journal révèle presque toujours à l'élève l'ampleur du travail technique et administratif invisible derrière chaque spectacle — régie, communication, gestion de salle — bien avant que le rideau ne se lève.",
    anchor:{distance:4.4,angle:185,height:DESK_H} },
  { id:"impro_contrainte_hebdomadaire", tier:"long", emoji:"✨", label:"Rituel hebdomadaire : l'improvisation à contrainte",
    text:"Chaque semaine, un binôme différent tire au sort une contrainte d'improvisation (jouer sans les mains, sans regarder son partenaire, en inversant les rapports de force en cours de scène) devant la classe — un entraînement régulier de la réactivité plutôt qu'un exercice isolé.",
    fact:"La régularité de ce rituel, plus que sa difficulté ponctuelle, est ce qui développe réellement la réactivité au fil de l'année : improviser une fois ne suffit jamais à automatiser ce réflexe scénique.",
    anchor:{distance:5.7,angle:15,height:SHELF_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getTheatreEcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_THEATRE_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_THEATRE_ECG_OBJECTS = MUSEE_THEATRE_ECG_OBJECTS;
window.getTheatreEcgObjectsForParcours = getTheatreEcgObjectsForParcours;
