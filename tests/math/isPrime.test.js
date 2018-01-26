const isPrime = require("../../src/math/isPrime.js");
const assert = require('assert');

console.log('Testing isPrime');
assert.deepEqual(isPrime(-9), false);
assert.deepEqual(isPrime(0), false);
assert.deepEqual(isPrime(2), true);
assert.deepEqual(isPrime(144), false);
assert.deepEqual(isPrime(15667), true);
assert.deepEqual(isPrime(58338), false);
console.log('Verified isPrime');
