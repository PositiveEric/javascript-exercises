const diagonalAttack = require("./index");

describe("Diagonal Attack", () => {
  test("should handle input where sum of main diagonals is matching", () => {
    const matrix = [
      "5 3 12 3 1",
      "11 4 23 2 5",
      "101 12 3 21 10",
      "1 4 5 2 2",
      "5 22 33 11 1"
    ];
    const expectedOutput = [
      "5 15 15 15 1",
      "15 4 15 2 15",
      "15 15 3 15 15",
      "15 4 15 2 15",
      "5 15 15 15 1"
    ];
    expect(diagonalAttack(matrix)).toEqual(expectedOutput);
  });

  test("should handle input where sum of main diagonals is not matching", () => {
    const matrix = [[11, 32, 45], [21, 0, 1], [21, 1, 1]];
    expect(diagonalAttack(matrix)).toEqual(matrix);
  });
});
