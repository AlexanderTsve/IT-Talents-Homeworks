//Test cases
var arr = [];
arr = [1, 2, 3, 4, 5];
arr = "";

var result = "";
if (!Array.isArray(arr) || arr.length > 0) {
  result = "Invalid data! The input should be an empty array!";
} else {
  for (var i = 0; i <= 9; i++) {
    arr.push(i * 3);
    result += arr.shift() + " ";
  }
}
console.log(result);
