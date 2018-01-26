function isPrime(num, index = 2) {
  return (num <= 1) ? false
    : (index == Math.ceil(Math.sqrt(num)) && Math.pow(index, 2) != num) ? true
    : (num % index == 0) ? false
    : isPrime(num, index + 1);
}

module.exports = isPrime;
