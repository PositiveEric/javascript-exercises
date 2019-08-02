const isMatrixMagical = require("./index");

describe("Magix Matrix", () => {
  test("given matrix should be considered as magical", () => {
    const matrix = [[4, 5, 6], [6, 5, 4], [5, 5, 5]];
    expect(isMatrixMagical(matrix)).toBeTruthy();
  });

  test("given matrix should be considered as not magical", () => {
    const matrix = [[11, 32, 45], [21, 0, 1], [21, 1, 1]];
    expect(isMatrixMagical(matrix)).toBeFalsy();
  });

  test("given matrix should be considered as magical", () => {
    const matrix = [[1, 0, 0], [0, 0, 1], [0, 1, 0]];
    expect(isMatrixMagical(matrix)).toBeTruthy();
  });
});
