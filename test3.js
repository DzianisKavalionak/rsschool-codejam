const assert = require('assert');
const make = require('./tasks/recursion.js');

describe('make', () => {
    it('partialFunctionSumTest', () => {
        const tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
        let array = recursion(tree);
        const res = [[100], [90, 120], [70,99,110,130]];
        assert.deepEqual(array, res);
    });

});
