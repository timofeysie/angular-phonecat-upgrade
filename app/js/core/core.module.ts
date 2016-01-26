import Phone from './phone.factory';
import checkmarkFilter from './checkmark.filter';
export default angular.module('phonecat.core', [
    'ngResource'
  ])
  .factory('Phone', Phone)
  .filter('checkmark', checkmarkFilter);


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