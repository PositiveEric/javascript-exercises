/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(asfvs) {
  let string = asfvs.replace(/[^a-z0-9]/gim, " ").replace(/\s+/g, " ");
  let wordArr = string.split(" ");
  let longestW = wordArr[0];
  for (let i = 0; i < wordArr.length; i++) {
    if (longestW.length < wordArr[i].length) {
      longestW = wordArr[i];
    }
  }
  return longestW;
}

module.exports = longestWord;
