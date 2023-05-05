var n = 1;
var counter = 0;
var result = "";
while (counter < 10) {
  ++n;
  if (n % 2 === 0) {
    counter++;
    result += counter + ":" + n + " , ";
    continue;
  } else if (n % 3 === 0) {
    counter++;
    result += counter + ":" + n + " , ";
    continue;
  } else if (n % 5 === 0) {
    counter++;
    result += counter + ":" + n + " , ";
    continue;
  }
}
console.log(result.substring(0, result.length - 2));
