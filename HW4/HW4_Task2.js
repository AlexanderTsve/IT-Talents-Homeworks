"use strict";
//Test cases
let firstWord = "pineapple";
let secondWord = "pomegranate";
// firstWord = "";
// firstWord = true;
// firstWord = "apple";
// firstWord = "pineapplepineapplepineapple";

let result = "";

if (
  typeof firstWord !== "string" ||
  typeof secondWord !== "string" ||
  firstWord.length < 7 ||
  secondWord.length < 7 ||
  firstWord.length > 20 ||
  secondWord.length > 20
) {
  result =
    "Invalid data! Both of the inputs should be strings with length between 7 and 20 characters!";
} else {
  const firstWordFirstFive = firstWord.slice(0, 5);
  const firstWordRest = firstWord.slice(5);
  const secondWordFirstFive = secondWord.slice(0, 5);
  const secondWordRest = secondWord.slice(5);
  const firstNewWord = secondWordFirstFive + firstWordRest;
  const secondNewWord = firstWordFirstFive + secondWordRest;
  result = `${
    firstNewWord.length > secondNewWord.length
      ? firstNewWord.length
      : secondNewWord.length
  }, ${firstNewWord}, ${secondNewWord}`;
}
console.log(result);
