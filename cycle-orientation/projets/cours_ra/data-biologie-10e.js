// ============================================================================
// SALLE BIOLOGIE 10e — "Le corps en action"
// Contenu original construit à partir des thèmes officiels du Programme
// cantonal Sciences de la nature — Biologie 10e (DIP Genève, prescriptions
// cantonales PER, juin 2023) : prévention santé, reproduction et diversité
// cellulaires, reproduction humaine, métabolisme, agents infectieux,
// écosystèmes. Aucun manuel disponible pour cette discipline : contenu
// rédigé pour être fidèle aux objectifs officiels, avec une attention
// particulière à rester factuel et adapté à l'âge des élèves.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_BIOLOGIE_10E_OBJECTS = [
  {
    id: "prevention_sante",
    tier: "court",
    emoji: "🩺",
    label: "Prévenir plutôt que guérir",
    text: "Beaucoup de maladies ne se déclarent pas du jour au lendemain : elles résultent souvent d'une accumulation de facteurs de risque (alimentation, sommeil, activité physique, stress) sur plusieurs années. La prévention consiste à agir en amont sur ces facteurs plutôt que d'attendre l'apparition des symptômes.",
    fact: "Un sommeil régulier et suffisant influence directement le système immunitaire : les personnes chroniquement privées de sommeil tombent statistiquement plus souvent malades que les autres.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "agents_infectieux",
    tier: "court",
    emoji: "🦠",
    label: "Bactéries, virus, parasites",
    text: "Les agents infectieux ne sont pas tous identiques : une bactérie est une cellule vivante autonome, un virus a besoin de détourner une autre cellule pour se reproduire, et un parasite vit aux dépens d'un organisme hôte. Comprendre ces différences explique pourquoi un même traitement (comme un antibiotique) n'agit pas contre tous.",
    fact: "Les antibiotiques sont efficaces contre les bactéries, mais totalement inutiles contre les virus — c'est pourquoi un médecin ne prescrit jamais d'antibiotiques contre un simple rhume, qui est d'origine virale.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "mitose_meiose",
    tier: "court",
    emoji: "🧬",
    label: "Deux façons de diviser une cellule",
    text: "La mitose produit deux cellules filles génétiquement identiques à la cellule d'origine, utile pour la croissance ou la réparation des tissus. La méiose, elle, produit des cellules reproductrices (gamètes) qui ne contiennent que la moitié du matériel génétique — une étape indispensable avant la fécondation.",
    fact: "C'est justement parce que chaque gamète ne contient que la moitié du matériel génétique que l'union d'un ovule et d'un spermatozoïde reconstitue un nombre complet de chromosomes chez l'enfant, moitié venue de chaque parent.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "reproduction_humaine",
    tier: "court",
    emoji: "👶",
    label: "De la fécondation à la naissance",
    text: "La reproduction humaine s'appuie sur un appareil reproducteur féminin et masculin complémentaire : la fécondation d'un ovule par un spermatozoïde donne naissance à un embryon, qui se développe ensuite durant la grossesse jusqu'à la naissance.",
    fact: "Au moment de la fécondation, c'est un seul spermatozoïde parmi plusieurs millions libérés qui parvient à féconder l'ovule — les autres n'atteignent jamais leur cible.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "metabolisme_corps",
    tier: "moyen",
    emoji: "🔥",
    label: "Le métabolisme, moteur du corps",
    text: "Le métabolisme regroupe toutes les réactions chimiques qui transforment la nourriture en énergie utilisable par les cellules — de la digestion qui décompose les aliments, à la respiration cellulaire qui en extrait l'énergie, jusqu'à la circulation sanguine qui distribue cette énergie dans tout le corps.",
    fact: "Même complètement immobile et au repos, le corps humain consomme en permanence de l'énergie rien que pour faire fonctionner le cœur, respirer et maintenir sa température — c'est ce qu'on appelle le métabolisme de base.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "systeme_immunitaire",
    tier: "moyen",
    emoji: "🛡️",
    label: "Le corps se défend",
    text: "Face à un agent infectieux, le système immunitaire réagit en plusieurs vagues : des défenses immédiates mais générales, puis une réponse plus lente mais ciblée, qui produit des anticorps spécifiques capables de reconnaître précisément l'intrus rencontré.",
    fact: "Une fois qu'il a rencontré un agent infectieux précis, le système immunitaire en garde la \"mémoire\" — c'est ce qui explique pourquoi on ne contracte généralement la varicelle qu'une seule fois dans sa vie.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "ecosystemes_10e",
    tier: "moyen",
    emoji: "♻️",
    label: "Les cycles qui recyclent la matière",
    text: "Dans un écosystème, la matière (eau, carbone, azote) circule en permanence entre les organismes vivants et leur environnement selon de grands cycles — rien ne se perd vraiment, tout est constamment transformé et réutilisé par d'autres organismes.",
    fact: "Le carbone qui compose une molécule dans votre corps aujourd'hui a probablement déjà fait partie, à un moment ou un autre, de nombreux autres organismes vivants au cours de l'histoire de la Terre.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "hormones_puberte",
    tier: "moyen",
    emoji: "📈",
    label: "Les hormones, messagers silencieux",
    text: "Les hormones sont des molécules libérées dans le sang par certaines glandes, qui voyagent dans tout le corps pour déclencher des changements précis à distance — c'est notamment ce système qui pilote les transformations corporelles de la puberté, sans qu'aucun nerf n'ait besoin d'être directement connecté à chaque organe concerné.",
    fact: "Contrairement à l'influx nerveux, quasi instantané, un message hormonal peut mettre plusieurs minutes, voire plusieurs heures, à produire son effet complet dans le corps.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "vaccination",
    tier: "long",
    emoji: "💉",
    label: "Le principe de la vaccination",
    text: "Un vaccin présente au système immunitaire une version inoffensive ou affaiblie d'un agent infectieux, sans provoquer la maladie, afin qu'il apprenne à le reconnaître et à réagir rapidement en cas de rencontre future avec le véritable agent infectieux.",
    fact: "Le principe de la vaccination a été découvert à la fin du XVIIIe siècle par le médecin anglais Edward Jenner, en observant que les personnes en contact avec la variole des vaches semblaient protégées contre la variole humaine, bien plus dangereuse.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "maladies_non_transmissibles",
    tier: "long",
    emoji: "❤️",
    label: "Les maladies qui ne se transmettent pas",
    text: "Contrairement aux maladies infectieuses, les maladies dites non transmissibles (certaines maladies cardiovasculaires, certains cancers, le diabète de type 2) ne se transmettent pas d'une personne à l'autre : elles se développent souvent sur le long terme, en lien avec le mode de vie, l'environnement et parfois la génétique.",
    fact: "À l'échelle mondiale, les maladies non transmissibles représentent aujourd'hui la première cause de décès, davantage que l'ensemble des maladies infectieuses réunies.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "diversite_biodiversite_10e",
    tier: "long",
    emoji: "🐛",
    label: "Espèces menacées, espèces envahissantes",
    text: "Une même situation — l'arrivée d'une nouvelle espèce dans un milieu — peut avoir des effets opposés selon le contexte : une espèce menacée peine à survivre face à la concurrence ou à la perte de son habitat, tandis qu'une espèce envahissante, introduite hors de son milieu d'origine, peut au contraire bouleverser un écosystème entier en l'absence de ses prédateurs naturels.",
    fact: "Une espèce envahissante n'est pas nécessairement \"nuisible\" dans son milieu d'origine : c'est souvent uniquement son introduction hors de cet équilibre naturel, sans les prédateurs qui la régulaient, qui pose problème.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "systeme_recompense_cerveau",
    tier: "long",
    emoji: "🧠",
    label: "Le circuit de la récompense",
    text: "Le cerveau possède un circuit biologique qui libère des substances associées au plaisir face à certaines expériences agréables (manger, réussir, être félicité) — un mécanisme utile à la survie, mais que certaines substances ou certains comportements peuvent détourner de façon excessive, ce qui est au cœur de la prévention en santé.",
    fact: "Ce même circuit de récompense biologique s'active aussi bien face à une expérience saine (le sport, une réussite) que face à une substance addictive — c'est précisément pourquoi la prévention mise autant sur des alternatives positives que sur l'information sur les risques.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getBiologie10eObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_BIOLOGIE_10E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_BIOLOGIE_10E_OBJECTS = MUSEE_BIOLOGIE_10E_OBJECTS;
window.getBiologie10eObjectsForParcours = getBiologie10eObjectsForParcours;
