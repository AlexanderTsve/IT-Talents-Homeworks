"use strict";
//Test cases
var matrix = [
  [1, 2, 3],
  [7, 8, 9],
  [7, 8, 9],
];
// matrix = [
//   [1, 2, 3, 4],
//   [1, 8, 9, 4],
//   [2, 3, 9, 4],
//   [2, 3, 9, 4],
// ];
// matrix = "a";
// matrix = [
//   [1, 2, 3],
//   [7, 8],
//   [7, 8, 9],
// ];
// matrix = [];
// matrix = [12];

//Variables
var isValidInput = true;
var result;
var product = 1;

//Code
if (!Array.isArray(matrix) || matrix.length <= 1) {
  isValidInput = false;
} else {
  for (var row = 0; row < matrix.length; row++) {
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
      for (var col = 0; col < row; col++) {
        product *= matrix[row][col];
      }
    }
  }
}
result = isValidInput
  ? product
  : "Invalid input! The input should be an array of arrays (with same length) of numbers, and its length should be greater than 1!";
console.log(result);
