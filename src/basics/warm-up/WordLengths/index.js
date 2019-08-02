/**
 * Word Lengths
 *
 * Array of words are passed in the function, your task is to count letters in each of them.
 */

function wordLengths(array) {
  let wordsArray = [];
  for (let i in array) {
    wordsArray.push(array[i].length);
  }
  return wordsArray;
}

module.exports = wordLengths;
