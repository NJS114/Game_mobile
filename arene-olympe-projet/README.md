# Arène Olympe — Projet de jeu mobile

Index du projet. Chaque dossier couvre un aspect du jeu.

- **01-game-design/** — document de design global (pitch, univers, systèmes principaux)
- **02-histoire/** — récit détaillé (Acte I), personnages, lore, rangs
- **03-mecaniques/** — règles chiffrées du combat, de l'économie et de la progression
- **04-assets-visuels/** — briefs de prompts prêts à l'emploi pour générer les visuels (Higgsfield, Leonardo, Nano Banana)
- **05-technique/** — planner de développement (phases, jalons, backlog) et structure du projet de code
  - [`plan-de-developpement.md`](05-technique/plan-de-developpement.md) — le planner de référence, à suivre phase par phase
  - [`structure-projet.md`](05-technique/structure-projet.md) — stack (TypeScript + Vite + Phaser 4) et arborescence du code
  - [`plan-orchestration-agents.md`](05-technique/plan-orchestration-agents.md) — comment les agents/skills ci-dessous s'articulent en boucles (avancement, code, assets, cohérence)

## Prochaines étapes possibles

- ✅ **Phase 0 faite** — projet posé dans `arene-olympe-game/` (Vite/TypeScript/Phaser 4, ESLint/Prettier/Vitest configurés, premier commit) ; reste à confirmer visuellement sur desktop et mobile réel
- Construire le prototype jouable de la mécanique de frappe des sorts (**Phase 1** du planner — priorité avant tout le reste)
- Écrire l'Acte II ("L'Ascension")
- Développer les fiches des adversaires nommés
- Générer les premiers visuels à partir des briefs du dossier 04

## Outils Claude Code du projet

Configurés dans `.claude/` à la racine de `IA Game/` (donc actifs ici et dans le futur dossier de code du jeu). Utilisables dans Claude Code.

**Agents** (invoqués automatiquement par Claude selon le besoin, ou explicitement) — tous en lecture seule, aucun n'édite les fichiers sans confirmation :

| Agent | Rôle |
|---|---|
| `scrum-master` | Coordinateur : point d'avancement, discipline de phase, blocages, recommande quels autres agents lancer, prochaine action unique |
| `playtester` | Simule un joueur qui découvre le jeu, donne un retour qualitatif honnête (feeling, friction, rythme) |
| `game-balance-auditor` | Audite les formules chiffrées (mana, XP, prix, sponsors) pour des incohérences d'équilibrage |
| `lore-keeper` | Vérifie qu'un nouveau contenu narratif ne contredit pas le lore déjà établi |
| `game-code-reviewer` | Relit le code du jeu par rapport aux conventions de `structure-projet.md` |
| `asset-consistency-reviewer` | Compare un visuel généré au style figé du jeu (palette, trait, lisibilité) pour détecter une dérive de style |

**Skills** (commandes `/`) :

| Commande | Ce qu'elle fait |
|---|---|
| `/sprint-review` | Point d'avancement complet via `scrum-master` — le point d'entrée d'une session de travail |
| `/nouveau-sort` | Crée un sort complet (nom, coût équilibré), l'ajoute à `03-mecaniques/liste-sorts.md` et au backlog d'assets |
| `/nouvel-adversaire` | Crée un adversaire nommé complet (fiche lore + sort signature + brief visuel + entrée backlog) |
| `/revue-asset <chemin>` | Vérifie la cohérence visuelle d'une image générée et met à jour `04-assets-visuels/backlog-assets.md` |
| `/playtest` | Lance un rapport de playtest via l'agent `playtester` |
| `/annonce-arene` | Génère des lignes d'ambiance (présentateur, foule, textes flaveur) |

Pour un point d'avancement qui se relance tout seul pendant une session de travail (sans tâche de fond permanente), démarrer `/loop /sprint-review` — voir `plan-orchestration-agents.md` pour le détail des 4 boucles (avancement, code, création d'assets, cohérence d'assets).

## Pour garder ce contexte à chaque conversation

Ajoute l'ensemble de ce dossier dans la base de connaissances d'un Projet Claude (claude.ai → Projets → Base de connaissances) pour que je garde tout ce contexte sans que tu aies à le réexpliquer.
