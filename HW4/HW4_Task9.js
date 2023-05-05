"use strict";
//Test cases
let string = "asd-12sdf45-56asdf100";
// string = "-1234";
// string = "-1234A1";
// string = "";
// string = "-";
// string = true;
// string = "abcdef";

//Variables
let result = "";
let currentNum = "";
let sum = 0;

//Code
if (typeof string !== "string" || string.length === 0) {
  result =
    "Invalid input! The initial input should be a string(but not an empty one)!";
} else {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "-") {
      currentNum += string[i];
    } else if (Number.isInteger(Number(string[i]))) {
      currentNum += string[i];
      if (!Number.isInteger(Number(string[i + 1]))) {
        result += currentNum + "\n";
        sum += Number(currentNum);
        currentNum = "";
      }
    }
  }
  result += `Sum: ${sum}`;
}
console.log(result);
