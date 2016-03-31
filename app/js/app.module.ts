/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
import core from './core/core.module';
// import {UpgradeAdapter} from 'angular2/upgrade';
import phoneList from './phone_list/phone_list.module';
// the PhoneListCtrl cannot be found with the following import:
//import PhoneListCtrl from './phone_list.controller';
import phoneDetail from './phone_detail/phone_detail.module';
import {HTTP_PROVIDERS} from 'angular2/http';
// Which upgrade adapter is the right one to use?
import upgradeAdapter from './core/upgrade_adapter';
import {UpgradeAdapter} from 'angular2/upgrade';
 
angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  core.name,
  phoneList.name,
  phoneDetail.name
]).config(configure);

configure.$inject = ['$routeProvider'];
function configure($routeProvider) {
  $routeProvider.
    when('/phones', {
      templateUrl: 'js/phone_list/phone_list.html',
      controller: 'PhoneListCtrl',
      controllerAs: 'vm'
    }).
    when('/phones/:phoneId', {
      templateUrl: 'js/phone_detail/phone_detail.html',
      controller: 'PhoneDetailCtrl',
      controllerAs: 'vm'
    }).
    otherwise({
      redirectTo: '/phones'
    });
    // const upgradeAdapter = new UpgradeAdapter();
    // upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);
}

// This will boot the app, but PhoneListCtrl causes an unknown provider error
upgradeAdapter.bootstrap(document.body, ['phonecatApp']).ready(function() {
  console.log('yeah it does!');
});

// const upgradeAdapter = new UpgradeAdapter();
// upgradeAdapter.bootstrap(document.body, ['phonecatApp']);

// var upgradeAdapter = new UpgradeAdapter();
// angular.element(document.body).ready(function() {
//   upgradeAdapter.bootstrap(document.body, ['phonecatApp']);
// });
// var upgradeAdapter = new ng.upgrade.UpgradeAdapter();
// angular.element(document.body).ready(function() {
//   upgradeAdapter.bootstrap(document.body, ['app']);
// });


//upgradeAdapter.addProvider(HTTP_PROVIDERS);
// upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);
/* Before, angular was bootstrapped this: */
//angular.bootstrap(document.documentElement, ['phonecatApp']);
/*
We don't have to repeat the submodule name strings here. Since the modules export themselves, 
we can just refer to the name attribute of each of them.
*/
// 'use strict';
// angular.module('phonecatApp', [
//     'ngRoute',
//     'phonecat.core',
//     'phonecat.detail',
//     'phonecat.list'
//   ]).config(['$routeProvider',
//     function($routeProvider) {
//       $routeProvider.
//   ... all the same ...
