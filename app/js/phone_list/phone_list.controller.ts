/** 
 * */
 
 import {Phones, Phone} from '../core/phones.service';
 
class PhoneListCtrl {
  phones:any[];
  orderProp:string;
  query:string;
  constructor(Phone) {
    this.phones = Phone.query();
    this.orderProp = 'age';
  }
}
PhoneListCtrl.$inject = ['phones'];
export default PhoneListCtrl;

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
