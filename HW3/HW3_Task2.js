//Test cases
var arr = [5, 2, 5, 8, 3];
arr = "a";
arr = ["a", "b", "c", "d"];

var result;

if (!Array.isArray(arr)) {
  result = "Invalid data! The input is not an array!";
} else {
  var newArr = arr.slice();
  for (var i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  result = newArr;
}
console.log(result);
