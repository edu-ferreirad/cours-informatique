const QUIZ_SEQ_MATHS_COLLEGE = [
  { id:"q1", degree:"1", type:"qcm", prompt:"Que consigne l'élève dans sa « boîte à outils » après chaque nouvelle technique ?", options:["Uniquement la formule","Méthode, exemple et piège fréquent","Que des exercices corrigés","Rien, c'est oral"], correct:1 },
  { id:"q2", degree:"1", type:"qcm", prompt:"Dans le jeu du va-et-vient graphique, comment le camarade doit-il dessiner le graphique ?", options:["En le copiant","À partir d'une description orale seulement","Avec une calculatrice","En regardant l'original"], correct:1 },
  { id:"q3", degree:"1", type:"texte", prompt:"Dans la séquence de géométrie, que change l'enseignant après une démonstration classique ?", answers:["une hypothese","hypothese"] },
  { id:"q4", degree:"2", type:"qcm", prompt:"Dans la séquence sur l'esprit scientifique, que font les élèves avant de chercher une démonstration ?", options:["Ils lisent le corrigé","Ils formulent une conjecture","Ils passent un test","Rien de particulier"], correct:1 },
  { id:"q5", degree:"2", type:"qcm", prompt:"Dans la modélisation d'une situation réelle, qu'est-ce que les élèves doivent aussi évaluer ?", options:["Le prix du matériel","Les limites de leur modèle","La couleur du graphique","La difficulté de l'exercice"], correct:1 },
  { id:"q6", degree:"2", type:"texte", prompt:"À quel niveau (normal ou avancé) s'adresse la séquence du « sujet à choix » ?", answers:["avance","niveau avance","ma2"] },
  { id:"q7", degree:"3", type:"qcm", prompt:"Dans la séquence sur la dérivée, à partir de quel exemple concret part-on ?", options:["Le prix d'un objet","La position d'une voiture en fonction du temps","Une carte de géographie","Un poème"], correct:1 },
  { id:"q8", degree:"3", type:"qcm", prompt:"Dans le problème de géométrie vectorielle, que les élèves n'ont-ils pas le droit de faire ?", options:["Calculer","Mesurer ou dessiner à l'échelle","Utiliser des vecteurs","Écrire une conclusion"], correct:1 },
  { id:"q9", degree:"3", type:"texte", prompt:"Que doivent chercher les élèves face à une affirmation générale sur les fonctions ?", answers:["un contre-exemple","contre-exemple"] },
  { id:"q10", degree:"4", type:"qcm", prompt:"Dans la séquence de probabilités, que doivent identifier les élèves avant tout calcul ?", options:["Le résultat final","Le bon modèle probabiliste","La réponse de l'enseignant","Une formule au hasard"], correct:1 },
  { id:"q11", degree:"4", type:"qcm", prompt:"Dans l'étude complète de fonction, comment les élèves travaillent-ils ?", options:["Avec correction à chaque étape","Seuls, sans correction intermédiaire","En groupe de cinq","Avec la calculatrice interdite d'usage normal"], correct:1 },
  { id:"q12", degree:"4", type:"texte", prompt:"Sur quoi porte l'atelier des erreurs classiques en révision de maturité ?", answers:["les erreurs frequentes","erreurs frequentes","erreurs classiques"] },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
function getSeqQuizForDegree(degree){ return QUIZ_SEQ_MATHS_COLLEGE.filter(q => q.degree === degree); }
window.QUIZ_SEQ_MATHS_COLLEGE = QUIZ_SEQ_MATHS_COLLEGE; window.getSeqQuizForDegree = getSeqQuizForDegree; window.normalizeAnswer = normalizeAnswer;
