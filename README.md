# HRnet

HRnet est une application interne de gestion des employés utilisée par la société financière WealthHealth.

Ce projet consiste à migrer une ancienne application front-end basée sur jQuery vers une application moderne en React, afin d'améliorer :

- les performances
- la maintenabilité du code
- l'expérience utilisateur

## Démo

Application déployée sur Vercel :
👉 https://hrnet-react.vercel.app

## Sommaire

1. [Installation](#installation)
2. [Contexte du projet](#contexte-du-projet)
3. [Fonctionnalités](#fonctionnalités)
4. [Plugin converti](#plugin-converti)
5. [Technologies](#technologies)
6. [Structure du projet](#structure-du-projet)
7. [Performance](#performance)

## Installation

Pour installer le projet, clonez le dépôt GitHub

Installez les dépendances :

```bash
pnpm install
```

Lancez le projet en mode développement :

```bash
pnpm dev
```

## Contexte du projet

La société WealthHealth utilise une ancienne application web interne appelée HRnet pour gérer les dossiers des employés.

Cette application a été développée avec jQuery et utilise plusieurs plugins tiers pour certains éléments d'interface :

- sélecteurs de date
- fenêtres modales
- menus déroulants
- tableaux de données

Avec le temps, ces plugins sont devenus :

- lents
- difficiles à maintenir
- sources de nombreux bugs

Le projet consiste donc à :

- convertir l'application complète en React
- remplacer les plugins jQuery par des composants React
- améliorer les performances et la stabilité

## Fonctionnalités

- **Création d'employé** : Formulaire permettant d'ajouter un nouvel employé.
- **Liste des employés** : Affichage dynamique des employés enregistrés.
- **Navigation entre pages** : Gestion des routes avec React Router.
- **Fenêtre modale de confirmation** : Affichée après la création d'un employé.
- **Gestion d'état** : Stockage des données des employés via un state manager.

## Plugin converti

Dans le cadre du projet, un plugin jQuery a été converti en composant React réutilisable.

### DatePicker

Fonctionnalités :
ouverture / fermeture de la modale
affichage d'un message personnalisé
fermeture via bouton ou clic extérieur
Ce composant a été développé en suivant :
programmation fonctionnelle
composants réutilisables
props documentées
Le composant est publié sous forme de package npm.

### Modal React

Fonctionnalités :
ouverture / fermeture de la modale
affichage d'un message personnalisé
fermeture via bouton ou clic extérieur
Ce composant a été développé en suivant :
programmation fonctionnelle
composants réutilisables
props documentées
Le composant est publié sous forme de package npm.

## Technologies

- **React** - Framework JavaScript pour la création d'interfaces utilisateur.
- **Vite** - Outil de build rapide pour les applications React.
- **React Router** - Gestion des routes de l'application.
- **SCSS** - Préprocesseur CSS pour une gestion optimisée des styles.
- **JavaScript (ES6+)** - Langage principal du projet.
- **Vercel** - Plateforme de déploiement permettant d’héberger et de mettre en ligne rapidement l’application web.

## Structure du projet

```
src/
│
├── components/
│ ├── Modal
│ ├── Form
│ └── Table
│
├── pages/
│ ├── CreateEmployee
│ └── EmployeeList
│
├── store/
│ └── employeeStore
│
├── styles/
│
├── App.jsx
└── main.jsx
```

## Performance

### Create employee

screen here

### Current employee

screen here
