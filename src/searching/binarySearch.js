function binarySearch(array, key, high, low = 0, mid) {
  (high === null) ? high = array.length - 1 : ''; // Catch null values
  (low === null) ? low = 0 : '';
  return (array.length === 0) ? -1
    : (array[mid] === key) ? mid // Finishing case
    : (low > high) ? -1
    : (mid = parseInt((high + low) / 2), array[mid] > key) ? (high = mid - 1, binarySearch(array, key, high, low, mid))
    : (low = mid + 1, binarySearch(array, key, high, low, mid));

}

module.exports = binarySearch;
