// ============================================================================
// SALLE ARTS VISUELS — COLLÈGE DE GENÈVE (DF/OS/OC, 1ère-4e)
// Contenu reformulé à partir du Plan d'études du Collège de Genève,
// section Arts visuels (Arts plastiques + Histoire de l'art) p. 52-57.
// Aucun énoncé n'est copié tel quel.
// ============================================================================
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_ARTS_VISUELS_COLLEGE_OBJECTS = [
  { id:"deux_volets_arts_visuels", tier:"court", emoji:"🎨", label:"Deux volets, une même discipline",
    text:"Les arts visuels réunissent deux enseignements complémentaires : les arts plastiques, où l'élève pratique et expérimente, et l'histoire de l'art, où il développe un regard critique sur les œuvres du passé et du présent — la pratique et la théorie s'y nourrissant mutuellement.",
    fact:"Le plan d'études présente la communication visuelle comme ayant une \"place prépondérante\" dans notre culture actuelle, ce qui justifie l'étude des arts plastiques comme une expérience formative jugée indispensable pour tous les élèves.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"observation_experimentation_ateliers", tier:"court", emoji:"🖌️", label:"Réflexion critique, observation, expérimentation",
    text:"L'enseignement des arts plastiques propose des apprentissages dans différents ateliers, où la confrontation entre la tradition et les attitudes nouvelles s'effectue par la réflexion critique, l'observation et l'expérimentation — trois démarches indissociables de la pratique artistique.",
    fact:"Le programme met volontairement en perspective passé et présent : l'élève n'apprend jamais une technique artistique isolée de l'histoire de la pensée des artistes et des enjeux de l'art contemporain.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"regard_critique_image_environnement", tier:"court", emoji:"👁️", label:"Un regard critique sur les images qui nous entourent",
    text:"L'enseignement développe le sens critique de l'élève face à ses propres images et à celles de l'environnement social — dans un monde saturé d'images publicitaires, médiatiques et numériques, savoir les analyser devient une compétence citoyenne à part entière.",
    fact:"Cette compétence critique face à l'image est explicitement reliée par le plan d'études au fait que l'image, dans les arts comme dans les médias, \"transmet des valeurs\" et \"peut exercer une forme de pouvoir sur le spectateur\".",
    anchor:{distance:1.4,angle:160,height:DESK_H} },
  { id:"histoire_art_regard_critique_xxe", tier:"court", emoji:"🖼️", label:"L'histoire de l'art, un outil de compréhension du présent",
    text:"Le cours d'histoire de l'art donne aux élèves les moyens de se forger un regard critique personnel sur le monde de la création, en privilégiant l'étude du XXe siècle et de ses origines pour mieux comprendre leur propre époque.",
    fact:"Ce choix de privilégier le XXe siècle et ses origines, plutôt qu'un survol chronologique exhaustif depuis l'Antiquité, reflète un objectif pédagogique assumé : éclairer le présent est jugé prioritaire par rapport à l'exhaustivité historique.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"vocabulaire_plastique_technique", tier:"moyen", emoji:"🎨", label:"Maîtriser le vocabulaire plastique",
    text:"L'élève acquiert le vocabulaire plastique et les notions concernant le dessin, la couleur, le volume, l'espace et la composition : valeurs claires/foncées, couleurs primaires/secondaires/tertiaires, cadrage, proportions, vision bi- et tridimensionnelle.",
    fact:"Ce vocabulaire technique précis (contrastes chaud/froid, plein/vide, statisme/dynamisme) permet à l'élève de décrire et d'analyser une œuvre avec la même rigueur qu'un texte littéraire s'analyse avec des outils grammaticaux précis.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"confrontation_modeles_passe_present", tier:"moyen", emoji:"🔄", label:"Confronter modèles anciens et actuels",
    text:"En option spécifique, la formation passe par la confrontation avec les modèles du passé (copie, analyse, variation) et la familiarisation avec les modèles du présent, avant une discussion du modèle moderne et contemporain qui développe le sens critique de l'élève.",
    fact:"Cette étape de confrontation encourage explicitement l'élève à \"prendre des risques\" dans son travail créatif — l'imitation d'un modèle du passé n'est jamais une fin en soi, mais une étape vers une expérimentation personnelle assumée.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"analyse_oeuvre_interpretation", tier:"moyen", emoji:"🔍", label:"Analyser une œuvre, proposer une interprétation",
    text:"L'élève est capable d'analyser un objet ou une œuvre d'art selon les méthodes apprises et d'en proposer une interprétation, de comparer des œuvres d'époques, de techniques ou de civilisations différentes, et de justifier une prise de position personnelle argumentée.",
    fact:"La capacité à \"justifier une prise de position personnelle\" sur une œuvre distingue l'analyse artistique attendue d'un simple jugement de goût (\"j'aime\" ou \"je n'aime pas\") : l'argumentation doit toujours s'appuyer sur des éléments observables.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"visites_musees_terrain", tier:"moyen", emoji:"🏛️", label:"Un travail \"sur le terrain\"",
    text:"Dans la mesure du possible, le travail \"sur le terrain\" est encouragé, sous forme de visites mais aussi de recherches et travaux personnels dans les musées, galeries, places et édifices publics, ou directement auprès des créateurs eux-mêmes.",
    fact:"Cette sortie délibérée du cadre de la salle de classe reconnaît qu'une œuvre d'art se comprend souvent mieux face à face, dans son contexte réel d'exposition, qu'à travers une simple reproduction imprimée ou projetée.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
  { id:"image_message_pouvoir", tier:"long", emoji:"⚡", label:"L'image, porteuse de valeurs et de pouvoir",
    text:"L'élève prend conscience que l'image — dans les arts, les médias, les nouvelles technologies — véhicule toujours un message, transmet des valeurs, et peut exercer une forme de pouvoir sur le spectateur, jamais neutre ou purement décorative.",
    fact:"Cette conscience du pouvoir de l'image, développée dès le cours d'histoire de l'art, rejoint directement les objectifs du cours d'éducation aux médias étudié séparément au cycle d'orientation, mais approfondi ici sous l'angle spécifiquement artistique.",
    anchor:{distance:6.0,angle:70,height:SHELF_H} },
  { id:"influence_technologies_arts", tier:"long", emoji:"💻", label:"Les technologies transforment les arts visuels",
    text:"L'élève mesure l'influence des découvertes technologiques sur les arts visuels et peut expliquer les principales phases de transition historique durant lesquelles, parallèlement aux transformations de la société, le langage artistique lui-même se modifie.",
    fact:"Le plan d'études cite explicitement les images fractales, les images de synthèse et la réalité virtuelle comme des liens directs entre arts visuels et informatique — l'art numérique n'y est donc pas traité comme un sujet marginal.",
    anchor:{distance:2.3,angle:340,height:WALL_H} },
  { id:"creativite_projet_personnel_arts", tier:"long", emoji:"🎯", label:"Vers un projet personnel affirmé",
    text:"L'approfondissement progressif en option spécifique concourt à éveiller le potentiel de créativité personnelle de l'élève et à lui donner les moyens d'une autonomie de production et de réflexion telle qu'il puisse conduire une recherche et développer un projet cohérent.",
    fact:"Cette progression vers l'autonomie créative complète, sur quatre ans, culmine dans une démarche personnelle fortement affirmée — l'élève passant du statut d'apprenti technique à celui de créateur capable de mener son propre projet.",
    anchor:{distance:4.4,angle:185,height:DESK_H} },
  { id:"liens_multiples_arts_visuels", tier:"long", emoji:"🔗", label:"Une discipline à la croisée de tous les savoirs",
    text:"Les arts visuels tissent des liens avec de très nombreuses disciplines : histoire, histoire des religions, sociologie, français et langues vivantes, langues anciennes, philosophie, musique, théâtre, géographie, sciences, mathématiques, économie et droit, informatique.",
    fact:"Cette liste exceptionnellement longue de disciplines connectées aux arts visuels illustre une idée centrale du plan d'études : comprendre une œuvre d'art exige souvent de mobiliser des connaissances venues de très nombreux horizons différents à la fois.",
    anchor:{distance:5.7,angle:15,height:SHELF_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getArtsVisuelsCollegeObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_ARTS_VISUELS_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_ARTS_VISUELS_COLLEGE_OBJECTS = MUSEE_ARTS_VISUELS_COLLEGE_OBJECTS;
window.getArtsVisuelsCollegeObjectsForParcours = getArtsVisuelsCollegeObjectsForParcours;
