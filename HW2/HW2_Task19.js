var n = 12;
var result = "";
while (n >= 1) {
  if (n % 2 === 0) {
    n = n * 0.5;
  } else {
    if (n === 1) break;
    else n = n * 3 + 1;
  }
  result += " " + n;
}
console.log(result);
