var n = 8;
var result = "";
for (var row = 1; row <= n; row++) {
  for (var space = n - 1; space >= row; space--) {
    result += " ";
  }
  for (var col = row; col >= 1; col--) {
    result += col;
  }
  result += "\n";
}
console.log(result);
