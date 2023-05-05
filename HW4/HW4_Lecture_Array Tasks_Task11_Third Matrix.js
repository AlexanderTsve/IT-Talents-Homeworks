"use strict";
var n = 4;
var m = 5;
// n = "a";
// n = 3;
// m = 4;

var thirdMatrix = new Array(n);
var result;
var startI = 0;
var startJ = 0;
var i = 0;
var j = 0;
var number = 1;

//second matrix
if (typeof n !== "number" || typeof m !== "number") {
  result =
    "Invalid input! At least one of the initial variables is not a number!";
} else {
  for (var row = 0; row < n; row++) {
    thirdMatrix[row] = new Array(m);
  }
  for (var cell = 0; cell < m * n; cell++) {
    thirdMatrix[i][j] = number;
    number++;
    i--;
    j++;
    if (i < 0 || j === thirdMatrix[i].length) {
      startI++;
      if (startI === thirdMatrix.length) {
        startI = thirdMatrix.length - 1;
        startJ++;
      } else {
        startJ = 0;
      }
      i = startI;
      j = startJ;
    }
  }

  result = thirdMatrix;
}
console.table(result);
