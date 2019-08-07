/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

const sumAll = function(x, y) {
  let start = Math.min(x);
  let end = Math.max(y);
  let result = 0;

  for (let i = start; i <= end; i++) result += i;
  return result;
};

console.log(sumAll(1, 4)); // Expected result: 10
