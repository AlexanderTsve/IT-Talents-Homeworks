var a = 1;
var b = 107;
var sum = 0;
var result = "";
console.log(a);
console.log(b);
for (var i = a; i <= b; i++) {
  if (i % 3 === 0) result += "skip " + i + ",";
  else {
    sum += Math.pow(i, 2);
    if (sum > 200) {
      result += " " + Math.pow(i, 2);
      break;
    } else {
      result += " " + Math.pow(i, 2) + ",";
    }
  }
}
console.log(result);
