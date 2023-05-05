var sum = 25;
sum = 26;
var result = "";
for (var i = 100; i < 1000; i++) {
  var firstDigit = Math.floor(i / 100);
  var secondDigit = Math.floor((i % 100) / 10);
  var thirdDigit = i % 10;
  if (firstDigit + secondDigit + thirdDigit === sum) {
    result += i + ",";
  }
}
console.log(result.substring(0, result.length - 1));
