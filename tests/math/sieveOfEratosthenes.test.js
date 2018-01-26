const sieveOfEratosthenes = require("../../src/math/sieveOfEratosthenes.js");
const assert = require('assert');

console.log('Testing primeFactorization');
assert.deepEqual(sieveOfEratosthenes(-9), []);
assert.deepEqual(sieveOfEratosthenes(0), []);
assert.deepEqual(sieveOfEratosthenes(1), []);
assert.deepEqual(sieveOfEratosthenes(20), [3, 5, 7, 9, 11, 13, 15, 17, 19]);
console.log('Verified primeFactorization');
