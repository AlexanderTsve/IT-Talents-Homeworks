"use strict";
var n = 4;
var m = 5;
// n = "a";
// n = 3;
// m = 4;

var fourthMatrix = [];
var result;

//fourth matrix
if (typeof n !== "number" || typeof m !== "number") {
  result =
    "Invalid input! At least one of the initial variables is not a number!";
} else {
  for (var i = 0; i < n; i++) {
    fourthMatrix.push([]);
    for (var j = 0; j < m; j++) {
      if (j % 2 !== 0) {
        fourthMatrix[i].push(n * (j + 1) - i);
      } else {
        fourthMatrix[i].push(n * j + i + 1);
      }
    }
    result = fourthMatrix;
  }
}
console.table(result);
