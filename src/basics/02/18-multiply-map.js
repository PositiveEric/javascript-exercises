/**
 * Implement map method which works similarly as https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */


 // x => x * 2 (short version, also works, for me (currently) harder to understand)
const doubleUp = x => {
  return x * 2;
};

const numbers = [1, 2, 3];
const doubled = numbers.map(doubleUp);

console.log(doubled); // Expected result: [2, 4, 6]
