function init(length) {
  offset = (length % 2 == 0 && length < 0) ? -1 : 1;
  return fibonacci(length, offset);
}

function fibonacci(length, offset = 1, count = 1, a = 0, b = 1) {
  return (length === 0) ? 0
    : (count >= Math.abs(length) - 1) ? (a + b) * offset
    : (temp = a, a = b, b += temp, count++, fibonacci(length, offset, count, a, b));
}

module.exports = init;
