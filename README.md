# Frontend Coding Challenge
This is a Frontend Coding Challenge application
The application is using the tsconfig to define some application pathes for including shortening

## Libraries

- [Angular 15.2.*](https://angular.io/) As a development freamwork.
- [Angular Material 15.2.*](https://material.angular.io/) for Material Design UI/UX.
- [tailwindcss](https://tailwindcss.com/) CSS framework.
- [jasmine](https://jasmine.github.io/) for implementing unit testing.
- [prettier](https://prettier.io/) for Opinionated Code Formatter.
- [ESlint](https://eslint.org/) As TSlint is deprecated for code standirzation, statically analyzes and to quickly find problems..
- [@ngrx/store](https://ngrx.io/) for sharing controlled state container in the application and reaction between components.

## Installation
After cloning the project. Run `npm i` to install all dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Lint Project

- Run `npm run lint` to check the lint proplems.
- Run `npm run lint-quiet` to check the lint errors with no wornnings.
- Run `npm run lint-autofix` to activate the autofixer from fixing the possible lint erros to fix.

# Docker Run

- Run `docker build . -t alabbas/code-challenge` create the image with tag alabbas/code-challenge.
- Run `docker images` command to list all the docker images in your machine.
- Run `docker run -p 3000:80 alabbas/code-challenge` to run the docker image.

## Browserslint

Run `npx browserslist` to list all browsers supported by the app

# Husky (pre-commit and pre-push hooks)

If the pre-commit and pre-push git hooks didn't work. You neeed unisntall the husky first using command `npm uninstall husky` and after that again install it using command `npm install husky --save-dev` . Now run the listed command : 

- `npx husky install`

- `npm set-script prepare "husky install"`

- `npx husky add .husky/pre-commit "npx lint-staged"`

- Now add the following thing into package.json

```
    "husky": {
        "hooks": {
            "pre-commit": "lint-staged",
            "pre-push": "npm run lint && npm run check"
        }
    },
    "lint-staged": {
        "*.{js,json,css,scss,html}": [
            "prettier --write",
            "git add"
        ],
        "*.ts": [
            "eslint --cache --fix",
            "git add"
        ]
    }
```
