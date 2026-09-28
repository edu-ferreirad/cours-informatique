// SALLE OSP OSP MUSIQUE — 3e année — paliers court/moyen/long
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_MUSIQUE_ECG_3_OBJECTS = [
  { id:"deux_versions_meme_air", tier:"court", emoji:"📜", label:"Histoire de la musique : deux versions, un même air",
    text:"On fait écouter deux interprétations très différentes d'un même thème (une version baroque, une version jazz) et les élèves doivent lister par écrit tout ce qui change : tempo, instrumentation, ornementation — avant de deviner l'époque de chaque version sans indice donné.",
    fact:"Deviner l'époque à l'oreille, sans notation ni date, oblige l'élève à s'appuyer sur des indices sonores réels plutôt que sur une connaissance livresque apprise par cœur.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"remix_studio_numerique", tier:"court", emoji:"💻", label:"Atelier numérique : remixer un extrait",
    text:"À partir d'un même court extrait audio fourni à toute la classe, chaque élève doit produire, sur un logiciel simple, trois versions remixées aux ambiances totalement différentes (mélancolique, festive, inquiétante) en modifiant uniquement tempo, effets et instrumentation.",
    fact:"Travailler à partir d'une matière identique pour tous permet ensuite une comparaison directe en classe : les mêmes notes de départ peuvent raconter des histoires émotionnelles opposées selon les choix de production.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"concert_commente_classe", tier:"moyen", emoji:"🎤", label:"Répétition publique : le concert commenté",
    text:"En fin de trimestre, l'atelier se termine par un mini-concert où chaque interprète doit, avant de jouer, présenter en trente secondes son morceau à un public de camarades d'autres classes — s'entraîner à parler de musique aussi bien qu'à la jouer.",
    fact:"Présenter oralement son morceau avant de jouer change souvent l'écoute du public : une anecdote ou une explication du contexte de composition rend l'auditeur plus attentif à des détails qu'il aurait sinon manqués.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"simulation_concours_ms", tier:"moyen", emoji:"🏆", label:"Préparer le concours : simulation d'audition",
    text:"À l'approche du concours d'admission à la maturité spécialisée musique, chaque élève joue son morceau de présentation devant la classe entière dans les conditions exactes de l'audition réelle (temps limité, jury silencieux, pas de deuxième essai) — désamorcer le stress avant le jour J.",
    fact:"Rejouer plusieurs fois dans des conditions strictement identiques à l'épreuve réelle (même minutage, même silence du public) diminue mesurablement le trac le jour de la vraie audition, un principe bien documenté en préparation aux examens artistiques.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
  { id:"visite_repetition_orchestre", tier:"long", emoji:"🎻", label:"Sortie : observer une vraie répétition d'orchestre",
    text:"La classe assiste à une répétition (pas un concert) d'un orchestre ou ensemble professionnel, et chaque élève doit noter trois moments où le chef ou la cheffe interrompt le jeu, en essayant de comprendre pourquoi — la répétition révèle un travail invisible au concert final.",
    fact:"Assister à une répétition plutôt qu'à un concert change complètement la perception d'une œuvre : on découvre que même des musiciens professionnels reprennent le même passage plusieurs fois avant d'obtenir le résultat attendu.",
    anchor:{distance:2.3,angle:340,height:WALL_H} },
  { id:"playlist_argumentee_style", tier:"long", emoji:"🎧", label:"Devoir maison : construire une playlist argumentée",
    text:"Chaque élève constitue une playlist de dix morceaux illustrant l'évolution d'un style musical étudié en cours, avec pour chaque morceau une justification écrite de trois lignes expliquant en quoi il représente une étape précise de cette évolution.",
    fact:"Choisir et justifier soi-même des exemples, plutôt que de recevoir une liste déjà faite par l'enseignant, transforme la connaissance stylistique en une compétence active de sélection et d'argumentation.",
    anchor:{distance:5.7,angle:15,height:SHELF_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getMusique3EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_MUSIQUE_ECG_3_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_MUSIQUE_ECG_3_OBJECTS = MUSEE_MUSIQUE_ECG_3_OBJECTS;
window.getMusique3EcgObjectsForParcours = getMusique3EcgObjectsForParcours;
