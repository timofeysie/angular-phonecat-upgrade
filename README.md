# AngularJS Phone Catalog Tutorial Application as starting point for an Angular2 app.

Following along starting at [step 4.1 of the official Angular2 upgrade guide](https://angular.io/docs/ts/latest/guide/upgrade.html#!#phonecat-upgrade-tutorial).

Currently the project is in phase 2.1 of the migration steps.  The tutorial says "the key is to do this piece by piece without breaking the application".
That's turning out to be not so easy.

I had an issue with the upgradeProvider and bootstrapping the hybrid ng1/2 app at this stage.  After putting the issue on StackOverflow and quickly got a solution.

Now there is an unknown provider error: PhoneProvider <- Phone <- PhoneListCtrl
The PhoneListCtrl seems to be configured the same way the PhoneDetailsCtrl is.
Anyhow, this is a more familiar error now, so I'm looking forward to getting it solved and finally getting to the fun part of working on a hybrid Angular1/Aungular2 app.

### Quick Start
To run the app, open a console, navigate to the root directory of the app and run:
```
$ npm start
```
This will run npm install, bower install, and then start the server on port 8000.
http://localhost:8000/app/#/phones
For development, run:
```
$ npm run tsc
```
This will watch the .ts source files and compile them to JavaScript on the fly. 
Those compiled .js files are then loaded into the browser by SystemJS. 



## The Conversion Steps
Here are the stages gone thru so far, along with notes from the whole process.Phase 1 & 2 are all that are needed to upgrade an Angular 1.x app to Angular 2.
Phase 1 & 2 are all that are needed to upgrade an Angular 1.x app to Angular 2.
Phase 3 & 4 are educational and demonstrate Phase 1 & 2 techniques on the sample app created during the official Angular 1.x tutorial.

### Phase 1. Preparation
- 1.2 Following The Angular Style Guide
- 1.3 Using a Module Loader
- 1.4 Migrating to TypeScript
- 1.5 Using Component Directives

### Phase 2. Upgrading with The Upgrade Adapter
- 2.1 Bootstrapping Hybrid Angular 1+2 Applications
- 2.2 Using Angular 1/2 Components from Angular 2/1 Code
- 2.4 Projecting/Transcluding Angular 1/2 Content into Angular 2/1 Components
- 2.6 Making Angular 1/2 Dependencies Injectable to Angular 2/1

### Phase 3. PhoneCat Preparation Tutorial
- 3.1 Switching to TypeScript And Module Loading
- 3.2 Preparing Unit and E2E Tests
- 3.3 Enjoying The Benefits of TypeScript

### Pase 4. PhoneCat Upgrade Tutorial
- 4.1 Bootstrapping A Hybrid 1+2 PhoneCat
- 4.2 Upgrading the Phone factory
- 4.3 Upgrading Controllers to Components
- 4.4 Switching To The Angular 2 Router And Bootstrap
- 4.5 Saying Goodbye to Angular 1

### PhoneCat Preparation Tutorial (Phase 3 Intro)
The seed for this project is different from the original PhoneCat application in that it closely adheres to the Style Guide by John Papa.
Namely, each controller, factory, and filter is in its own source file, as per the Rule of 1.
Core, phoneDetail, & phoneList modules are each in their own subdirectories in line with the Folders-by-Feature Structure and Modularity rules.

### Switching to TypeScript And Module Loading (Phase 3.1)

We will use [SystemJS](https://github.com/systemjs/systemjs) to install TypeScript.
We install its type definitions separately with tsd the TypeScript definition manager.
```
$ (sudo) npm i systemjs --save
$ (sudo) npm i typescript --save-dev
$ (sudo) npm i -g tsd
$ tsd install angular angular-route angular-resource angular-mocks jasmine
```

Add a script tag that loads the SystemJS library and a second script tag that initializes it in index.html. 
Add a "tsc": "tsc -p . -w" line to package.json and a tsconfig.json file to specify ES5 as the target language for deployments.

We can now run this:
```
$ npm run tsc
```
It will watch our .ts source files and compile them to JavaScript on the fly. Those compiled .js files are then loaded into the browser by SystemJS. This is a process we will want to have continuously running in the background as we go along.

Next, convert .js files to .ts and define their imports and exports rather than things being available on the global window scope.  Also add references to the .d.ts TypeScript definition files we added before in the typings directory so that dot complete and mouseover api info will be available in the editor.  We are using VS Code to work on this project.  It's a great editor based on GitHub's own Atom extensible editor.  Well done MS, finally getting hip to the open source thing people have been on about for twenty years.
This measn adding lines like this to the top of each file:
/// <reference path="../../typings/angularjs/angular.d.ts" />

Things like this:
```
angular.module('phonecat.detail', [
  'ngRoute',
  'ngAnimate',
  'phonecat.core'
]);
```
become like this:
```
import PhoneDetailCtrl from './phone_detail.controller';
export default angular.module('phonecat.detail', [
    'phonecat.core',
    'ngRoute'
  ])
  .controller('PhoneDetailCtrl', PhoneDetailCtrl);
```

### Bootstrapping TypeScript
The ng-app attribute is processed when the page loads, and our application code will not be available at that point yet. 
So now is loaded asynchronously by SystemJS instead.  
We must use the bootstrap version from part 2.2.
Add this to app.mudule.ts:
angular.bootstrap(document.documentElement, ['phonecatApp']);

Then, in the index.html file, add this:
<script>
  System.config({
    packages: {'js': {defaultExtension: 'js'}}
  });
  System.import('js/app.module');
</script>

Another version from later in the docs uses this
System.import('js/app');

The first one is correct.  Now the app is bootstrapped and running TS!
However, the detail page images cannot be changed.  What's up with that?


## Converting Unit Tests (Phase 3.2)

Add this file to the project in tests: test_helper.ts
/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../typings/angularjs/angular-mocks.d.ts" />
For Karma's SystemJS support we'll use a shim file: karma_test_shim.js (be replaced by improved tooling, but is currently needed).
We're using the custom Jasmine matcher toEqualData which isn't included in the Jasmine type definitions that we installed using tsd.
We have to:
- 1. convert our existing unit tests to TypeScript.
- 2. use imports to load in the code they need. 
- 3. tweak our Karma configuration so that it'll let SystemJS load the application files.


## The Benefits of TypeScript
Since everyone is going to ask, it's good to have a few things to point out about this.
- Compiles to ES5
- Supports let and const, default function parameters, and destructuring assignments, ect.
- classes (controllers => classes prepares for Angular 2 component classes)
- added type safety
- enable the noImplicitAny configuration option in tsconfig.json. This displays warnings when there's any code that does not yet have type annotations. We could use it as a guide to inform us about how close we are to having a fully annotated project.

The classes is inportant for controllers to prepare them to become Angular 2 component classes.
Register a class as a controller and Angular 1 will use it. 

## Angular 2 (Phase 4)

This is where the real fun happens.  This is running Angular 1 inside of Angular 2 and vice versa.

## Bootstrapping A Hybrid 1+2
Set the TypeScript compiler's moduleResolution option to node, so that it knows to look for these definitions from the angular2 NPM package.
```
"moduleResolution": "node",
```
Remove the Jasmine type definitions as they are bundled with Angular now.
```
$ rm -r typings/jasmine
```
Next, initialize an UpgradeAdapter. 
import the UpgradeAdapter class into app.module.ts:
```
import {UpgradeAdapter} from 'angular2/upgrade';
```
Then, add this:
```
const upgradeAdapter = new UpgradeAdapter();
```
Not sure about the exact place to put this in the file.
Now instead of calling angular.bootstrap, we must call upgradeAdapter.bootstrap:
```
upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);
```
Then the app breaks with the following errors:
```
system.src.js:1068 GET http://localhost:8000/app/rxjs/Subject 404 (Not Found)
fetchTextFromURL @ system.src.js:1068(anonymous function) @ system.src.js:1638lib$es6$promise$$internal$$initializePromise @ angular2-polyfills.js:1558lib$es6$promise$promise$$Promise @ angular2-polyfills.js:1849(anonymous function) @ system.src.js:1637(anonymous function) @ system.src.js:2637
...
```
Looking in the network tab of the Chrome inspector, I can see the rxjs is not being imported.
The very next part of the section addresses this:
```
<script src="../node_modules/rxjs/bundles/Rx.js"></script>
<script src="../node_modules/angular2/bundles/http.dev.js"></script>
```
After adding these however, rxjs is being loaded, and there are no console errors in the inspector, but the page is blank.
Not often does an app throw up a blank page without any errors.  That's not very helpful.
The tutorial says "the key is to do this piece by piece without breaking the application".
That's turning out to be not so easy.
I posted [this questions](http://stackoverflow.com/questions/36338230/angular2-upgrade-tutorial-code-not-bootstrapping/36339818#36339818) on stack overflow after giving up on it for a month or so.
The answer provided by Thierry Templier worked out.  He suggested "load the module and then bootstrap the application".
```
<script>
      System.import('js/app.module.js').then(function(src) {
        src.main();
      });
</script>
```

It's still not clear which import is appropriate here:
```
import upgradeAdapter from './core/upgrade_adapter';
import {UpgradeAdapter} from 'angular2/upgrade';

try {
    var upgrade = new UpgradeAdapter();
} catch (e) {
  console.error('error',e);
}

export function main() {
  try {
    upgrade.bootstrap(document.body, ['phonecatApp']);
  } catch (e) {
    console.error(e);
  }
}
```

The confusion with the upgrade adapter is dealt with when removing the phones.factory.ts and replacing it with a phones.service.ts.
There should only be one UpgradeAdapter in an application, so to share the instance between module we create a new module 
that instantiates UpgradeAdapter and exports the instance then pull it in wherever we need it, so that we're using the same object everywhere. 
That's what the upgrade_adapter.ts file is for.

After making this change, which means getting rid of this:
```
import {UpgradeAdapter} from 'angular2/upgrade';

try {
    var upgrade = new UpgradeAdapter();
} catch (e) {
  console.error('error',e);
}
```
And just using this import:
```
import upgradeAdapter from './core/upgrade_adapter';
```

Now, there is an error (also, at this point, the tsc - . -w command should be watching for file changes, but it's not):
```
Error: No provider for Http! (Phones -> Http)
Error: DI Exception
    at NoProviderError.BaseException [as constructor] 
```

It's not clear where to add http to the upgrade adapter.  Should this me done in the upgrade_adapter.ts, or the core.module.ts?

```
upgradeAdapter.addProvider(HTTP_PROVIDERS);
```
Since the file the tutorial began it's discussionwith is app.module.ts, we can only assume that that's where it should go.
Looking at that error on SO, a remark about Angular2 said this:
    The injectables are specified on the @Component
But since we are talking about an Angulae 1 app, there is no @Component decorator.
There are no other questions on SO that deal with a hybrid app like this.
I'm reading up on Angular2 injection to get an idea of what the issue is.
Right now I'm thinking something needs to be in the contructor.

Doing the following in the core.modules.ts
```
import {HTTP_PROVIDERS} from 'angular2/http';
...
upgradeAdapter.addProvider(HTTP_PROVIDERS);
```
Causes a whole list of this error:
Error: [filter:notarray] Expected array but received: {"_isScalar":false,"source":{"_isScalar":false},"operator":{}}


### Pase 2.2 Using Angular 2 component in Angular 1
The file naming scheme is now Phone.ts, not feature.type.ts naming convention anymore.
UpgradeAdapter has a downgradeNg2Provider method for the purpose of making Angular2 services available to Angular1 code. 
We don't have our UpgradeAdapter available in core.module.ts where the Phones service should be registered. 
We only have it in app.module.ts. There should only be one UpgradeAdapter in an application, 
so we need to find a way to share our instance between the two code modules.
Create a new module that instantiates UpgradeAdapter and exports the instance.
We can then just pull it in wherever we need it, so that we're using the same object everywhere. 
New file: app/js/core/upgrade_adapter.ts
(Looks like the naming convention doesn't apply here).

At this point, the app is showing a blank screen and no errors in the console, and no file not found on the network.  Not very helpful.
Definitely a bootstrap issue.
There were some problems with the tests not being able to find the typings, so lots of errors in the console.
I had to change the path after removing the typings for Jasmine which now come with Angular2. 
However, the mocks still cannot be found:
test/test_helper.ts(2,1): error TS6053: File 'node_modules/angular2/typings/angularjs/angular-mocks.d.ts' not found.
test/unit/checkmark.filter.spec.ts(6,14): error TS2349: Cannot invoke an expression whose type lacks a call signature.


### Problem: Cannot find name 'module'.
Sometime around the beginning of Phase 4, after running:
```
$ npm run tsc
```
I saw these messages in the console before the watch started:
```
test/unit/checkmark.filter.spec.ts(6,14): error TS2304: Cannot find name 'module'.
test/unit/phone.factory.spec.ts(6,14): error TS2304: Cannot find name 'module'.
test/unit/phone_detail.controller.spec.ts(22,14): error TS2304: Cannot find name 'module'.
test/unit/phone_list.controller.spec.ts(15,14): error TS2304: Cannot find name 'module'.
```

After removing the typings which are now supposed to be bundled with Angular 2, we are getting errors from all the test files:
```
test/unit/phone_list.controller.spec.ts(15,14): error TS2349: Cannot invoke an expression whose type lacks a call signature.
test/unit/phone_list.controller.spec.ts(17,3): error TS2304: Cannot find name 'beforeEach'.
test/unit/phone_list.controller.spec.ts(25,3): error TS2304: Cannot find name 'it'.
test/unit/phone_list.controller.spec.ts(26,5): error TS2304: Cannot find name 'expect'.
```

Don't have time to spend on this one just yet.  Trying to get the the fun stuff right now.


### Problem: cannot run in wd %s %s (wd=%s) in Phase 4 setup
After adding dependencies to the package.json:
  "dependencies": {
    "angular2": "2.0.0-beta.2",
    "systemjs": "0.19.6",
    "es6-promise": "^3.0.2",
    "es6-shim": "^0.33.3",
    "reflect-metadata": "0.1.2",
    "rxjs": "5.0.0-beta.0",
    "zone.js": "0.5.10"
  },
  "devDependencies": {
    "concurrently": "^1.0.0",
    "lite-server": "^1.3.4",
    "typescript": "^1.7.5"
  }
Then running npm i, got this warning:
npm WARN lifecycle angular-phonecat@0.0.0~postinstall: cannot run in wd %s %s (wd=%s) angular-phonecat@0.0.0 bower install /Users/tim/angular/ng2/angular-phonecat
In addition, those packeage were not installed.
After reading (this post)[http://stackoverflow.com/questions/18136746/npm-install-failed-with-cannot-run-in-wd]
I tried:
```
sudo npm install --unsafe-perm
```
and got this:
```
bower ESUDO         Cannot be run with sudo
Additional error details:
Since bower is a user command, there is no need to execute it with superuser permissions.
If you're having permission errors when using bower without sudo, please spend a few minutes learning more about how your system should work and make any necessary repairs.
http://www.joyent.com/blog/installing-node-and-npm
https://gist.github.com/isaacs/579814
You can however run a command with sudo using --allow-root option
npm ERR! Darwin 14.0.0
npm ERR! argv "node" "/usr/local/bin/npm" "install" "--unsafe-perm"
npm ERR! node v0.10.35
npm ERR! npm  v3.5.2
npm ERR! code ELIFECYCLE
npm ERR! angular-phonecat@0.0.0 postinstall: `bower install`
npm ERR! Exit status 1
```
This is because bower cannot be run using sudo.  Those packages are all node, so why is Bower now complaining.
Hasn't it been run every time npm runs anyhow?
Also, we don't want to have to use a flag everytime we run npm, so we can add the unsafe-perm flag to your package.json:
```
"config": {
    "unsafe-perm":true
}
```
But I then wasn't able to save package.json, as the permissions for that and node_modules had been changed to root.
I did a
```
$ chown tim package.json (and node_modules also)
```
And was then able save the file.  Was that actually the problem though?
Anyhow, now running npm start, the npm install is done automatically, and I saw those dependencies downloaded.


### Problem:  The phone detail main image is not changing
After phase 3.2, I noticed that the image detail picture was not changing after selecting a different thumbnail.
The tutorial showed using an interface to define the route parameters, using a class and good programming style.
However, I had to make the setImage method public.  Then the method was registering the url change.
This did not solve the problem, so looking at the template, there was an mistaken ng-repeat, and the ng-source was wrong.
Here is the corrected version:
```
<div class="phone-images">
  <img ng-src="{{vm.mainImageUrl}}"
       class="phone"
       ng-class="{active: vm.mainImageUrl==img}">
</div>
```


### Problem: Uncaught (in promise) Error: Cannot set property '$inject' of undefined(…)
If the inject statement comes before the class then this will happen.
Before becomming a class, this line was above the function delcaration, now it must be below it:
```
PhoneListCtrl.$inject = ['Phone'];
```
For example, the evolution of the phone list controller from newest to oldest versions.
Work done in the controller function is now done in the class constructor function.
```
class PhoneListCtrl {
  phones:any[];
  orderProp:string;
  query:string;
  constructor(Phone) {
    this.phones = Phone.query();
    this.orderProp = 'age';
  }
}
PhoneListCtrl.$inject = ['Phone'];
export default PhoneListCtrl;
```
Before becoming a class
```
PhoneListCtrl.$inject = ['Phone'];
function PhoneListCtrl(Phone) {
  var vm = this;
  vm.phones = Phone.query();
  vm.orderProp = 'age';
}
export default PhoneListCtrl;
```
The original
```
'use strict';
angular.module('phonecat.list')
  .controller('PhoneListCtrl', PhoneListCtrl);
PhoneListCtrl.$inject = ['Phone'];
function PhoneListCtrl(Phone) {
  var vm = this;
  vm.phones = Phone.query();
  vm.orderProp = 'age';
}
```


### Problem: System is not defined(anonymous function)
After completing all these steps, doing (sudo) npm start, errors like this come out in the console:
```
app.module.ts:3
Uncaught ReferenceError: System is not defined(anonymous function) @ app.module.ts:3
core.module.js:1
Uncaught ReferenceError: System is not defined
```
There were some old import statements in the index.html, so  getting rid of those, the error is now:
```
Uncaught (in promise) Error: [$injector:nomod] Module 'phonecat.core' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.
```
The docs say this error occurs when you declare a dependency on a module that isn't defined anywhere or hasn't been loaded in the current browser context.
Maybe the System.config section in the index,html is not working?
If I include the script tags in the index.html then there are different errors.

The stack trace includes this: SystemJSLoader.register:
```
Uncaught TypeError: Unexpected anonymous System.register call.
(anonymous function) @ system.src.js:2879
(anonymous function) @ system.src.js:3518
(anonymous function) @ system.src.js:3987
(anonymous function) @ system.src.js:2602
SystemJSLoader.register @ system.src.js:2835
(anonymous function) @ app.module.js:1
```
[This issue here](https://github.com/systemjs/systemjs/issues/861) has been happening since October.

I followed some advice and added 'format register'; to the top of the file to no avail.

angular.bootstrap(document.body, ['heroApp'], {strictDi: true});

Uncaught TypeError: Unexpected anonymous System.register call.
hint.js:199 Uncaught Error: [$injector:nomod] Module 'phonecat.detail' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.

Or the whole thing inside the script tag in index.html

```
    import {UpgradeAdapter} from 'angular2/upgrade';
    angular.bootstrap(document.body, ['heroApp'], {strictDi: true});
    const upgradeAdapter = new UpgradeAdapter();
    upgradeAdapter.bootstrap(document.body, ['heroApp'], {strictDi: true});
```    
Another StackOverflow answer says this: 
You will get " Unexpected anonymous System.register call" because the references are not being loaded 
in the correct order. I use JSPM to properly build my angular app for production. 
There are 4 parts to the process (with one finally).
- Part 1: Compile your typescript files
- Part 2: Configure config.json (to tell JSPM how to bundle your app):
- Part 3: Use gulp-jspm to bundle up your app
- Part 4: Now minify and concat all your assets:
- Part 5: Finally, put one nice tidy script reference into your index.html:
The problem was one of the files was still not converted, as I missed on in all the excitment.
After updating the file to ts and bootstrapping the app correctly these errors went away.


## After Initial Install Problems

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
