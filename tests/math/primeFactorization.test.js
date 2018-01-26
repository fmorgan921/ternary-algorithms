const primeFactorization = require("../../src/math/primeFactorization.js");
const assert = require('assert');

console.log('Testing primeFactorization');
assert.deepEqual(primeFactorization(-9, []), []);
assert.deepEqual(primeFactorization(0, []), []);
assert.deepEqual(primeFactorization(1, []), []);
assert.deepEqual(primeFactorization(16, []), [2, 2, 2, 2]);
assert.deepEqual(primeFactorization(37, []), [37]);
assert.deepEqual(primeFactorization(64, []), [2, 2, 2, 2, 2, 2]);
console.log('Verified primeFactorization');
