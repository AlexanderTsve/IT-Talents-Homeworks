var n = 6;
var result = "";
for (var i = n; i >= 1; i--) {
  for (var k = 1; k <= n - i; k++) result += " ";
  for (var j = 2 * i - 1; j >= 1; j--) result += "#";
  result += "\n";
}
console.log(result);
