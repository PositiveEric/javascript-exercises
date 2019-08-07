/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str) {
  // ko dara ... ?
  const arr = [...str];
  let reverseStr = "";

  while (arr.length) {
    //.pop() Removes an item from the end of an array
    reverseStr = reverseStr + arr.pop();
  }

  return reverseStr;
}

module.exports = reverse;
