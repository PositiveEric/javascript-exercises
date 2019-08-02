/**
 * Magic Matrix
 *
 * Write a JS function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal.
 *
 * The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
 *
 * The output is a Boolean result indicating whether the matrix is magical or not.
 */

function count(matrix) {
    let currentNum = 0;
    for (let i in matrix) {
        currentNum + matrix[i]
    } 
    return currentNum;
}

function columnsToRows(matrix) {
    let newMatrix = []
    for (let i = 0; i < matrix.length; i++) {
        let column = []
        newMatrix.push(column)
        for (let j = 0; j < matrix.length; j++) {
            column.push(matrix[j][i])
        }
    }
    return newMatrix;
}

function isMatrixMagical(input) {
    // console.log(input)
    return input
}

module.exports = isMatrixMagical
