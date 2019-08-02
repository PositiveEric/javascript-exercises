/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

// n number
function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    //
    let emptySpace = " ".repeat(n - i);
    //
    let element = "#".repeat(i * 2 - 1);

    console.log(emptySpace + element + emptySpace);
  }
}

module.exports = pyramid;
