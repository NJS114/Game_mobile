# Système de combat — détails techniques

## Structure d'un combat

1. Écran de préparation (dernier check équipement/sorts)
2. Combat au tour par tour recommandé (facilite la mécanique de frappe — voir plus bas)
3. Chaque tour : le joueur choisit une action (Attaque physique / Sort / Esquive-Parade / Objet)
4. Résolution : dégâts, effets de statut, mise à jour des barres de vie/mana
5. Fin de combat : victoire (récompenses) ou défaite (perte d'un objet)

## Mécanique de frappe des sorts — règles proposées

- Chaque sort a un **nom fixe** que le joueur doit taper entièrement (ex: "Éclat", "Flamme Vive", "Jugement des Cieux Déchus")
- Un **timer** démarre dès l'ouverture du clavier de sort
- Formule proposée pour le coût en mana :

```
coût_final = coût_de_base × multiplicateur_vitesse

multiplicateur_vitesse :
- Frappe très rapide, 0 erreur   → x0.6  (réduction de 40%)
- Frappe rapide, 0 erreur        → x0.8
- Frappe normale                 → x1.0
- Frappe lente                   → x1.3
- Frappe très lente ou erreur(s) → x1.6, risque d'échec du sort
```

- Le seuil "rapide/lent" doit être calibré selon la longueur du mot (temps de référence = nombre de caractères × temps moyen de frappe humaine, ajustable en playtest)
- Une **erreur de frappe** (mauvaise lettre) ne bloque pas le sort mais pénalise le multiplicateur, pour éviter la frustration totale
- La stat **Rapidité** peut donner un léger bonus passif (ex: +5% de marge sur le seuil de temps par palier de Rapidité), mais ne remplace jamais la performance réelle du joueur

## Profils d'adversaires (IA de combat)

Chaque adversaire a un profil qui définit son comportement :

- **Agressif** — privilégie l'attaque physique, sorts courts et rapides
- **Magicien pur** — mise sur des sorts puissants mais longs, vulnérable si le joueur peut encaisser le début du combat
- **Défensif** — esquive/pare beaucoup, combat plus long, use l'endurance
- **Mixte** — équilibre selon la situation (bas en vie = plus agressif, etc.)

## Statuts et effets (base à étendre)

- Brûlure, Étourdissement, Ralentissement, Bouclier magique, Vol de mana

## Défaite

- Le joueur perd **un objet équipé** (le moins précieux par défaut, ou un objet aléatoire — à trancher)
- Option d'extension future : "objet protégé" achetable au marché pour éviter une perte lors d'une défaite (mécanique de sécurité monétisable ou non)
