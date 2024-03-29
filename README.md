# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Project Structure
```
📦frontend
 ┣ 📂libs
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂usecase
 ┃ ┃ ┃ ┣ 📜mapper.ts
 ┃ ┃ ┃ ┗ 📜use-case.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📂service
 ┣ 📂src
 ┃ ┣ 📂core
 ┃ ┃ ┣ 📂domain
 ┃ ┃ ┃ ┣ 📂entity
 ┃ ┃ ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┃ ┗ 📂user
 ┃ ┃ ┃ ┗ 📂port
 ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┗ 📜user.dto.ts
 ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┗ 📜user-repostiory.port.ts
 ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜login.port.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📂user
 ┃ ┃ ┃ ┃ ┗ 📜token.ts
 ┃ ┃ ┗ 📂services
 ┃ ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┃ ┗ 📜login.service.ts
 ┃ ┃ ┃ ┗ 📂user
 ┃ ┣ 📂environments
 ┃ ┃ ┣ 📜environment.prod.ts
 ┃ ┃ ┗ 📜environment.ts
 ┃ ┣ 📂infrastructure
 ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┣ 📂role
 ┃ ┃ ┃ ┗ 📂user
 ┃ ┃ ┃ ┃ ┣ 📂mapper
 ┃ ┃ ┃ ┃ ┃ ┗ 📜user.mapper.ts
 ┃ ┃ ┃ ┃ ┣ 📂models
 ┃ ┃ ┃ ┃ ┃ ┗ 📜user.models.ts
 ┃ ┃ ┃ ┃ ┣ 📜token.ts
 ┃ ┃ ┃ ┃ ┣ 📜user.module.ts
 ┃ ┃ ┃ ┃ ┗ 📜user.repository.ts
 ┃ ┃ ┗ 📜data.module.ts
 ┃ ┣ 📂views
 ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┣ 📂i18n
 ┃ ┃ ┃ ┃ ┗ 📜lang-a.json
 ┃ ┃ ┃ ┣ 📂icons
 ┃ ┃ ┃ ┃ ┗ 📜custom-icon-a.svg
 ┃ ┃ ┃ ┣ 📂images
 ┃ ┃ ┃ ┃ ┗ 📜image-a.svg
 ┃ ┃ ┃ ┣ 📂static
 ┃ ┃ ┃ ┃ ┗ 📜structure-a.json
 ┃ ┃ ┃ ┗ 📜.gitkeep
 ┃ ┃ ┣ 📂core
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📂navbar
 ┃ ┃ ┃ ┃ ┃ ┣ 📜navbar.component.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜navbar.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜navbar.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜navbar.component.ts
 ┃ ┃ ┃ ┃ ┣ 📜app.component.css
 ┃ ┃ ┃ ┃ ┣ 📜app.component.html
 ┃ ┃ ┃ ┃ ┣ 📜app.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜app.component.ts
 ┃ ┃ ┃ ┣ 📂constants
 ┃ ┃ ┃ ┃ ┗ 📜constant-a.ts
 ┃ ┃ ┃ ┣ 📂enums
 ┃ ┃ ┃ ┃ ┗ 📜enum-a.ts
 ┃ ┃ ┃ ┣ 📂features
 ┃ ┃ ┃ ┃ ┗ 📂features-a
 ┃ ┃ ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂scoped-shared-component-a
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜scoped-shared-component-a.component.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜scoped-shared-component-a.component.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜scoped-shared-component-a.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜scoped-shared-component-a.component.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂page-a
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜page-a.component.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜page-a.component.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜page-a.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page-a.component.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜 feature-a-routing.module.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜features-a.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜features-a.component.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜features-a.module.ts
 ┃ ┃ ┃ ┣ 📂guards
 ┃ ┃ ┃ ┃ ┗ 📜auth.guard.ts
 ┃ ┃ ┃ ┣ 📂interceptor
 ┃ ┃ ┃ ┃ ┣ 📜error.interceptor.ts
 ┃ ┃ ┃ ┃ ┗ 📜token.interceptor.ts
 ┃ ┃ ┃ ┣ 📂module
 ┃ ┃ ┃ ┃ ┣ 📜app-routing.module.ts
 ┃ ┃ ┃ ┃ ┗ 📜app.module.ts
 ┃ ┃ ┃ ┗ 📂utils
 ┃ ┃ ┃ ┃ ┗ 📜common-functions.ts
 ┃ ┃ ┗ 📂shared
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┗ 📂shared-button
 ┃ ┃ ┃ ┃ ┃ ┣ 📜shared-button.component.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜shared-button.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜shared-button.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜shared-button.component.ts
 ┃ ┃ ┃ ┣ 📂directives
 ┃ ┃ ┃ ┃ ┗ 📜shared-directive.ts
 ┃ ┃ ┃ ┣ 📂pipes
 ┃ ┃ ┃ ┃ ┗ 📜shared-pipe.ts
 ┃ ┃ ┃ ┗ 📜shared.module.ts
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┃ ┣ 📜main.ts
 ┃ ┣ 📜polyfills.ts
 ┃ ┗ 📜styles.css
 ┣ 📜.browserslistrc
 ┣ 📜.editorconfig
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜angular.json
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜tailwind.config.ts
 ┣ 📜tsconfig.app.json
 ┣ 📜tsconfig.json
 ┗ 📜tsconfig.spec.json
```
