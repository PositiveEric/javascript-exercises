function goThroughNumbers(start, end) {
  if (Number % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

goThroughNumbers(3, 7);
// Expected result:
//
//      3 - odd
//      4 - even
//      5 - odd
//      6 - even
//      7 - odd

goThroughNumbers(8, 12);
// Expected result:
//
//      8 - even
//      9 - odd
//      10 - even
//      11 - odd
//      12 - even

goThroughNumbers(4, 3);
// Expected result: 'invalid input'
