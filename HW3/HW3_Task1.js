//Test cases
var arr = [-3, 32, 5, 8, 62, -13, -271];
// arr = [-31, 32, 5, 8, 62, -13, -271];
// arr = [-31, 32, 5, "a", 62, -13, -271];
// arr = 5;

var min = arr[0];
var result;

if (!Array.isArray(arr)) {
  result = "Invalid data! The input is not an array!";
} else {
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      result = "Invalid data! At least one of the elements is not a number!";
      break;
    } else {
      if (arr[i] % 3 === 0 && arr[i] <= min) {
        min = arr[i];
      }
      result =
        min % 3 === 0
          ? min
          : "There is no number divisible by 3 in the current array.";
    }
  }
}
console.log(result);
