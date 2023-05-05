//Test cases
let firstArr = [1, 2, 3, 4, 5, 6];
let secondArr = [10, 12, 31, 42, 53, 61];
// secondArr = [];
// secondArr = [11];
// secondArr = "a";

//Code
function concatTwoArrs(arr1, arr2) {
  if (
    !Array.isArray(arr1) ||
    !Array.isArray(arr2) ||
    arr1.length === 0 ||
    arr2.length === 0
  ) {
    return "Invalid input! The initial input should be two arrays of numbers!";
  } else {
    return firstArr.concat(secondArr);
  }
}
//Function invoking
console.log(concatTwoArrs(firstArr, secondArr));
