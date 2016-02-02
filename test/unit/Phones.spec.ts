import {describe, beforeEachProviders, it, inject} from 'angular2/testing';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Phones} from '../../app/js/core/Phones';
describe('Phones', function() {
  // load providers
  beforeEachProviders(() => [Phones, HTTP_PROVIDERS]);
  // Test service availability
  it('check the existence of Phones', inject([Phones], (phones) => {
    expect(phones).toBeDefined();
  }));
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