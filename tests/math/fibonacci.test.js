const fibonacci = require("../../src/math/fibonacci.js");
const assert = require('assert');

console.log('Testing fibonacci');
assert.deepEqual(fibonacci(-1), 0);
assert.deepEqual(fibonacci(0), 0);
assert.deepEqual(fibonacci(8), 21);
assert.deepEqual(fibonacci(12), 144);
console.log('Verified fibonacci');
