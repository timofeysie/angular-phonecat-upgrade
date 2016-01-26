export default function checkmarkFilter() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
}

// 'use strict';

// angular.module('phonecat.core')
//   .filter('checkmark', checkmarkFilter);

// function checkmarkFilter() {
//   return function(input) {
//     return input ? '\u2713' : '\u2718';
//   };
// }