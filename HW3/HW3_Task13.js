//Test cases
var n = 99;
n = true;
n = 230;

var arr = [];
var result;
if (typeof n !== "number") {
  result = "Invalid input! The input should be a number!";
} else {
  while (n >= 1) {
    if (n % 2 === 0) {
      arr.unshift(0);
      n /= 2;
    } else {
      arr.unshift(1);
      n = Math.floor(n / 2);
    }
  }
  result = arr;
}
console.log(result);
