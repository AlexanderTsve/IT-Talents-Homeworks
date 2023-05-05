var n = 1;
var m = 1;
var result = "";
while (n < 10) {
  result += n + " row " + " -> ";
  while (m < 10) {
    if (m >= n) result += n + " * " + m + " , ";
    m++;
  }
  result = result.substring(0, result.length - 2);
  result += "\n";
  m = 1;
  n++;
}
console.log(result);
