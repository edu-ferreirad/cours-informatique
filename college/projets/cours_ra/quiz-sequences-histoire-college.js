const QUIZ_SEQ_HISTOIRE_COLLEGE = [
  { id:"q1", degree:"1", type:"qcm", prompt:"Dans la séquence sur les sources, que doivent trier les élèves ?", options:["Vrai et faux","Source primaire et interprétation","Passé et présent","Grand et petit texte"], correct:1 },
  { id:"q2", degree:"1", type:"qcm", prompt:"Dans la carte mentale du pouvoir féodal, que représentent les flèches légendées ?", options:["Des distances","Des relations (protection, travail, impôt...)","Des dates","Des frontières"], correct:1 },
  { id:"q3", degree:"1", type:"texte", prompt:"Sous quelle forme la classe rejoue-t-elle une décision controversée de l'Antiquité ?", answers:["un proces","proces fictif","proces"] },
  { id:"q4", degree:"2", type:"qcm", prompt:"Sur la frise annotée, en quelles deux catégories chaque événement doit-il être classé ?", options:["Vrai/faux","Rupture/continuité","Nord/sud","Riche/pauvre"], correct:1 },
  { id:"q5", degree:"2", type:"qcm", prompt:"Sur quoi porte le vote final du débat contradictoire ?", options:["Les convictions de départ","Les seuls arguments entendus pendant le débat","La popularité de l'élève","Rien, il n'y a pas de vote"], correct:1 },
  { id:"q6", degree:"2", type:"texte", prompt:"Dans l'analyse d'image, qu'est-ce que les élèves déduisent des détails d'un portrait officiel ?", answers:["le message de pouvoir","message de pouvoir","un message de pouvoir"] },
  { id:"q7", degree:"3", type:"qcm", prompt:"Dans les points de vue croisés, combien d'acteurs sociaux différents sont incarnés (exemples donnés) ?", options:["Deux","Quatre","Six","Un seul"], correct:1 },
  { id:"q8", degree:"3", type:"qcm", prompt:"Dans l'enquête statistique, que doivent formuler les élèves à partir d'un même tableau de données ?", options:["Une seule explication imposée","Deux hypothèses explicatives différentes","Aucune hypothèse","Une note chiffrée"], correct:1 },
  { id:"q9", degree:"3", type:"texte", prompt:"Avec quelle autre discipline la séquence sur l'industrialisation est-elle croisée ?", answers:["geographie","la geographie"] },
  { id:"q10", degree:"4", type:"qcm", prompt:"Dans la séquence sur la mémoire, que confrontent les élèves à un travail d'historien ?", options:["Un roman","Un témoignage oral ou écrit","Un film de fiction","Une chanson"], correct:1 },
  { id:"q11", degree:"4", type:"qcm", prompt:"Combien de sources environ le mini-dossier de recherche doit-il contenir ?", options:["Deux","Une dizaine","Cinquante","Aucune, c'est uniquement oral"], correct:1 },
  { id:"q12", degree:"4", type:"texte", prompt:"Sur quoi porte le débat final de 4e année, en plus de l'actualité ?", answers:["racines historiques","des racines historiques","les racines historiques"] },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
function getSeqQuizForDegree(degree){ return QUIZ_SEQ_HISTOIRE_COLLEGE.filter(q => q.degree === degree); }
window.QUIZ_SEQ_HISTOIRE_COLLEGE = QUIZ_SEQ_HISTOIRE_COLLEGE; window.getSeqQuizForDegree = getSeqQuizForDegree; window.normalizeAnswer = normalizeAnswer;
