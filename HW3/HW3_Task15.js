//Test cases
var arr = [7.13, 0.2, 4.9, -5.1, 6.34, 1.12];
// arr = "a";
// arr = [7.13, 0.2, 4.9, -5.1, 6.34, "a", 1.12];

var newArr = [];
var isNum = true;
var firstMaxAbsNum = 0;
var secondMaxAbsNum = 0;
var thirdMaxAbsNum = 0;
var result;

if (!Array.isArray(arr)) {
  result = "Invalid input! The input should be an array!";
} else {
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      isNum = false;
      break;
    } else {
      if (Math.abs(arr[i]) >= firstMaxAbsNum) {
        thirdMaxAbsNum = secondMaxAbsNum;
        secondMaxAbsNum = firstMaxAbsNum;
        firstMaxAbsNum = Math.abs(arr[i]);
      } else if (Math.abs(arr[i]) >= secondMaxAbsNum) {
        thirdMaxAbsNum = secondMaxAbsNum;
        secondMaxAbsNum = Math.abs(arr[i]);
      } else if (Math.abs(arr[i]) >= thirdMaxAbsNum) {
        thirdMaxAbsNum = Math.abs(arr[i]);
      }
    }
  }
  newArr.push(thirdMaxAbsNum, secondMaxAbsNum, firstMaxAbsNum);
  result = isNum
    ? newArr
    : "Invalid input! At least one of the elements is not a number!";
}
console.log(result);
