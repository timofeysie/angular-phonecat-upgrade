System.register([], function(exports_1) {
    function PhoneListCtrl(Phone) {
        var vm = this;
        vm.phones = Phone.query();
        vm.orderProp = 'age';
    }
    return {
        setters:[],
        execute: function() {
            PhoneListCtrl.$inject = ['Phone'];
            exports_1("default",PhoneListCtrl);
        }
    }
});
// 'use strict';
// angular.module('phonecat.list')
//   .controller('PhoneListCtrl', PhoneListCtrl);
// PhoneListCtrl.$inject = ['Phone'];
// function PhoneListCtrl(Phone) {
//   var vm = this;
//   vm.phones = Phone.query();
//   vm.orderProp = 'age';
// }
//# sourceMappingURL=phone_list.controller.js.map