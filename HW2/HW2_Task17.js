var b = 4;
var c = "+";
var result = "";
for (var i = 1; i <= b; i++) {
  for (var j = 1; j <= b; j++) {
    if (i === 1 || i === b) result += "*";
    else {
      if (j === 1 || j === b) result += "*";
      else result += c;
    }
  }
  result += "\n";
}
console.log(result);
