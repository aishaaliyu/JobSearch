# Job Search Sample Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

It's a project that shows users a list of jobs.

## Prototype

![Scheme](./WebSearch.gif)
![Scheme](./JobSearch.gif)

## IBM Cloud Deployment
See instructions in [IBM Cloud Tutorials](./Tutorials.md)

## Development server

To Run: 
1. Change your url to your functions web actions url in /src/app/service/apicalls.service.ts. The web action url can be created by following the tutorial above under IBM Cloud Deployment
2. Install the angular CLI ... `npm install -g @angular/cli`
3. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
4. To run using docker-compose:
5. Run `docker-compose build`
6. Run `docker-compose up`
7. Access url on browser using `http://localhost:3020/`

## Full Code 
The full code as found in the Images without IBM Cloud functions 
https://bitbucket.org/Abiwax/jobsearch

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

URL - `https://us-south.functions.cloud.ibm.com/api/v1/web/dcf60ca3-b95d-4f3f-8aaa-5a825bfdfabd/hello-world/helloworld.json?keywords=any`
