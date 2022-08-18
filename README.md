![Logo](https://scrnli.com/data/d/d4/d4f/d4f6/d4f68/d4f688/d4f688271130b45191d46d34bc152aefe1607d1c8492ec9dc2ec753051ce19da/78d8d14759bc40af5.png)

# P7 Créer un réseau social d'entreprise

## Compétences évaluées

- Développer l’interface d’un site web grâce à un framework front-end
- Implémenter un stockage de données sécurisé en utilisant une base de données
- Authentifier un utilisateur et maintenir sa session

## Installation du projet

### BACKEND

Le backend a été crée avec Node.js, Express.js et MySQL (Sequelize) comme base de données.

#### Installation

Dans le terminal de VSCODE, situez-vous dans le dossier ` /backend.`

Démarrer `npm install` pour installer toutes les dependencies du backend.

Dans le fichier `.env`, veuillez rentrer le host, user, mot de passe, et renseigner DB_NAME sur `locale`.

Créer le dossier `upload` dans `backend -> images `

Lancer Xampp et créer une nouvelle base au nom de : `locale`

Puis lancer le serveur avec la commande `npm start` nodemon est initier avec cette commande dans le script directement, Sequelize va se charger de créer les tables automatiquement dans la base `locale`.

### FRONTEND

Le frontend a été crée avec React.js

#### Installation

Dans le dossier `./frontend`. démarrez `npm install` pour installer toutes les dépendances du frontend.

#### Droits Admin

Pour tester les droits d'admin, dans votre base de données Mysql, veuillez vous rendre dans la table users, puis dans la colonne isAdmin remplacer le 0 par 1.
