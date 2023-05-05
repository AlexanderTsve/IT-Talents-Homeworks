//Test cases
var arr = [-23, -55, 17, 75, 56, 105, 134];
arr = [-23, -55];
arr = "a";
arr = [];
arr = ["b", -23, -55];

var result = "";
var isInt = true;
if (!Array.isArray(arr)) {
  result = "Invalid data! The input should be an array!";
} else {
  for (var i = 0; i < arr.length; i++) {
    if (!Number.isInteger(arr[i])) {
      isInt = false;
      break;
    } else if (arr[i] > 5 && arr[i] % 5 === 0) {
      result += arr[i] + " ";
    }
  }
  result = isInt
    ? "Numbers bigger than 5, that are multiples of 5: " + result
    : "Invalid data! At least one of the elements is not an integer!";
}
console.log(result);
