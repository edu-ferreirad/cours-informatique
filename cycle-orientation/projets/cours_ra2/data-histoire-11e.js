// ============================================================================
// SALLE HISTOIRE 11e — "Le XXe siècle"
// Contenu reformulé à partir des chapitres du manuel officiel romand
// Histoire 11e (CIIP) : La Première Guerre mondiale, La Seconde Guerre
// mondiale, Les crimes contre l'Humanité, Le Moyen-Orient, La construction
// européenne, L'artiste témoin et acteur de son temps. Aucun énoncé n'est
// copié tel quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_HISTOIRE_11E_OBJECTS = [
  {
    id: "premiere_guerre_mondiale",
    tier: "court",
    emoji: "⚔️",
    label: "La Première Guerre mondiale",
    text: "Déclenchée en 1914 après l'assassinat de l'archiduc François-Ferdinand, la Première Guerre mondiale a opposé pendant plus de quatre ans un système d'alliances militaires européennes, avec des combats de tranchées prolongés qui ont causé des pertes humaines sans précédent dans l'histoire des conflits armés.",
    fact: "La guerre de tranchées a créé une situation militaire quasi immobile pendant des années sur le front occidental : certaines lignes de front n'ont presque pas bougé pendant plus de trois ans, malgré des offensives coûtant des centaines de milliers de vies.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "entre_deux_guerres",
    tier: "court",
    emoji: "📉",
    label: "L'entre-deux-guerres, une paix fragile",
    text: "Entre 1918 et 1939, l'Europe a connu une paix instable, marquée par une grave crise économique mondiale (1929) et la montée de régimes autoritaires et totalitaires dans plusieurs pays — un contexte de fragilité politique qui a directement préparé le second conflit mondial.",
    fact: "La crise économique de 1929, née d'un effondrement boursier aux États-Unis, s'est propagée en quelques mois à l'économie mondiale entière, provoquant un chômage massif qui a nourri le succès électoral de plusieurs mouvements extrémistes en Europe.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seconde_guerre_mondiale",
    tier: "court",
    emoji: "🌍",
    label: "La Seconde Guerre mondiale",
    text: "Déclenchée en 1939 par l'invasion de la Pologne, la Seconde Guerre mondiale est devenue le conflit le plus meurtrier de l'histoire humaine, impliquant la quasi-totalité des grandes puissances mondiales et se déroulant sur plusieurs continents à la fois, jusqu'à la capitulation du Japon en 1945.",
    fact: "Contrairement à la Première Guerre mondiale, largement concentrée sur des fronts militaires, la Seconde Guerre mondiale a touché massivement les populations civiles, notamment via les bombardements aériens de villes entières.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "crimes_contre_humanite",
    tier: "court",
    emoji: "🕯️",
    label: "Les crimes contre l'Humanité",
    text: "Le génocide des Juifs d'Europe par le régime nazi (la Shoah), ainsi que d'autres persécutions systématiques de populations civiles pendant la Seconde Guerre mondiale, ont conduit après-guerre à définir juridiquement la notion de \"crime contre l'Humanité\" — des actes si graves qu'ils ne peuvent être justifiés par aucune circonstance, y compris militaire.",
    fact: "Le terme \"génocide\" lui-même n'existait pas avant la Seconde Guerre mondiale : il a été inventé en 1944 par le juriste Raphael Lemkin, spécifiquement pour nommer et poursuivre juridiquement ce type de crime de masse.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "guerre_froide",
    tier: "moyen",
    emoji: "☢️",
    label: "La guerre froide",
    text: "Après 1945, le monde s'est retrouvé divisé entre deux grandes puissances rivales, les États-Unis et l'URSS, opposées par leurs systèmes économiques et politiques mais évitant soigneusement un conflit armé direct entre elles — une tension permanente appelée guerre froide, marquée par la course aux armes nucléaires.",
    fact: "Le terme \"guerre froide\" décrit précisément cette absence d'affrontement militaire direct entre les deux grandes puissances : les tensions se sont exprimées à travers des conflits indirects, une course technologique et une intense propagande, plutôt que par une guerre déclarée entre elles.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "moyen_orient_conflits",
    tier: "moyen",
    emoji: "🕊️",
    label: "Le Moyen-Orient, une région de tensions durables",
    text: "Depuis le milieu du XXe siècle, le Moyen-Orient a connu de nombreux conflits liés à des questions de territoires, de ressources (notamment pétrolières) et de reconnaissance nationale, dont le conflit israélo-palestinien reste l'un des plus emblématiques et des plus longs à ce jour.",
    fact: "La découverte de vastes réserves de pétrole au XXe siècle a transformé le Moyen-Orient en une région d'intérêt stratégique majeur pour les grandes puissances mondiales, ajoutant une dimension économique globale à des tensions déjà anciennes.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "construction_europeenne",
    tier: "moyen",
    emoji: "🇪🇺",
    label: "La construction européenne",
    text: "Après les destructions de la Seconde Guerre mondiale, plusieurs pays européens ont progressivement choisi de coopérer économiquement puis politiquement, dans l'idée que des liens économiques étroits rendraient une nouvelle guerre entre eux quasiment impensable — un processus qui a donné naissance, étape par étape, à l'Union européenne actuelle.",
    fact: "Le tout premier projet de coopération européenne, en 1951, portait spécifiquement sur le charbon et l'acier — deux ressources stratégiques clés pour l'industrie de guerre, dont la mise en commun visait justement à rendre un nouveau conflit armé plus difficile entre pays partenaires.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "decolonisation",
    tier: "moyen",
    emoji: "🏳️",
    label: "La décolonisation",
    text: "Après la Seconde Guerre mondiale, la plupart des anciennes colonies d'Afrique et d'Asie ont progressivement obtenu leur indépendance, parfois par la négociation, souvent après des luttes ou des guerres de libération longues et coûteuses en vies humaines contre les anciennes puissances coloniales.",
    fact: "L'année 1960 est parfois appelée \"l'année de l'Afrique\" : dix-sept pays africains ont obtenu leur indépendance cette seule année-là, un rythme de décolonisation particulièrement rapide et concentré.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "artiste_temoin_acteur",
    tier: "long",
    emoji: "🎨",
    label: "L'artiste, témoin et acteur de son temps",
    text: "Face aux grands bouleversements du XXe siècle (guerres, totalitarismes, décolonisation), de nombreux artistes n'ont pas seulement représenté leur époque : certains ont pris position, dénoncé, protesté ou engagé leur art au service d'une cause, transformant parfois une œuvre en véritable acte politique.",
    fact: "Le tableau \"Guernica\" de Pablo Picasso, peint en réaction au bombardement d'une ville basque espagnole en 1937, est devenu l'une des œuvres antiguerre les plus reproduites et les plus connues au monde, encore utilisée aujourd'hui comme symbole de protestation contre les bombardements civils.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "memoire_histoire",
    tier: "long",
    emoji: "🕰️",
    label: "Mémoire et histoire, deux démarches différentes",
    text: "La mémoire d'un événement — ce que ceux qui l'ont vécu en retiennent et en transmettent, souvent chargé d'émotion — et le travail de l'historien, qui cherche à établir des faits vérifiables à partir de sources croisées, ne racontent pas toujours exactement la même chose sur un même événement du passé.",
    fact: "Deux témoins directs d'un même événement historique peuvent en garder des souvenirs sincères mais très différents, voire contradictoires — ce qui explique pourquoi les historiens ne se fient jamais à un seul témoignage sans le croiser avec d'autres sources.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "nations_unies",
    tier: "long",
    emoji: "🕊️",
    label: "Les Nations Unies, tirer les leçons de la guerre",
    text: "Créée en 1945, l'Organisation des Nations Unies avait pour ambition d'éviter un nouveau conflit mondial en offrant un espace permanent de dialogue diplomatique entre États — succédant à la Société des Nations, une organisation similaire créée après la Première Guerre mondiale mais qui n'avait pas réussi à empêcher la Seconde.",
    fact: "Le siège des Nations Unies à Genève, l'un des principaux au monde après celui de New York, témoigne du rôle historique de longue date joué par la Suisse comme terrain diplomatique neutre pour les négociations internationales.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "guerre_yougoslavie_rwanda",
    tier: "long",
    emoji: "⚠️",
    label: "Après 1990, de nouveaux génocides",
    text: "Malgré l'engagement pris après 1945 de \"plus jamais ça\", la fin du XXe siècle a vu se produire de nouveaux crimes de masse — notamment lors des guerres en ex-Yougoslavie et du génocide au Rwanda en 1994 — rappelant que la définition juridique d'un crime n'empêche pas, à elle seule, sa répétition.",
    fact: "C'est en réaction, en partie, à ces événements des années 1990 qu'a été créée en 2002 la Cour pénale internationale, une juridiction permanente chargée de juger les crimes de guerre, crimes contre l'Humanité et génocides, où qu'ils se produisent dans le monde.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getHistoire11eObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_HISTOIRE_11E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_HISTOIRE_11E_OBJECTS = MUSEE_HISTOIRE_11E_OBJECTS;
window.getHistoire11eObjectsForParcours = getHistoire11eObjectsForParcours;
