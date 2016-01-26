System.register(['./phone_detail.controller'], function(exports_1) {
    var phone_detail_controller_1;
    return {
        setters:[
            function (phone_detail_controller_1_1) {
                phone_detail_controller_1 = phone_detail_controller_1_1;
            }],
        execute: function() {
            exports_1("default",angular.module('phonecat.detail', [
                'phonecat.core',
                'ngRoute'
            ])
                .controller('PhoneDetailCtrl', phone_detail_controller_1.default));
        }
    }
});
/*
'use strict';

angular.module('phonecat.detail', [
  'ngRoute',
  'ngAnimate',
  'phonecat.core'
]);

*/ 
//# sourceMappingURL=phone_detail.module.js.map