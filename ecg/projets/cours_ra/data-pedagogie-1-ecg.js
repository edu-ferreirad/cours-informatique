// SALLE OSP PÉDAGOGIE — 1re année (découverte) — le texte s'adresse à l'élève, étape par étape
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_PEDAGOGIE_1_ECG_OBJECTS = [
  { id:"pedagogie_1_1", tier:"court", emoji:"🧒", label:"Étape 1 — Explique une notion à un enfant de 8 ans",
    text:"Choisis une notion simple (le cycle de l'eau, pourquoi le ciel est bleu) et prépare une explication d'une minute pour un enfant de huit ans, sans mot compliqué. Présente-la à un camarade qui joue l'enfant et pose des questions naïves.",
    fact:"Adapter son langage à l'âge de l'auditeur est une compétence centrale de l'enseignement, qui se travaille dès maintenant.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"pedagogie_1_2", tier:"court", emoji:"👀", label:"Étape 2 — Observe sans juger",
    text:"Regarde une courte vidéo (ou une scène jouée par des camarades) d'un enfant en train d'apprendre quelque chose. Note trois choses que tu observes, sans écrire une seule fois ce que tu en penses.",
    fact:"Distinguer observer et juger est la première compétence du regard professionnel d'un enseignant.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"pedagogie_1_3", tier:"court", emoji:"🎨", label:"Étape 3 — Imagine une activité créative pour un enfant",
    text:"Invente une activité de dix minutes pour occuper un enfant de six ans un jour de pluie, avec un objectif d'apprentissage précis (par exemple reconnaître les couleurs), et écris-la comme une petite fiche.",
    fact:"Même une activité simple a un objectif d'apprentissage derrière elle : c'est ce qui distingue occuper d'enseigner.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"pedagogie_1_4", tier:"moyen", emoji:"🎓", label:"Étape 4 — Compare deux voies vers l'enseignement",
    text:"Dans la brochure ECG, compare le parcours vers l'enseignement primaire et celui vers l'éducation de l'enfance : durée, langues exigées, type d'admission.",
    fact:"La maturité spécialisée pédagogie exige notamment le niveau B1 en allemand et en anglais : le savoir maintenant permet d'anticiper.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"pedagogie_1_5", tier:"moyen", emoji:"🗣️", label:"Étape 5 — Anime un mini-jeu pédagogique",
    text:"Prépare et anime pendant cinq minutes un petit jeu éducatif pour tes camarades sur une notion scolaire simple, puis demande-leur ce qu'ils ont vraiment appris, pas seulement s'ils se sont amusés.",
    fact:"Vérifier ce qui a été appris, pas seulement si l'activité a plu, est une compétence clé de l'enseignant.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"pedagogie_1_6", tier:"long", emoji:"📋", label:"Étape 6 — Construis une petite séquence de trois étapes",
    text:"Conçois une mini-séquence d'apprentissage en trois étapes (découverte, exercice, vérification) pour enseigner une notion simple à un enfant de ton choix, en précisant la durée de chaque étape.",
    fact:"Structurer une séquence en étapes claires est exactement ce que fait un enseignant chaque jour, à plus grande échelle.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"pedagogie_1_7", tier:"long", emoji:"🎤", label:"Étape 7 — Teste ta séquence sur un camarade",
    text:"Fais tester ta séquence de l'étape 6 par un camarade qui joue l'élève, puis note deux choses qui ont fonctionné et une chose à améliorer, à partir de ce retour réel.",
    fact:"Tester une séquence avant de l'utiliser vraiment permet de repérer ses failles sans risque.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getPedagogie1EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_PEDAGOGIE_1_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_PEDAGOGIE_1_ECG_OBJECTS = MUSEE_PEDAGOGIE_1_ECG_OBJECTS;
window.getPedagogie1EcgObjectsForParcours = getPedagogie1EcgObjectsForParcours;
