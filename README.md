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

Cette application a été développée avec jQuery. Avec le temps, ces plugins sont devenus :

- lents
- difficiles à maintenir
- sources de nombreux bugs

Le projet consiste donc à :

- convertir l'application complète en React
- remplacer les plugins jQuery par des composants React
- améliorer les performances et la stabilité

## Fonctionnalités

- **Création d'employé** : Formulaire permettant d'ajouter un nouvel employé.
- **Liste des employés** : Affichage des employés enregistrés.
- **Navigation entre pages** : Gestion des routes avec React Router.
- **Gestion d'état** : Stockage des données des employés via un state manager.

## Plugin converti

Dans le cadre du projet, deux plugins jQuery ont été convertis en composant React réutilisable.

### DatePicker

Fonctionnalités :

- Input permettant de sélectionner une date
- Calendrier interactif pour sélectionner la date
- Support multilingue (français / anglais) via la prop `locale`
- Sélecteur de mois/année en dropdown via la prop `captionLayout`
- Bouton "Aujourd'hui" pour sélectionner rapidement la date du jour
- Personnalisation du style de l'input via la prop `className`
- Personnalisation du style du calendrier via la prop `popupClassName`
- Le composant est publié sous forme de package npm : [le lien](le lien)

### Modal React

Fonctionnalités :

- Ouverture / fermeture de la modale
- Affichage d'un message personnalisé
- Fermeture via bouton ou clic extérieur
- Fermeture via la touche "Escape"
- Personnalisation du style via la prop `className`
  Le composant est publié sous forme de package npm : [le lien](le lien)

## Technologies

- **React** - Framework JavaScript pour la création d'interfaces utilisateur.
- **Vite** - Outil de build rapide pour les applications React.
- **React Router** - Gestion des routes de l'application.
- **Redux** - Gestion de l'état global de l'application.
- **SCSS** - Préprocesseur CSS pour une gestion optimisée des styles.
- **JavaScript (ES6+)** - Langage principal du projet.
- **Vercel** - Plateforme de déploiement permettant d’héberger et de mettre en ligne rapidement l’application web.

## Structure du projet

```
src/
│
├── components/
│ ├── Button
│ ├── DataTable
│ ├── Form
│ └── ...
│
├── pages/
│ ├── CreateEmployee
│ ├── EmployeeList
│ └── Error
│
├── store/
│ └── employeeStore
│
├── styles/
│ ├── components/
│ │ ├── ...
│ ├── pages/
│ │ ├── ...
│ └── index.scss
│
└── index.jsx
```

## Performance

### Create employee

screen here

### Current employee

screen here
