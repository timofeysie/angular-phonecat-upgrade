
/** interface that explicitly defines what we expect the $routeParams object to contain 
 * when it is passed to the controller. */
interface PhoneRouteParams {
  phoneId: string
}

class PhoneDetailCtrl {
  phone:any;
  mainImageUrl:string;
  constructor($routeParams:PhoneRouteParams, Phone) {
    this.phone = Phone.get({phoneId: $routeParams.phoneId}, (phone) =>
      this.mainImageUrl = phone.images[0]
    );
  }
  public setImage(url:string) {
    this.mainImageUrl = url;
  }
}
PhoneDetailCtrl.$inject = ['$routeParams', 'phones'];
export default PhoneDetailCtrl;

/*
Before an interface 
PhoneDetailCtrl.$inject = ['$routeParams', 'Phone'];
function PhoneDetailCtrl($routeParams, Phone) {
  var vm = this;
  vm.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    vm.mainImageUrl = phone.images[0];
  });
  vm.setImage = function(imageUrl) {
    vm.mainImageUrl = imageUrl;
  };
}
export default PhoneDetailCtrl;
*/

/*
'use strict';

angular.module('phonecat.detail')
  .controller('PhoneDetailCtrl', PhonecatDetailCtrl);
PhonecatDetailCtrl.$inject = ['$routeParams', 'Phone'];
*/

/*
var phonecatControllers = angular.module('phonecatControllers', []);

from js/controllers.js
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);

*/