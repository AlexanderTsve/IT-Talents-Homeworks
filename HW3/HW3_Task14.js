//Test cases
var arr = [7.1, 8.5, 0.2, 3.7, 0.99, 1.4, -3.5, -110, 212, 341, 1.2];
// arr = "a";
// arr = [7.1, 8.5, 0.2, 3.7, 0.99, 1.4, -3.5, -110, 212, 341, 1.2, "b"];
// arr = [0, 0, 0.2, 3.7, 0.99, 1.4, -3.5, -1, 212, 341, 1.2];

var newArr = [];
var result;
if (!Array.isArray(arr)) {
  result = "Invalid input! The input should be an array!";
} else {
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      result = "Invalid input! At least one of the elements is not a number!";
      break;
    } else {
      if (arr[i] >= -2.99 && arr[i] <= 2.99) {
        newArr.push(arr[i]);
      }
      result = newArr;
    }
  }
}
console.log(result);
