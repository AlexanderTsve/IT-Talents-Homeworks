var n = 8;
var result = "";
for (var row = n; row >= 1; row--) {
  for (var col = row; col >= 1; col--) {
    result += col + " ";
  }
  result += "\n";
}
console.log(result);
