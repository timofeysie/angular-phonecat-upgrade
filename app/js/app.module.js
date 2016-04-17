System.register(['./core/core.module', './phone_list/phone_list.module', './phone_detail/phone_detail.module', 'angular2/http', './core/upgrade_adapter'], function(exports_1) {
    var core_module_1, phone_list_module_1, phone_detail_module_1, http_1, upgrade_adapter_1;
    function main() {
        try {
            upgrade_adapter_1.default.addProvider(http_1.HTTP_PROVIDERS);
            upgrade_adapter_1.default.bootstrap(document.body, ['phonecatApp']);
        }
        catch (e) {
            console.error(e);
        }
    }
    exports_1("main", main);
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
    }
    return {
        setters:[
            function (core_module_1_1) {
                core_module_1 = core_module_1_1;
            },
            function (phone_list_module_1_1) {
                phone_list_module_1 = phone_list_module_1_1;
            },
            function (phone_detail_module_1_1) {
                phone_detail_module_1 = phone_detail_module_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            }],
        execute: function() {
            angular.module('phonecatApp', [
                'ngAnimate',
                'ngRoute',
                core_module_1.default.name,
                phone_list_module_1.default.name,
                phone_detail_module_1.default.name
            ]).config(configure);
            configure.$inject = ['$routeProvider'];
        }
    }
});
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
//# sourceMappingURL=app.module.js.map