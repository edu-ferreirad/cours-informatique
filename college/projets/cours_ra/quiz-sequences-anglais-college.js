const QUIZ_SEQ_ANGLAIS_COLLEGE = [
  { id:"q1", degree:"1", type:"qcm", prompt:"Que vise le test diagnostique de rentrée ?", options:["Donner une note importante","Repérer les acquis et les points à consolider","Éliminer des élèves","Remplacer le premier contrôle"], correct:1 },
  { id:"q2", degree:"1", type:"qcm", prompt:"En combien de temps le récit oral doit-il être structuré ?", options:["Un temps","Deux temps","Trois temps (situation, problème, résolution)","Quatre temps"], correct:2 },
  { id:"q3", degree:"1", type:"texte", prompt:"Sur quoi porte principalement l'évaluation de la composition à amorce donnée en 1ère ?", answers:["la correction","correction"] },
  { id:"q4", degree:"2", type:"qcm", prompt:"Que doit faire la classe avant de réagir à l'avis d'un camarade ?", options:["Voter immédiatement","Reformuler cet avis dans ses propres mots","Applaudir","Rien de spécial"], correct:1 },
  { id:"q5", degree:"2", type:"qcm", prompt:"Dans l'exercice du dictionnaire bilingue, quelle est la difficulté centrale ?", options:["Trouver le dictionnaire","Choisir la bonne entrée selon le contexte","Écrire en anglais","Compter les pages"], correct:1 },
  { id:"q6", degree:"2", type:"texte", prompt:"Que doivent identifier les élèves face à des textes sans titre ni source ?", answers:["le genre","genre","le genre du texte"] },
  { id:"q7", degree:"3", type:"qcm", prompt:"Combien de procédés stylistiques les élèves doivent-ils repérer dans l'explication de texte ?", options:["Un","Trois","Dix","Aucun"], correct:1 },
  { id:"q8", degree:"3", type:"qcm", prompt:"Sur quoi repose l'interview fictive préparée par les élèves ?", options:["Uniquement l'imagination","Une brève recherche préalable de faits vérifiés","Un texte donné par l'enseignant à lire tel quel","Rien de particulier"], correct:1 },
  { id:"q9", degree:"3", type:"texte", prompt:"Qu'est-ce que le commentaire d'actualité doit contenir en plus du point de vue personnel ?", answers:["un contre-argument","contre-argument"] },
  { id:"q10", degree:"4", type:"qcm", prompt:"Sur quelle durée s'étale la recherche documentaire avant l'exposé de 4e année ?", options:["Un jour","Deux à trois semaines","Six mois","Une année entière"], correct:1 },
  { id:"q11", degree:"4", type:"qcm", prompt:"Comment l'élève analyse-t-il son propre oral blanc de maturité ?", options:["Il ne le revoit jamais","En se revisionnant en vidéo","Uniquement par la note reçue","En lisant un livre"], correct:1 },
  { id:"q12", degree:"4", type:"texte", prompt:"Quelle partie de l'essai académique anglo-saxon énonce la thèse centrale ?", answers:["thesis statement","le thesis statement"] },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
function getSeqQuizForDegree(degree){ return QUIZ_SEQ_ANGLAIS_COLLEGE.filter(q => q.degree === degree); }
window.QUIZ_SEQ_ANGLAIS_COLLEGE = QUIZ_SEQ_ANGLAIS_COLLEGE; window.getSeqQuizForDegree = getSeqQuizForDegree; window.normalizeAnswer = normalizeAnswer;
