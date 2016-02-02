System.register(['angular2/testing', 'angular2/http', '../../app/js/core/Phones'], function(exports_1) {
    var testing_1, http_1, Phones_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Phones_1_1) {
                Phones_1 = Phones_1_1;
            }],
        execute: function() {
            testing_1.describe('Phones', function () {
                // load providers
                testing_1.beforeEachProviders(function () { return [Phones_1.Phones, http_1.HTTP_PROVIDERS]; });
                // Test service availability
                testing_1.it('check the existence of Phones', testing_1.inject([Phones_1.Phones], function (phones) {
                    expect(phones).toBeDefined();
                }));
            });
        }
    }
});
/* The old version
'use strict';
import '../../app/js/core/core.module';

describe('phoneFactory', function() {

  beforeEach(module('phonecat.core'));

  it('check the existence of Phone factory', inject(function(Phone) {
    expect(Phone).toBeDefined();
  }));
  
});
*/ 
//# sourceMappingURL=Phones.spec.js.map