"use strict";
//Test cases
let string = "abba";
// string = "okay";
string = 123;
string = "";
string = "121";
string = "O";

//Variables
let result = "";
let reversedStr = "";

//Code
if (typeof string !== "string" || string.length === 0) {
  result =
    "Invalid input! The initial input should be a string(but not an empty one)!";
} else {
  for (let i = string.length - 1; i >= 0; i--) {
    reversedStr += string[i];
  }
  result =
    string === reversedStr
      ? "The string is a palindrome."
      : "The string is NOT a palindrome.";
}
console.log(result);
