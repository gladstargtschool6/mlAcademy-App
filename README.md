<p align="center"><a href="https://mlacademy.ml"><img width=60% alt="Logo" src="https://mlacademy.blob.core.windows.net/assets/text_black_large.png"></a></p>

![React](https://img.shields.io/badge/React-16.8.4-61DAFB.svg)
![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/efe03ce7bc2d4c95a32e498e08218991)](https://app.codacy.com/app/mlAcademy/frontend?utm_source=github.com&utm_medium=referral&utm_content=mlAcademy/frontend&utm_campaign=Badge_Grade_Dashboard)
[![GitHub Issues](https://img.shields.io/github/issues/mlacademy/mlAcademy-App.svg)](https://github.com/mlacademy/frontend/issues)
[![Build Status](https://dev.azure.com/mlacademy/mlacademy/_apis/build/status/mlAcademy.frontend?branchName=production)](https://dev.azure.com/mlacademy/mlacademy/_build/latest?definitionId=1&branchName=production)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)
[![License](https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

# mlAcademy - An Interactive educational platform for high-school students, specializing in machine learning

_Written in React (w/ React Router, styled-components, Hooks, Bulma, Axios, Ace Editor, Azure AD + more)_

**Available at [https://mlacademy.ml](https://mlacademy.ml)**

Authored by:

- Samuil Stoychev [@samuil1998](https://github.com/samuil1998)
- Adam Peace [@adamnpeace](https://github.com/adamnpeace)
- Sotirios Vavaroutas [@svavaroutas](https://github.com/svavaroutas)

## Demonstration

[![DEMO](https://mlacademy.blob.core.windows.net/assets/demo.gif)](https://mlacademy.ml)

## Usage

### Set Up

[_Make sure you have yarn installed_](https://yarnpkg.com/lang/en/docs/install/)

```bash

git clone https://github.com/mlacademy/frontend.git

cd frontend

cp .env.example .env

yarn install

```

### Changing variables in /.env

To use Microsoft Active Directory Login, use [this guide](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app) to register an AD app and then replace the `clientID` field in the .env file. Ensure you add the endpoint `http://localhost:3000` on the App Registrations site to ensure the app functions correctly.

### Run Locally

```bash

# In frontend/src

yarn start

```
