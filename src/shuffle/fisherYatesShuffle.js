function fisherYatesShuffle(array, shuffledArray = []) {
  return (array.length <= 0) ? shuffledArray
    : (index = Math.floor(Math.random() * array.length),
      shuffledArray.push(array[index]),
      array.splice(index, 1),
      fisherYatesShuffle(array, shuffledArray));
}

module.exports = fisherYatesShuffle;
