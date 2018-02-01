const insertionSort = require("../../src/sorting/insertionSort.js");
const assert = require('assert');

console.log('Testing mergeSort');
assert.deepEqual(insertionSort([]), []);
assert.deepEqual(insertionSort([23, -1, 5]), [-1, 5, 23]);
assert.deepEqual(insertionSort([8, 7, 6, 5, 4, 3, 2, 1]), [1, 2, 3, 4, 5, 6, 7, 8]);
assert.deepEqual(insertionSort([3, 1, 5, 2, 1]), [1, 1, 2, 3, 5]);
console.log('Verified mergeSort');
