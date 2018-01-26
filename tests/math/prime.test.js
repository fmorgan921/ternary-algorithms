const isPrime = require("../../src/math/prime.js");
const assert = require('assert');

console.log('Testing isPrime');
assert.deepEqual(isPrime(15667), true);
assert.deepEqual(isPrime(58338), false);
console.log('Verified isPrime');
