# Plan de développement — Arène Olympe

*Remplace l'ancienne roadmap sommaire. Ce document est le planner de référence : phases, jalons, backlog, décisions techniques.*

---

## 0. Décisions techniques figées

| Sujet | Décision | Raison |
|---|---|---|
| Stack | **Web-first : TypeScript + Vite + Phaser 4** | Itération rapide avec Claude Code, testable direct au navigateur (desktop + mobile), pas besoin d'installer un moteur lourd pour prototyper. Phaser 4 est la version stable actuelle sur npm (Phaser 3 était la cible initiale, mise à jour à la création du projet en Phase 0) |
| Combat | Tour par tour | Facilite l'intégration propre de la mécanique de frappe de sorts (voir `03-mecaniques/systeme-combat.md`) |
| Sauvegarde (prototype) | `localStorage` | Suffisant tant qu'il n'y a pas de compte joueur / cloud save |
| Packaging final | Décidé plus tard (Phase 7), probable **Capacitor** (Android/iOS) ou PWA | On ne bloque pas le développement là-dessus maintenant |

### Décisions explicitement reportées (ne pas trancher maintenant)

- Backend / compte joueur / cloud save
- Monétisation, achats in-app
- Multijoueur ou classements
- Portage vers un moteur natif (Godot/Unity) — seulement si le web montre ses limites en perf/distribution

---

## 1. Vue d'ensemble des phases

```
Phase 0 — Fondations techniques
Phase 1 — Prototype de la mécanique signature (frappe de sorts)
Phase 2 — Boucle de combat complète
Phase 3 — Progression & économie
Phase 4 — Contenu & narration            (en parallèle, continu)
Phase 5 — Habillage visuel               (démarre dès que le style IA est validé)
Phase 6 — Polish, équilibrage, QA
Phase 7 — Packaging & publication
```

Chaque phase a : un objectif, une checklist de tâches, une **Definition of Done** (critère objectif pour dire "c'est fini"). Ne pas avancer à la phase suivante avant que la DoD de la phase en cours soit atteinte — sauf Phase 4 (contenu) qui tourne en tâche de fond tout du long.

---

## Phase 0 — Fondations techniques

**Objectif** : avoir un projet qui tourne, vide mais propre, avant d'écrire la moindre mécanique de jeu.

- [x] Initialiser le repo git du code (séparé des docs de design, voir `structure-projet.md`) — `arene-olympe-game/`, premier commit fait
- [x] `npm create vite@latest` avec template `vanilla-ts`, ajout de Phaser (v4, voir note stack ci-dessus)
- [x] Mettre en place la structure de dossiers (voir `structure-projet.md`)
- [x] ESLint + Prettier configurés (`npm run lint` / `npm run format`, testés sans erreur)
- [x] Vitest configuré (`npm run test`, test de sanité passe)
- [ ] Scène `BootScene` minimale qui affiche un carré coloré à l'écran, testée sur desktop **et** sur mobile réel (navigateur téléphone, pas juste devtools responsive)
- [x] `.gitignore`, premier commit

**Definition of Done** : `npm run dev` lance le jeu, un carré s'affiche, ça marche sur un téléphone réel via le réseau local (`vite --host`).

**État réel** : `npm run dev`, `npm run build` et `npm run test` ont été vérifiés en ligne de commande (serveur démarre, build compile, JS bundle se charge, test passe) — mais je n'ai **pas** de moyen de piloter un navigateur ou un téléphone depuis cet environnement, donc je n'ai **pas** visuellement confirmé que le carré s'affiche à l'écran. À vérifier par toi : lance `npm run dev` dans `arene-olympe-game/`, ouvre `http://localhost:5173` (desktop) puis l'URL réseau affichée (`http://192.168.x.x:5173`) depuis ton téléphone sur le même Wi-Fi. Coche la case et la DoD une fois confirmé.

**Point d'attention découvert pendant le setup** : Node.js installé est en version 20.16.0, alors que Vite 8 demande officiellement 20.19+ ou 22.12+. Tout a fonctionné (dev/build/test) malgré l'avertissement, donc pas bloquant pour l'instant — mais si des comportements étranges apparaissent plus tard, une mise à jour de Node sera la première chose à tester.

---

## Phase 1 — Prototype de la mécanique signature

**Objectif** : valider le *feeling* de la frappe de sorts avant d'investir dans le reste. C'est la mécanique la plus risquée du jeu (voir Risques ci-dessous) — elle doit être prouvée en premier.

- [ ] `TypingChallenge` : composant qui affiche un mot à taper, capture les frappes clavier, mesure temps + erreurs
- [ ] Implémenter la formule de coût en mana selon `03-mecaniques/systeme-combat.md` (multiplicateurs x0.6 à x1.6)
- [ ] Calibrer le seuil rapide/lent en fonction de la longueur du mot (temps de référence = nb caractères × temps moyen de frappe)
- [ ] Un seul combat scripté : un adversaire fixe, un seul sort disponible ("Éclair Fulgurant" par ex.)
- [ ] Affichage clavier virtuel adapté mobile (voir risque UX ci-dessous — priorité haute)
- [ ] Retour visuel immédiat du multiplicateur obtenu (couleur, texte "Frappe parfaite !" etc.)

**Definition of Done** : tu peux taper le sort sur téléphone et sur desktop, voir le coût de mana varier selon ta vitesse/erreurs, et le sort inflige des dégâts à l'adversaire. Testé par toi + au moins une autre personne (le feeling doit être validé par quelqu'un qui ne connaît pas déjà la mécanique).

**⚠️ Point de décision** : si après playtest la frappe au clavier est frustrante sur mobile (autocorrect, clavier qui masque l'écran, écran qui bouge), c'est ici qu'il faut pivoter (ex: mots plus courts, zone de frappe custom sans clavier natif, pattern de tap rythmique à la place) — **avant** de construire tout le reste dessus.

---

## Phase 2 — Boucle de combat complète

**Objectif** : un combat complet, jouable du début à la fin, avec toutes les actions.

- [ ] 4 actions par tour : Attaque physique / Sort / Esquive-Parade / Objet
- [ ] Barres de vie et de mana (joueur + adversaire)
- [ ] Statuts de base : Brûlure, Étourdissement, Ralentissement, Bouclier magique, Vol de mana
- [ ] Profils IA adversaires : Agressif, Magicien pur, Défensif, Mixte (voir `systeme-combat.md`)
- [ ] Écran de préparation avant combat (check équipement/sorts)
- [ ] Résolution fin de combat : victoire (récompenses) / défaite (perte d'un objet)

**Definition of Done** : un combat complet contre chacun des 4 profils d'adversaires est jouable et gagnable/perdable, avec perte d'objet fonctionnelle en cas de défaite.

---

## Phase 3 — Progression & économie

**Objectif** : la boucle méta (hors combat) qui donne envie de revenir.

- [ ] Système de stats : 4 stats (Résistance, Magie, Force de frappe, Rapidité), répartition XP après victoire
- [ ] Système de rangs F→S avec déblocages (voir `02-histoire/personnages-lore.md`)
- [ ] Marché : armes, parchemins, équipement défensif, consommables, objets rares
- [ ] Sponsors : jauge de confiance, revenu passif, défis bonus
- [ ] Repérage (espionnage) et sabotage
- [ ] Entraînement physique/magique avec rendement décroissant selon écart de niveau
- [ ] Sauvegarde persistante (`localStorage`) : stats, inventaire, rang, sponsors

**Definition of Done** : boucle complète jouable en autonomie — Préparation → Marché → Repérage → Combat → Résultat → retour Préparation — sur plusieurs sessions (la sauvegarde tient).

---

## Phase 4 — Contenu & narration *(tâche de fond, en parallèle des autres phases)*

- [ ] Intégrer le texte de l'Acte I (`02-histoire/acte-1-les-bas-fonds.md`) dans le jeu
- [ ] Fiches complètes des adversaires nommés (nom, style, sort signature, motivation, sponsor associé)
- [ ] Écrire l'Acte II ("L'Ascension")
- [ ] Écrire les Actes III et IV

Ne bloque aucune autre phase — peut avancer indépendamment, y compris avant que le code existe.

---

## Phase 5 — Habillage visuel *(démarre dès que le style IA est validé, peut chevaucher Phase 2-3)*

- [ ] Générer et figer le style du personnage principal (voir `04-assets-visuels/briefs-generation-ia.md`)
- [ ] Activer Soul ID (Higgsfield) ou équivalent pour la cohérence
- [ ] Remplacer les placeholders (formes simples) par les assets définitifs au fur et à mesure
- [ ] Icônes de sorts, d'objets, portraits d'adversaires
- [ ] Décor d'arène, UI finale

**Definition of Done** : plus aucun placeholder géométrique visible dans le build.

---

## Phase 6 — Polish, équilibrage, QA

- [ ] Playtests répétés, ajustement des formules (coût mana, courbe XP, prix marché) à partir des retours
- [ ] Test de performance sur téléphone bas/moyen de gamme réel (pas seulement ton propre téléphone)
- [ ] Repasse UX du clavier de frappe (le point le plus fragile du jeu)
- [ ] Équilibrage des 4 profils d'adversaires
- [ ] Correction de bugs, animations manquantes, transitions

---

## Phase 7 — Packaging & publication

- [ ] Choix final : PWA vs Capacitor (Android/iOS)
- [ ] Comptes développeur Apple/Google si app native
- [ ] Vérification conformité stores
- [ ] Paiements in-app si prévus (repoussé jusqu'ici volontairement)

---

## 2. Risques identifiés

| Risque | Impact | Mitigation |
|---|---|---|
| La frappe au clavier mobile est frustrante (autocorrect, clavier qui cache l'UI, changement de layout selon l'appareil) | Élevé — c'est la mécanique signature du jeu | Prototyper et tester sur mobile réel dès la **Phase 1**, avant tout autre développement |
| Dérive de style visuel entre les assets IA générés à des moments différents | Moyen | Figer le style tôt (Phase 5), garder les mots-clés de prompt identiques, envisager Scenario pour la cohérence en volume |
| Scope trop large pour un dev solo (4 actes, marché, sponsors, repérage, entraînement...) | Élevé | Les DoD de chaque phase sont volontairement minimales ; le contenu (Actes II-IV, adversaires) peut être réduit sans casser le jeu jouable |
| Équilibrage économique jamais testé en conditions réelles | Moyen | Ne pas figer les valeurs numériques trop tôt ; Phase 6 dédiée à l'ajustement post-playtest |

---

## 3. Comment suivre l'avancement

- Cocher les cases directement dans ce fichier au fur et à mesure (`git diff` te montrera visuellement la progression si le repo est versionné)
- Une fois le repo de code créé (Phase 0), envisager de migrer le suivi vers des Issues/Projects GitHub une fois que le backlog devient trop fin pour tenir dans une checklist markdown
- Revoir ce planner à chaque fin de phase : ajuster les phases suivantes selon ce qu'on a appris (playtest, contraintes techniques découvertes)

---

## 4. Prochaine étape immédiate

✅ **Phase 0 posée** (`arene-olympe-game/`, premier commit fait — reste juste la confirmation visuelle desktop/mobile ci-dessus). Prochaine étape : attaquer directement le prototype de frappe de sorts (Phase 1) sans construire de menu ou d'écrans annexes avant que cette mécanique soit validée.
