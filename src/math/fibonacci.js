function fibonacci(length, count = 1, a = 0, b = 1) {
  return (length <= 0) ? 0 //negafibonacci
    : (count >= length - 1) ? a + b
    : (temp = a, a = b, b += temp, count++, fibonacci(length, count, a, b))
}

function negafibonacci() {
  // Support negative numbers
}

module.exports = fibonacci;
