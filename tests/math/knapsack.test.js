const knapsack = require("../../src/math/knapsack.js");
const assert = require('assert');

console.log('Testing knapsack');
assert.deepEqual(knapsack([], [], 0), []);
assert.deepEqual(knapsack([10, 20, 30], [60, 100, 120], 50), [50, [20, 30]]);
assert.deepEqual(knapsack([10, 25], [30], 25), []);
assert.deepEqual(knapsack([5, 15, 25, 40, 50], [10, 25, 35, 85, 110], 70), [70, [5, 25, 40]]);
console.log('Verified knapsack');
