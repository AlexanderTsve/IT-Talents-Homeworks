"use strict";
//Test cases
var matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];
// matrix = [];
// matrix = 15;
// matrix = [["a", "b", "c"]];
// matrix = [
//   ["a", "b", "c"],
//   ["d", "e"],
//   ["g", "h", "i"],
// ];

//Variables
var searchedEl = "";
var result;
var isValidInput = true;

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
          matrix[row].length !== matrix[row + 1].length)) ||
      matrix.length !== matrix[row].length
    ) {
      isValidInput = false;
      break;
    } else {
      for (var col = 0; col < matrix[row].length; col++) {
        if (row === col) {
          searchedEl += matrix[row][col] + " ";
        }
      }
    }
  }
}
result = isValidInput
  ? searchedEl
  : "Invalid input! The input should be an array of arrays (with same length)!";
console.log(result);
