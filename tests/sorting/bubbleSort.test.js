const bubbleSort = require("../../src/sorting/bubbleSort.js");
const assert = require('assert');

console.log('Testing bubbleSort');
assert.deepEqual(bubbleSort([], null, null), []);
assert.deepEqual(bubbleSort([1, 5, 3], null, null), [1, 3, 5]);
assert.deepEqual(bubbleSort([19, 3, 99, 15, 6, 35, 80], null, null), [3, 6, 15, 19, 35, 80, 99]);
console.log('Verified bubbleSort');
