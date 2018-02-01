function euclideanAlgorithm(a, b) {
  r = a % b;
  return (a < 0 || b < 0) ? (-1)
    : (a === 0 || r === 0) ? b
    : euclideanAlgorithm(b, r);
}

module.exports = euclideanAlgorithm;
