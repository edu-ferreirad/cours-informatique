// SALLE OSP OSP THÉÂTRE — 3e année — paliers court/moyen/long
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_THEATRE_ECG_3_OBJECTS = [
  { id:"scene_muette_deux_intentions", tier:"court", emoji:"🎭", label:"Atelier jeu : la scène muette à double intention",
    text:"Deux élèves improvisent une scène sans un mot, chacun ayant reçu en secret une intention contradictoire de l'autre (l'un veut partir, l'autre veut retenir) — le public doit ensuite deviner les deux intentions rien qu'en observant le jeu corporel.",
    fact:"Retirer la parole oblige les comédiens à faire porter tout le sens par le regard, la posture et le rythme des déplacements — un entraînement direct à la précision du jeu physique, indépendamment du texte.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"decoupage_scene_intentions", tier:"court", emoji:"✂️", label:"Dramaturgie : découper une scène en intentions",
    text:"Face à un court extrait de pièce, les élèves doivent découper le texte en segments correspondant chacun à une intention différente du personnage (convaincre, séduire, menacer) et nommer précisément chaque intention en marge du texte, avant même de penser à le jouer.",
    fact:"Ce travail de découpage dramaturgique, fait avant toute mise en voix, évite le réflexe de jouer \"au ton\" sans comprendre ce que le personnage cherche vraiment à obtenir de son interlocuteur à chaque instant.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"maquette_scenographie_papier", tier:"moyen", emoji:"🏗️", label:"Création de spectacle : la maquette en carton",
    text:"Avant de mettre en scène un extrait choisi, chaque groupe construit une maquette en carton de son espace scénique (décor, entrées, positions du public) et doit justifier chaque choix par une intention dramaturgique précise, pas seulement esthétique.",
    fact:"Penser l'espace scénique à l'échelle réduite, avant de l'occuper physiquement, oblige à anticiper des problèmes concrets de déplacement et de visibilité que l'improvisation directe sur plateau ne révèle souvent que trop tard.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"reecriture_texte_epoque", tier:"moyen", emoji:"✍️", label:"Dramaturgie appliquée : transposer une scène classique",
    text:"Les élèves reprennent une scène classique étudiée et doivent la transposer dans un contexte contemporain (un couloir de lycée, un groupe de discussion en ligne) en conservant exactement la même structure dramatique et les mêmes enjeux entre les personnages.",
    fact:"Ce travail de transposition révèle souvent, mieux qu'un commentaire théorique, ce qui rend une structure dramatique universelle : les mêmes rapports de pouvoir ou de séduction fonctionnent, presque intacts, quel que soit le contexte choisi.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
  { id:"spectacle_public_reel", tier:"long", emoji:"🎫", label:"Aboutissement : jouer devant un vrai public payant",
    text:"La création de spectacle de fin de 3e année n'est pas présentée qu'à la classe : elle est jouée au moins une fois devant un public extérieur réel (familles, autre classe, public invité) — l'enjeu de jouer pour des inconnus change radicalement la nature de l'engagement des élèves.",
    fact:"Un même filage peut sembler abouti en classe mais s'effondrer face à un vrai public — l'énergie, l'écoute et les réactions d'une salle inconnue révèlent des failles de jeu qu'aucune répétition entre élèves ne peut simuler.",
    anchor:{distance:2.3,angle:340,height:WALL_H} },
  { id:"impro_contrainte_hebdomadaire", tier:"long", emoji:"✨", label:"Rituel hebdomadaire : l'improvisation à contrainte",
    text:"Chaque semaine, un binôme différent tire au sort une contrainte d'improvisation (jouer sans les mains, sans regarder son partenaire, en inversant les rapports de force en cours de scène) devant la classe — un entraînement régulier de la réactivité plutôt qu'un exercice isolé.",
    fact:"La régularité de ce rituel, plus que sa difficulté ponctuelle, est ce qui développe réellement la réactivité au fil de l'année : improviser une fois ne suffit jamais à automatiser ce réflexe scénique.",
    anchor:{distance:5.7,angle:15,height:SHELF_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getTheatre3EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_THEATRE_ECG_3_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_THEATRE_ECG_3_OBJECTS = MUSEE_THEATRE_ECG_3_OBJECTS;
window.getTheatre3EcgObjectsForParcours = getTheatre3EcgObjectsForParcours;
