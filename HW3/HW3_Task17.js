//Test cases
var arr = [1, 3, 2, 4, 3, 7];
arr = [1, 3, 2, 4, 3, 7, 6];
// arr = [5, 3, 2, 4, 3, 7];
// arr = "a";
// arr = [1, 3, 2, 4, 3, 7, "b"];
// arr = [12, 12];
// arr = [12];

var result = "";
var isZigZag = true;
var isNum = true;
var isLongerArr = true;
if (!Array.isArray(arr)) {
  result = "Invalid input! The input should be an array!";
} else {
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      isNum = false;
      result = "Invalid input! At least one of the elements is not a number!";
      break;
    } else if (arr.length <= 1) {
      isLongerArr = false;
      result = "Invalid input! The array's length should be greater than 1!";
      break;
    } else {
      if (i % 2 === 0) {
        if (arr[i] >= arr[i + 1] || arr[i] >= arr[i - 1]) {
          isZigZag = false;
          break;
        }
      } else {
        if (arr[i] <= arr[i + 1] || arr[i] <= arr[i - 1]) {
          isZigZag = false;
          break;
        }
      }
    }
  }
  if (isNum && isLongerArr) {
    result = isZigZag
      ? "The array's elements form a zigzag sequence."
      : "The array's elements DO NOT form a zigzag sequence.";
  }
}
console.log(result);
