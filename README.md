# Projet de gestion de cartes

Bienvenue dans ce projet de gestion de cartes, développé dans le cadre de ma formation chez O'clock. Ce projet est conçu pour démontrer l'utilisation de Node.js, Express, EJS et PostgreSQL dans le développement d'une application web dynamique.

## Description

Ce projet permet de :

- Lister toutes les cartes disponibles : Afficher une liste de cartes avec leurs détails respectifs.
- Afficher les détails d'une carte spécifique : Voir les informations détaillées d'une carte en particulier.
- Rechercher des cartes : Effectuer des recherches basées sur différents critères tels que l'élément, le niveau, la valeur et le nom.
- Gérer un deck : Ajouter des cartes à un deck, visualiser les cartes du deck, et retirer des cartes du deck.

## Fonctionnalités

- Page d'accueil : Affiche la liste de toutes les cartes disponibles.
- Détails des cartes : Affiche les informations détaillées d'une carte lorsqu'on clique dessus.
- Recherche avancée : Permet de rechercher des cartes selon différents critères.
- Gestion de deck : Fonctionnalités pour ajouter, visualiser et supprimer des cartes dans un deck.

## Technologies utilisées

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)

## Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/Sebdev43/Projet-de-gestion-de-cartes.git
cd Projet-de-gestion-de-cartes
```

2. Installer les dépendances :

```bash
npm install
```

3. Configurer la base de données :

- Créez une base de données PostgreSQL.
- Importez le fichier `create_db.sql` pour créer les tables nécessaires.

4. Configurer les variables d'environnement :

- Renommez le fichier `.env.example` en `.env`.
- Remplissez les variables d'environnement dans le fichier `.env`.

5. Démarrer le serveur :

```bash
npm start
```

## Utilisation

- Accédez à l'application via http://localhost:1234 (ou le port configuré).
- Utilisez la barre de navigation pour explorer les différentes fonctionnalités telles que la liste des cartes, les détails des cartes, la recherche avancée, et la gestion du deck.
