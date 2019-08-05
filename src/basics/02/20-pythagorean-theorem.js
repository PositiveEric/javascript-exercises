/**
 * Note : The Pythagorean Theorem tells us that the relationship in every right triangle is : c2 = a2 + b2, where c is the hypotenuse and a, b are two legs of the triangle.
 *
 * https://en.wikipedia.org/wiki/Pythagorean_theorem
 */

const pythagoreanTheorem = (sideX, sideY) => {
  //Math.sqrt returns the square root of the given number
  //Math.pow returns A number representing the given base taken to the power of the given exponent.
  return Math.sqrt(Math.pow(sideX, 2) + Math.pow(sideY, 2));
};

console.log(pythagoreanTheorem(2, 4)); // Expected result: 4.47213595499958
console.log(pythagoreanTheorem(3, 4)); // Expected result: 5
