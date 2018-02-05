function init(weights, values, weight) {
  return (weights.length == 0 || values.length == 0 || weights.length != values.length) ? []
    : (arrays = binaryArrays(values.length),
      valid = eliminate(arrays, weights, weight),
      max = findMax(arrays, weights, valid),
      [max[0], getValues(arrays[max[1]], weights)]
  );
}

function findMax(arrays, weights, valid, max = 0, maxIndex = 0, count = 0) {
  return (count >= arrays.length) ? [max, maxIndex]
    : ((valid[count] * getWeight(arrays[count], weights)) > max) ? (max = getWeight(arrays[count], weights), maxIndex = count, count++, findMax(arrays, weights, valid, max, maxIndex, count))
    : (count++, findMax(arrays, weights, valid, max, maxIndex, count));
}

function eliminate(arrays, weights, weight, valid = [], count = 0) {
  return (count >= arrays.length) ? valid
    : (currentWeight = getWeight(arrays[count], weights), currentWeight <= weight) ? (valid[count] = 1, count++, eliminate(arrays, weights, weight, valid, count))
    : (valid[count] = 0, count++, eliminate(arrays, weights, weight, valid, count));
}

function getValues(num, weights, values = [], count = 0) {
  return (count >= num.length) ? values
    : (num.substring(count, count + 1) == 1) ? (values.push(weights[count]), count++, getValues(num, weights, values, count))
    : (count++, getValues(num, weights, values, count));
}

function getWeight(num, weights, total = 0, count = 0) {
  value = num.substring(count, count + 1);
  return (count >= num.length) ? total
    : (value == 0) ? (count++, getWeight(num, weights, total, count))
    : (total += value * weights[count], count++, getWeight(num, weights, total, count));
}

function pad(num, size, delimiter = "0") {
  // Add checking for negative size - num.length
  padding = delimiter.repeat(size - num.length);
  return padding + num;
}

function binaryArrays(size, arrays = [], count = 0) {
  return (count >= Math.pow(2, size)) ? arrays
    : (arrays.push(toBinary(count, size)), count++, binaryArrays(size, arrays, count));
}

function toBinary(num, size = num.length) {
  return pad((num >>> 0).toString(2), size);
}

module.exports = init;
