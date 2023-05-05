"use strict";
//Test cases
let names = "Anna Dosewa Asenowa, Iwo Peew Peew";
// names = "A B C, D E F";
// names = 15;
// names = "Anna dosewa Asenowa, Iwo Peew Peew";
// names = "";

let result = "";
let areValidNames = true;
let sumFirstName = 0;
let sumSecondName = 0;

if (typeof names !== "string" || names.length === 0) {
  result = "Invalid data! The input should be a string, and not an empty one!";
} else {
  const arr = names.split(", ");
  const firstName = arr[0].split(" ");
  const secondName = arr[1].split(" ");
  if (
    firstName.length !== 3 ||
    secondName.length !== 3 ||
    firstName[0].charAt(0) !== firstName[0].charAt(0).toUpperCase() ||
    firstName[1].charAt(0) !== firstName[1].charAt(0).toUpperCase() ||
    firstName[2].charAt(0) !== firstName[2].charAt(0).toUpperCase() ||
    secondName[0].charAt(0) !== secondName[0].charAt(0).toUpperCase() ||
    secondName[1].charAt(0) !== secondName[1].charAt(0).toUpperCase() ||
    secondName[2].charAt(0) !== secondName[2].charAt(0).toUpperCase()
  ) {
    areValidNames = false;
    result =
      "Invalid data! The input should be a string made of the two persons' three names!";
  } else {
    for (let i = 0; i < firstName.length; i++) {
      for (let j = 0; j < firstName[i].length; j++) {
        sumFirstName += firstName[i].charCodeAt(j);
      }
      for (let l = 0; l < secondName[i].length; l++) {
        sumSecondName += secondName[i].charCodeAt(l);
      }
    }
  }
  result = areValidNames
    ? sumFirstName > sumSecondName
      ? firstName.join(" ")
      : secondName.join(" ")
    : "Invalid data! The input should be a string made of the two persons's three names!";
}
console.log(result);
