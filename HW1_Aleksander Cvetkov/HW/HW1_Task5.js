var a = 31;
var b = 45;
var c = 15;
// a = 55;
// c = 46;
// b = 65;
// c = 60;
// c = 80;
// a = 70;

//with if-else
if (a >= b && b >= c) console.log(a, b, c);
else if (a >= c && c >= b) console.log(a, c, b);
else if (b >= a && a >= c) console.log(b, a, c);
else if (b >= c && c >= a) console.log(b, c, a);
else if (c >= a && a >= b) console.log(c, a, b);
else console.log(c, b, a);

//with Math.max and ternary operator
if (Math.max(a, b, c) === a) {
  Math.max(b, c) === b ? console.log(a, b, c) : console.log(a, c, b);
} else if (Math.max(a, b, c) === b) {
  Math.max(a, c) === a ? console.log(b, a, c) : console.log(b, c, a);
} else {
  Math.max(a, b) === a ? console.log(c, a, b) : console.log(c, b, a);
}
