System.register(['angular2/testing', '../../app/js/phone_list/phone_list.module', '../../app/js/core/Phones', 'rxjs/observable/from'], function(exports_1) {
    var testing_1, Phones_1, from_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (_1) {},
            function (Phones_1_1) {
                Phones_1 = Phones_1_1;
            },
            function (from_1_1) {
                from_1 = from_1_1;
            }],
        execute: function() {
            testing_1.describe('PhoneListCtrl', function () {
                var scope, ctrl, $httpBackend;
                testing_1.beforeEach(angular.mock.module('phonecat.list'));
                // Supply a hand-instantianted instance of the Phones service
                testing_1.beforeEach(angular.mock.module(function ($provide) {
                    $provide.factory('phones', function () {
                        return new Phones_1.Phones(null);
                    });
                }));
                testing_1.beforeEach(inject(function (phones, $rootScope, $controller) {
                    spyOn(phones, 'query').and.returnValue(from_1.FromObservable.create([
                        [{ name: 'Nexus S' }, { name: 'Motorola DROID' }]
                    ]));
                    scope = $rootScope.$new();
                    ctrl = $controller('PhoneListCtrl', { $scope: scope });
                }));
                testing_1.it('should create "phones" model with 2 phones fetched from xhr', function () {
                    expect(ctrl.phones).toEqual([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);
                });
                testing_1.it('should set the default value of orderProp model', function () {
                    expect(ctrl.orderProp).toBe('age');
                });
            });
        }
    }
});
/*
'use strict';
import '../../app/js/phone_list/phone_list.module';

describe('PhoneListCtrl', function(){
  var ctrl, $httpBackend;

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('phonecat.list'));

  beforeEach(inject(function(_$httpBackend_, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('phones/phones.json').
        respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

    ctrl = $controller('PhoneListCtrl');
  }));

  it('should create "phones" model with 2 phones fetched from xhr', function() {
    expect(ctrl.phones).toEqualData([]);
    $httpBackend.flush();

    expect(ctrl.phones).toEqualData(
        [{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
  });

  it('should set the default value of orderProp model', function() {
    expect(ctrl.orderProp).toBe('age');
  });
});
*/ 
//# sourceMappingURL=phone_list.controller.spec.js.map