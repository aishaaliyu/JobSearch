# Job Search Sample Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

It's a project that shows users a list of jobs.

## Prototype

![Scheme](./WebSearch.gif)
![Scheme](./JobSearch.gif)

## Development server

To Run, Get a google api key by following the instructions below: 

1. Change your url to your functions web actions url in /src/app/service/apicalls.service.ts
2. Install the angular CLI ... `npm install -g @angular/cli`
2. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
3. To run using docker-compose:
4. Run `docker-compose build`
5. Run `docker-compose up`
6. Access url on browser using `http://localhost:3020/`


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
kubectl create deployment jobsearch --image=tutorial/jobsearch
