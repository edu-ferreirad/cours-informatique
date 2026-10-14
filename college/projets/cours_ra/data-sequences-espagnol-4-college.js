// SALLE SÉQUENCES — ESPAGNOL — 4e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ESPAGNOL_4_COLLEGE_OBJECTS = [
  { id:"espagnol_4_1", tier:"court", emoji:"✍️", label:"Étape 1 — Rédige un texte argumentatif complet",
    text:"Rédige un texte argumentatif structuré sur un sujet de société hispanophone, avec un contre-argument pour nuancer ta position, corrigé selon une grille précise.",
    fact:"Rédiger progressivement des textes argumentatifs est un objectif explicite de fin de cursus.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"espagnol_4_2", tier:"court", emoji:"🎓", label:"Étape 2 — Passe un oral blanc de maturité",
    text:"Tire un extrait du programme, prépare un commentaire en temps limité, puis présente-le devant un petit jury de camarades.",
    fact:"S'entraîner en conditions proches de l'examen réel réduit l'écart avec la pression du jour J.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"espagnol_4_3", tier:"court", emoji:"🗂️", label:"Étape 3 — Finalise ta recherche personnelle",
    text:"Reprends une recherche personnelle menée les années précédentes et enrichis-la avec deux sources supplémentaires plus récentes.",
    fact:"Enrichir un travail déjà commencé, plutôt que d'en démarrer un nouveau, t'entraîne à approfondir plutôt qu'à survoler.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"espagnol_4_4", tier:"moyen", emoji:"🔍", label:"Étape 4 — Analyse une œuvre en profondeur",
    text:"Choisis une œuvre hispanique étudiée cette année et analyse-la en profondeur : contexte historique, thème, procédés stylistiques.",
    fact:"Une analyse en profondeur, plutôt que superficielle, est attendue en fin de cursus d'option spécifique.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"espagnol_4_5", tier:"moyen", emoji:"🗣️", label:"Étape 5 — Débats un sujet de société",
    text:"Sur un sujet de société hispanophone contemporain, débats avec la classe en citant des sources précises à l'appui de tes arguments.",
    fact:"Citer des sources précises, pas seulement des impressions, distingue un débat argumenté d'une simple discussion.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"espagnol_4_6", tier:"long", emoji:"📝", label:"Étape 6 — Rédige ton dossier final",
    text:"Rassemble et retravaille tes meilleures productions de l'année en un dossier final cohérent, avec une introduction expliquant ton parcours.",
    fact:"Ce dossier final synthétise quatre années d'apprentissage en une production personnelle cohérente.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"espagnol_4_7", tier:"long", emoji:"🎤", label:"Étape 7 — Présente ton dossier à l'oral",
    text:"Présente ton dossier final à la classe en cinq minutes, en expliquant ce que tu as le plus progressé cette année.",
    fact:"Identifier soi-même ses progrès, avec des exemples précis, est la meilleure façon de clore un parcours d'apprentissage.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqEspagnol4CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ESPAGNOL_4_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ESPAGNOL_4_COLLEGE_OBJECTS=MUSEE_SEQ_ESPAGNOL_4_COLLEGE_OBJECTS;
window.getSeqEspagnol4CollegeObjectsForParcours=getSeqEspagnol4CollegeObjectsForParcours;
