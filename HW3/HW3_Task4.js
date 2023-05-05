//Test cases
var arr = [3, 1, 7, 3];
// arr = "a";
// arr = [4];
// arr = [6, 27, -1, 5, 7, 7, 5, -1, 27, 6];
// arr = [true, true, false];
// arr = ["a", "b", "b", "a"];
// arr = [];

var isMirrored = true;
var result;

if (!Array.isArray(arr)) {
  result = "Invalid data! The input is not an array!";
} else {
  if (arr.length === 0) {
    result = "Invalid data! The input should not be an empty array!";
  } else {
    var newArr = arr.slice();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== newArr[newArr.length - 1 - i]) {
        isMirrored = false;
        break;
      }
    }
    isMirrored
      ? (result = "The array is mirrored.")
      : (result = "The array is NOT mirrored.");
  }
}
console.log(result);
