/**
 * Sum Numbers
 *
 * Array of numbers are passed, your task is to calculate the sum.
 */

function sumNumbers(array) {
  let sum = 0;
  for (let i in array) {
    sum = sum + array[i];
  }
  return sum;
}

module.exports = sumNumbers;
