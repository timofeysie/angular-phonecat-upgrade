System.register(['./phone_list.controller'], function(exports_1) {
    var phone_list_controller_1;
    return {
        setters:[
            function (phone_list_controller_1_1) {
                phone_list_controller_1 = phone_list_controller_1_1;
            }],
        execute: function() {
            exports_1("default",angular.module('phonecat.list', ['phonecat.core'])
                .controller('PhoneListCtrl', phone_list_controller_1.default));
        }
    }
});
// 'use strict';
// angular.module('phonecat.list', [
//   'phonecat.core'
// ]); 
//# sourceMappingURL=phone_list.module.js.map