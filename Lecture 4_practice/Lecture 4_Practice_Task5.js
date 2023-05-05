var n = 123;
n = 0;
var result = "";
if (n < 0) result = "Invalid date!";
else if (n === 0) result = n;
else {
  while (n >= 1) {
    result = (n % 2) + result;
    n = Math.floor(n / 2);
  }
}
console.log(result);
