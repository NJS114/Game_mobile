# ARÈNE OLYMPE — Document de Game Design

*Document de travail — v0.1*

---

## 1. Pitch

Un jeu mobile de combat en arène où le joueur incarne un guerrier ou une guerrière anonyme qui gravit les échelons d'un colisée moderne inspiré de la mythologie grecque. À l'image des protagonistes de manhwa de type "Level Up", le personnage commence faible, presque sans capacités, et se transforme progressivement en combattant redoutable au fil des victoires, des entraînements et des choix stratégiques (achats, espionnage, sponsors).

Le jeu mélange :
- Un système de progression par paliers (façon Solo Leveling / Level Up)
- Une mécanique de sorts unique basée sur la frappe au clavier
- Une économie de gladiateur (marché, sponsors, espionnage)
- Des conséquences réelles à la défaite (perte d'objets)

---

## 2. Univers & Lore

### 2.1 Contexte

L'action se déroule dans **l'Arène Olympe**, un colisée souterrain reconstruit sur les ruines d'un ancien sanctuaire dédié aux dieux grecs. Officiellement disparue depuis des siècles, l'Arène a été redécouverte et rouverte par une organisation secrète appelée **le Conclave**, qui organise des combats clandestins retransmis à une élite de spectateurs fortunés (les futurs "sponsors").

Les combattants ne portent pas leur vrai nom dans l'arène : ils reçoivent un **titre d'arène** qui évolue avec leur rang (ex: "Sans-Nom", puis "Lame Grise", puis "Champion des Cendres", etc. — à définir precisément plus tard).

### 2.2 Pourquoi le joueur se bat

Le personnage a été recruté (ou s'est porté volontaire, ou a été forcé — à trancher selon le ton voulu) pour rembourser une dette, sauver un proche, ou fuir un passé. Cette motivation sert de fil rouge narratif et peut être développée en plusieurs chapitres d'histoire.

### 2.3 Ton visuel

Esthétique moderne et stylée ("goofing" au sens dynamique/fun mais avec du poids visuel) : mélange d'armures antiques réinterprétées avec des matériaux modernes (métal, néon, tissus techniques), effets de sorts flashy, animations impactantes. Références possibles : arènes cyberpunk-antiques, néon sur marbre, feu et éclairs stylisés.

---

## 3. Trame narrative (Story)

Structure suggérée en **actes**, chacun correspondant à un palier de niveau :

1. **Acte I — Les Bas-Fonds** : le joueur découvre l'Arène, ses premiers combats sont chaotiques et sans magie. Introduction du mentor ou d'un rival.
2. **Acte II — L'Ascension** : premiers sponsors, premiers achats au marché, découverte du système d'espionnage. Le joueur commence à choisir une spécialisation (magie / force / rapidité).
3. **Acte III — Les Champions** : combats contre des adversaires nommés avec une vraie personnalité et un lore propre. Trahisons possibles, sponsors qui changent de camp.
4. **Acte IV — Le Conclave** : révélation sur qui dirige réellement l'Arène, enjeux plus grands que le simple combat.

Chaque acte peut débloquer de nouveaux lieux (le marché s'agrandit, de nouveaux types d'entraînement apparaissent, etc.).

---

## 4. Système de progression (inspiré Level Up)

### 4.1 Principe général

Comme dans les manhwa de type Level Up, le joueur commence **très faible** (peu de compétences, stats basses) et progresse par paliers visibles et gratifiants. Chaque montée de niveau doit se "sentir" (effet visuel, nouvelle capacité, changement d'apparence de l'arène ou de l'équipement).

### 4.2 Statistiques principales

- **Résistance** — encaisse des dégâts, réduit les effets de statut
- **Magie** — puissance et variété des sorts, réserve de mana
- **Force de frappe** — dégâts des attaques physiques
- **Rapidité** — vitesse d'attaque, esquive, et impacte la mécanique de frappe des sorts (voir section 8)

Chaque victoire donne de l'expérience répartissable (ou automatique selon la spécialisation choisie) dans ces 4 stats.

### 4.3 Paliers / Rangs

Suggestion de structure en rangs (à ajuster) :
`Rang F → Rang E → Rang D → Rang C → Rang B → Rang A → Rang S → Champion`

Chaque changement de rang :
- Débloque de nouveaux sorts/techniques
- Débloque de nouveaux objets au marché
- Change le niveau des adversaires proposés
- Peut débloquer un nouveau chapitre d'histoire

---

## 5. Mécanique de combat en arène

Combat au tour par tour ou en temps réel avec pause tactique (à trancher — le tour par tour facilite la mécanique de frappe des sorts, le temps réel est plus dynamique/moderne). Éléments clés :

- Barre de vie et barre de mana
- Actions disponibles : attaque physique, sort (via la mécanique de frappe, voir section 8), esquive/parade, objet consommable
- Les adversaires ont un profil de combat (agressif, défensif, magicien pur, etc.) visible partiellement ou totalement selon le repérage effectué avant le combat

---

## 6. Le Marché

Lieu d'achat entre les combats. Catégories d'objets :

- **Armes** — améliorent la force de frappe ou débloquent des attaques spéciales
- **Parchemins** — enseignent de nouveaux sorts (dont le nom exact doit être mémorisé pour la mécanique de frappe)
- **Équipement défensif** — améliore la résistance
- **Consommables** — potions de mana/vie utilisables en combat
- **Objets rares/légendaires** — obtenus via récompenses de rang ou achetés très cher

L'argent provient des gains de combat et des revenus passifs des sponsors.

---

## 7. Repérage (scouting) et sabotage

Avant un combat, le joueur peut dépenser de l'argent pour :

- **Espionner un adversaire** — révèle ses stats, son style de combat, ses sorts connus
- **Payer pour handicaper le prochain adversaire** — réduit une de ses stats pour le combat à venir (coût élevé, risque de conséquences narratives : rumeurs, réputation, représailles d'un autre joueur/adversaire)

Ce système ajoute une couche stratégique et un vrai choix économique (dépenser pour l'info vs dépenser pour l'équipement).

---

## 8. Mécanique spéciale — Incantation des sorts

**La mécanique signature du jeu :**

- Pour lancer un sort, le joueur doit **taper le nom complet du sort** sur un clavier virtuel qui apparaît en combat.
- **Plus la frappe est rapide et sans erreur, moins le sort consomme de mana.**
- Une frappe lente ou avec des erreurs augmente le coût en mana et peut réduire les dégâts/effets du sort, voire le faire échouer.
- La stat **Rapidité** peut influencer légèrement la fenêtre de temps ou réduire le coût de base, mais la performance du joueur (sa frappe réelle) reste le facteur principal — ce qui crée un vrai skill gameplay en plus du système de stats.
- Plus le joueur apprend de sorts (via les parchemins), plus les noms peuvent être longs/complexes pour les sorts puissants, créant une vraie courbe de maîtrise.

*Exemple de conséquence design : un sort "Éclair Fulgurant" est plus rapide à taper qu'un sort "Jugement des Cieux Déchus", donc moins cher en mana mais probablement moins puissant — équilibre naturel entre accessibilité et puissance.*

---

## 9. Sponsors

- En battant le champion d'un sponsor, le joueur peut **gagner ce sponsor**, qui génère un **revenu passif régulier**.
- Chaque sponsor a une réputation/exigence : s'il est déçu par trop de défaites du joueur, il peut **retirer son soutien**.
- Possibilité future : plusieurs sponsors avec des bonus différents (réduction sur le marché, accès à des sorts exclusifs, informations d'espionnage gratuites, etc.)

---

## 10. Entraînement

Deux types d'entraînement, débloqués et améliorés selon le niveau :

- **Entraînement physique** — améliore Force de frappe et Résistance, structuré en exercices/mini-jeux ou simple progression par palier de temps investi
- **Entraînement magique** — améliore Magie et débloque des affinités de sorts, peut inclure des exercices de "frappe" pour s'entraîner à la mécanique de sort (utile en amont pour préparer les gros combats)

L'efficacité de l'entraînement doit être **cohérente avec le niveau de l'adversaire à venir** : s'entraîner contre un adversaire beaucoup plus faible rapporte moins, viser un entraînement au niveau du prochain adversaire prévu est optimal.

---

## 11. Conséquences de la défaite

- En cas de défaite, le joueur **perd un objet** (aléatoire ou le moins cher de son inventaire équipé — à définir), créant un vrai risque et une tension à chaque combat.
- Possibilité d'ajouter d'autres conséquences narratives (perte de réputation, sponsor qui doute, rumeurs dans l'arène).

---

## 12. Boucle de gameplay (game loop)

```
Préparation → Entraînement (physique/magique)
     ↓
Marché → achat d'armes, parchemins, consommables
     ↓
Repérage → espionner l'adversaire / handicaper (optionnel, payant)
     ↓
Combat en arène → utilisation des stats + mécanique de frappe des sorts
     ↓
Résultat :
  Victoire → argent, XP, éventuellement nouveau sponsor
  Défaite → perte d'un objet
     ↓
Retour à Préparation (avec progression narrative selon les paliers)
```

---

## 13. Points à trancher ensuite

- Nom définitif du jeu et des rangs
- Combat au tour par tour vs temps réel avec pause
- Nombre de sorts/parchemins prévus au lancement
- Ton exact de l'histoire (sombre/mature vs plus accessible)
- Design des personnages (jouable féminin/masculin, customisation ou non)
- Liste des premiers adversaires nommés avec leur lore

---

*Prochaine étape suggérée : prototype jouable de la mécanique de frappe des sorts + un combat simple, pour valider le feeling avant de construire le reste.*
