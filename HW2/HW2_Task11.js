var n = 4;
var result = "";
for (var i = 1; i <= n; i++) {
  for (var j = n; j > i; j--) {
    result += " ";
  }
  for (var l = 2 * i - 1; l >= 1; l--) {
    result += "*";
  }
  result += "\n";
}
console.log(result);

//without stars in the middle
var n = 4;
var result = "";
for (var i = 1; i <= n; i++) {
  for (var j = n; j > i; j--) {
    result += " ";
  }
  for (var l = 2 * i - 1; l >= 1; l--) {
    result += l === 2 * i - 1 || l === 1 || i === n ? "*" : " ";
  }
  result += "\n";
}
console.log(result);
