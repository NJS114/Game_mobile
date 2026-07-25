# Plan d'orchestration — boucles de surveillance du projet

*Comment les agents et skills Claude Code du projet (voir `.claude/` à la racine de `IA Game/`) s'articulent pour couvrir l'avancement du jeu, le respect du code, la création d'assets et leur cohérence. Mode d'activation choisi : **à la demande**, pas de tâche de fond permanente (voir section 4).*

---

## 1. Vue d'ensemble — 4 boucles, 1 coordinateur

```
                        ┌─────────────────────┐
                        │     scrum-master      │   ← coordinateur (agent)
                        │  /sprint-review        │      lit l'état des 4 boucles,
                        └──────────┬───────────┘      recommande quoi lancer
                                   │
      ┌────────────────┬──────────┼──────────────┬──────────────────┐
      │                 │                          │                    │
 Boucle A          Boucle B                   Boucle C             Boucle D
 Avancement jeu    Conformité du code         Création d'assets    Cohérence des assets
 (planner)         (game-code-reviewer)       (backlog-assets.md)  (asset-consistency-reviewer)
```

Le `scrum-master` ne remplace aucune des 4 boucles — il lit leur état respectif et dit laquelle a besoin d'attention maintenant. C'est le point d'entrée unique (`/sprint-review`) quand tu ne sais pas par où commencer une session.

---

## 2. Boucle A — Avancement du jeu

**Ce qu'elle surveille** : la progression des phases dans `05-technique/plan-de-developpement.md` (checklists + Definition of Done), et la discipline de phase (ne pas construire la Phase 3 avant que la Phase 1 soit validée).

**Outils** : agent `scrum-master`, skill `/sprint-review`

**Déclencheur recommandé** : en début de chaque session de travail. `/sprint-review` te dit où tu en es et quelle est la prochaine action unique à faire.

**Sortie** : rapport de stand-up + mise à jour des checkboxes du planner **après confirmation**.

---

## 3. Boucle B — Conformité du code

**Ce qu'elle surveille** : le respect des conventions définies dans `05-technique/structure-projet.md` (séparation `systems/`/`scenes/`, `data/` sans logique, `SaveManager` comme seul accès à `localStorage`, perf mobile, testabilité).

**Outils** : agent `game-code-reviewer` (sortie structurée via `ReportFindings`)

**Déclencheur recommandé** : après chaque fonctionnalité de code écrite, avant de committer. Pas de sens à l'utiliser avant que le code existe (Phase 0 du planner) — cette boucle démarre réellement à partir de la Phase 1.

**Sortie** : liste de findings triés par sévérité, aucune modification automatique.

---

## 4. Boucle C — Création d'assets

**Ce qu'elle surveille** : la liste des visuels nécessaires au jeu et leur statut (`04-assets-visuels/backlog-assets.md`).

**Outils** : skills `/nouveau-sort` et `/nouvel-adversaire` (ajoutent automatiquement une ligne "À générer" au backlog quand ils créent un sort ou un adversaire), fichier `briefs-generation-ia.md` pour les prompts prêts à l'emploi, **serveur MCP Higgsfield** (voir ci-dessous) pour générer directement depuis Claude Code.

**Déclencheur recommandé** : consulter `backlog-assets.md` avant une session de génération d'images — c'est la liste de courses. Le personnage principal est prioritaire absolu (référence de style pour tout le reste, voir section 2 de `backlog-assets.md`).

**Mise à jour — génération directe via Higgsfield MCP** : le serveur MCP Higgsfield (`https://mcp.higgsfield.ai/mcp`) est configuré dans `.mcp.json` à la racine de `IA Game/`, avec les skills compagnons officiels installés dans `.claude/skills/higgsfield-*` (génération d'images/vidéos, Soul ID pour la cohérence de personnage, génération spécifique jeu vidéo). Une fois la connexion authentifiée (étape manuelle : ouvrir une nouvelle session Claude Code dans ce dossier pour charger le serveur, puis compléter la connexion dans le navigateur qui s'ouvre au premier appel), les prompts de `briefs-generation-ia.md` peuvent être générés **directement depuis ce chat**, sans passer par un outil externe. Le flux "prépare le prompt → tu vas le coller ailleurs → tu déposes l'image" reste la solution de repli si la connexion MCP n'est pas active.

---

## 5. Boucle D — Cohérence des assets

**Ce qu'elle surveille** : la dérive de style visuel entre assets générés à des moments différents — le risque n°1 identifié dans la table de risques du planner.

**Outils** : agent `asset-consistency-reviewer` (lit les images directement), skill `/revue-asset <chemin>`

**Déclencheur recommandé** : systématiquement après chaque génération d'image, **avant** de l'utiliser dans le jeu ou de la marquer "Validé" dans le backlog. Particulièrement critique pour le tout premier asset du personnage principal (il devient la référence pour tous les suivants) et pour les icônes de sorts/objets (doivent rester lisibles en petit).

**Sortie** : verdict par image (Cohérent / Dérive mineure / Dérive majeure) + mise à jour du statut dans `backlog-assets.md` après confirmation.

---

## 6. Comment déclencher les boucles concrètement

Mode retenu : **à la demande**, pas de cron. Trois façons de s'en servir, du plus léger au plus soutenu :

### a. Ponctuel
Invoquer directement une commande quand tu en as besoin : `/sprint-review`, `/revue-asset chemin/vers/image.png`, ou demander explicitement à Claude de lancer `game-code-reviewer` après avoir codé une fonctionnalité.

### b. `/loop` pendant une session active
Pour un point d'avancement qui se relance tout seul pendant que tu travailles (ex: toutes les 30-45 minutes), démarrer :
```
/loop /sprint-review
```
Le rythme s'auto-ajuste (mode dynamique) et s'arrête avec la session — aucune trace ni exécution une fois que tu as fini de travailler. C'est le bon niveau pour ce projet tant qu'il n'y a pas d'équipe ni de CI à surveiller en continu.

### c. Escalade future (non activée maintenant)
Si le projet grossit (plusieurs contributeurs, CI, génération d'assets en volume), on pourra migrer la Boucle A ou D vers une routine planifiée (cron) via le skill `schedule`, pour un vrai rapport récurrent indépendant d'une session ouverte. Décision explicitement repoussée pour l'instant — pas nécessaire pour un projet solo en Phase 0.

---

## 7. Rappel — aucun agent n'écrit sans confirmation

Les 6 agents du projet (`playtester`, `game-balance-auditor`, `lore-keeper`, `game-code-reviewer`, `asset-consistency-reviewer`, `scrum-master`) sont tous **lecture seule** : ils inspectent et rapportent, jamais n'éditent directement les docs, le code ou le planner. Toute mise à jour de fichier suggérée par un agent (cocher une case, changer un statut) passe par une confirmation explicite de ta part, appliquée par le skill ou par Claude directement.
