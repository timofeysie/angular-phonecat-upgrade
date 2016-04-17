System.register(['./Phones', './checkmark.filter', './upgrade_adapter'], function(exports_1) {
    var Phones_1, checkmark_filter_1, upgrade_adapter_1;
    return {
        setters:[
            function (Phones_1_1) {
                Phones_1 = Phones_1_1;
            },
            function (checkmark_filter_1_1) {
                checkmark_filter_1 = checkmark_filter_1_1;
            },
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            }],
        execute: function() {
            //import {HTTP_PROVIDERS} from 'angular2/http';
            upgrade_adapter_1.default.addProvider(Phones_1.Phones);
            exports_1("default",angular.module('phonecat.core', [])
                .factory('phones', upgrade_adapter_1.default.downgradeNg2Provider(Phones_1.Phones))
                .filter('checkmark', checkmark_filter_1.default));
        }
    }
});
/*
Adding the http provider here causes this error:
Error: [filter:notarray] Expected array but received: {"_isScalar":false,"source":{"_isScalar":false},"operator":{}}
*/
// 'use strict';
// angular.module('phonecat.core', [
//   'ngResource'
// ]);
/*
the files that hold the application components themselves - filters and factories -
aren't concerned with the makeup of Angular modules.
That's just something we previously had to do because there were no other good solutions.
Now we use a separate file just for the purpose of forming the Angular module.
*/ 
//# sourceMappingURL=core.module.js.map