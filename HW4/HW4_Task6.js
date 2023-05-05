"use strict";
//Test cases
let sentence = "The weatheR is So Good todaY!";
sentence = "T";
sentence = false;
sentence = "mega cool task";

//Variables
let result = "";

//Code
if (typeof sentence !== "string" || sentence.length <= 1) {
  result =
    "Invalid input! The initial input should be a string with length greater than 1!";
} else {
  let arr = sentence.toLowerCase().split(" ");
  for (let i = 0; i < arr.length; i++) {
    result += arr[i][0].toUpperCase() + arr[i].slice(1) + " ";
  }
}
console.log(result);
