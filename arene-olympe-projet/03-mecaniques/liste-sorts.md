# Liste des sorts

*Source de vérité pour tous les sorts du jeu. Alimentée par le skill `/nouveau-sort`. Une fois le code démarré, `src/data/spells.ts` doit rester le miroir exact de ce tableau.*

Rappel de la règle de coût (voir `systeme-combat.md`) : `coût_final = coût_de_base × multiplicateur_vitesse`. Le **coût de base** doit suivre la longueur/complexité du nom : un nom plus long et plus puissant = un coût de base plus élevé, mais un potentiel de réduction plus grand pour un joueur qui le tape bien.

| Nom | Élément | Tier | Longueur (car.) | Coût de base (mana) | Effet |
|---|---|---|---|---|---|
| Éclat | Neutre | 1 | 5 | 8 | Dégât physique-magique léger, rapide à taper |
| Flamme Vive | Feu | 1 | 11 | 14 | Dégât + chance d'appliquer Brûlure |
| Éclair Fulgurant | Foudre | 2 | 16 | 22 | Dégât élevé, rapide à lancer, faible chance d'Étourdissement |
| Jugement des Cieux Déchus | Lumière/Ombre | 4 | 25 | 45 | Dégât très élevé sur toute la barre, long à taper, risque d'échec élevé si erreur |

*Tiers indicatifs : 1 = sort de départ (Rang F/E), 2 = intermédiaire (Rang D/C), 3 = avancé (Rang B/A), 4 = légendaire (Rang S).*

## Historique des ajouts

- *(vide pour l'instant — le skill `/nouveau-sort` ajoute une ligne ici à chaque création, avec la date et une courte justification de l'équilibrage choisi)*
