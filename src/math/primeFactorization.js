const isPrime = require('./isPrime.js');

function primeFactorization(num, factors) {
  return isPrime(num) ? (factors.push(num), factors)
    : num < 1 ? factors
    : ((factor = findFactor(num)) != -1) ? (num = num / factor, factors.push(factor), primeFactorization(num, factors))
    : factors;
}

function findFactor(num, index = 2) {
  return (num % index == 0) ? index
    : (index > num) ? -1
    : (index++, findFactor(num, index));
}

module.exports = primeFactorization;
