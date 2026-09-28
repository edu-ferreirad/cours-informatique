// SALLE OSP OSP THÉÂTRE — 2e année — paliers court/moyen/long
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_THEATRE_ECG_2_OBJECTS = [
  { id:"marche_neutre_puis_caracterisee", tier:"court", emoji:"🚶", label:"Échauffement plateau : la marche qui se transforme",
    text:"Les élèves marchent neutre dans l'espace, puis l'enseignant lance des consignes qui transforment progressivement la marche (porter un poids invisible, être en retard, se sentir observé) sans jamais mimer explicitement — le corps doit raconter avant que la tête n'explique.",
    fact:"Cet échauffement classique du théâtre-mouvement évite le piège du \"jeu illustratif\" (faire semblant très visiblement) en demandant une transformation intérieure d'abord, dont le mouvement n'est que la conséquence naturelle.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"fresque_chronologique_theatre", tier:"court", emoji:"📜", label:"Histoire du théâtre : construire une fresque murale",
    text:"Par petits groupes, les élèves recherchent et affichent sur un mur de classe une frise chronologique illustrée des grandes périodes théâtrales étudiées, chaque groupe étant responsable d'une période et devant la présenter aux autres en cinq minutes.",
    fact:"Faire construire et présenter la frise par les élèves eux-mêmes, plutôt que de la leur donner déjà faite, transforme une simple mémorisation de dates en une activité de recherche et de synthèse active.",
    anchor:{distance:1.4,angle:160,height:DESK_H} },
  { id:"chorégraphie_groupe_sans_musique", tier:"moyen", emoji:"💃", label:"Mouvement : chorégraphier sans musique",
    text:"Un groupe de six élèves doit créer une courte séquence chorégraphiée en silence total, uniquement rythmée par leur propre respiration audible — sans repère musical extérieur, le groupe doit se synchroniser uniquement par l'écoute mutuelle des corps.",
    fact:"Travailler sans musique révèle immédiatement les décalages de rythme entre les élèves, invisibles quand une musique extérieure masque les imprécisions individuelles de timing.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"filage_puis_debrief_chaud", tier:"moyen", emoji:"🔥", label:"Rituel : le filage suivi du débrief à chaud",
    text:"Après chaque répétition complète d'une scène (le filage), la classe a trois minutes strictement chronométrées pour donner des retours à chaud, un par un, sans discussion ni justification — avant une reprise immédiate intégrant ces retours, sans attendre la séance suivante.",
    fact:"Ce format de retour rapide et sans débat, courant dans les compagnies professionnelles, évite les discussions interminables qui retardent la vraie amélioration concrète du jeu sur le plateau.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"audition_blanche_ms_theatre", tier:"long", emoji:"🏆", label:"Préparer le concours : l'audition blanche filmée",
    text:"En vue du concours d'admission à la maturité spécialisée théâtre, chaque élève présente ses deux monologues préparés devant la classe, filmé, puis revisionne sa propre prestation en notant trois points précis à corriger avant la vraie audition.",
    fact:"Se revoir filmé révèle presque toujours des tics de jeu (regard fuyant, gestes parasites répétitifs) totalement invisibles pour l'acteur au moment même où il joue — un outil de correction bien plus efficace qu'un simple retour verbal.",
    anchor:{distance:6.0,angle:70,height:SHELF_H} },
  { id:"journal_bord_stage_theatre", tier:"long", emoji:"📓", label:"Pendant le stage : le journal de bord quotidien",
    text:"Durant son stage pratique obligatoire (compagnie, théâtre, structure culturelle), l'élève tient un journal de bord quotidien listant une tâche accomplie, une difficulté rencontrée et une chose apprise sur le métier réel — au-delà de la seule image de comédien sur scène.",
    fact:"Ce journal révèle presque toujours à l'élève l'ampleur du travail technique et administratif invisible derrière chaque spectacle — régie, communication, gestion de salle — bien avant que le rideau ne se lève.",
    anchor:{distance:4.4,angle:185,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getTheatre2EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_THEATRE_ECG_2_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_THEATRE_ECG_2_OBJECTS = MUSEE_THEATRE_ECG_2_OBJECTS;
window.getTheatre2EcgObjectsForParcours = getTheatre2EcgObjectsForParcours;
