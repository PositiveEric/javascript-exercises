/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array) {
  let numArr = array;
  // Find the max number in array
  let maxNum = Math.max.apply(null, numArr);
  // Removing max number from array
  numArr.splice(numArr.indexOf(maxNum), 1);
  // Return the secon max number, now that the biggest is removed.
  return Math.max.apply(null, numArr);
}

module.exports = secondLargest;

// var intArray = secondLargest.map(Number)
// var second = intArray.sort(function(a,b){return b-a})[1]
