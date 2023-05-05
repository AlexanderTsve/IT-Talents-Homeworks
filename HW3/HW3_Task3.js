//Test cases
var n = 1;
n = "a";
n = 2;

var arr = [];
var result;

if (typeof n !== "number") {
  result = "Invalid data! The input is not a number!";
} else {
  for (var i = 0; i < 10; i++) {
    i >= 0 && i < 2 ? arr.push(n) : arr.push(arr[i - 2] + arr[i - 1]);
  }
  result = arr;
}
console.log(result);
