import {Phones} from './Phones';
import checkmarkFilter from './checkmark.filter';
import upgradeAdapter from './upgrade_adapter';
upgradeAdapter.addProvider(Phones);
export default angular.module('phonecat.core', [])
  .factory('phones', upgradeAdapter.downgradeNg2Provider(Phones))
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