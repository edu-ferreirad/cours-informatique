// ============================================================================
// SALLE SÉQUENCES — HISTOIRE — COLLÈGE DE GENÈVE
// Séquences concrètes par année (DF 2h/2h/2h/2h, plan d'études DIP
// 2018-2019, p. 41-42). Le plan d'études ne fige pas un contenu chronologique
// strict par année : la progression Antiquité/Moyen Âge → époque moderne →
// XIXe → XXe-XXIe reflète la pratique usuelle du Collège de Genève, construite
// pour respecter les compétences visées (analyse de sources, pluralité des
// interprétations, pouvoir et contre-pouvoir). Contenu original.
// ============================================================================
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_HISTOIRE_COLLEGE_OBJECTS = [
  // ---------------- 1ère année : outils de l'historien, Antiquité-Moyen Âge ----------------
  { id:"hi1_source_ou_interpretation", degree:"1", emoji:"📜", label:"Méthode : trier source primaire et interprétation",
    text:"Les élèves reçoivent un lot mélangé de documents sur un même événement antique (extrait d'un historien ancien, reconstitution moderne, manuel scolaire) et doivent les classer en distinguant ce qui est une trace directe de l'époque de ce qui est une interprétation postérieure.",
    fact:"Cette compétence de tri est un préalable indispensable avant toute analyse historique plus poussée : le plan d'études attend explicitement des élèves qu'ils sachent interpréter et critiquer des sources diverses, pas seulement les lire.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"hi1_carte_mentale_feodalite", degree:"1", emoji:"🏰", label:"Moyen Âge : la carte mentale du pouvoir féodal",
    text:"En groupe, les élèves construisent une carte mentale reliant seigneurs, vassaux, paysans et clergé par des flèches légendées (protection, travail, impôt, loyauté) à partir d'un court texte de synthèse, avant de la confronter à celle d'un autre groupe.",
    fact:"Représenter visuellement un système de pouvoir complexe aide à saisir des notions de contre-pouvoir bien avant que le vocabulaire politique moderne ne soit introduit, en repartant d'un exemple concret et hiérarchisé.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"hi1_proces_fictif_antiquite", degree:"1", emoji:"⚖️", label:"Antiquité : le procès fictif d'une décision historique",
    text:"La classe rejoue, sous forme de procès simplifié, une décision politique controversée de l'Antiquité (par exemple une conquête ou une réforme) : des élèves accusent, d'autres défendent, en s'appuyant uniquement sur des faits attestés par les documents distribués.",
    fact:"Le format du procès oblige à construire une argumentation entièrement fondée sur des preuves documentaires plutôt que sur une opinion personnelle, ce qui est la démarche même de l'historien face à un fait controversé.",
    anchor:{distance:1.4, angle:160, height:DESK_H} },

  // ---------------- 2e année : époque moderne, ruptures et continuités ----------------
  { id:"hi2_frise_ruptures_continuites", degree:"2", emoji:"📏", label:"Frise annotée : ruptures et continuités",
    text:"Sur une frise chronologique longue de l'époque moderne, chaque élève doit placer un événement donné en le classant explicitement comme « rupture » ou « continuité » par rapport à la période précédente, avec une justification écrite d'une phrase.",
    fact:"Le plan d'études demande d'étudier les continuités et les ruptures comme une des lignes de force de l'enseignement de l'histoire ; forcer un choix explicite entre les deux catégories évite la simple accumulation chronologique de dates isolées.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"hi2_debat_reforme_contradictoire", degree:"2", emoji:"🗣️", label:"Débat contradictoire sur une grande réforme",
    text:"Par groupes tirés au sort, les élèves préparent puis débattent des arguments favorables ou défavorables à une réforme majeure de l'époque moderne, avant un vote final en classe sur la base des seuls arguments entendus, pas des convictions de départ.",
    fact:"Le plan d'études évoque explicitement la préparation de débats, par exemple pour des votations en blanc, comme moyen de développer l'écoute d'autrui et le travail en équipe, des compétences sociales fondamentales en démocratie.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"hi2_iconographie_pouvoir", degree:"2", emoji:"🖼️", label:"Analyse d'image : lire un portrait de pouvoir",
    text:"Face à un portrait officiel d'un souverain de l'époque moderne, les élèves relèvent méthodiquement chaque détail visuel (posture, objets, décor) et en déduisent le message de pouvoir voulu, avant de comparer avec un second portrait d'un contexte différent.",
    fact:"Cette lecture méthodique de l'image répond directement à l'objectif du plan d'études d'analyser et de synthétiser des informations iconographiques, une compétence aussi importante que la lecture de texte en histoire.",
    anchor:{distance:1.8, angle:210, height:DESK_H} },

  // ---------------- 3e année : XIXe siècle, révolutions et sociétés ----------------
  { id:"hi3_points_vue_croises_revolution", degree:"3", emoji:"👥", label:"Points de vue croisés sur une révolution",
    text:"Chaque groupe incarne un acteur social différent face à un même événement révolutionnaire du XIXe siècle (ouvrier, bourgeois, aristocrate, femme sans droit de vote) et doit rédiger un court témoignage fictif mais historiquement plausible, confronté ensuite aux autres points de vue.",
    fact:"Multiplier les points de vue sur un même événement met en pratique l'objectif du plan d'études de souligner la pluralité des perceptions et des interprétations possibles d'un fait historique.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"hi3_enquete_statistiques_industrialisation", degree:"3", emoji:"📊", label:"Enquête : lire des statistiques d'industrialisation",
    text:"À partir d'un tableau réel de données démographiques ou économiques du XIXe siècle, les élèves doivent formuler deux hypothèses explicatives différentes pour la même évolution chiffrée, puis évaluer laquelle est la mieux soutenue par les documents disponibles.",
    fact:"Travailler sur des données chiffrées habitue les élèves à traiter l'histoire aussi comme une science qui croise sources textuelles et sources quantitatives, sans réduire la discipline à un seul type de document.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
  { id:"hi3_lien_geographie_industrialisation", degree:"3", emoji:"🗺️", label:"Séquence croisée histoire-géographie : où s'industrialise-t-on ?",
    text:"En collaboration avec le cours de géographie, les élèves superposent une carte des ressources naturelles du XIXe siècle à une carte des foyers industriels de la même époque pour identifier et expliquer les corrélations visibles.",
    fact:"Le plan d'études signale une collaboration privilégiée entre histoire et géographie selon des modalités variées ; cette séquence en donne une forme concrète, directement liée au thème de l'industrialisation.",
    anchor:{distance:2.3, angle:340, height:WALL_H} },

  // ---------------- 4e année : XXe-XXIe siècles, histoire du temps présent ----------------
  { id:"hi4_memoire_temoignage_contemporain", degree:"4", emoji:"🎙️", label:"Histoire du temps présent : comparer mémoire et histoire",
    text:"Les élèves confrontent un témoignage oral ou écrit d'un événement du XXe siècle à un travail d'historien sur le même événement, puis identifient précisément où et pourquoi les deux récits divergent (émotion, distance temporelle, sources disponibles).",
    fact:"Cette confrontation directe entre mémoire vécue et travail scientifique de l'historien touche un enjeu central des grands problèmes des sociétés contemporaines que le plan d'études demande d'aborder en fin de cursus.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"hi4_dossier_recherche_travail_maturite", degree:"4", emoji:"🗂️", label:"Mini-dossier de recherche en autonomie",
    text:"Sur un sujet contemporain de leur choix en lien avec le programme, les élèves constituent seuls un dossier documentaire d'une dizaine de sources variées, en distinguant sources fiables et sources douteuses, avant une courte présentation orale de leurs conclusions.",
    fact:"Ce format de recherche autonome, proche de ce qu'exige un travail de maturité, mobilise directement les méthodes de travail visées par le plan d'études : établir une bibliographie, prendre des notes, classer l'information.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
  { id:"hi4_debat_geopolitique_actuel", degree:"4", emoji:"🌐", label:"Débat : un enjeu géopolitique du XXIe siècle",
    text:"À partir de sources d'actualité récentes et contradictoires, la classe débat d'un grand problème géopolitique contemporain en s'appuyant explicitement sur des racines historiques identifiées dans les cours précédents des quatre années.",
    fact:"Ce débat final relie directement le passé étudié pendant tout le cursus au présent, illustrant la mission civique du programme : former des citoyens responsables capables de prendre de la distance par rapport au présent et au passé.",
    anchor:{distance:4.4, angle:185, height:DESK_H} },
];

function getSeqHistoireCollegeObjectsForDegree(degree) {
  return MUSEE_SEQ_HISTOIRE_COLLEGE_OBJECTS.filter(o => o.degree === degree);
}
window.MUSEE_SEQ_HISTOIRE_COLLEGE_OBJECTS = MUSEE_SEQ_HISTOIRE_COLLEGE_OBJECTS;
window.getSeqHistoireCollegeObjectsForDegree = getSeqHistoireCollegeObjectsForDegree;
