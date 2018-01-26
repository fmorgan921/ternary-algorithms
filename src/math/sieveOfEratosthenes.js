// Create a new bit array
function init(max) {
  return (max <= 1) ? []
    : sieveOfEratosthenes(encodeArray(max));
}

// Create a bit array
function encodeArray(max, array = [], index = 1) {
  return (index == max) ? array
    : (index++, array.push(1), encodeArray(max, array, index));
}

// Create an array of values from a bit array
function decodeArray(array, index = 0, result = []) {
  return (index == array.length) ? result
    : (array[index] == 1) ? (result.push(index + 2), index++, decodeArray(array, index, result))
    : (index++, decodeArray(array, index, result));
}

// Find values that are multiples of a divisor
function eliminate(array, divisor, index = 0) {
  return (index == array.length) ? array
    : (array[index] == 0) ? (index++, eliminate(array, divisor, index))
    : ((index + 2) % divisor == 0) ? (array[index] = 0, index++, eliminate(array, divisor, index))
    : (index++, eliminate(array, divisor, index));
}

function sieveOfEratosthenes(array, index = 1) {
  return (index == array.length) ? decodeArray(array)
    : (array[index] == 0) ? (index++, sieveOfEratosthenes(array, index))
    : (index++, array = eliminate(array, index), sieveOfEratosthenes(array, index));
}

module.exports = init;
