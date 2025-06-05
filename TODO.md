# Test Technique

---

## 🔹 Soumission du travail

Pour soumettre votre travail :

- Forkez ce projet sur un repository privé
- Ajoutez les reviewers de l'équipe à votre repository
- Soumettez votre travail sous forme de Pull Request

---

## 🔹 Critères d'évaluation

Votre code sera évalué sur les aspects suivants :

### Structure du code
- Organisation claire et logique des fichiers et dossiers
- Respect de l'architecture Page Object Model
- Respect des bonnes pratiques de nommage
- Lisibilité et maintenabilité du code
- Création de fonctions/méthodes réutilisables

### Clarté et lisibilité de la PR
- Organisation logique des commits
- Messages de commit descriptifs et concis
- Documentation claire des changements effectués

---

## 🔹 Entretien de debrief

Lors de l'entretien de debrief, vous devrez :

- Expliquer vos choix techniques et d'organisation (Feature, steps definition, etc.)
- Expliquer le fonctionnement des tests que vous avez implémentés
- Faire une démonstration en lançant le projet
- Proposer des pistes d'amélioration pour le framework de test

---

## 🔹 Exercice 1 : Vérifications à l’ouverture de l’application

À l’ouverture de l'application, certains éléments doivent impérativement être présents afin d'assurer son bon fonctionnement.

- ✅ Créez une **step** permettant de vérifier la **présence des 6 boutons** de la **tabbar**.
- ✅ Créez une **step** permettant de vérifier que le bouton **"Home"** est bien **sélectionné par défaut**.

---

## 🔹 Exercice 2 : Connexion utilisateur

L’utilisateur doit pouvoir accéder à l’onglet **"Login"** et se connecter correctement à l’application. Une fois connecté, une **popup de succès** s’affiche. L’utilisateur doit ensuite cliquer sur **"OK"** pour finaliser le processus.

🧪 **Compte de test à utiliser** :

| Email         | Mot de passe |
|---------------|--------------|
| qa@happn.fr   | 12345678     |

---

## 🔹 Exercice 3 : Validation de la page "Swipe"

### Étape 1 :
- Accédez à l’onglet **"Swipe"**.
- Vérifiez la **présence du titre et de la description** de la page.

### Étape 2 :
- Vérifiez la **présence d’un easter egg** en bas de la page.

### Étape 3 :
- En milieu de page, un **carousel contenant 6 éléments** est affiché.
- Pour **chaque élément**, vérifiez le **titre** et la **description** associés.

---

## 🔹 Exercice 4 : Tests API

**API à utiliser** : [https://restful-api.dev/](https://restful-api.dev/)

🎯 **Objectif** : Concevoir une série de tests pour valider le bon fonctionnement de cette API.

### ✅ Consignes :
- Écrivez **au minimum 5 tests** (ou plus si pertinent) pour couvrir les différents cas d’usage de l’API.
- Vous êtes libre de choisir les outils et frameworks de votre choix.

---
