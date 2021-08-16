# Al

## Introduction
Al is a PoC for using Alcaeus with Angular to build Hydra style Angular clients. 

For more info on Angular, go to the [Angular Website]

For more info on Alcaeus, go to the [Alcaeus Website]

## Dependencies

Al was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.


In order to get Alcaeus working with Angular the following dependencies had to be installed

```
```

and set
allowSyntheticDefaultImports: true

## Structure

## Running dev server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Hacks

Dependencies...

Webpack 5 removes polyfilling for node environments. This means that libraries that use global objects like global, process, Buffer/buffer, etc. will not work as those variables will not be defined. There are a number of workarounds, but none are all that clean, clear, and well documented. The following is an attempt to catalog the workarounds that are effective:

### Define globals using polyfills.ts

```
import * as buffer from 'buffer';
(window as any).Buffer = buffer;
```

### Define globals using Webpack plugins and resolves

```
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
