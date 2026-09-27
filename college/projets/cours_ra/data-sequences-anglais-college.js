// ============================================================================
// SALLE SÉQUENCES — ANGLAIS — COLLÈGE DE GENÈVE
// Séquences concrètes par année (tronc commun en 1ère, puis DF 3h/3h/3h et
// OS 4h/4h/5h dès la 2e — plan d'études DIP 2018-2019, p. 19-20). Contenu
// original, pas une citation du plan d'études.
// ============================================================================
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ANGLAIS_COLLEGE_OBJECTS = [
  // ---------------- 1ère année : tronc commun, consolidation ----------------
  { id:"an1_diagnostic_ludique", degree:"1", emoji:"🎯", label:"Tronc commun : le diagnostic sans note",
    text:"En tout début d'année, les élèves passent un test rapide et non noté mêlant compréhension orale, expression écrite courte et vocabulaire, dont le seul but est de repérer collectivement les acquis solides du cycle d'orientation et les points à consolider en priorité.",
    fact:"Le plan d'études précise que la 1ère année procède d'abord à une mise au point et une systématisation des connaissances acquises précédemment ; un diagnostic non noté permet de cibler cette remise à niveau sans stigmatiser les lacunes de départ.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"an1_resume_recit_structure", degree:"1", emoji:"🗣️", label:"Oral : le récit structuré en trois temps",
    text:"Après l'écoute d'un enregistrement court, les élèves doivent restituer oralement l'essentiel en respectant une structure imposée en trois temps (situation, problème, résolution) — jamais de résumé libre non structuré cette première année.",
    fact:"Le plan d'études vise explicitement l'utilisation de l'anglais de base à bon escient dans des récits oraux bien structurés dès la 1ère année ; imposer une structure fixe donne un cadre rassurant à des élèves encore peu autonomes à l'oral.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"an1_composition_amorce_donnee", degree:"1", emoji:"✍️", label:"Écriture : composition à partir d'une amorce",
    text:"Les élèves reçoivent une première phrase imposée et doivent poursuivre un court texte narratif, sur un sujet préalablement discuté en classe, en respectant un temps et une longueur donnés — l'accent porte sur la correction plutôt que sur l'originalité.",
    fact:"Le plan d'études cite précisément la rédaction d'une composition sur un sujet traité préalablement en classe comme objectif de 1ère année ; travailler d'abord sur un sujet connu réduit la charge cognitive avant d'aborder des sujets totalement libres plus tard.",
    anchor:{distance:1.4, angle:160, height:DESK_H} },

  // ---------------- 2e année (DF/OS) : quatre aptitudes, premiers textes longs ----------------
  { id:"an2_debat_point_de_vue", degree:"2", emoji:"💬", label:"Oral : exprimer et défendre un point de vue",
    text:"Sur un sujet simple d'actualité ou tiré d'un texte étudié, les élèves préparent puis défendent oralement un avis personnel argumenté face à la classe, qui doit ensuite reformuler cet avis dans ses propres mots avant de réagir.",
    fact:"Faire reformuler l'avis d'un camarade avant de réagir force une vraie écoute active, condition nécessaire au développement de la compréhension orale détaillée visée par le plan d'études dès la 2e année.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"an2_dictionnaire_bilingue_efficace", degree:"2", emoji:"📖", label:"Méthode : utiliser le dictionnaire bilingue sans se tromper",
    text:"Face à un texte contenant des mots à sens multiples, les élèves s'entraînent à choisir la bonne entrée dans un dictionnaire bilingue en fonction du contexte de la phrase, un exercice où le mauvais choix de sens change complètement la compréhension du texte.",
    fact:"Le plan d'études mentionne explicitement l'utilisation efficace d'un dictionnaire bilingue comme objectif de la discipline fondamentale ; savoir choisir la bonne entrée est une compétence à part entière, distincte de la simple consultation.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"an2_texte_genre_varie", degree:"2", emoji:"📰", label:"Compréhension : identifier le genre d'un texte inconnu",
    text:"Les élèves reçoivent plusieurs textes courts de genres différents (article, lettre, extrait littéraire) sans titre ni indication de source et doivent identifier le genre de chacun à partir d'indices formels précis avant de comparer leurs réponses.",
    fact:"Étudier des textes de genres différents, littéraires ou autres, est un objectif explicite de la discipline fondamentale dès la 2e année ; apprendre à reconnaître un genre avant même d'en comprendre tout le contenu accélère la lecture future.",
    anchor:{distance:1.8, angle:210, height:DESK_H} },

  // ---------------- 3e année (DF/OS) : littérature et actualité anglophone ----------------
  { id:"an3_explication_texte_litteraire", degree:"3", emoji:"📚", label:"Explication de texte littéraire guidée",
    text:"Face à un court extrait d'une œuvre littéraire anglophone étudiée, les élèves doivent, en autonomie puis en groupe, repérer trois procédés stylistiques précis et expliquer leur effet sur le lecteur, avant de présenter leur analyse à l'oral.",
    fact:"Le plan d'études mentionne explicitement expliquer un texte littéraire comme situation d'expression orale attendue en discipline fondamentale ; travailler d'abord seul puis en groupe permet à chacun de construire une première lecture personnelle avant la mise en commun.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"an3_interview_reportage_fictif", degree:"3", emoji:"🎙️", label:"Oral : formuler une interview sur un sujet culturel",
    text:"Par binômes, les élèves préparent puis jouent une interview fictive entre un journaliste et une personnalité liée à un sujet culturel ou socio-économique d'un pays anglophone, en s'appuyant sur des faits vérifiés dans une brève recherche préalable.",
    fact:"Le plan d'études cite précisément formuler une interview parmi les situations orales attendues dès la 3e année ; adosser l'exercice à une recherche documentaire réelle évite que l'interview ne reste un jeu de rôle sans contenu.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
  { id:"an3_commentaire_texte_actualite", degree:"3", emoji:"🗞️", label:"Écriture : commenter un texte d'actualité anglophone",
    text:"À partir d'un article de presse anglophone récent, les élèves rédigent un commentaire structuré exprimant et justifiant un point de vue personnel, avec une exigence explicite de nuancer leur position par au moins un contre-argument.",
    fact:"Exiger un contre-argument dans un texte qui exprime pourtant une opinion personnelle pousse les élèves vers la nuance attendue en discipline fondamentale, plutôt que vers une prise de position à sens unique plus facile à rédiger.",
    anchor:{distance:2.3, angle:340, height:WALL_H} },

  // ---------------- 4e année (DF/OS) : recherche, oral de maturité, anglais académique ----------------
  { id:"an4_expose_recherche_documentee", degree:"4", emoji:"🔍", label:"Exposé de recherche documentée",
    text:"Chaque élève choisit un sujet lié au monde anglophone et mène une recherche documentaire en anglais sur deux à trois semaines, avant une présentation orale d'exposé d'actualité devant la classe, suivie de questions improvisées des camarades.",
    fact:"Le plan d'études mentionne présenter des exposés d'actualité comme objectif spécifique de l'option spécifique en 4e année ; les questions improvisées à la fin évitent que l'exposé ne se réduise à une récitation apprise par cœur.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"an4_oral_blanc_maturite_anglais", degree:"4", emoji:"🎓", label:"Oral blanc de maturité en conditions réelles",
    text:"En condition d'examen, l'élève tire au sort un support (image, court texte) et dispose d'un temps de préparation limité avant un oral filmé de quelques minutes, revisionné ensuite individuellement pour identifier ses propres tics de langage et hésitations.",
    fact:"Se revoir soi-même à l'oral, plutôt que de recevoir uniquement un retour de l'enseignant, permet à l'élève de repérer concrètement ses propres points faibles avant l'épreuve réelle de maturité — un usage pédagogique simple de la vidéo.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
  { id:"an4_essai_academique_structure", degree:"4", emoji:"📝", label:"Essai académique structuré (introduction-corps-conclusion)",
    text:"Les élèves rédigent un essai académique complet sur un sujet culturel ou de société en respectant une structure anglo-saxonne stricte (thesis statement, paragraphes à idée unique, conclusion) évaluée avec une grille explicite communiquée à l'avance.",
    fact:"Ce format d'essai académique, différent de la dissertation à la française, correspond au registre de langue plus élaboré et plus précis attendu en option spécifique de 4e année, et prépare aux exigences des études supérieures anglophones.",
    anchor:{distance:4.4, angle:185, height:DESK_H} },
];

function getSeqAnglaisCollegeObjectsForDegree(degree) {
  return MUSEE_SEQ_ANGLAIS_COLLEGE_OBJECTS.filter(o => o.degree === degree);
}
window.MUSEE_SEQ_ANGLAIS_COLLEGE_OBJECTS = MUSEE_SEQ_ANGLAIS_COLLEGE_OBJECTS;
window.getSeqAnglaisCollegeObjectsForDegree = getSeqAnglaisCollegeObjectsForDegree;
