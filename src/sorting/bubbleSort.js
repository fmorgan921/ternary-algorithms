function bubbleSort(array, index = 0, changed = false) {
  return (array.length === 0) ? array
    : (!changed && index === array.length - 1) ? array // Finshing case
    : (index === array.length - 1) ? bubbleSort(array, 0, false)
    : (array[index] > array[index + 1]) ? (temp = array[index], array[index] = array[index + 1], array[index + 1] = temp, bubbleSort(array, index++, true)) // Swap elements
    : (index++, bubbleSort(array, index, changed));
}

module.exports = bubbleSort;
