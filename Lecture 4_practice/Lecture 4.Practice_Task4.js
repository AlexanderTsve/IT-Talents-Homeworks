var a = 3;
var result = "";
if (a === 1) result = "The number " + a + " is not prime.";
else if (a === 2) result = "The number " + a + " is prime.";
else {
  for (var i = a - 1; i > 1; i--) {
    if (a % i === 0) {
      result = "The number " + a + " is not prime.";
      break;
    } else result = "The number " + a + " is prime.";
  }
}
console.log(result);
