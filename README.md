# itou-landing

Page de renvoi (_landing page_) de la Plateforme de l'inclusion.

## Consignes et commandes d'intégration et de modification du html

Nécessite node `v12.22.0` ou superieur pour installer les dépendances `npm install`

Ensuite, vous pouvez :
1. Lancer la version locale en live reload avec `npm run dev`
2. Intégrer ou modifier le html, scss ou js dans le répertoire `src`
3. Générer une version de déploiement otimisée dans le répertoire `dist` avec la commande `npm run build`
4. Commiter les modifications sur la branche `main`
5. Commiter sur la branche `gh-pages` et déployer automatiquement sur github pages avec `npm run deploy`


## Consignes de mise à jour du Theme Itou

Cette landing plateforme utilise le [Theme Itou](https://github.com/betagouv/itou-theme)

Pour mettre à jour le thème, vous devrez :
1. modifier le n° de version du thème dans le fichier `package.json`
2. lancer la commande `npm update itoutheme`
3. puis importer les nouveaux médias éventuels via `npm run importTheme`
