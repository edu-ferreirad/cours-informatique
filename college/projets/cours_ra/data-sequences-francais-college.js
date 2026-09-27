// ============================================================================
// SALLE SÉQUENCES — FRANÇAIS — COLLÈGE DE GENÈVE
// Séquences et activités concrètes de classe, organisées par année (1ère à
// 4e), construites pour respecter les objectifs du plan d'études du Collège
// de Genève (DIP, 2018-2019, p. 9-11) — grille horaire DF 6h/4h/4h/4h.
// Contenu original, pas une citation du plan d'études.
// ============================================================================
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_FRANCAIS_COLLEGE_OBJECTS = [
  // ---------------- 1ère année : entrée en matière ----------------
  { id:"fr1_diction_sous_texte", degree:"1", emoji:"🎭", label:"Diction : jouer le sous-texte",
    text:"En binôme, un élève dit une réplique banale (« Il fait beau aujourd'hui ») en devant faire deviner à la classe une émotion cachée imposée en secret (colère rentrée, mensonge, peur) — la classe doit deviner l'émotion sans connaître la consigne.",
    fact:"Cet exercice de diction travaille exactement ce que vise le programme de 1ère : l'écart entre ce qu'on dit et ce qu'on veut vraiment dire, c'est-à-dire le sous-texte.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"fr1_carnet_lecture_reaction", degree:"1", emoji:"📓", label:"Carnet de lecture : la page « réaction à chaud »",
    text:"Après chaque chapitre d'une œuvre étudiée, l'élève a 5 minutes chrono pour écrire une réaction spontanée (un ressenti, une question, un désaccord) avant toute analyse en classe — le carnet n'est jamais noté sur la « qualité » de la réaction, seulement sur sa sincérité.",
    fact:"Séparer la réaction spontanée de l'analyse experte évite un piège fréquent en 1ère année : l'élève qui récite ce qu'il pense qu'on attend de lui plutôt que ce qu'il ressent réellement en lisant.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"fr1_dictee_negociee", degree:"1", emoji:"✏️", label:"Grammaire : la dictée négociée",
    text:"Après une dictée courte, les élèves comparent leur texte par groupes de trois et doivent se mettre d'accord sur une version commune avant la correction collective — chaque désaccord doit être justifié par une règle, pas par un vote à la majorité.",
    fact:"Obliger à justifier chaque correction par une règle grammaticale plutôt que par l'intuition transforme un exercice souvent passif en un vrai travail de consolidation des bases du cycle d'orientation.",
    anchor:{distance:1.4, angle:160, height:DESK_H} },

  // ---------------- 2e année : construire l'argumentation ----------------
  { id:"fr2_argumentation_deux_camps", degree:"2", emoji:"⚖️", label:"Argumentation : le débat à contre-emploi",
    text:"Sur un sujet tiré d'une œuvre étudiée, la classe se divise en deux camps — mais chaque élève doit défendre la position opposée à sa conviction personnelle, avec trois arguments et un exemple précis tiré du texte pour chacun.",
    fact:"Le plan d'études présente l'argumentation comme une forme d'écriture plus exigeante que les autres formes ; défendre une thèse qu'on ne partage pas force à construire un vrai raisonnement plutôt qu'à répéter une opinion déjà faite.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"fr2_oral_soutenu_journal", degree:"2", emoji:"🎙️", label:"Oral soutenu : le flash-info de classe",
    text:"Chaque semaine, un élève différent présente en 2 minutes, dans un registre oral soutenu, un fait d'actualité culturelle en lien avec le programme (sortie d'un livre, anniversaire d'un auteur) — la classe note un seul indicateur : la clarté de la construction, pas le contenu.",
    fact:"Se concentrer sur un seul critère (la clarté) à chaque prise de parole permet de travailler l'oral soutenu de façon répétée et peu stressante, plutôt que d'attendre un grand exposé noté en fin de semestre.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"fr2_resume_contrainte", degree:"2", emoji:"📝", label:"Écriture : le résumé à contrainte de mots",
    text:"L'élève doit résumer un texte argumentatif d'une page en exactement 80 mots, ni plus ni moins — un compteur de mots strict force à choisir l'essentiel plutôt que de paraphraser en réduisant vaguement la longueur.",
    fact:"La contrainte numérique stricte rend visible, mieux qu'une simple consigne de longueur approximative, la différence entre résumer (choisir l'essentiel) et raccourcir (couper au hasard).",
    anchor:{distance:1.8, angle:210, height:DESK_H} },

  // ---------------- 3e année : mouvements littéraires et dissertation ----------------
  { id:"fr3_frise_mouvements", degree:"3", emoji:"🖼️", label:"Histoire littéraire : la frise vivante des mouvements",
    text:"Par groupes, les élèves préparent une courte scène (2 minutes) incarnant les valeurs d'un mouvement littéraire (romantisme, réalisme, symbolisme) sans jamais nommer le mouvement — le reste de la classe doit l'identifier et justifier son choix par des indices précis.",
    fact:"Faire deviner un mouvement littéraire à partir de ses valeurs incarnées, plutôt que de le définir directement, oblige les élèves à comprendre ce qui distingue vraiment chaque courant plutôt qu'à mémoriser une liste de dates et d'auteurs.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"fr3_dissertation_plan_contradictoire", degree:"3", emoji:"📐", label:"Dissertation : construire un plan à partir de deux plans faux",
    text:"L'enseignant distribue deux plans de dissertation volontairement imparfaits sur le même sujet (l'un trop descriptif, l'autre sans exemples) ; les élèves doivent identifier précisément ce qui manque à chacun avant de construire leur propre plan amélioré.",
    fact:"Apprendre à repérer les défauts d'un plan qu'on n'a pas écrit soi-même développe un regard critique transférable, souvent plus efficace que la seule correction d'un plan personnel déjà chargé d'affect.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
  { id:"fr3_commentaire_compose_atelier", degree:"3", emoji:"🔬", label:"Commentaire composé : l'atelier des citations isolées",
    text:"Chaque élève reçoit une seule citation extraite d'un texte étudié (sans le reste du texte) et doit en tirer un axe d'analyse complet avant de confronter son interprétation à celle d'un camarade ayant reçu une citation voisine dans le même texte.",
    fact:"Partir d'une citation isolée, sans le confort du texte complet sous les yeux, reproduit la contrainte réelle de l'épreuve de commentaire composé où l'élève doit construire une lecture fine à partir d'un support limité.",
    anchor:{distance:2.3, angle:340, height:WALL_H} },

  // ---------------- 4e année : maturité, synthèse et travail de maturité ----------------
  { id:"fr4_synthese_annuelle_thematique", degree:"4", emoji:"🧵", label:"Synthèse : le fil rouge des quatre années",
    text:"L'élève reprend trois œuvres étudiées au fil du cursus et doit construire, seul, un fil thématique commun (par exemple la figure de l'exil, du pouvoir ou de l'amour impossible), argumenté par un exemple précis tiré de chaque œuvre.",
    fact:"Ce travail de mise en relation sur quatre ans mobilise directement l'exigence du plan d'études : ne pas juxtaposer des connaissances isolées mais construire une compréhension globale et personnelle de la littérature étudiée.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"fr4_oral_blanc_maturite", degree:"4", emoji:"🎤", label:"Préparation à l'oral de maturité : la question surprise",
    text:"En condition proche de l'examen, l'élève tire au sort un extrait d'une œuvre du programme et dispose de 20 minutes de préparation avant un oral de 10 minutes devant deux camarades qui jouent le rôle de jury et notent selon une grille officielle simplifiée.",
    fact:"S'entraîner face à un vrai jury simulé, avec grille de notation et temps chronométré identiques à l'examen réel, réduit l'écart entre l'entraînement scolaire habituel et la pression spécifique du jour de la maturité.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
  { id:"fr4_atelier_dissertation_chronometree", degree:"4", emoji:"⏱️", label:"Dissertation chronométrée en conditions d'examen",
    text:"Une dissertation complète est rédigée en temps limité et sans documents, puis échangée entre élèves pour une première relecture croisée avant la correction de l'enseignant — chaque relecteur doit repérer un point fort et une faiblesse précise, pas une impression générale.",
    fact:"La double correction — un pair, puis l'enseignant — habitue l'élève à recevoir une critique construite avant le jour de l'examen, où aucune relecture ne sera possible avant la remise finale.",
    anchor:{distance:4.4, angle:185, height:DESK_H} },
];

function getSeqFrancaisCollegeObjectsForDegree(degree) {
  return MUSEE_SEQ_FRANCAIS_COLLEGE_OBJECTS.filter(o => o.degree === degree);
}
window.MUSEE_SEQ_FRANCAIS_COLLEGE_OBJECTS = MUSEE_SEQ_FRANCAIS_COLLEGE_OBJECTS;
window.getSeqFrancaisCollegeObjectsForDegree = getSeqFrancaisCollegeObjectsForDegree;
