const binarySearch = require("../../src/searching/binarySearch.js");
const assert = require('assert');

console.log('Testing binarySearch');
assert.deepEqual(binarySearch([], 0), -1);
assert.deepEqual(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, null, null, null), 2);
assert.deepEqual(binarySearch([1, 1, 2, 3, 5, 8, 13, 21, 34, 55], 89, null, null, null), -1);
console.log('Verified binarySearch');
