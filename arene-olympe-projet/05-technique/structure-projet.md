# Structure du projet de code

*Ce dossier (`arene-olympe-projet/`) contient uniquement les **documents de design**. Le code du jeu vit dans un repo séparé — recommandé pour ne pas mélanger versionning de doc et versionning de code, et pour pouvoir donner accès au code (ex: Claude Code) sans exposer tout le lore.*

Nom suggéré : `arene-olympe-game/` (dossier frère de `arene-olympe-projet/`).

---

## Stack

- **TypeScript** — typage, essentiel dès que le jeu a des systèmes de stats/formules qui se croisent (économie, combat, progression)
- **Vite** — dev server instantané, hot reload, build simple
- **Phaser 4** — framework de jeu 2D : gestion de scènes, sprites, tweens, input clavier/tactile, support mobile natif. Évite de réinventer une boucle de jeu, un système d'animation et une gestion d'input à la main. (Phaser 3 était la cible initiale au moment de la rédaction de ce doc ; Phaser 4 est devenu la version stable sur npm au moment de poser le projet en Phase 0 — API scènes/config très proche.)
- **Vitest** — tests unitaires, en particulier pour les formules (coût mana, XP, prix) qui doivent être fiables et faciles à recalibrer
- **ESLint + Prettier** — cohérence de code, surtout utile si tu reviens sur le projet après une pause

## Arborescence

```
arene-olympe-game/
├── src/
│   ├── main.ts                    # point d'entrée, config Phaser
│   ├── config/
│   │   ├── GameConfig.ts          # config Phaser (résolution, scale mode mobile, etc.)
│   │   └── constants.ts           # constantes globales (durées, seuils par défaut)
│   │
│   ├── scenes/                    # une scène = un écran/état du jeu
│   │   ├── BootScene.ts
│   │   ├── PreloadScene.ts
│   │   ├── MainMenuScene.ts
│   │   ├── PreparationScene.ts    # hub entraînement / marché / repérage
│   │   ├── CombatScene.ts
│   │   └── ResultScene.ts
│   │
│   ├── systems/                   # logique de jeu pure, découplée de l'affichage Phaser
│   │   ├── combat/
│   │   │   ├── CombatEngine.ts        # résolution des tours, dégâts, statuts
│   │   │   ├── TypingChallenge.ts     # mécanique de frappe de sorts
│   │   │   ├── DamageFormulas.ts
│   │   │   └── OpponentAI.ts          # profils agressif/mage/défensif/mixte
│   │   ├── economy/
│   │   │   ├── Market.ts
│   │   │   ├── Sponsors.ts
│   │   │   └── Scouting.ts            # repérage + sabotage
│   │   └── progression/
│   │       ├── StatsSystem.ts
│   │       ├── RankSystem.ts
│   │       └── Training.ts
│   │
│   ├── data/                      # données statiques du jeu (contenu, pas logique)
│   │   ├── spells.ts               # noms de sorts, coût de base, effets
│   │   ├── items.ts
│   │   ├── opponents.ts            # profils + fiches adversaires nommés
│   │   └── ranks.ts
│   │
│   ├── entities/                  # objets métier (pas des GameObjects Phaser directement)
│   │   ├── Fighter.ts
│   │   ├── Spell.ts
│   │   └── Inventory.ts
│   │
│   ├── ui/
│   │   ├── components/             # boutons, barres de vie/mana, clavier virtuel custom
│   │   └── HUD.ts
│   │
│   ├── state/
│   │   ├── GameState.ts            # état global (joueur courant, session)
│   │   └── SaveManager.ts          # lecture/écriture localStorage
│   │
│   └── utils/
│
├── assets/
│   ├── images/                     # sprites, icônes (placeholders puis finaux du dossier 04)
│   ├── audio/
│   └── fonts/
│
├── public/                         # fichiers statiques servis tels quels
├── tests/                          # tests Vitest, structure miroir de src/systems/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .eslintrc / eslint.config.js
└── README.md
```

## Principes de structure

- **`systems/` ne dépend jamais de `scenes/`** — la logique de jeu (formules de dégâts, coût de mana, progression) doit être testable sans lancer Phaser. C'est ce qui permet à Vitest de tourner vite et permet de recalibrer les formules sans ouvrir le jeu.
- **`data/` est du contenu, pas du code** — ajouter un sort ou un objet doit être une modification de fichier de données, jamais toucher à la logique dans `systems/`.
- **Une scène par écran du game loop**, pas plus : `Préparation → Marché → Repérage → Combat → Résultat` correspond directement aux scènes listées. Si une scène devient trop grosse, en extraire des composants dans `ui/components/`, pas fusionner deux scènes.
- **`SaveManager` est le seul point d'accès à `localStorage`** — jamais d'accès direct ailleurs dans le code, pour pouvoir migrer vers un backend plus tard sans tout réécrire.

## Convention Git

- Un commit = un changement cohérent (une mécanique, un fix, un refactor) — pas de commits fourre-tout
- Branches par phase/fonctionnalité si tu veux garder `main` toujours jouable (ex: `feat/typing-challenge`, `feat/market`)
- Le dossier de design (`arene-olympe-projet/`) et le dossier de code (`arene-olympe-game/`) sont deux repos git distincts
