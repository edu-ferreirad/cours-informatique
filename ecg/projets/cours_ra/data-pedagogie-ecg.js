// ============================================================================
// SALLE OSP PÉDAGOGIE — ÉCOLE DE CULTURE GÉNÉRALE (2e-3e années)
// Chaque objet = une séquence ou activité concrète en lien avec les
// disciplines réelles de la grille horaire OSP Pédagogie (brochure
// "Concrétisez vos projets" ECG Genève, éd. 2026-2027, p. 10). Contenu
// original — pas une citation du plan d'études.
// ============================================================================
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_PEDAGOGIE_ECG_OBJECTS = [
  { id:"expliquer_notion_a_un_enfant", tier:"court", emoji:"🍎", label:"Français renforcé : expliquer une notion à un enfant de 6 ans",
    text:"Chaque élève doit réexpliquer une notion de mathématiques ou de sciences qu'il maîtrise, mais en utilisant uniquement un vocabulaire compréhensible par un enfant de six ans, sans aucun mot technique — un exercice de simplification bien plus difficile qu'il n'y paraît au premier abord.",
    fact:"Réussir à expliquer simplement une notion complexe révèle presque toujours si on la maîtrise vraiment soi-même : dès qu'on ne peut plus se cacher derrière un vocabulaire technique, les zones d'incompréhension personnelles apparaissent immédiatement.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"jeu_mathematique_manipulable", tier:"court", emoji:"🔢", label:"Mathématiques renforcées : inventer un jeu de manipulation",
    text:"Par groupes, les élèves conçoivent un jeu physique et manipulable (avec des objets réels, pas un écran) destiné à faire découvrir une notion mathématique simple à un enfant de primaire, puis testent leur jeu directement sur des camarades qui jouent le rôle d'élèves.",
    fact:"Concevoir un jeu manipulable oblige à traduire une notion abstraite en une expérience concrète et physique — exactement la démarche pédagogique de base enseignée ensuite dans les formations d'enseignant du primaire.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"carte_mentale_periode_histoire", tier:"court", emoji:"🗺️", label:"Histoire-géographie : la carte mentale simplifiée",
    text:"Après avoir étudié une période historique, chaque élève doit produire une carte mentale illustrée, destinée à un jeune élève de primaire, résumant l'essentiel en cinq images-clés maximum et aucune date précise — trier l'essentiel du détail secondaire.",
    fact:"Cet exercice de simplification radicale (cinq images maximum, aucune date) force à distinguer ce qui constitue vraiment l'essentiel d'une période historique, une compétence pédagogique aussi utile pour soi-même que pour transmettre ensuite à d'autres.",
    anchor:{distance:1.4,angle:160,height:DESK_H} },
  { id:"observation_recreation_psychologie", tier:"court", emoji:"🧠", label:"Psychologie de l'enfant : observer une récréation",
    text:"Lors d'une sortie d'observation dans une cour d'école primaire, chaque élève doit noter, sans intervenir, trois comportements sociaux différents observés chez les enfants (jeu coopératif, exclusion, résolution de conflit) puis les analyser en classe à la lumière des notions de développement étudiées.",
    fact:"Observer sans intervenir, en simple témoin silencieux, est un exercice difficile pour de jeunes adultes habitués à vouloir immédiatement aider ou corriger — c'est pourtant une compétence professionnelle réelle de l'enseignant en formation continue.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"debat_autorite_philosophie", tier:"moyen", emoji:"🤔", label:"Philosophie : débattre de l'autorité juste",
    text:"La classe débat d'un cas concret et fictif de conflit d'autorité en classe (un élève refuse une consigne) sous deux angles opposés : celui qui privilégie la règle stricte, celui qui privilégie la négociation — sans qu'aucune des deux positions ne soit présentée comme évidemment la bonne.",
    fact:"Ce débat révèle souvent aux futurs enseignants qu'il n'existe aucune réponse unique et universelle à la question de l'autorité en classe — chaque situation réelle demande un jugement contextuel, jamais une règle appliquée mécaniquement.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"experience_scientifique_vulgarisee", tier:"moyen", emoji:"🔬", label:"Sciences : vulgariser une expérience de laboratoire",
    text:"Après avoir réalisé une expérience de chimie ou de physique en classe, chaque élève doit la réexpliquer et si possible la reproduire en version simplifiée et sécurisée, pensée pour être menée avec des enfants de primaire — traduire la rigueur scientifique en pédagogie accessible et sûre.",
    fact:"Adapter une expérience pour de jeunes enfants exige souvent plus de créativité pédagogique que l'expérience originale elle-même : trouver un équivalent sûr et visuellement spectaculaire à un phénomène scientifique n'est jamais évident.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"exercice_diction_face_classe", tier:"moyen", emoji:"🗣️", label:"Techniques de communication orale : lire une histoire à voix haute",
    text:"Chaque élève doit lire à voix haute un court conte devant la classe, en variant intentionnellement le ton, le rythme et le volume à trois moments précis du texte pour maintenir l'attention d'un public jeune — la lecture à voix haute comme véritable compétence technique à travailler.",
    fact:"Une lecture monotone perd l'attention d'un jeune enfant en quelques minutes seulement : varier consciemment sa voix n'est donc pas un supplément décoratif, mais un outil professionnel concret pour tout futur enseignant du primaire.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"seance_dessin_consignes_precises", tier:"moyen", emoji:"🎨", label:"Discipline artistique : tester des consignes pour enfants",
    text:"Dans le cours artistique choisi, les élèves testent entre eux différentes formulations de consignes pour une même activité créative, puis identifient laquelle a produit le moins d'incompréhension — apprendre à formuler une consigne claire est une compétence en soi, distincte de la créativité elle-même.",
    fact:"Deux formulations d'une même consigne, en apparence équivalentes pour un adulte, peuvent produire des résultats très différents chez de jeunes enfants — la clarté d'une consigne se teste concrètement, elle ne se devine jamais à l'avance.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
  { id:"preparation_sejour_linguistique_immersion", tier:"long", emoji:"🇩🇪", label:"Vers la MS : préparer son séjour linguistique",
    text:"En amont du séjour linguistique obligatoire de six semaines exigé pour la maturité spécialisée pédagogie, l'élève prépare un carnet d'objectifs personnels précis (vocabulaire pédagogique en allemand, observation d'une classe locale) plutôt que de partir sans but pédagogique défini.",
    fact:"Un séjour linguistique préparé avec des objectifs pédagogiques précis, et pas seulement touristiques, permet de revenir avec un vocabulaire professionnel réellement utile pour une future carrière d'enseignant, au-delà de la simple pratique conversationnelle générale.",
    anchor:{distance:6.0,angle:70,height:SHELF_H} },
  { id:"stage_classe_journal_observation", tier:"long", emoji:"📓", label:"Pendant le stage : le journal d'observation de classe",
    text:"Durant son stage pratique obligatoire dans une classe ou une structure d'accueil de la petite enfance, l'élève tient un journal quotidien distinguant systématiquement ce qu'il a observé factuellement de ce qu'il en a personnellement interprété — une distinction méthodologique essentielle à tout futur enseignant.",
    fact:"Confondre observation factuelle (\"l'enfant a pleuré\") et interprétation personnelle (\"l'enfant était triste\") est une erreur fréquente chez les stagiaires débutants — ce journal entraîne explicitement à séparer les deux dès le début du parcours.",
    anchor:{distance:2.3,angle:340,height:WALL_H} },
  { id:"simulation_reunion_parents", tier:"long", emoji:"👨‍👩‍👧", label:"Mise en situation : la réunion de parents simulée",
    text:"Un groupe d'élèves joue le rôle de parents aux attentes contradictoires (l'un veut plus de devoirs, l'autre moins de pression scolaire) face à un élève jouant l'enseignant, qui doit gérer la discussion sans donner raison uniquement à un seul camp.",
    fact:"Cette simulation révèle rapidement aux futurs enseignants une réalité du métier souvent sous-estimée : gérer des attentes parentales contradictoires demande une diplomatie aussi importante que la seule compétence pédagogique face aux élèves eux-mêmes.",
    anchor:{distance:4.4,angle:185,height:DESK_H} },
  { id:"projet_sequence_complete_annee", tier:"long", emoji:"📚", label:"Aboutissement : concevoir une séquence complète",
    text:"En fin de 3e année, chaque élève conçoit une courte séquence pédagogique complète sur un thème au choix (trois séances progressives, objectifs, matériel), présentée devant la classe qui joue alternativement le rôle d'élèves puis celui d'un jury critique évaluant la cohérence pédagogique.",
    fact:"Ce double rôle du public — d'abord élèves à instruire, puis jury critique évaluant la démarche — permet à chaque présentateur de recevoir un retour à la fois sur l'expérience vécue par ses \"élèves\" et sur la solidité pédagogique de sa construction.",
    anchor:{distance:5.7,angle:15,height:SHELF_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getPedagogieEcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_PEDAGOGIE_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_PEDAGOGIE_ECG_OBJECTS = MUSEE_PEDAGOGIE_ECG_OBJECTS;
window.getPedagogieEcgObjectsForParcours = getPedagogieEcgObjectsForParcours;
