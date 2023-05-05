"use strict";
var n = 4;
var m = 5;
// n = "a";
// n = 3;
// m = 4;

var firstMatrix = [];
var result;

//first matrix
if (typeof n !== "number" || typeof m !== "number") {
  result =
    "Invalid input! At least one of the initial variables is not a number!";
} else {
  for (var i = 0; i < n; i++) {
    firstMatrix.push([]);
    for (var j = i * m + 1; j < m * (i + 1) + 1; j++) {
      firstMatrix[i].push(j);
    }
  }
  result = firstMatrix;
}
console.table(result);
