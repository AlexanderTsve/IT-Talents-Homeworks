var n = 123;
var counter = 0;
while (n >= 1) {
  if (n % 2 === 1) counter++;
  n = Math.floor(n / 2);
}
console.log(counter);
