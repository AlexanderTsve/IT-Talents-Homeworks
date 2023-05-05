//Test cases
var arr = [2, 3, 7, -5];
// arr = [2, 3, 7, -5, 6, 8, 9];
// arr = "b";
arr = ["a", "b", "c", "d", "e", "f"];
var result;

// //with additional array
// var newArr = [];
// if (!Array.isArray(arr)) {
//   result = "Invalid input! The input should be an array!";
// } else {
//   for (var i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }
//   result = newArr;
// }
// console.log(result);

// //without additional array
if (!Array.isArray(arr)) {
  result = "Invalid input! The input should be an array!";
} else {
  for (var i = arr.length - 1; i >= 0; i--) {
    arr.push(arr[i]);
  }
  var arrLength = arr.length;
  for (var l = 0; l <= arrLength / 2 - 1; l++) {
    arr.shift();
  }
  result = arr;
}
console.log(result);
