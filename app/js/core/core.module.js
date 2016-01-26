System.register(['./phone.factory', './checkmark.filter'], function(exports_1) {
    var phone_factory_1, checkmark_filter_1;
    return {
        setters:[
            function (phone_factory_1_1) {
                phone_factory_1 = phone_factory_1_1;
            },
            function (checkmark_filter_1_1) {
                checkmark_filter_1 = checkmark_filter_1_1;
            }],
        execute: function() {
            exports_1("default",angular.module('phonecat.core', [
                'ngResource'
            ])
                .factory('Phone', phone_factory_1.default)
                .filter('checkmark', checkmark_filter_1.default));
        }
    }
});
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