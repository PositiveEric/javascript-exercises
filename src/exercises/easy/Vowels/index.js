/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(string) {
  // List of vowels we are looking for in a string to count
  let vowelsList = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  // Vowels count in the beggining is 0
  let vowelsCount = 0;

  for (let i = 0; i < string.length; i++) {
    if (vowelsList.indexOf(string[i]) !== -1) {
      // For each vowel found add +1 to the count
      vowelsCount += 1;
    }
  }
  // Returns the total count of vowels in a string
  return vowelsCount;
}

module.exports = vowels;
