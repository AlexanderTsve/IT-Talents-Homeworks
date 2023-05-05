var a = 4254;
a = 4027;
var containsZero = false;
if (
  Math.floor(Math.floor(a % 1000) / 100) === 0 ||
  Math.floor(Math.floor(a % 100) / 10) === 0 ||
  a % 10 === 0
)
  containsZero = true;
console.log(containsZero);
