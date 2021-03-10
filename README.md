# itou-landing

Page de renvoi (_landing page_) de la Plateforme de l'inclusion.

## Consignes d'accessibilité

Règles pragmatiques et simples qui permettent un bon niveau d'accessibilité:

- ajouter un attribut `alt` à toutes les images pour qu'un lecteur d'écran puisse en donner une description. Si l'image n'est pas porteuse de sens et a un rôle strictement décoratif, laisser l'attribut `alt` vide
- utiliser un balisage HTML sémantique et structuré. Exemple : titre = balise `<h*>`, paragraphe = balise `<p>` etc. Si ça n'est pas fait correctement, un lecteur d'écran ne marquera pas de pause ou d'emphase correctement etc.
- ajouter une balise `<label>` aux éléments de formulaire pour qu'un lecteur d'écran puisse décrire le champ de formulaire associé
- ajouter [des liens d'évitement](https://www.alsacreations.com/article/lire/572-Les-liens-d-evitement.html) permettant à un lecteur d'écran d'aller directement au contenu sans se cogner l'en-tête à chaque fois
- débrancher votre souris et tester son interface : certains utilisateurs ne peuvent pas utiliser une souris. Il faut pouvoir utiliser les interfaces au clavie
- utiliser [des contrastes fort entre le fond et le texte](https://webaim.org/resources/contrastchecker/)
- ne pas mettre un lien sur un texte "cliquez ici", car un lecteur d'écran qui navigue de lien en lien n'a aucun contexte au moment de la lecture du texte

## Consignes de compatibilité

On a 2 % d'utilisateurs encore sous IE 11 et la [fin de son support](https://techcommunity.microsoft.com/t5/microsoft-365-blog/microsoft-365-apps-say-farewell-to-internet-explorer-11-and/ba-p/1591666) est annoncée pour 2021.

Si l'intégration est dégradée dans IE 11, on pourra vivre avec.

Des screenshots de nos stats sont disponibles dans le dossier `compatibility`.

## Congignes et commandes d'intégration

Nécessite node `lts/erbium` ou superieur.

- Installer les dépendances `npm install`
- Intégrer en live reload avec BrowserSynch `npm run dev`
- Générer un `dist` optimisé `npm run build`
- Déployer sur github page `npm run deploy`
