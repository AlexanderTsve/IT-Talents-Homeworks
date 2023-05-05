"use strict";
//Test cases
var matrix = [
  [1, 2, 3, 4, 5, 6, 7],
  [7, 8, 9, 11, 15, 16, 18],
  [7, 8, 9, 11, 15, 16, 19],
];
// matrix = [
//   [1, 2, 3, 4, 5, 6, 7],
//   [7, 8, 9, 11, 15, 16, 18],
//   [7, 8, 9, 11, 15, 16, true],
// ];
// matrix = [
//   [1, 2, 3, 4, 5, 6, 7],
//   [7, 8, 9, 11, 15, 16],
//   [7, 8, 9, 11, 15, 16, 19],
// ];
// matrix = "a";
// matrix = 15;
// matrix = [];
// matrix = [[1, 2, 3, 4, 5, 6, 7]];

//Variables
var maxSum = Number.MIN_SAFE_INTEGER;
var sumRow = 0;
var isValidInput = true;
var searchedRow;
var result;

//Code
if (!Array.isArray(matrix) || matrix.length === 0) {
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
          matrix[row].length !== matrix[row + 1].length))
    ) {
      isValidInput = false;
      break;
    } else {
      for (var col = 0; col < matrix[row].length; col++) {
        if (typeof matrix[row][col] !== "number" || matrix[row].length === 0) {
          isValidInput = false;
          break;
        } else {
          sumRow += matrix[row][col];
          if (col === matrix[row].length - 1) {
            if (sumRow > maxSum) {
              maxSum = sumRow;
              searchedRow = row + 1;
            }
            sumRow = 0;
          }
        }
      }
    }
  }
}
result = isValidInput
  ? "The number of the row with the max sum of the elements: " + searchedRow
  : "Invalid input! The input should be an array of arrays (with same length) of numbers!";
console.log(result);
