"use strict";
//Test cases
var matrix = [
  [true, true, false, true],
  [false, false, true, false],
  [false, true, false, false],
  [true, false, false, false],
];
// matrix = [
//   [true, true, false, true],
//   [false, false, true, false],
//   [false, true, 15, false],
//   [true, false, false, false],
// ];
// matrix = [
//   [true, true, false, true],
//   [false, false, true, false],
//   [4, true, false, false],
//   [true, false, false, false],
// ];
// matrix = 15;
// matrix = [[true]];
// matrix = [
//   [true, true, false, true],
//   [false, false, true, false],
//   [false, true, false, true],
//   [true, false, false, false],
// ];
// matrix = [
//   [true, true, false, true],
//   [false, false, true, false],
//   [false, true, true, false],
//   [true, false, false, false],
// ];

//Variables
var result;
var isValidInput = true;
var isThereTrueEl = false;

//Code
if (!Array.isArray(matrix) || matrix.length <= 1) {
  isValidInput = false;
} else {
  for (var row = matrix.length - 1; row >= 0; row--) {
    if (
      !Array.isArray(matrix[row]) ||
      (row === 0 &&
        matrix.length > 1 &&
        matrix[row].length !== matrix[row + 1].length) ||
      (row === matrix.length - 1 &&
        matrix.length > 1 &&
        matrix[row].length !== matrix[row - 1].length) ||
      (row > 0 &&
        row < matrix.length - 1 &&
        (matrix[row].length !== matrix[row - 1].length ||
          matrix[row].length !== matrix[row + 1].length)) ||
      matrix.length !== matrix[row].length
    ) {
      isValidInput = false;
      break;
    } else {
      for (var col = matrix.length - 1; col >= 0; col--) {
        if (typeof matrix[row][col] !== "boolean") {
          isValidInput = false;
          break;
        }
      }
      for (var secD = matrix.length - row; secD < matrix.length; secD++) {
        if (matrix[row][col] === true) {
          isThereTrueEl = true;
        }
      }
    }
  }
}
result = isValidInput
  ? 'There is an element with value "true" below the second diagonal: ' +
    isThereTrueEl
  : "Invalid input! The input should be an array of arrays (with same length) of boolean values, and its length should be greater than 1!";
console.log(result);
