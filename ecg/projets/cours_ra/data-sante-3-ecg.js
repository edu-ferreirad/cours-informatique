// SALLE OSP SANTÉ — 3e année — le texte s'adresse à l'élève, étape par étape
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_SANTE_3_ECG_OBJECTS = [
  { id:"sante_3_1", tier:"court", emoji:"🧬", label:"Étape 1 — Résous un petit problème de génétique",
    text:"Voici un arbre généalogique simplifié montrant la transmission d'un caractère sur trois générations. Détermine si le caractère se transmet de façon dominante ou récessive, en écrivant ton raisonnement étape par étape.",
    fact:"En santé, comprendre un mode de transmission génétique aide à expliquer un risque familial à un patient sans le faire paniquer.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"sante_3_2", tier:"court", emoji:"🌡️", label:"Étape 2 — Calcule une fièvre en trois unités",
    text:"Convertis une température de 39,2°C en Fahrenheit, puis explique en une phrase pourquoi cette conversion peut être utile si tu travailles un jour avec des patients ou des collègues venant d'un pays qui utilise les Fahrenheit.",
    fact:"Les soignants travaillent de plus en plus dans des équipes internationales : les conversions d'unités ne sont pas qu'un exercice de maths.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"sante_3_3", tier:"court", emoji:"🧫", label:"Étape 3 — Identifie une source de contamination",
    text:"Sur un plan simplifié d'une chambre d'hôpital fictive, repère les trois surfaces les plus susceptibles de transmettre une infection (poignée de porte, robinet, table de chevet) et propose pour chacune un geste d'hygiène précis.",
    fact:"L'hygiène hospitalière repose sur des gestes ciblés sur les surfaces à risque, pas sur un nettoyage général identique partout.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"sante_3_4", tier:"moyen", emoji:"📐", label:"Étape 4 — Calcule un débit de perfusion",
    text:"Un patient fictif doit recevoir 500 ml de solution en 4 heures. Calcule le débit en millilitres par heure, puis en gouttes par minute si 1 ml correspond à 20 gouttes. Vérifie ton calcul avec la méthode inverse.",
    fact:"Ce type de calcul est fait plusieurs fois par jour par les infirmiers ; une erreur ici a des conséquences réelles, d'où l'importance de toujours vérifier dans l'autre sens.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"sante_3_5", tier:"moyen", emoji:"🗣️", label:"Étape 5 — Simule une urgence chronométrée",
    text:"Avec deux camarades, simule en trois minutes chronométrées l'arrivée d'un patient en urgence fictive (malaise) : un joue le patient, un le soignant qui pose les questions essentielles, un observe et note si les gestes prioritaires ont été faits dans l'ordre.",
    fact:"En situation d'urgence réelle, l'ordre des priorités sauve du temps ; s'entraîner en simulation permet de le retenir sans risque.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"sante_3_6", tier:"long", emoji:"🔍", label:"Étape 6 — Mène ton enquête sur une maladie",
    text:"Choisis une maladie courante (grippe, diabète de type 2) et rédige une fiche d'une page : causes, symptômes, un chiffre réel sur sa fréquence en Suisse, et un geste de prévention. Utilise au moins deux sources fiables que tu notes en bas de page.",
    fact:"Citer ses sources n'est pas un détail administratif : en santé, une information non vérifiée peut être dangereuse à répéter.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"sante_3_7", tier:"long", emoji:"🎓", label:"Étape 7 — Présente ta fiche à la manière d'un exposé professionnel",
    text:"Présente ta fiche de l'étape 6 en deux minutes à la classe, comme si tu formais de nouveaux collègues sur cette maladie. Termine par une question ouverte à la classe pour vérifier qu'elle a retenu l'essentiel.",
    fact:"Transmettre une information de santé à des collègues, en vérifiant qu'elle a été comprise, est une compétence professionnelle à part entière.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getSante3EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_SANTE_3_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_SANTE_3_ECG_OBJECTS = MUSEE_SANTE_3_ECG_OBJECTS;
window.getSante3EcgObjectsForParcours = getSante3EcgObjectsForParcours;
