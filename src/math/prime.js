function isPrime(num, index = 2) {
  return (index == Math.ceil(Math.sqrt(num))) ? true
    : (num % index == 0) ? false
    : isPrime(num, index + 1);
}

module.exports = isPrime;
