var n = 15;
var result = "";
for (var i = 3; i <= n * 3; i++) {
  if (i % 3 === 0 && i < n * 3) {
    result += i + ",";
  } else if (i === n * 3) {
    result += i;
  }
}
console.log(result);
