// ============================================================================
// SALLE OSP MUSIQUE — ÉCOLE DE CULTURE GÉNÉRALE (2e-3e années)
// Chaque objet = une séquence ou activité concrète en lien avec les
// disciplines réelles de la grille horaire OSP Musique (brochure
// "Concrétisez vos projets" ECG Genève, éd. 2026-2027, p. 6). Contenu
// original — pas une citation du plan d'études.
// ============================================================================
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_MUSIQUE_ECG_OBJECTS = [
  { id:"boeuf_improvise_debut_atelier", tier:"court", emoji:"🎷", label:"Rituel d'atelier : le bœuf improvisé",
    text:"Chaque séance d'atelier commence par dix minutes de jeu collectif libre sur un accord donné, sans partition — chacun entre et sort comme il veut. L'objectif n'est pas la performance mais de réhabituer l'oreille et le corps à jouer avec les autres avant tout travail technique.",
    fact:"Ce rituel d'échauffement collectif casse la nervosité de \"jouer juste\" dès la première minute — l'erreur y est explicitement sans conséquence, ce qui libère souvent des idées qu'un cadre plus strict aurait bloquées.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"deux_versions_meme_air", tier:"court", emoji:"📜", label:"Histoire de la musique : deux versions, un même air",
    text:"On fait écouter deux interprétations très différentes d'un même thème (une version baroque, une version jazz) et les élèves doivent lister par écrit tout ce qui change : tempo, instrumentation, ornementation — avant de deviner l'époque de chaque version sans indice donné.",
    fact:"Deviner l'époque à l'oreille, sans notation ni date, oblige l'élève à s'appuyer sur des indices sonores réels plutôt que sur une connaissance livresque apprise par cœur.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"dictee_rythmique_flash", tier:"court", emoji:"🥁", label:"Solfège : dictée rythmique flash",
    text:"L'enseignant frappe un court motif rythmique deux fois seulement, les élèves doivent le retranscrire sur une portée vierge en moins d'une minute — l'exercice se répète dix fois avec des motifs de plus en plus complexes, sans jamais de troisième écoute.",
    fact:"Limiter volontairement à deux écoutes entraîne une mémoire auditive immédiate, une compétence directement transférable au déchiffrage rapide d'une partition inconnue en situation de concert.",
    anchor:{distance:1.4,angle:160,height:DESK_H} },
  { id:"remix_studio_numerique", tier:"court", emoji:"💻", label:"Atelier numérique : remixer un extrait",
    text:"À partir d'un même court extrait audio fourni à toute la classe, chaque élève doit produire, sur un logiciel simple, trois versions remixées aux ambiances totalement différentes (mélancolique, festive, inquiétante) en modifiant uniquement tempo, effets et instrumentation.",
    fact:"Travailler à partir d'une matière identique pour tous permet ensuite une comparaison directe en classe : les mêmes notes de départ peuvent raconter des histoires émotionnelles opposées selon les choix de production.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"cellule_huit_mesures", tier:"moyen", emoji:"✍️", label:"Composition : la cellule de huit mesures",
    text:"Chaque élève compose une cellule mélodique de huit mesures seulement, puis l'échange avec un camarade qui doit la développer et la transformer sur huit mesures supplémentaires — composer à plusieurs mains, en respectant une idée de départ qui n'est pas la sienne.",
    fact:"Devoir prolonger l'idée musicale d'un autre force à sortir de ses propres automatismes de composition et révèle souvent des directions qu'on n'aurait jamais explorées seul.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"concert_commente_classe", tier:"moyen", emoji:"🎤", label:"Répétition publique : le concert commenté",
    text:"En fin de trimestre, l'atelier se termine par un mini-concert où chaque interprète doit, avant de jouer, présenter en trente secondes son morceau à un public de camarades d'autres classes — s'entraîner à parler de musique aussi bien qu'à la jouer.",
    fact:"Présenter oralement son morceau avant de jouer change souvent l'écoute du public : une anecdote ou une explication du contexte de composition rend l'auditeur plus attentif à des détails qu'il aurait sinon manqués.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"grille_ecoute_critique", tier:"moyen", emoji:"👂", label:"Grille d'écoute : critiquer sans dire \"j'aime\"",
    text:"Après chaque prestation d'un camarade en atelier, la classe remplit une grille de trois questions précises (justesse, tenue du rythme, prise de risque) plutôt que de donner un simple avis global — la critique musicale s'apprend comme un vocabulaire technique, pas comme un jugement de goût.",
    fact:"Interdire le simple \"c'était bien\" au profit de critères précis oblige chaque élève à vraiment écouter en détail la prestation d'un camarade, plutôt que d'attendre passivement son propre tour de jeu.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"simulation_concours_ms", tier:"moyen", emoji:"🏆", label:"Préparer le concours : simulation d'audition",
    text:"À l'approche du concours d'admission à la maturité spécialisée musique, chaque élève joue son morceau de présentation devant la classe entière dans les conditions exactes de l'audition réelle (temps limité, jury silencieux, pas de deuxième essai) — désamorcer le stress avant le jour J.",
    fact:"Rejouer plusieurs fois dans des conditions strictement identiques à l'épreuve réelle (même minutage, même silence du public) diminue mesurablement le trac le jour de la vraie audition, un principe bien documenté en préparation aux examens artistiques.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
  { id:"tpc_carnet_repetition", tier:"long", emoji:"📓", label:"TPC musique : tenir un carnet de répétition",
    text:"Pour le travail personnel de certificat lié à une interprétation, l'élève tient sur plusieurs mois un carnet de répétition documentant les progrès, les blocages et les choix d'interprétation successifs — le jury évalue alors autant la démarche que le résultat final joué.",
    fact:"Ce carnet permet souvent de découvrir, en le relisant, qu'un blocage technique frustrant à un moment donné a en réalité forcé une solution d'interprétation plus originale que celle initialement prévue.",
    anchor:{distance:6.0,angle:70,height:SHELF_H} },
  { id:"visite_repetition_orchestre", tier:"long", emoji:"🎻", label:"Sortie : observer une vraie répétition d'orchestre",
    text:"La classe assiste à une répétition (pas un concert) d'un orchestre ou ensemble professionnel, et chaque élève doit noter trois moments où le chef ou la cheffe interrompt le jeu, en essayant de comprendre pourquoi — la répétition révèle un travail invisible au concert final.",
    fact:"Assister à une répétition plutôt qu'à un concert change complètement la perception d'une œuvre : on découvre que même des musiciens professionnels reprennent le même passage plusieurs fois avant d'obtenir le résultat attendu.",
    anchor:{distance:2.3,angle:340,height:WALL_H} },
  { id:"portrait_professionnel_stage", tier:"long", emoji:"🔍", label:"Avant le stage : dresser le portrait d'un métier musical",
    text:"En amont du stage pratique obligatoire, l'élève choisit un métier précis de la filière (professeur d'instrument, ingénieur du son, chef de chœur) et prépare cinq questions concrètes sur le quotidien réel de ce métier, au-delà de l'image souvent idéalisée du musicien sur scène.",
    fact:"La majorité des métiers musicaux comportent une part administrative ou pédagogique bien plus importante que ne l'imaginent la plupart des élèves avant leur premier stage — préparer des questions précises permet de le découvrir sans naïveté.",
    anchor:{distance:4.4,angle:185,height:DESK_H} },
  { id:"playlist_argumentee_style", tier:"long", emoji:"🎧", label:"Devoir maison : construire une playlist argumentée",
    text:"Chaque élève constitue une playlist de dix morceaux illustrant l'évolution d'un style musical étudié en cours, avec pour chaque morceau une justification écrite de trois lignes expliquant en quoi il représente une étape précise de cette évolution.",
    fact:"Choisir et justifier soi-même des exemples, plutôt que de recevoir une liste déjà faite par l'enseignant, transforme la connaissance stylistique en une compétence active de sélection et d'argumentation.",
    anchor:{distance:5.7,angle:15,height:SHELF_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getMusiqueEcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_MUSIQUE_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_MUSIQUE_ECG_OBJECTS = MUSEE_MUSIQUE_ECG_OBJECTS;
window.getMusiqueEcgObjectsForParcours = getMusiqueEcgObjectsForParcours;
