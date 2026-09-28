// SALLE OSP OSP PÉDAGOGIE — 2e année — paliers court/moyen/long
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_PEDAGOGIE_ECG_2_OBJECTS = [
  { id:"expliquer_notion_a_un_enfant", tier:"court", emoji:"🍎", label:"Français renforcé : expliquer une notion à un enfant de 6 ans",
    text:"Chaque élève doit réexpliquer une notion de mathématiques ou de sciences qu'il maîtrise, mais en utilisant uniquement un vocabulaire compréhensible par un enfant de six ans, sans aucun mot technique — un exercice de simplification bien plus difficile qu'il n'y paraît au premier abord.",
    fact:"Réussir à expliquer simplement une notion complexe révèle presque toujours si on la maîtrise vraiment soi-même : dès qu'on ne peut plus se cacher derrière un vocabulaire technique, les zones d'incompréhension personnelles apparaissent immédiatement.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"carte_mentale_periode_histoire", tier:"court", emoji:"🗺️", label:"Histoire-géographie : la carte mentale simplifiée",
    text:"Après avoir étudié une période historique, chaque élève doit produire une carte mentale illustrée, destinée à un jeune élève de primaire, résumant l'essentiel en cinq images-clés maximum et aucune date précise — trier l'essentiel du détail secondaire.",
    fact:"Cet exercice de simplification radicale (cinq images maximum, aucune date) force à distinguer ce qui constitue vraiment l'essentiel d'une période historique, une compétence pédagogique aussi utile pour soi-même que pour transmettre ensuite à d'autres.",
    anchor:{distance:1.4,angle:160,height:DESK_H} },
  { id:"debat_autorite_philosophie", tier:"moyen", emoji:"🤔", label:"Philosophie : débattre de l'autorité juste",
    text:"La classe débat d'un cas concret et fictif de conflit d'autorité en classe (un élève refuse une consigne) sous deux angles opposés : celui qui privilégie la règle stricte, celui qui privilégie la négociation — sans qu'aucune des deux positions ne soit présentée comme évidemment la bonne.",
    fact:"Ce débat révèle souvent aux futurs enseignants qu'il n'existe aucune réponse unique et universelle à la question de l'autorité en classe — chaque situation réelle demande un jugement contextuel, jamais une règle appliquée mécaniquement.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"exercice_diction_face_classe", tier:"moyen", emoji:"🗣️", label:"Techniques de communication orale : lire une histoire à voix haute",
    text:"Chaque élève doit lire à voix haute un court conte devant la classe, en variant intentionnellement le ton, le rythme et le volume à trois moments précis du texte pour maintenir l'attention d'un public jeune — la lecture à voix haute comme véritable compétence technique à travailler.",
    fact:"Une lecture monotone perd l'attention d'un jeune enfant en quelques minutes seulement : varier consciemment sa voix n'est donc pas un supplément décoratif, mais un outil professionnel concret pour tout futur enseignant du primaire.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"preparation_sejour_linguistique_immersion", tier:"long", emoji:"🇩🇪", label:"Vers la MS : préparer son séjour linguistique",
    text:"En amont du séjour linguistique obligatoire de six semaines exigé pour la maturité spécialisée pédagogie, l'élève prépare un carnet d'objectifs personnels précis (vocabulaire pédagogique en allemand, observation d'une classe locale) plutôt que de partir sans but pédagogique défini.",
    fact:"Un séjour linguistique préparé avec des objectifs pédagogiques précis, et pas seulement touristiques, permet de revenir avec un vocabulaire professionnel réellement utile pour une future carrière d'enseignant, au-delà de la simple pratique conversationnelle générale.",
    anchor:{distance:6.0,angle:70,height:SHELF_H} },
  { id:"simulation_reunion_parents", tier:"long", emoji:"👨‍👩‍👧", label:"Mise en situation : la réunion de parents simulée",
    text:"Un groupe d'élèves joue le rôle de parents aux attentes contradictoires (l'un veut plus de devoirs, l'autre moins de pression scolaire) face à un élève jouant l'enseignant, qui doit gérer la discussion sans donner raison uniquement à un seul camp.",
    fact:"Cette simulation révèle rapidement aux futurs enseignants une réalité du métier souvent sous-estimée : gérer des attentes parentales contradictoires demande une diplomatie aussi importante que la seule compétence pédagogique face aux élèves eux-mêmes.",
    anchor:{distance:4.4,angle:185,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getPedagogie2EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_PEDAGOGIE_ECG_2_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_PEDAGOGIE_ECG_2_OBJECTS = MUSEE_PEDAGOGIE_ECG_2_OBJECTS;
window.getPedagogie2EcgObjectsForParcours = getPedagogie2EcgObjectsForParcours;
