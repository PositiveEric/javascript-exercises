/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */

function reverseString(input) {
  const chars = input.split("");
  let result = "";
  for (let i = chars.length - 1; i >= 0; i--) {
    result += chars[i];
  }
  return result;
}

function palindrome(str) {
  const reversed = reverseString(str);
  return str === reversed;
}

module.exports = palindrome;
