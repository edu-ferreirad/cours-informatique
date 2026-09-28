// SALLE SÉQUENCES — ANGLAIS — 1ère année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ANGLAIS_1_COLLEGE_OBJECTS = [
  { id:"an1_diagnostic_ludique", tier:"court", emoji:"🎯", label:"Tronc commun : le diagnostic sans note",
    text:"En tout début d'année, les élèves passent un test rapide et non noté mêlant compréhension orale, expression écrite courte et vocabulaire, dont le seul but est de repérer collectivement les acquis solides du cycle d'orientation et les points à consolider en priorité.",
    fact:"Le plan d'études précise que la 1ère année procède d'abord à une mise au point et une systématisation des connaissances acquises précédemment ; un diagnostic non noté permet de cibler cette remise à niveau sans stigmatiser les lacunes de départ.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"an1_resume_recit_structure", tier:"moyen", emoji:"🗣️", label:"Oral : le récit structuré en trois temps",
    text:"Après l'écoute d'un enregistrement court, les élèves doivent restituer oralement l'essentiel en respectant une structure imposée en trois temps (situation, problème, résolution) — jamais de résumé libre non structuré cette première année.",
    fact:"Le plan d'études vise explicitement l'utilisation de l'anglais de base à bon escient dans des récits oraux bien structurés dès la 1ère année ; imposer une structure fixe donne un cadre rassurant à des élèves encore peu autonomes à l'oral.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"an1_composition_amorce_donnee", tier:"long", emoji:"✍️", label:"Écriture : composition à partir d'une amorce",
    text:"Les élèves reçoivent une première phrase imposée et doivent poursuivre un court texte narratif, sur un sujet préalablement discuté en classe, en respectant un temps et une longueur donnés — l'accent porte sur la correction plutôt que sur l'originalité.",
    fact:"Le plan d'études cite précisément la rédaction d'une composition sur un sujet traité préalablement en classe comme objectif de 1ère année ; travailler d'abord sur un sujet connu réduit la charge cognitive avant d'aborder des sujets totalement libres plus tard.",
    anchor:{distance:1.4, angle:160, height:DESK_H} },
];
function getSeqAnglais1CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ANGLAIS_1_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ANGLAIS_1_COLLEGE_OBJECTS = MUSEE_SEQ_ANGLAIS_1_COLLEGE_OBJECTS;
window.getSeqAnglais1CollegeObjectsForParcours = getSeqAnglais1CollegeObjectsForParcours;
