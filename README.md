
# HAPPN - QA Automation Test
Repository des tests automatisés
Ce projet utilise l'architecture "Features // Pages // Steps" écrit en TypeScript et Gherkin.

## Architecture

- Framework WebdriveriO `V8`
- Server Appium (port `4723`)
- Dossier `/tests` qui contient les tests automatisés
	- `/features/**` -> Scénarios écrit en Gherkin
	- `/pages/**` -> Représentation des écrans de l'application sous forme de "page"
	- `/steps/**` -> Steps des scénarios au format JavaScript

## Prérequis

- Appium `>=2.5`
- NodeJS `Latest LTS v22.16.0`
- Android Studio `Latest version`
- Emulateur `Android 15.0`
- Appium Inspector

## Installation

```sh
npm install
```

## Run

```sh
npm run android
```

## Android - Appium inspector capabilities

- L'application demo à utiliser est disponible dans le dossier `apps` 

```json
{
  "deviceName": "emulator-5554",
  "disableWindowAnimation": "true",
  "automationName": "UiAutomator2",
  "platformName": "Android",
  "noReset": true
}
```

## Test technique à réaliser

- [TODO.md](TODO.md)