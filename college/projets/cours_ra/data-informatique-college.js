// ============================================================================
// SALLE INFORMATIQUE — COLLÈGE DE GENÈVE (OC + IDS, 1ère-4e)
// Contenu reformulé à partir du Plan d'études du Collège de Genève,
// sections Informatique p. 32 et Introduction à la démarche scientifique
// (IDS) p. 33. Aucun énoncé n'est copié tel quel.
// ============================================================================
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_INFORMATIQUE_COLLEGE_OBJECTS = [
  { id:"au_dela_des_tic", tier:"court", emoji:"💻", label:"Bien plus que les outils numériques",
    text:"L'informatique, offerte en option complémentaire, dépasse la simple utilisation des technologies de l'information et de la communication (traitement de texte, éditeur d'images, internet) : elle sert à comprendre les techniques de base de la gestion et du traitement de l'information.",
    fact:"Cette distinction est explicite dans le plan d'études : savoir utiliser un logiciel n'est pas la même chose que comprendre les principes informatiques qui le rendent possible — l'option complémentaire vise ce second niveau de compréhension.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"modelisation_solutions_algorithmiques", tier:"court", emoji:"🧩", label:"Analyser pour modéliser une solution",
    text:"Le cours consiste à analyser des situations concrètes afin d'arriver à une modélisation et une conception de solutions algorithmiques, à travers la réalisation de projets et l'élaboration de diverses solutions possibles à un même problème.",
    fact:"Le plan d'études insiste sur la comparaison critique de plusieurs solutions possibles, au regard de la faisabilité humaine et technique — il n'existe presque jamais une seule bonne réponse informatique à un problème donné.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"ids_preparer_sciences_experimentales", tier:"court", emoji:"🔬", label:"IDS, préparer les sciences expérimentales",
    text:"Le cours d'introduction à la démarche scientifique (IDS), dispensé en 1ère année, rassemble les démarches et notions fondamentales communes aux disciplines scientifiques, préparant l'élève à adopter une démarche scientifique avant même d'aborder physique, biologie ou chimie.",
    fact:"Ce cours transversal d'une seule heure hebdomadaire au premier semestre agit comme un socle commun : plutôt que chaque science n'enseigne séparément les mêmes bases méthodologiques, l'IDS les rassemble en un seul lieu.",
    anchor:{distance:1.4,angle:160,height:DESK_H} },
  { id:"outils_scientifiques_ids", tier:"court", emoji:"📏", label:"Les outils de base du scientifique",
    text:"L'IDS permet aux élèves de se familiariser avec des outils quotidiennement utilisés en sciences expérimentales : utiliser la notation scientifique, tracer et interpréter des graphiques, estimer des ordres de grandeur, et transformer des unités de mesure.",
    fact:"Estimer la précision et l'incertitude inhérentes aux mesures fait partie des aptitudes attendues dès ce cours d'introduction — une rigueur méthodologique enseignée avant même le premier cours de physique proprement dit.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"structures_donnees_methodes", tier:"moyen", emoji:"🗂️", label:"Choisir la bonne structure de données",
    text:"L'élève apprend à identifier et choisir la structure de données, la méthode et l'outil les plus adaptés à une démarche conduisant pas à pas à la solution d'un problème — une compétence de choix méthodologique, pas seulement d'exécution technique.",
    fact:"Cette capacité à choisir parmi plusieurs approches possibles, plutôt que d'appliquer mécaniquement une seule méthode apprise par cœur, distingue une réelle compétence informatique d'une simple maîtrise d'outils logiciels.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"automatiser_evaluer_pertinence", tier:"moyen", emoji:"⚙️", label:"Automatiser, puis évaluer la solution",
    text:"L'élève est capable d'automatiser la solution proposée (en la transformant en programme) et d'en évaluer la pertinence, l'efficacité et la convivialité — programmer une solution n'est donc que la moitié du travail, l'évaluer critique en est l'autre moitié.",
    fact:"Cette exigence d'évaluation critique de sa propre solution, au-delà du simple fait qu'elle fonctionne, rejoint la démarche scientifique générale du plan d'études : un résultat correct ne suffit jamais sans une réflexion sur sa qualité.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"grandeurs_relations_modelisation_ids", tier:"moyen", emoji:"📊", label:"Grandeurs, relations, modélisation",
    text:"Le cours IDS s'articule autour de trois axes fondamentaux : les notions de grandeurs, les relations entre grandeurs, et la modélisation — un socle conceptuel commun qui sera ensuite réutilisé dans chacune des sciences expérimentales enseignées séparément.",
    fact:"L'élève y utilise avec aisance des outils mathématiques simples : puissances de dix, proportions, réalisations de graphiques et moyennes — les mêmes outils qui reviendront constamment en physique, biologie et chimie.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"documenter_analyses_reflexions", tier:"moyen", emoji:"📝", label:"Documenter sa démarche",
    text:"L'élève est capable de formuler et documenter ses analyses, réflexions, expériences et démarches — une compétence de communication écrite qui rend le travail informatique compréhensible et vérifiable par d'autres, pas seulement fonctionnel pour soi-même.",
    fact:"Cette exigence de documentation reflète une pratique professionnelle réelle du monde informatique : un programme non documenté, même s'il fonctionne, reste difficile à comprendre, corriger ou faire évoluer par quelqu'un d'autre.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
  { id:"interdisciplinarite_informatique_college", tier:"long", emoji:"🔗", label:"Une discipline profondément interdisciplinaire",
    text:"L'informatique ne fait pas uniquement appel à des notions mathématiques, scientifiques et techniques, mais aussi à des compétences créatives et organisationnelles lorsqu'il s'agit d'automatiser des algorithmes sous forme de programme — une démarche interdisciplinaire par nature.",
    fact:"Le plan d'études précise que le champ d'action de l'informatique touche tous les domaines d'une culture générale humaniste dans une société de l'information, établissant ainsi des liens avec l'ensemble des autres disciplines du collège.",
    anchor:{distance:6.0,angle:70,height:SHELF_H} },
  { id:"persévérance_recherche_solutions", tier:"long", emoji:"💪", label:"La persévérance, une attitude centrale",
    text:"Parmi les attitudes attendues figure explicitement la persévérance dans la recherche, l'élaboration et la mise en œuvre de solutions informatiques — un programme fonctionnel étant rarement obtenu du premier coup, mais après plusieurs tentatives et corrections successives.",
    fact:"Cette insistance sur la persévérance reconnaît implicitement une réalité de la pratique informatique : l'échec initial d'un programme (le bug) fait partie intégrante et normale du processus d'apprentissage, pas un signe d'incompétence.",
    anchor:{distance:2.3,angle:340,height:WALL_H} },
  { id:"travail_equipe_interdisciplinaire_info", tier:"long", emoji:"🤝", label:"Le projet en équipe et interdisciplinaire",
    text:"Parmi les attitudes attendues figure aussi l'ouverture au projet en équipe et au travail interdisciplinaire — l'informatique au collège n'est donc jamais pensée comme une pratique solitaire, mais comme une compétence collaborative à exercer avec d'autres.",
    fact:"Cette dimension collective rejoint la pratique réelle du développement informatique professionnel, où la quasi-totalité des projets significatifs se construisent aujourd'hui en équipe, rarement par une seule personne isolée.",
    anchor:{distance:4.4,angle:185,height:DESK_H} },
  { id:"relations_sciences_humaines_ids", tier:"long", emoji:"🌍", label:"Un pont avec les sciences humaines",
    text:"Au-delà des sciences expérimentales qu'il prépare directement, le cours IDS établit aussi des relations avec les sciences humaines — les outils de mesure, de graphique et d'estimation d'ordre de grandeur n'étant pas propres aux seules sciences dites \"dures\".",
    fact:"Cette ouverture vers les sciences humaines dès le tout premier semestre du collège illustre une conviction implicite du plan d'études : la rigueur méthodologique scientifique profite à toutes les disciplines, pas seulement aux sciences naturelles.",
    anchor:{distance:5.7,angle:15,height:SHELF_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getInformatiqueCollegeObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_INFORMATIQUE_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_INFORMATIQUE_COLLEGE_OBJECTS = MUSEE_INFORMATIQUE_COLLEGE_OBJECTS;
window.getInformatiqueCollegeObjectsForParcours = getInformatiqueCollegeObjectsForParcours;
