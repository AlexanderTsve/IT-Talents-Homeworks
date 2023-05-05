//Test cases
var arr = [2, 3, -11, 7];
// arr = [-10, 11];
// arr = "b";
// arr = [2, 4, 6, "k"];
// arr = [];

var newArr = [];
var result = "";

if (!Array.isArray(arr)) {
  result = "Invalid data! The input is not an array!";
} else {
  if (arr.length === 0) {
    result = newArr;
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "number") {
        result =
          "Invalid data! At least one of the elements in the array is not a number!";
        break;
      } else {
        if (i === 0) {
          newArr.push(arr[i + 1]);
        } else if (i === arr.length - 1) {
          newArr.push(arr[i - 1]);
        } else {
          newArr.push(arr[i - 1] + arr[i + 1]);
        }
        result = newArr;
      }
    }
  }
}
console.log(result);
