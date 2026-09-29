// SALLE SÉQUENCES — FRANÇAIS — 3e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_FRANCAIS_3_COLLEGE_OBJECTS = [
  { id:"francais_3_1", tier:"court", emoji:"🎬", label:"Étape 1 — Compare un roman et son adaptation filmée",
    text:"Regarde l'extrait filmé correspondant à un chapitre que tu as lu. Note trois choix de mise en scène du réalisateur et dis pour chacun s'il te semble fidèle ou s'il change quelque chose d'important au sens du texte.",
    fact:"Comparer les deux supports d'un même récit développe ton regard critique, un objectif du programme de 3e.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"francais_3_2", tier:"court", emoji:"🔗", label:"Étape 2 — Remets un paragraphe argumentatif en ordre",
    text:"Les phrases d'un paragraphe argumentatif ont été mélangées. Remets-les dans l'ordre logique et justifie chaque choix par un connecteur ou un indice de cohérence.",
    fact:"Reconstruire un texte désordonné rend visible le rôle réel que jouent les connecteurs dans un texte bien écrit.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"francais_3_3", tier:"court", emoji:"🕵️", label:"Étape 3 — Repère les indices d'une chute avant qu'elle n'arrive",
    text:"Lis une nouvelle à chute et, avant la fin, note deux indices discrets qui préparaient déjà la surprise. Relis-les après coup pour vérifier si tu les avais bien vus.",
    fact:"Repérer les indices après coup t'apprend à mieux les placer toi-même quand tu écriras ta propre nouvelle.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"francais_3_4", tier:"moyen", emoji:"✍️", label:"Étape 4 — Écris ta propre nouvelle à chute",
    text:"Écris une nouvelle courte dont la chute doit être annoncée par au moins deux indices discrets, sur le modèle de celle étudiée à l'étape 3. Échange ton texte avec un camarade qui doit repérer tes indices.",
    fact:"Si ton camarade retrouve tes indices après coup mais pas avant, ta chute fonctionne exactement comme elle doit.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"francais_3_5", tier:"moyen", emoji:"🎤", label:"Étape 5 — Prépare un exposé de trois minutes sans lire de notes",
    text:"Choisis un auteur étudié et prépare une fiche à mots-clés (pas de phrases entières). Présente-le en trois minutes sans lire, puis réponds à une question posée par la classe.",
    fact:"Un seul critère est évalué à chaque passage : ne pas lire ses notes. Cela t'oblige à vraiment t'approprier ton sujet.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"francais_3_6", tier:"long", emoji:"⏱️", label:"Étape 6 — Rédige un texte argumentatif en 45 minutes",
    text:"En conditions proches de l'évaluation, rédige un texte argumentatif complet en 45 minutes, avec la grille de correction connue à l'avance. Une fois terminé, relis-toi avec cette grille avant de rendre.",
    fact:"T'auto-évaluer avec une grille connue à l'avance développe l'autonomie que les évaluations de fin de cycle exigeront de toi.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"francais_3_7", tier:"long", emoji:"🔎", label:"Étape 7 — Explique un poème par ses procédés et leurs effets",
    text:"Dans un poème étudié, repère une comparaison, une métaphore et un effet de rythme. Pour chacun, explique précisément ce qu'il produit chez le lecteur, pas seulement son nom technique.",
    fact:"Nommer un procédé n'a de sens que si tu peux dire ce qu'il fait vraiment ressentir — c'est la vraie compétence attendue.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqFrancais3CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_FRANCAIS_3_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_FRANCAIS_3_COLLEGE_OBJECTS=MUSEE_SEQ_FRANCAIS_3_COLLEGE_OBJECTS;
window.getSeqFrancais3CollegeObjectsForParcours=getSeqFrancais3CollegeObjectsForParcours;
