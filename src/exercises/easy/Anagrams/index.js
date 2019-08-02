/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA, stringB) {
  // New variable where I create lower case(case sensitivity), split strings into arrays, sort arrays, join them back into strings, to remove spaces use trim, and replace all ! with ''.

  let newStringA = stringA
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .trim()
    .replace(/!/g, "");
    
  let newStringB = stringB
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .trim()
    .replace(/!/g, "");

  if (newStringA === newStringB) return true;
  return false;
}

module.exports = anagrams;
