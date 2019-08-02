/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str) {
  const characterMap = {};
  let max = 0;
  let maxChar = "";
  // Creating a character map
  for (let char of str) {
    if (characterMap[char]) {
      // Increment the character's value if the character existed in the map
      characterMap[char]++;
    } else {
      // Otherwise, the value of the character will be increamented by 1
      characterMap[char] = 1;
    }
  }
  // Finding the most commonly used character
  for (let char in characterMap) {
    if (characterMap[char] > max) {
      max = characterMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
