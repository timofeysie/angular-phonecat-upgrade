'use strict';

angular.module('phonecat.core')
  .factory('Phone', Phone);

Phone.$inject = ['$resource'];
function Phone($resource) {
  return $resource('phones/:phoneId.json', {}, {
    query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
  });
}
export default Phone;

/*
Previously, in js/services.js

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
*/