const assert = require('assert');
const sumOfOther = require('./tasks/sumOfOther.js');

describe('warmup', () => {
  it('1', () => {
    var array = [2, 3, 4, 1];
    var arrayResult = [8, 7, 6, 9];
    var result = sumOfOther(array);
    assert.deepEqual(result, arrayResult);
  });

  it('2', () => {
    var array = [1, 4, 'a', 4, 7];
    var arrayResult = 'incorrect array';
    var array = sumOfOther(array);
    assert.deepEqual(array, arrayResult,);
  });

  it('3', () => {
    var array = [6, 3, 10, 1, -15];
    var arrayResult = [-1 , 2, -5, 4, 20];
    var array = sumOfOther(array);
    assert.deepEqual(array, arrayResult);
  });

  it('4', () => {
    var array = [0, 0, 1, 0, 3, 2, 5];
    var arrayResult = [11, 11, 10, 11, 8, 9, 6];
    var array = sumOfOther(array);
    assert.deepEqual(array, arrayResult);
  });
});