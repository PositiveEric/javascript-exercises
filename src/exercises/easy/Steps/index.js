/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n) {
  let wordSteps;

  for (let i = 1; i <= n; i++) {
    wordSteps = "";
    for (let y = 1; y <= i; y++) {
      wordSteps = wordSteps + "#";
    }

    for (let y = 1; y <= n - i; y++) {
      wordSteps = wordSteps + " ";
    }
    console.log(wordSteps);
  }
}

module.exports = steps;
