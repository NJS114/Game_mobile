# Économie & Progression

## Statistiques et montée de niveau

- 4 stats : Résistance, Magie, Force de frappe, Rapidité
- Chaque victoire donne de l'XP + des points de stat à répartir (choix du joueur) ou répartition automatique selon la spécialisation choisie en amont — à trancher
- Un changement de rang (voir tableau des rangs dans `02-histoire/personnages-lore.md`) doit se sentir : effet visuel, nouveau titre affiché, débloque contenu

## Marché — catégories et logique de prix

| Catégorie | Effet | Logique de prix |
|---|---|---|
| Armes | + Force de frappe, débloque attaques spéciales | Prix croissant avec le rang requis |
| Parchemins | Enseigne un nouveau sort | Prix + complexité du nom (sorts puissants = noms plus longs = plus chers) |
| Équipement défensif | + Résistance | Prix croissant, effets cumulables limités |
| Consommables | Potions mana/vie, usage unique en combat | Prix bas, achat répété |
| Objets rares/légendaires | Bonus uniques, effets spéciaux | Non achetables directement — récompense de rang ou prix très élevé |

## Sponsors

- Chaque sponsor a une **jauge de confiance** qui monte avec les victoires et descend avec les défaites
- Sous un certain seuil → le sponsor retire son soutien (perte du revenu passif)
- Revenu passif suggéré : montant fixe par intervalle de temps (ex: toutes les X minutes de jeu réel) tant que la jauge de confiance reste positive
- Un sponsor peut proposer des **défis bonus** ("bats tel adversaire avant telle échéance") pour booster sa confiance rapidement

## Repérage / Sabotage — coûts

- **Espionnage** (révèle stats + style de l'adversaire) : coût modéré, accessible dès le début
- **Handicap sur le prochain adversaire** : coût élevé, débloqué à partir d'un rang intermédiaire (ex: rang C), avec un risque narratif (réputation, rumeurs) si utilisé trop souvent

## Entraînement

Deux types, avec un principe de rendement décroissant si mal utilisés :

- **Entraînement physique** → + Force de frappe / + Résistance
- **Entraînement magique** → + Magie, débloque affinités de sorts, séances d'entraînement à la frappe (aide réelle le joueur, hors combat, à s'entraîner sur les noms de sorts)

Règle de cohérence : le gain d'entraînement est optimal quand le niveau visé correspond au **prochain adversaire prévu** (ex: via l'espionnage). S'entraîner très en dessous du niveau nécessaire donne un gain réduit (rendement décroissant), pour inciter à la préparation stratégique plutôt qu'au grind aveugle.

## Boucle économique résumée

```
Combat gagné → Argent + XP + (revenu passif sponsor en continu)
     ↓
Dépenses : Marché (équipement/sorts) + Repérage (info/sabotage) + rien (entraînement gratuit ou payant, à trancher)
     ↓
Défaite → perte d'un objet → replonge la valeur du marché dans la boucle (le joueur doit racheter)
```
