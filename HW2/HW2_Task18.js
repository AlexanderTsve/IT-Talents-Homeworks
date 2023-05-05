var n = 2;
var m = 2;
n = 3;
m = 4;
var result = "";
for (i = 1; i <= n; i++) {
  result += i + "-> ";
  for (j = 1; j <= m; j++) {
    result += i + " * " + j + " = " + i * j + "; ";
  }
  result += "\n";
}
console.log(result);
