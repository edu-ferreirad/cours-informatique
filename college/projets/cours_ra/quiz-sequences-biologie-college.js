const QUIZ_SEQ_BIOLOGIE_COLLEGE = [
  { id:"q1", degree:"1", type:"qcm", prompt:"Avant de découvrir la classification officielle, que doivent inventer les élèves ?", options:["Un dessin","Leurs propres critères de classement","Une chanson","Rien"], correct:1 },
  { id:"q2", degree:"1", type:"qcm", prompt:"Dans la séquence sur le protocole, que font les élèves avant toute manipulation réelle ?", options:["Ils manipulent directement","Ils conçoivent le protocole sur papier","Ils regardent une vidéo","Ils font un test noté"], correct:1 },
  { id:"q3", degree:"1", type:"texte", prompt:"Que doivent extraire les élèves d'un article de vulgarisation (fait, explication et...) ?", answers:["limites","les limites","incertitudes","limites ou incertitudes"] },
  { id:"q4", degree:"2", type:"qcm", prompt:"Dans la modélisation de la cellule, qu'est-ce que les élèves doivent lister en plus de la construire ?", options:["Le prix des matériaux","Les limites de leur modèle","La couleur choisie","Rien d'autre"], correct:1 },
  { id:"q5", degree:"2", type:"qcm", prompt:"Pourquoi la 2e année est-elle une année de transition importante en biologie ?", options:["C'est la première année","C'est la dernière année en discipline fondamentale","Il n'y a pas d'examen","Aucune raison particulière"], correct:1 },
  { id:"q6", degree:"2", type:"texte", prompt:"Que doivent rédiger seuls les élèves à l'issue d'une manipulation en laboratoire ?", answers:["un rapport","un rapport d'experience","rapport complet"] },
  { id:"q7", degree:"3", type:"qcm", prompt:"Qui peut suivre les séquences de 3e année en biologie ?", options:["Tous les élèves","Seulement les élèves ayant choisi l'option biologie-chimie","Seulement les filles","Personne, la biologie s'arrête"], correct:1 },
  { id:"q8", degree:"3", type:"qcm", prompt:"Dans l'inventaire de terrain, que schématisent les élèves entre les espèces observées ?", options:["Leur poids","Les interactions probables (prédation, compétition...)","Leur couleur","Leur taille uniquement"], correct:1 },
  { id:"q9", degree:"3", type:"texte", prompt:"Avec quelle autre discipline la séquence sur les biomolécules est-elle croisée ?", answers:["chimie","la chimie"] },
  { id:"q10", degree:"4", type:"qcm", prompt:"Dans le débat de bioéthique, que doit avoir chaque argument avancé ?", options:["Une source précise","Une opinion personnelle suffit","Un vote préalable","Rien de particulier"], correct:0 },
  { id:"q11", degree:"4", type:"qcm", prompt:"Dans la reconstruction de l'arbre phylogénétique, à partir de quoi les élèves travaillent-ils ?", options:["Un tableau de caractères communs et différents","Une photo satellite","Un poème","Une carte politique"], correct:0 },
  { id:"q12", degree:"4", type:"texte", prompt:"À quelle fréquence a lieu le point d'étape du travail personnel encadré ?", answers:["toutes les deux semaines","deux semaines","chaque deux semaines"] },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
function getSeqQuizForDegree(degree){ return QUIZ_SEQ_BIOLOGIE_COLLEGE.filter(q => q.degree === degree); }
window.QUIZ_SEQ_BIOLOGIE_COLLEGE = QUIZ_SEQ_BIOLOGIE_COLLEGE; window.getSeqQuizForDegree = getSeqQuizForDegree; window.normalizeAnswer = normalizeAnswer;
