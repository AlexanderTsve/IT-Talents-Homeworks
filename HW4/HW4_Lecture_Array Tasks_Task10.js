"use strict";
//test cases
var arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
// arr = [4, "a", "a", "a", 2, 3, "a", 4, 1, "a", 4, 9, "a"];
// arr = "a";
// arr = ["true"];

//Variables
var result;
var currentFrequence = 0;
var maxFrequence = 0;
var mostCommonEl;

//Code
if (!Array.isArray(arr)) {
  result = "Invalid input! The input should be an array!";
} else {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        currentFrequence++;
        if (currentFrequence >= maxFrequence) {
          maxFrequence = currentFrequence;
          mostCommonEl = arr[i];
        }
      }
    }
    currentFrequence = 0;
  }
  result =
    "Most common element in the array is: " +
    mostCommonEl +
    "." +
    " It has occured " +
    maxFrequence +
    " time/s.";
}
console.log(result);
