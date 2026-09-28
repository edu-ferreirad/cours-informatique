// SALLE OSP OSP PÉDAGOGIE — 3e année — paliers court/moyen/long
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_PEDAGOGIE_ECG_3_OBJECTS = [
  { id:"jeu_mathematique_manipulable", tier:"court", emoji:"🔢", label:"Mathématiques renforcées : inventer un jeu de manipulation",
    text:"Par groupes, les élèves conçoivent un jeu physique et manipulable (avec des objets réels, pas un écran) destiné à faire découvrir une notion mathématique simple à un enfant de primaire, puis testent leur jeu directement sur des camarades qui jouent le rôle d'élèves.",
    fact:"Concevoir un jeu manipulable oblige à traduire une notion abstraite en une expérience concrète et physique — exactement la démarche pédagogique de base enseignée ensuite dans les formations d'enseignant du primaire.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"observation_recreation_psychologie", tier:"court", emoji:"🧠", label:"Psychologie de l'enfant : observer une récréation",
    text:"Lors d'une sortie d'observation dans une cour d'école primaire, chaque élève doit noter, sans intervenir, trois comportements sociaux différents observés chez les enfants (jeu coopératif, exclusion, résolution de conflit) puis les analyser en classe à la lumière des notions de développement étudiées.",
    fact:"Observer sans intervenir, en simple témoin silencieux, est un exercice difficile pour de jeunes adultes habitués à vouloir immédiatement aider ou corriger — c'est pourtant une compétence professionnelle réelle de l'enseignant en formation continue.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"experience_scientifique_vulgarisee", tier:"moyen", emoji:"🔬", label:"Sciences : vulgariser une expérience de laboratoire",
    text:"Après avoir réalisé une expérience de chimie ou de physique en classe, chaque élève doit la réexpliquer et si possible la reproduire en version simplifiée et sécurisée, pensée pour être menée avec des enfants de primaire — traduire la rigueur scientifique en pédagogie accessible et sûre.",
    fact:"Adapter une expérience pour de jeunes enfants exige souvent plus de créativité pédagogique que l'expérience originale elle-même : trouver un équivalent sûr et visuellement spectaculaire à un phénomène scientifique n'est jamais évident.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"seance_dessin_consignes_precises", tier:"moyen", emoji:"🎨", label:"Discipline artistique : tester des consignes pour enfants",
    text:"Dans le cours artistique choisi, les élèves testent entre eux différentes formulations de consignes pour une même activité créative, puis identifient laquelle a produit le moins d'incompréhension — apprendre à formuler une consigne claire est une compétence en soi, distincte de la créativité elle-même.",
    fact:"Deux formulations d'une même consigne, en apparence équivalentes pour un adulte, peuvent produire des résultats très différents chez de jeunes enfants — la clarté d'une consigne se teste concrètement, elle ne se devine jamais à l'avance.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
  { id:"stage_classe_journal_observation", tier:"long", emoji:"📓", label:"Pendant le stage : le journal d'observation de classe",
    text:"Durant son stage pratique obligatoire dans une classe ou une structure d'accueil de la petite enfance, l'élève tient un journal quotidien distinguant systématiquement ce qu'il a observé factuellement de ce qu'il en a personnellement interprété — une distinction méthodologique essentielle à tout futur enseignant.",
    fact:"Confondre observation factuelle (\"l'enfant a pleuré\") et interprétation personnelle (\"l'enfant était triste\") est une erreur fréquente chez les stagiaires débutants — ce journal entraîne explicitement à séparer les deux dès le début du parcours.",
    anchor:{distance:2.3,angle:340,height:WALL_H} },
  { id:"projet_sequence_complete_annee", tier:"long", emoji:"📚", label:"Aboutissement : concevoir une séquence complète",
    text:"En fin de 3e année, chaque élève conçoit une courte séquence pédagogique complète sur un thème au choix (trois séances progressives, objectifs, matériel), présentée devant la classe qui joue alternativement le rôle d'élèves puis celui d'un jury critique évaluant la cohérence pédagogique.",
    fact:"Ce double rôle du public — d'abord élèves à instruire, puis jury critique évaluant la démarche — permet à chaque présentateur de recevoir un retour à la fois sur l'expérience vécue par ses \"élèves\" et sur la solidité pédagogique de sa construction.",
    anchor:{distance:5.7,angle:15,height:SHELF_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getPedagogie3EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_PEDAGOGIE_ECG_3_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_PEDAGOGIE_ECG_3_OBJECTS = MUSEE_PEDAGOGIE_ECG_3_OBJECTS;
window.getPedagogie3EcgObjectsForParcours = getPedagogie3EcgObjectsForParcours;
