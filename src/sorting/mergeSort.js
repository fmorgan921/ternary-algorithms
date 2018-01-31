function mergeSort(array, left = 0, right = (array.length - 1)) {
  return (right > left) ? (
    middle = parseInt((left + right) / 2),
    console.log("Left: " + left + " Middle: " + middle + " Right: " + right),
    mergeSort(array, left, middle),
    mergeSort(array, middle + 1, right)
    //merge(array, middle, left, middle + 1, middle - left, right - middle, 0)
    )
    : array;
}

function merge(array, middle, leftLength, rightLength, leftIndex, rightIndex, arrayIndex) {
  return (leftIndex + 1 > leftLength || rightIndex - middle > rightLength) ? array
    : (array[leftIndex] > array[rightIndex]) ? (
        array[arrayIndex] = array[leftIndex],
        arrayIndex++, leftIndex++,
        merge(array, middle, leftLength, rightLength, leftIndex, rightIndex, arrayIndex)
      )
    : (
      array[arrayIndex] = array[rightIndex],
      arrayIndex++, rightIndex++,
      merge(array, middle, leftLength, rightLength, leftIndex, rightIndex, arrayIndex)
    );
}

module.exports = mergeSort;
