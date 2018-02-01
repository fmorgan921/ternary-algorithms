const euclideanAlgorithm = require("../../src/math/euclideanAlgorithm.js");
const assert = require('assert');

console.log('Testing euclideanAlgorithm');
assert.deepEqual(euclideanAlgorithm(0, 0), 0);
assert.deepEqual(euclideanAlgorithm(1600, 340), 20);
assert.deepEqual(euclideanAlgorithm(210, 45), 15);
assert.deepEqual(euclideanAlgorithm(-150, 70), -1);
console.log('Verified euclideanAlgorithm');
