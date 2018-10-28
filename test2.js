const assert = require('assert');
const make = require('./tasks/make.js');

describe('make', () => {
    it('partialFunctionSumTest', () => {
        let sum = (a,b) => a + b;
        let result = make(15)(34, 21, 666)(41)(sum);
        assert.equal(result, 777);
    });
    it('partialFunctionMultiplyTest', () => {
        let mult = (a,b) => a * b;
        let result = make(2, 3)(1, 10, 5)(10)(mult);
        assert.equal(result, 3000);
    });
});
