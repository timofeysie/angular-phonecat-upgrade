'use strict';
import '../../app/js/core/core.module';

describe('phoneFactory', function() {

  beforeEach(module('phonecat.core'));

  it('check the existence of Phone factory', inject(function(Phone) {
    expect(Phone).toBeDefined();
  }));
  
});