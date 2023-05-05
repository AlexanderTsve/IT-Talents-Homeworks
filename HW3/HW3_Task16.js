//Test cases
var arr = [-1.12, -2.43, 3.1, 4.2, 0, 6.4, -7.5, 8.6, 9.1, -4];
// var arr = "a";
// arr = [-1.12, -2.43, "3.1", 4.2, 0, 6.4, -7.5, 8.6, 9.1, -4];
// arr = [-1.12, 0, -2.43, 3.1, 4.2, 0, 6.4, -7.5, 8.6, 9.1, -4, 0];

var isNum = true;
var newArr = [];
var newArrLength = 0;
var result;
var sum = 0;
if (!Array.isArray(arr)) {
  result = "Invalid input! The input should be an array!";
} else {
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      isNum = false;
      result = "Invalid data! At least one of the elements is not a number!";
      break;
    } else {
      newArr.push(
        arr[i] < -0.231 ? 41.25 + Math.pow(i + 1, 2) : arr[i] * (i + 1)
      );
      sum += newArr[i];
    }
  }
  if (isNum) {
    newArrLength = newArr.length;
    for (var l = 0; l < newArr.length; l++) {
      if (newArr[l] === 0) {
        newArrLength--;
      }
    }
    result =
      "Elements of the initial array: " +
      arr +
      "\n" +
      "Elements of the additional array: " +
      newArr +
      "\n" +
      "Average: " +
      sum / newArrLength;
  }
}

console.log(result);
