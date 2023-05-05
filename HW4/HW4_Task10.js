"use strict";
//Test cases
let string = "Hello";
// string = "a";
// string = 15;
// string = "";

//Variables
let result = "";

//Code
if (typeof string !== "string" || string.length === 0) {
  result =
    "Invalid input! The initial input should be a string(but not an empty one)!";
} else {
  for (let i = 0; i < string.length; i++) {
    result += String.fromCharCode(string.charCodeAt(i) + 5);
  }
}
console.log(result);
