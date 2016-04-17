/**
 * */
System.register([], function(exports_1) {
    var PhoneListCtrl;
    return {
        setters:[],
        execute: function() {
            PhoneListCtrl = (function () {
                function PhoneListCtrl(Phone) {
                    this.phones = Phone.query();
                    this.orderProp = 'age';
                }
                return PhoneListCtrl;
            })();
            PhoneListCtrl.$inject = ['phones'];
            exports_1("default",PhoneListCtrl);
        }
    }
});
/*
Before becoming a class

PhoneListCtrl.$inject = ['Phone'];
function PhoneListCtrl(Phone) {
  var vm = this;
  vm.phones = Phone.query();
  vm.orderProp = 'age';
}
export default PhoneListCtrl;
*/
/*
The original

'use strict';
angular.module('phonecat.list')
  .controller('PhoneListCtrl', PhoneListCtrl);
PhoneListCtrl.$inject = ['Phone'];
function PhoneListCtrl(Phone) {
  var vm = this;
  vm.phones = Phone.query();
  vm.orderProp = 'age';
}
*/
//# sourceMappingURL=phone_list.controller.js.map