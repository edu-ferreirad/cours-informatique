// SALLE OSP OSP MUSIQUE — 2e année — paliers court/moyen/long
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_MUSIQUE_ECG_2_OBJECTS = [
  { id:"boeuf_improvise_debut_atelier", tier:"court", emoji:"🎷", label:"Rituel d'atelier : le bœuf improvisé",
    text:"Chaque séance d'atelier commence par dix minutes de jeu collectif libre sur un accord donné, sans partition — chacun entre et sort comme il veut. L'objectif n'est pas la performance mais de réhabituer l'oreille et le corps à jouer avec les autres avant tout travail technique.",
    fact:"Ce rituel d'échauffement collectif casse la nervosité de \"jouer juste\" dès la première minute — l'erreur y est explicitement sans conséquence, ce qui libère souvent des idées qu'un cadre plus strict aurait bloquées.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"dictee_rythmique_flash", tier:"court", emoji:"🥁", label:"Solfège : dictée rythmique flash",
    text:"L'enseignant frappe un court motif rythmique deux fois seulement, les élèves doivent le retranscrire sur une portée vierge en moins d'une minute — l'exercice se répète dix fois avec des motifs de plus en plus complexes, sans jamais de troisième écoute.",
    fact:"Limiter volontairement à deux écoutes entraîne une mémoire auditive immédiate, une compétence directement transférable au déchiffrage rapide d'une partition inconnue en situation de concert.",
    anchor:{distance:1.4,angle:160,height:DESK_H} },
  { id:"cellule_huit_mesures", tier:"moyen", emoji:"✍️", label:"Composition : la cellule de huit mesures",
    text:"Chaque élève compose une cellule mélodique de huit mesures seulement, puis l'échange avec un camarade qui doit la développer et la transformer sur huit mesures supplémentaires — composer à plusieurs mains, en respectant une idée de départ qui n'est pas la sienne.",
    fact:"Devoir prolonger l'idée musicale d'un autre force à sortir de ses propres automatismes de composition et révèle souvent des directions qu'on n'aurait jamais explorées seul.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"grille_ecoute_critique", tier:"moyen", emoji:"👂", label:"Grille d'écoute : critiquer sans dire \"j'aime\"",
    text:"Après chaque prestation d'un camarade en atelier, la classe remplit une grille de trois questions précises (justesse, tenue du rythme, prise de risque) plutôt que de donner un simple avis global — la critique musicale s'apprend comme un vocabulaire technique, pas comme un jugement de goût.",
    fact:"Interdire le simple \"c'était bien\" au profit de critères précis oblige chaque élève à vraiment écouter en détail la prestation d'un camarade, plutôt que d'attendre passivement son propre tour de jeu.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"tpc_carnet_repetition", tier:"long", emoji:"📓", label:"TPC musique : tenir un carnet de répétition",
    text:"Pour le travail personnel de certificat lié à une interprétation, l'élève tient sur plusieurs mois un carnet de répétition documentant les progrès, les blocages et les choix d'interprétation successifs — le jury évalue alors autant la démarche que le résultat final joué.",
    fact:"Ce carnet permet souvent de découvrir, en le relisant, qu'un blocage technique frustrant à un moment donné a en réalité forcé une solution d'interprétation plus originale que celle initialement prévue.",
    anchor:{distance:6.0,angle:70,height:SHELF_H} },
  { id:"portrait_professionnel_stage", tier:"long", emoji:"🔍", label:"Avant le stage : dresser le portrait d'un métier musical",
    text:"En amont du stage pratique obligatoire, l'élève choisit un métier précis de la filière (professeur d'instrument, ingénieur du son, chef de chœur) et prépare cinq questions concrètes sur le quotidien réel de ce métier, au-delà de l'image souvent idéalisée du musicien sur scène.",
    fact:"La majorité des métiers musicaux comportent une part administrative ou pédagogique bien plus importante que ne l'imaginent la plupart des élèves avant leur premier stage — préparer des questions précises permet de le découvrir sans naïveté.",
    anchor:{distance:4.4,angle:185,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getMusique2EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_MUSIQUE_ECG_2_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_MUSIQUE_ECG_2_OBJECTS = MUSEE_MUSIQUE_ECG_2_OBJECTS;
window.getMusique2EcgObjectsForParcours = getMusique2EcgObjectsForParcours;
