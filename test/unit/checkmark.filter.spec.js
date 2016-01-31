System.register(['../../app/js/core/core.module'], function(exports_1) {
    'use strict';
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            describe('checkmarkFilter', function () {
                beforeEach(module('phonecat.core'));
                it('should convert boolean values to unicode checkmark or cross', inject(function (checkmarkFilter) {
                    expect(checkmarkFilter(true)).toBe('\u2713');
                    expect(checkmarkFilter(false)).toBe('\u2718');
                }));
            });
        }
    }
});
//# sourceMappingURL=checkmark.filter.spec.js.map