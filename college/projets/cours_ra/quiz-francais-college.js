const QUIZ_FRANCAIS_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Combien d'heures hebdomadaires de français sont dispensées en 1ère année du collège ?", options:["4 heures", "6 heures", "2 heures", "8 heures"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle littérature régionale est explicitement mentionnée dans le corpus étudié, aux côtés de la littérature francophone ?", options:["La littérature romande", "La littérature belge", "La littérature québécoise", "La littérature africaine"], correct:0 },
  { id:"q3", tier:"court", type:"texte", prompt:"Sous la direction de qui l'enseignement de la diction en 1ère année est-il dispensé ?", answers:["un artiste de theatre", "artiste de theatre", "un artiste"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle forme d'écriture le plan d'études présente-t-il comme plus exigeante que les autres ?", options:["La narration", "L'argumentation", "Le résumé", "Le texte poétique"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Quel registre de langue orale reçoit une place privilégiée dans l'enseignement du français ?", options:["L'oral familier", "L'oral soutenu", "Le langage SMS", "Le patois"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Quel cours est présenté comme le \"lieu privilégié\" où s'acquièrent les méthodes d'analyse et de travail sur les textes ?", answers:["le francais", "francais", "le cours de francais"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Comment le plan d'études qualifie-t-il l'enseignement du français par rapport aux autres disciplines ?", options:["Isolé", "Naturellement interdisciplinaire", "Sans lien", "Optionnel"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"À quelles littératures fait-on appel, pour comparaison, dans l'étude du français ?", options:["Uniquement la littérature française", "Les littératures étrangères", "Aucune autre littérature", "Uniquement la bande dessinée"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"La maîtrise de la \"pensée discursive\" prépare directement à quelle épreuve emblématique de la maturité ?", options:["L'oral d'anglais", "La dissertation de français", "L'examen de sport", "Le travail de maturité uniquement"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Sur quel article de la loi genevoise sur l'instruction publique le plan d'études du français s'appuie-t-il ?", options:["Aucun article spécifique", "L'article 4", "L'article 12", "L'article 1"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_FRANCAIS_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_FRANCAIS_COLLEGE = QUIZ_FRANCAIS_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
