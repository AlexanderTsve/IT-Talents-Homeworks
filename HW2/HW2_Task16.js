var n = 35;
var m = 249;
var result = "";
for (var i = m; i >= n; i--) {
  if (i % 50 === 0) result += i + ",";
}
console.log(result.substring(0, result.length - 1));
