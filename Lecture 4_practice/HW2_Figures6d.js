var n = 8;
var result = "";
for (var row = 1; row <= n; row++) {
  for (var col = 1; col <= row; col++) {
    result += col + " ";
  }
  result += "\n";
}
console.log(result);
