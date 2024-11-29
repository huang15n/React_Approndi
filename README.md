# React_Approndi

### Pourquoi choisir React plutôt que Vanilla JS ?

L'utilisation de **Vanilla JavaScript** pour construire des applications complexes peut rapidement devenir **pesant** , **sujet aux erreurs** et **difficile à maintenir** au fur et à mesure de l’évolution du projet. Lorsque l'application devient plus grande et que l'interactivité augmente, il devient de plus en plus difficile de gérer les différentes parties du DOM de manière efficace et organisée.

En revanche, **React** offre une manière plus simple et plus structurée de modéliser l'interface utilisateur. Grâce à son approche basée sur les composants réutilisables et à la gestion de l'état centralisée, React permet une **maintenance simplifiée**, une **meilleure organisation du code** et une **réduction des erreurs**. Avec React, la mise à jour du DOM est optimisée et gérée de manière déclarative, ce qui rend le développement plus fluide et moins sujet à des erreurs liées aux manipulations directes du DOM, comme c'est souvent le cas en Vanilla JS.

### React = Programmation UI Déclarative

L'une des principales caractéristiques de **React** est son approche de **programmation déclarative** pour l'interface utilisateur (UI). Au lieu de spécifier chaque étape et manipulation nécessaire pour mettre à jour le DOM (comme en JavaScript traditionnel ou Vanilla JS), vous **définissez simplement l'état cible** de votre interface utilisateur, et React s'occupe du reste.

#### Comment cela fonctionne ?

En programmation déclarative, vous décrivez **ce que l'interface utilisateur doit afficher** en fonction des données et de l'état actuel, plutôt que de spécifier **comment** ces éléments doivent être modifiés ou mis à jour à chaque changement d'état. React prend en charge la logique de mise à jour du DOM en fonction de l'état de l'application.

Voici un exemple de section formatée pour un fichier Markdown (`.md`), qui résume les étapes que vous pouvez inclure dans votre propre projet :

# Création d'une application React avec Vite

Cette section décrit les étapes nécessaires pour créer une nouvelle application React en utilisant **Vite**, ainsi que les outils nécessaires à son développement.

## Prérequis

Avant de commencer, vous devez avoir les outils suivants installés sur votre machine :

- **Node.js** (et npm)
- **Visual Studio Code (VSCode)**

### 1. Télécharger et installer **Node.js**

Node.js est nécessaire pour exécuter le gestionnaire de paquets npm et d'autres outils de développement. Suivez ces étapes pour l'installer :

1. Allez sur [https://nodejs.org/](https://nodejs.org/) et téléchargez la version LTS (Long Term Support).
2. Installez Node.js en suivant les instructions de votre système d'exploitation.
3. Vérifiez l'installation en exécutant les commandes suivantes dans un terminal :
   ```bash
   node -v
   npm -v
   ```

### 2. Télécharger et installer **VSCode**

Visual Studio Code est un éditeur de code performant pour travailler avec React. Pour l'installer :

1. Allez sur [https://code.visualstudio.com/](https://code.visualstudio.com/) et téléchargez la version adaptée à votre système.
2. Suivez les instructions d'installation.

### 3. Créer un projet React avec **Vite**

**Vite** est un bundler moderne et rapide qui facilite la création d'applications React. Pour démarrer :

1. Ouvrez un terminal et exécutez la commande suivante pour créer un nouveau projet :
   ```bash
   npm create vite@latest
   ```
2. Vous serez invité à choisir le nom de votre projet. Par exemple, **my-react-app**.
3. Sélectionnez **React** comme framework.
4. Choisissez **JavaScript** ou **TypeScript** selon votre préférence.
5. Accédez au dossier de votre projet :
   ```bash
   cd my-react-app
   ```

### 4. Installer les dépendances

Une fois que votre projet est créé, installez les dépendances avec la commande suivante :

```bash
npm install
```

### 5. Lancer le serveur de développement

Pour voir votre application en action, démarrez le serveur local avec :

```bash
npm run dev
```

Cela lancera un serveur local accessible à l'adresse [http://localhost:5173](http://localhost:5173) dans votre navigateur.

### 6. Ouvrir et éditer le projet dans **VSCode**

1. Ouvrez VSCode et allez dans **Fichier > Ouvrir le dossier** pour ouvrir le dossier de votre projet (`my-react-app`).
2. Vous pouvez maintenant commencer à modifier votre code dans `src/App.jsx` (ou `src/App.tsx` si vous utilisez TypeScript).

### 7. Extensions utiles pour VSCode

Voici quelques extensions utiles pour améliorer votre expérience de développement React :

- **Prettier** : pour formater automatiquement le code.
- **ESLint** : pour maintenir un code propre et éviter les erreurs de syntaxe.

Vous pouvez installer ces extensions en recherchant "Prettier" et "ESLint" dans le **Marché des Extensions** de VSCode.

---

En suivant ces étapes, vous serez prêt à développer et exécuter votre application React dans un environnement optimisé par **Vite**. Bonne programmation !

```

```

L'erreur `'vite' n’est pas reconnu en tant que commande interne ou externe` indique que Vite n'est pas installé correctement ou que la commande `vite` n'est pas disponible dans votre terminal. Voici quelques étapes pour résoudre ce problème :

### 1. Vérifiez si Vite est installé dans votre projet

Dans le terminal, exécutez la commande suivante pour vérifier si Vite est installé en tant que dépendance de développement dans votre projet :

```bash
npm list vite
```

Si vous obtenez un message d'erreur indiquant que `vite` n'est pas trouvé, vous devrez l'installer.

### 2. Installez Vite

Si Vite n'est pas installé, exécutez la commande suivante pour l'ajouter en tant que dépendance de développement dans votre projet :

```bash
npm install vite --save-dev
```

Cela installera Vite dans votre projet.

### 3. Vérifiez le script `dev` dans le fichier `package.json`

Ouvrez le fichier `package.json` de votre projet et assurez-vous que la commande `dev` utilise bien Vite. Elle doit ressembler à ceci :

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "serve": "vite preview"
}
```

Si la ligne `"dev": "vite"` est absente ou incorrecte, ajoutez-la.

### 4. Réessayez de démarrer le serveur de développement

Une fois que vous avez installé Vite, réessayez de démarrer le serveur de développement en exécutant la commande :

```bash
npm run dev
```

Cela devrait maintenant fonctionner correctement et démarrer votre application React sur le serveur local.
