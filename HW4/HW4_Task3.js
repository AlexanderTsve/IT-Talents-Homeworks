"use strict";
//Test cases
let firstStr = "lion";
let secondStr = "lian";
// secondStr = "word";
// secondStr = "";
// secondStr = 14;
// secondStr = "li n";

// Variables
let result = "";
let areThereSpaces = false;
let differentChar = "";

//Code
if (typeof firstStr !== "string" || typeof secondStr !== "string") {
  result = "Invalid data! Both of the inputs should be strings!";
} else if (firstStr.length !== secondStr.length) {
  result = "The two strings have different lengths.";
} else {
  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] === " " || secondStr[i] === " ") {
      areThereSpaces = true;
      break;
    } else {
      if (firstStr[i] !== secondStr[i]) {
        differentChar += `${i} ${firstStr[i]}-${secondStr[i]}\n`;
      }
    }
  }
  result = areThereSpaces
    ? "Invalid data! No spaces allowed in the initial strings!"
    : `Both strings are with the same length. Different characters on the same position:\n${differentChar}`;
}
console.log(result);
