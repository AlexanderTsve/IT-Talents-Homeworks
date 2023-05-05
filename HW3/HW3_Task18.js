//Test cases
var arr1 = [18, 19, 32, 1, 3, 4, 5, 6, 7, 8];
var arr2 = [1, 2, 3, 4, 5, 16, 17, 18, 27, 11];
// arr2 = [1, 2, 3, 4, 5, 16, 17, 18, 27];
// arr2 = "b";
// arr2 = [1, 2, 3, 4, 5, 16, 17, 18, 27, true];

var newArr = [];
var result;

if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
  result = "Invalid data! At least one of the variables is not an array!";
} else {
  if (arr1.length !== arr2.length) {
    result = "Invalid data! Arrays' lengths should be equal to one another!";
  } else {
    for (i = 0; i < arr1.length; i++) {
      if (typeof arr1[i] !== "number" || typeof arr2[i] !== "number") {
        result =
          "Invalid data! At least one of the elements in the arrays is not a number!";
        break;
      } else {
        arr1[i] >= arr2[i] ? newArr.push(arr1[i]) : newArr.push(arr2[i]);
        result = newArr;
      }
    }
  }
}
console.log(result);
