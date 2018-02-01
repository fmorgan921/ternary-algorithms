function insertionSort(array, index = 0) {
  return (array.length <= index) ? array
    : (index == 0) ? (index++, insertionSort(array, index))
    : (array = reorder(array, array[index], index, index - 1), index++, insertionSort(array, index));
}

function reorder(array, num, index, pos) {
  return (pos < 0) ? array
    : (array[pos] > num) ? (shiftBack(array, index), index--, pos--, reorder(array, num, index, pos))
    : (pos--, reorder(array, num, index, pos));
}

function shiftBack(array, index) {
  return (temp = array[index - 1], array[index - 1] = array[index], array[index] = temp, array);
}

module.exports = insertionSort, shiftBack;
