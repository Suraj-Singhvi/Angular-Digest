# AngularDigest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Reference : https://medium.com/@victormejia/setting-up-prettier-in-an-angular-cli-project-2f50c3b9a537

https://medium.com/ngconf/ultimate-prettier-angular-cheatsheet-777c9515f4fb


- Install prettier
- added a .prettierrc
- Remove formatting rules from tslint.json


=> Configure pre-commit hooks - so that no code goes to commit unformatted
for this install npm-run-all husky - these two package


> run-s to run scripts in sequence, and run-p to run scripts in parallel:
> it will first format your files and then run those through tslint.
> {
> "precommit": "run-s format:fix lint", // pre-commit hooks
> "format:check": "prettier --config ./.prettierrc --list-different \"src/{app,environments,assets}/\*_/_{.ts,.js,.json,.css,.scss}\"" // for CI
> }
