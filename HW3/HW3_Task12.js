//Test cases
var arr = [1, 2, 3, 4, 5, 6, 7];
arr = 4;
arr = [1, 2, 3, 4, 5, 6, 7, "b"];
arr = [12, 22, 33, 44, 50, 56, 71];

var result;
if (!Array.isArray(arr)) {
  result = "Invalid data! The input should be an array!";
} else {
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      result = "Invalid data! At least one of the elements is not a number!";
      break;
    } else {
      if (i === 0) {
        var addVar = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = addVar;
      } else if (i === 2) {
        arr[i + 1] = arr[i] + arr[i + 1];
        arr[i] = arr[i + 1] - arr[i];
        arr[i + 1] = arr[i + 1] - arr[i];
      } else if (i === 4) {
        arr[i + 1] = arr[i] * arr[i + 1];
        arr[i] = arr[i + 1] / arr[i];
        arr[i + 1] = arr[i + 1] / arr[i];
      }
      result = arr;
    }
  }
}
console.log(result);
