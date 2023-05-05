"use strict";
//Test cases
let words = "asd fg hjkl";
// words = "t";
// words = 15;
// words = "";

//Variables
let result = "";
let lengthOfLongest = 0;

//Code
if (typeof words !== "string" || words.length === 0) {
  result =
    "Invalid input! The initial input should be a string(but not an empty one)!";
} else {
  let arr = words.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > lengthOfLongest) {
      lengthOfLongest = arr[i].length;
    }
  }
  result = `${arr.length} word/s, the longest word contains ${lengthOfLongest} character/s`;
}
console.log(result);
