# OpenExistence Frontend

Frontend Vue.js 3 pour le projet OpenExistence.

## Installation

```bash
cd frontend
npm install
```

## Développement

```bash
npm run dev
```

Le serveur de développement démarre sur `http://localhost:3000`

## Build

```bash
npm run build
```

## Structure

```
src/
├── assets/          # CSS global
├── components/      # Composants réutilisables
├── router/          # Configuration Vue Router
├── store/           # Store Pinia (état global)
└── views/           # Pages de l'application
    ├── Home.vue     # Page d'accueil
    ├── About.vue    # À propos
    └── Donate.vue   # Page de dons
```
