"use strict";
var n = 4;
var m = 5;
// n = "a";
// n = 3;
// m = 4;

var secondMatrix = [];
var result;

//second matrix
if (typeof n !== "number" || typeof m !== "number") {
  result =
    "Invalid input! At least one of the initial variables is not a number!";
} else {
  for (var i = 0; i < n; i++) {
    secondMatrix.push([]);
    for (var j = i + 1; j <= i + 1 + n * (m - 1); j += n) {
      secondMatrix[i].push(j);
    }
  }
  result = secondMatrix;
}
console.table(result);
