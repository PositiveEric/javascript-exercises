/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input) {
  function replaceStr(str, findChar, replaceChar) {
    for (var i = 0; i < findChar.length; i++) {
      str = str.replace(new RegExp(findChar[i], "gi"), replaceChar[i]);
    }
    return str;
  }

  let newInput = input;
  let findChar = ["-", "_", "'"];
  let replaceChar = [" ", "", ""];
  newInput = replaceStr(newInput, findChar, replaceChar);

  if (!newInput) {
    return "";
  }

  let firstLetter = function(x) {
    if (x) {
      return x[0];
    } else return "";
  };
  return newInput
    .split(" ")
    .map(firstLetter)
    .join("")
    .toUpperCase()
    .replace("-", "");
}

module.exports = parse;
