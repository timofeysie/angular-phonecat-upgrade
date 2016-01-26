System.register([], function(exports_1) {
    function checkmarkFilter() {
        return function (input) {
            return input ? '\u2713' : '\u2718';
        };
    }
    exports_1("default", checkmarkFilter);
    return {
        setters:[],
        execute: function() {
        }
    }
});
// 'use strict';
// angular.module('phonecat.core')
//   .filter('checkmark', checkmarkFilter);
// function checkmarkFilter() {
//   return function(input) {
//     return input ? '\u2713' : '\u2718';
//   };
// } 
//# sourceMappingURL=checkmark.filter.js.map