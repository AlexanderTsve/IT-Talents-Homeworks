"use strict";
//Test cases
let firstStr = "Abcd";
let secondStr = "Efgh";
// firstStr = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
// firstStr = 15;
// secondStr = "AbcdAbcdAbcdAbcdAbcdAbcdAbcdAbcdAAAAAAAA";
// firstStr = "";

//Variables
let result = "";

//Code
if (
  typeof firstStr !== "string" ||
  typeof secondStr !== "string" ||
  firstStr.length > 40 ||
  secondStr.length > 40 ||
  firstStr.length === 0 ||
  secondStr === 0
) {
  result =
    "Invalid data! Both of the inputs should be strings with length up to 40 characters!";
} else {
  result = `${firstStr.toUpperCase()} ${firstStr.toLowerCase()}
${secondStr.toUpperCase()} ${secondStr.toLowerCase()}`;
}
console.log(result);
