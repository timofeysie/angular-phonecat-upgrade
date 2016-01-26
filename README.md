# AngularJS Phone Catalog Tutorial Application as starting point for an Angular2 app.

Following along starting at [step 4.1 of the official Angular2 upgrade guide](https://angular.io/docs/ts/latest/guide/upgrade.html#!#phonecat-upgrade-tutorial).


## The Steps
eamless.

1. Preparation
Following The Angular Style Guide
Using a Module Loader
Migrating to TypeScript
Using Component Directives
2. Upgrading with The Upgrade Adapter
How The Upgrade Adapter Works
Bootstrapping Hybrid Angular 1+2 Applications
Using Angular 2 Components from Angular 1 Code
Using Angular 1 Component Directives from Angular 2 Code
Projecting Angular 1 Content into Angular 2 Components
Transcluding Angular 2 Content into Angular 1 Component Directives
Making Angular 1 Dependencies Injectable to Angular 2
Making Angular 2 Dependencies Injectable to Angular 1
3. PhoneCat Preparation Tutorial
Switching to TypeScript And Module Loading
Preparing Unit and E2E Tests
Enjoying The Benefits of TypeScript
4. PhoneCat Upgrade Tutorial
Bootstrapping A Hybrid 1+2 PhoneCat
Upgrading the Phone factory
Upgrading Controllers to Components
Switching To The Angular 2 Router And Bootstrap
Saying Goodbye to Angular 1

### 3 PhoneCat Preparation Tutorial
The seed for this project is different from the original PhoneCat application in that it closely adheres to the Style Guide by John Papa.
Namely, each controller, factory, and filter is in its own source file, as per the Rule of 1.
Core, phoneDetail, & phoneList modules are each in their own subdirectories in line with the Folders-by-Feature Structure and Modularity rules.

### 3.1 Switching to TypeScript And Module Loading

We will use [SystemJS](https://github.com/systemjs/systemjs) to install TypeScript.
We install its type definitions separately with tsd the TypeScript definition manager.
```
$ (sudo) npm i systemjs --save
$ (sudo) npm i typescript --save-dev
$ (sudo) npm i -g tsd
$ tsd install angular angular-route angular-resource angular-mocks jasmine
```

Add a <script> tag that loads the SystemJS library and a second <script> tag that initializes it in index.html. 




## Problems

After install, you must run npm and Bower to install the development and runtime libraries that are excluded in the .gitignore file so that pulls and pushes do not include them:
```
$ (sudo) npm install
$ cd app
$ bower intsll
$ (sudo) npm start
```
If you get errors like this, then you forgot to run bower install:
```
http://localhost:8000/app/bower_components/bootstrap/dist/css/bootstrap.css 
Failed to load resource: the server responded with a status of 404 (Not Found)
...

$ (sudo) npm test
 
Chrome 47.0.2526 (Mac OS X 10.10.0): Executed 5 of 5 SUCCESS (0.169 secs / 0.165 secs)
Firefox 43.0.0 (Mac OS X 10.10.0): Executed 5 of 5 SUCCESS (0.187 secs / 0.185 secs)
```
If you get errors like this, that may also means you forgot to run bower install.
INFO [launcher]: Trying to start Chrome again (1/2).
ERROR [launcher]: Cannot start Chrome
INFO [launcher]: Trying to start Chrome again (2/2).
INFO [Chrome 47.0.2526 (Mac OS X 10.10.0)]: Connected on socket wYEfbWBSR9JEW03AyRAL with id 92756211
WARN [launcher]: Firefox have not captured in 60000 ms, killing.
INFO [launcher]: Trying to start Firefox again (2/2).
INFO [Firefox 43.0.0 (Mac OS X 10.10.0)]: Connected on socket ASFKIyMGrtWVdnFnyRAN with id 69311123
Chrome 47.0.2526 (Mac OS X 10.10.0) ERROR
  Uncaught ReferenceError: angular is not defined
  at /Users/tim/angular/ng2/angular-phonecat/app/js/animations.js:1
Chrome 47.0.2526 (Mac OS X 10.10.0) ERROR
  Uncaught ReferenceError: angular is not defined
  at /Users/tim/angular/ng2/angular-phonecat/app/js/animations.js:1
Firefox 43.0.0 (Mac OS X 10.10.0) ERROR
  ReferenceError: angular is not defined
```

## Overview

This application takes the developer through the process of building a web-application using
angular. The application is loosely based on the **Google Phone Gallery**, which no longer
exists. Here is a historical reference: [Google Phone Gallery on WayBack](http://web.archive.org/web/20131215082038/http://www.android.com/devices/).

Each tagged commit is a separate lesson teaching a single aspect of angular.

The full tutorial can be found at http://docs.angularjs.org/tutorial.

## Prerequisites

### Git

- A good place to learn about setting up git is [here][git-github].
- Git [home][git-home] (download, documentation).

### Node.js and Tools

- Get [Node.js][node-download].
- Install the tool dependencies (`npm install`).


## Workings of the application

- The application filesystem layout structure is based on the [angular-seed] project.
- There is no dynamic backend (no application server) for this application. Instead we fake the
  application server by fetching static json files.
- Read the Development section at the end to familiarize yourself with running and developing
  an angular application.

## Commits / Tutorial Outline

You can check out any point of the tutorial using
    git checkout step-?

To see the changes which between any two lessons use the git diff command.
    git diff step-?..step-?

### step-0

- Add ngApp directive to bootstrap the app.
- Add simple template with an expression.


### step-1

- Add static html list with two phones into index.html. We will convert this static page into
  dynamic one with the help of angular.


### step-2

- Convert the static html list into dynamic one by:
  - creating `PhoneListCtrl` controller for the application.
  - extracting the data from HTML, moving it into the controller as an in-memory dataset.
  - converting the static HTML document into an Angular template with the use of the `ngRepeat`
    directive which iterates over the dataset of phones.
    `ngRepeat` clones its contents for each instance in the dataset and renders it into the view.
- Add a simple unit test to show off how to write tests and run them with Karma.


### step-3


- Add a search box to demonstrate how:
  - the data-binding works on input fields.
  - to use the `filter` filter.
  - `ngRepeat` automatically shrinks and grows the number of phones in the view.
- Add an end-to-end test to:
  - show how end-to-end tests are written and how to run them with Protractor.
  - prove that the search box and the repeater are correctly wired together.


### step-4

- Add `age` property to each phone in the data model.
- Add a `<select>` input to change the phone list order.
- Override the default order value in the controller.
- Add unit and e2e tests for this feature.

### step-5

- Replace the in-memory dataset with data loaded from the server (in
  the form of static `phones.json` file).
  - The `phones.json` file is loaded using the `$http` service.
- Demonstrate the use of [services][service] and [dependency injection][DI].
  - The [$http] service is injected into the controller through [dependency injection][DI].


### step-6

- Add phone images and links to new pages that show the phone details.
- Add end2end tests that verify the links to the detail pages.
- Add CSS to style the page just a notch.


### step-7

- Introduce the [$route] service which allows binding URLs for deep-linking with
  views:
  - Create `PhoneCatCtrl` which governs the entire app and contains $route configuration.
  - Install `angular-route` using bower and load the `ngRoute` module.
    (Be sure to run npm install again.)
  - Copy route parameters to root scope `params` property for access in sub controllers.
  - Replace the contents of `index.html` with the `ngView` directive, which will display the partial
    template of the current route.

- Create phone list route:
  - Map `/phones` route to `PhoneListCtrl` and `partials/phones-list.html`.
  - Preserve existing `PhoneListCtrl` controller.
  - Move existing html from `index.html` to `partials/phone-list.html`.
- Create phone details route:
  - Map `/phones/<phone-id>` route to `PhoneDetailCtrl` and `partials/phones-detail.html`.
  - Create empty placeholder `PhoneDetailsCtrl` controller.


### step-8


- Implement `PhoneDetailCtrl` controller to fetch the details for a specific phone from a JSON file
  using `$http` service.
- Update the template for the phone detailed view.
- Add CSS to make the phone details page look "pretty".


### step-9

- Add custom `checkmark` filter.
- Update phone detail template to use `checkmark` filter.
- Add unit test for the filter.

### step-10

In the phone detail view, clicking on a thumbnail image, changes the main phone image to be the
large version of the thumbnail image.

- Define `mainImageUrl` model variable in the `PhoneDetailCtrl` and set its default value.
- Create `setImage()` controller method to change `mainImageUrl`.
- Register an expression with the `ngClick` directive on thumb images to set the main image, using
  `setImage()`.
- Add e2e tests for this feature.
- Add CSS to change the mouse cursor when user points at thumnail images.


### step-11

- Replace [$http] with [$resource].
- Created a custom `Phone` service that represents the `$resource` client.


### step-12

- Add animations to the application:
  - Animate changes to the phone list, adding, removing and reordering phones.
  - Animate changes to the main phone image in the detail view.


## Development with angular-phonecat

The following docs describe how you can test and develop further this application.


### Installing dependencies

The application relies upon various node.js tools, such as Bower, Karma and Protractor.  You can
install these by running:

```
npm install
```

This will also run bower, which will download the angular files needed for the current step of the
tutorial.

Most of the scripts described below will run this automatically but it doesn't do any harm to run
it whenever you like.

### Running the app during development

- Run `npm start`
- navigate your browser to `http://localhost:8000/app/index.html` to see the app running in your browser.

### Running unit tests

We recommend using [Jasmine][jasmine] and [Karma][karma] for your unit tests/specs, but you are free
to use whatever works for you.

- Start Karma with `npm test`
  - A browser will start and connect to the Karma server. Chrome is the default browser, others can
  be captured by loading the same url as the one in Chrome or by changing the `test/karma.conf.js`
  file.
- Karma will sit and watch your application and test JavaScript files. To run or re-run tests just
  change any of your these files.


### End to end testing

We recommend using [Jasmine][jasmine] and [Protractor][protractor] for end-to-end testing.

Requires a webserver that serves the application. See Running the app during development, above.

- Serve the application: run `npm start`.
- In a separate console run the end2end tests: `npm run protractor`. Protractor will execute the
  end2end test scripts against the web application itself.
  - The configuration is set up to run the tests on Chrome directly. If you want to run against
    other browsers then you must install the webDriver, `npm run update-webdriver`, and modify the
  configuration at `test/protractor-conf.js`.

## Application Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      index.html        --> app layout file (the main html template file of the app)
      js/               --> javascript files
        app.js          --> the main application module
        controllers.js  --> application controllers
        directives.js   --> application directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        animations.js   --> hooks for running JQuery animations with ngAnimate
      partials/         --> angular view partials (partial html templates) used by ngRoute
        partial1.html
        partial2.html
      bower_components  --> 3rd party js libraries, including angular and jquery

    scripts/            --> handy scripts
      update-repo.sh       --> pull down the latest version of this repos
                               (BE CAREFUL THIS DELETES ALL CHANGES YOU HAVE MADE)
      private/             --> private scripts used by the Angular Team to maintain this repo
    test/               --> test source files and libraries
      karma.conf.js        --> config file for running unit tests with Karma
      protractor-conf.js   --> config file for running e2e tests with Protractor
      e2e/
        scenarios.js       --> end-to-end specs
      unit/             --> unit level specs/tests
        controllersSpec.js --> specs for controllers
        directivesSpec.js  --> specs for directives
        filtersSpec.js     --> specs for filters
        servicesSpec.js    --> specs for services

## Contact

For more information on AngularJS please check out http://angularjs.org/

[7 Zip]: http://www.7-zip.org/
[angular-seed]: https://github.com/angular/angular-seed
[DI]: http://docs.angularjs.org/guide/di
[directive]: http://docs.angularjs.org/guide/directive
[filterFilter]: http://docs.angularjs.org/api/ng/filter/filter
[git-home]: http://git-scm.com
[git-github]: http://help.github.com/set-up-git-redirect
[ngRepeat]: http://docs.angularjs.org/api/ng/directive/ngRepeat
[ngView]: http://docs.angularjs.org/api/ngRoute/directive/ngView
[node-download]: http://nodejs.org/download/
[$resource]: http://docs.angularjs.org/api/ngResource/service/$resource
[$route]: http://docs.angularjs.org/api/ngRoute/service/$route
[protractor]: https://github.com/angular/protractor
[jasmine]: http://pivotal.github.com/jasmine/
[karma]: http://karma-runner.github.io
