"use strict";
var arr = [1, 0, 0, 1, 1, 0, 0, 1];
var newArr = [];
var result;
if (!Array.isArray(arr)) {
  result = "Invalid input! The input should be an array!";
} else {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== 0 && arr[i] !== 1) {
      result =
        "Invalid input! At least one of the elements is not either zero or one!";
      break;
    } else {
      arr[i] === 0 ? newArr.unshift(arr[i]) : newArr.push(arr[i]);
      result = newArr;
    }
  }
}
console.log(result);
