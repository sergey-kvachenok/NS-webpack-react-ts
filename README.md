# Getting Started
### `npm install` - install packages
### `npm run start` - to run the app

The project is available locally on port 3000
http://localhost:3000

The project has 2 versions: `create-react-app` and `webpack` (current one)

https://github.com/sergey-kvachenok/NS-webpack-react-ts - `webpack` version
https://github.com/sergey-kvachenok/ns-test - `create-react-app` version

The project is written by means of `React` and `typescript`. As a store `redux.toolkit` was used.

UI - `MUI-5` (under the hood it uses `emotion`)

unit, integration tests - `jest`, `react-testing-library`

e2e tests - `cypress`

linters -`prettier`, `eslint` (for `webpack` version)

api calls - `axios`

forms and form validation = `formik` + `yup`

`i18n` was used for multilanguage support (if we have a product for future scale)

If the user tries to log in with incorrect credentials, he sees validation errors

When the user logins with the correct credentials, he redirects to the main page with a server list.

Servers could be ordered by name and distance (sorting by two fields)

When the user presses the `logout` button, he redirects to the `login` page, and the token is removed from the `redux` store, and `persisted store` is cleared as well.

One of the requirements was keeping the token in the local storage, but in the current implementation, the token is stored in a persisted Redux store, which allows saving the state between reloads.

## Cypress
To make tests working correctly create a file in the root directory `cypress.env.json` and add there variables like in the template `cypress.env.tmp.json`

## Available Scripts

In the project directory, you can run:

### `npm run start` - to run the app
### `npm run test` - to srart unit tests
### `npm run cypress` - to srart e2e tests
### `npm run build` - builds the app for production to the `build`
### `npm run lint` - fix autofixable eslint errors
### `npm run format` - format project files

