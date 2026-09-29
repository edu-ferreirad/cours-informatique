// SALLE SÉQUENCES — ANGLAIS — 3e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ANGLAIS_3_COLLEGE_OBJECTS = [
  { id:"anglais_3_1", tier:"court", emoji:"📚", label:"Étape 1 — Explique un texte littéraire",
    text:"Face à un court extrait d'une œuvre anglophone étudiée, repère en autonomie trois procédés stylistiques et explique leur effet sur le lecteur, avant de présenter ton analyse à l'oral.",
    fact:"Travailler seul avant la mise en commun te permet de construire ta propre lecture avant de la confronter à celle des autres.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"anglais_3_2", tier:"court", emoji:"🎙️", label:"Étape 2 — Formule une interview culturelle",
    text:"Avec un camarade, prépare puis joue une interview fictive entre un journaliste et une personnalité liée à un sujet culturel anglophone, après une brève recherche préalable de faits réels.",
    fact:"Adosser l'interview à une vraie recherche documentaire évite qu'elle ne reste un jeu de rôle sans contenu réel.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"anglais_3_3", tier:"court", emoji:"🗞️", label:"Étape 3 — Commente un texte d'actualité",
    text:"À partir d'un article de presse anglophone récent, rédige un commentaire structuré exprimant et justifiant ton avis, avec au moins un contre-argument pour nuancer ta position.",
    fact:"Exiger un contre-argument dans un texte d'opinion te pousse vers la nuance, plutôt que vers une position à sens unique.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"anglais_3_4", tier:"moyen", emoji:"🎧", label:"Étape 4 — Écoute active à plusieurs niveaux",
    text:"Écoute un document sonore trois fois avec trois consignes différentes à chaque fois (informations générales, détails précis, ton de l'orateur).",
    fact:"Changer de consigne à chaque écoute développe une compréhension orale plus fine qu'une écoute unique et globale.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"anglais_3_5", tier:"moyen", emoji:"✍️", label:"Étape 5 — Rédige un texte argumentatif structuré",
    text:"Rédige un texte argumentatif de deux paragraphes sur un sujet culturel, avec une thèse claire dès la première phrase et un exemple précis pour chaque argument.",
    fact:"Annoncer sa thèse dès la première phrase, à l'anglo-saxonne, est une structure que tu retrouveras dans tes études futures.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"anglais_3_6", tier:"long", emoji:"🎤", label:"Étape 6 — Prépare un exposé sur un sujet culturel",
    text:"Choisis un sujet culturel anglophone et prépare un exposé de trois minutes avec un support visuel simple, en t'appuyant sur au moins deux sources fiables.",
    fact:"Combiner recherche documentaire et expression orale prépare directement aux exigences de 4e année.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"anglais_3_7", tier:"long", emoji:"🔍", label:"Étape 7 — Vérifie et présente ton exposé",
    text:"Présente ton exposé de l'étape 6 à la classe, puis réponds à deux questions improvisées de tes camarades sur ton sujet.",
    fact:"Répondre à des questions improvisées, pas seulement réciter, montre que tu maîtrises vraiment ton sujet.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqAnglais3CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ANGLAIS_3_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ANGLAIS_3_COLLEGE_OBJECTS=MUSEE_SEQ_ANGLAIS_3_COLLEGE_OBJECTS;
window.getSeqAnglais3CollegeObjectsForParcours=getSeqAnglais3CollegeObjectsForParcours;
