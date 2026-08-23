# MATRIX_1602 — Escalade outdoor (Vieille Ville de Genève)

Parcours extérieur façon Foxtrail, reconstruit à partir de **votre
dossier complet 2024-2025** (feuille du juge, règles, mail de
menace) : mêmes 8 énigmes officielles, même dénouement (l'enseignant
démasqué), mêmes identifiants de fin de mission.

## Ce que fait le site

- **Écran d'accueil** avec les règles et un formulaire d'équipe (nom
  + membres facultatif) avant de démarrer — le chrono ne se lance
  qu'à la première réponse donnée sur le terrain.
- Autonomie totale : chaque secteur a son lien Google Maps, pas de
  maître du jeu nécessaire.
- **Sauvegarde à deux niveaux** :
  - autosauvegarde silencieuse dans le téléphone (localStorage) —
    si l'écran se verrouille ou l'onglet se ferme, l'équipe retrouve
    sa progression au prochain lancement (bouton "Reprendre" sur
    l'écran d'accueil) ;
  - export/import manuel en fichier `.json` (boutons 💾 / 📂 en haut
    de page) — utile pour changer de téléphone en cours de partie,
    ou pour que vous récupériez les fichiers de chaque équipe après
    coup.
- **Mode sobre** (case à cocher sur l'écran d'accueil) : coupe les
  animations pour les appareils ou connexions plus lents.
- 7 secteurs de terrain + une mission d'accusation + une mission de
  localisation finale, avec le même mécanisme de « dossier assemblé »
  que dans votre version salle (un mot du dossier par secteur validé,
  qui pointe vers le coupable).
- Missions **texte** : comparées sans tenir compte des
  majuscules/accents ; plusieurs orthographes acceptées quand c'est
  pertinent (ex. CANONNADE / CANNONADE).
- Missions **photo** : la photo n'est jamais jugée automatiquement —
  l'équipe compare visuellement avec le repère affiché à côté. En
  revanche, **la position GPS est bloquante** : le bouton "Valider"
  vérifie la distance réelle au repère et refuse de continuer si
  l'équipe est trop loin (tolérance actuelle : 3 m, réglable). Si le
  téléphone ne peut pas donner sa position, le secteur est validé
  sans vérification plutôt que de bloquer une équipe sans recours.
- Indices à la demande : chaque indice coûte 5 points sur les 10 du
  secteur (score total sur 90 points, affiché en direct et sur
  l'écran final).

## ⚠️ Important — vérifiez les lieux avant la sortie

| Secteur | Énigme (feuille juge) | Lieu | Fiabilité GPS |
|---|---|---|---|
| 1 | Genève | Promenade de la Treille | Lieu réel, coordonnées approximatives |
| 2 | Échelle | Maison Tavel (Rue du Puits-Saint-Pierre 6) | **Lieu réel et confirmé** : les échelles originales de 1602 y sont exposées ; entrée libre |
| 3 | Cloche | Cathédrale Saint-Pierre | Lieu réel, coordonnées fiables |
| 4 | Mère Royaume | Rue de la Corraterie (Tour de l'Escalade) | Lieu réel associé par la tradition populaire ; sa maison réelle documentée était plutôt vers l'ancienne porte de la Monnaie |
| 5 | Clé (Piaget) | 7, Rue de la Corraterie (mascaron, près du Grand Théâtre) | **Lieu réel et confirmé** : sa maison se trouvait juste à côté de la tour de la Corraterie ; un mascaron encore visible aujourd'hui lui est attribué (ou à Mère Royaume, selon les sources — débat historique connu) |
| 6 | Strophe 14 | Place Neuve (ancienne Porte-Neuve) | Lieu réel et coordonnées vérifiées |
| 7 | Canonnade | Rue de la Tertasse | Existence historique confirmée, **position GPS non vérifiée** |
| 8 | Accusation | — | Pas de GPS |
| 9 | Ralliement final | Bourg-de-Four | Lieu réel, place historique avec bancs — idéale pour partager la marmite |

3 des 7 secteurs de terrain sont désormais des missions photo (Maison
Tavel, Corraterie, mascaron de Piaget), toutes sur des lieux réels et
vérifiés.

**Avant de faire jouer vos élèves : parcourez vous-même l'itinéraire**
et corrigez au besoin les coordonnées `gps.lat` / `gps.lng` dans
`script.js` (clic droit sur Google Maps → coordonnées, ou sur place
avec votre téléphone). Testez aussi le blocage GPS à 3 m sur chaque
secteur : la précision réelle d'un smartphone en Vieille Ville tourne
plutôt autour de 5-20 m selon la rue, donc ce réglage peut bloquer
une équipe pourtant bien placée — élargissez `GEO_TOLERANCE_M` si
besoin.

## Côté organisation : ce qu'il reste vraiment à faire

Le site est autonome pour les élèves. Avant la sortie :

1. Marcher une fois le parcours et prendre les 3 photos de référence
   (`assets/ref-maison-tavel.jpg`, `assets/ref-corraterie.jpg`,
   `assets/ref-corraterie-piaget.jpg` pour le mascaron du 7 rue de la
   Corraterie).
2. Vérifier/ajuster les coordonnées GPS (tableau ci-dessus).
3. Remplir `CULPRIT_ANSWERS` (nom réel de la personne à démasquer)
   dans `script.js` ; `LOCATION_STEP` pointe déjà vers le
   Bourg-de-Four, changez ses coordonnées si vous préférez un autre
   lieu de ralliement réel.
4. Après la sortie, récupérer les fichiers `.json` exportés par
   chaque équipe (bouton 💾) pour comparer scores et temps si vous le
   souhaitez.

## Personnalisation

Tout se modifie dans `script.js` :
- Tableau `STEPS` : chaque énigme accepte `type: "text"` (`answer` +
  `altAnswers` facultatif) ou `type: "photo"` (`refPhoto`), plus
  `gps`, `question`, `brief`, `hint`, `fragment` (mot du dossier).
- `FINAL` : adresse mail et code secret de fin de mission — déjà
  réglés sur les identifiants 2024-2025 (`escaladepointdrize@gmail.com`
  / `drize081121`), à changer si vous relancez l'édition suivante.
- `POINTS_PER_STEP` / `HINT_PENALTY` / `GEO_TOLERANCE_M` en haut du
  fichier.

## Héberger sur GitHub Pages

Dans ce dossier :

```bash
git init                      # si pas déjà fait
git add .
git commit -m "Escalade outdoor — version 2024-2025"
git branch -M main
git remote add origin https://github.com/<votre-compte>/<nom-du-repo>.git
git push -u origin main
```

Puis sur GitHub : **Settings → Pages → Source : Deploy from a branch →
Branch: main / (root)**. Le site sera disponible à :

```
https://<votre-compte>.github.io/<nom-du-repo>/
```

Générez un QR code vers cette adresse pour le distribuer aux équipes.

## Test avant la sortie

- Ouvrez le site en 4G (pas seulement en Wi-Fi de classe).
- Testez la prise de photo et l'autorisation caméra.
- Testez le blocage GPS sur chaque secteur en vous y rendant
  physiquement.
- Testez l'export/import de sauvegarde (bouton 💾 puis 📂 avec le
  fichier généré) pour vérifier que la reprise fonctionne bien sur un
  autre téléphone.
