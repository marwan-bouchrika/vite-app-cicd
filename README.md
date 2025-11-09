# Vite App CI/CD

Ce projet est un projet de test pour expérimenter avec les pipelines CI/CD de GitHub Actions.

Il s'agit d'une application React + TypeScript + Vite simple utilisée pour tester les workflows d'intégration continue et de déploiement continu.

## Technologies utilisées

- **React 18** avec TypeScript
- **Vite** comme bundler et serveur de développement
- **Vitest** pour les tests unitaires
- **ESLint** pour l'analyse statique du code

## Pipeline CI/CD

Le projet utilise GitHub Actions pour automatiser :

### Jobs d'intégration continue

- **Installation des dépendances** : `npm install`
- **Linting** : Vérification de la qualité du code avec ESLint
- **Tests unitaires** : Exécution des tests avec Vitest
- **Build** : Construction de l'application pour la production
- **Analyse de sécurité CodeQL** : Scan automatique du code pour détecter les vulnérabilités
- **Audit des dépendances** : Vérification des vulnérabilités dans les packages npm

### Jobs de déploiement

- **Déploiement automatique** sur GitHub Pages (ou autre plateforme)
- **Notifications** en cas de succès ou d'échec

### Jobs de sécurité

- **CodeQL Analysis** : Analyse statique de sécurité par GitHub
- **Dependency Review** : Vérification des nouvelles dépendances dans les PRs
- **SARIF Upload** : Upload des résultats d'analyse de sécurité
- **Security Alerts** : Notifications automatiques en cas de vulnérabilités détectées

Le pipeline se déclenche automatiquement sur :

- Push sur la branche `main`
- Pull requests vers `main`
