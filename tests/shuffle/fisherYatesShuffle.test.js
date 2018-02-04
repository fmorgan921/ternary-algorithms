const fisherYatesShuffle = require("../../src/shuffle/fisherYatesShuffle.js");
const assert = require('assert');

console.log('Testing fisherYatesShuffle');
assert.deepEqual(fisherYatesShuffle([]).length, 0);
assert.deepEqual(fisherYatesShuffle([1, 2, 3, 4, 5]).length, 5);
assert.deepEqual(fisherYatesShuffle([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]).length, 10);
console.log('Verified fisherYatesShuffle');
