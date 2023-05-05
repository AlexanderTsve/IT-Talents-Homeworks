var a = 13.2;
var b = 29.5;
var c = 22.1;
// c = 35;//Number 35 is not between 13.2 and 29.5.
// c = 10;//Number 10 is not between 13.2 and 29.5.

//first solution
a < c && b > c
  ? console.log("Number " + c + " is between " + a + " and " + b + ".")
  : console.log("Number " + c + " is not between " + a + " and " + b + ".");

// //with template literal
// a < c && b > c
//   ? console.log(`Number ${c} is between ${a} and ${b}.`)
//   : console.log(`Number ${c} is not between ${a} and ${b}.`);

// //with another variable
// var d = a < c && b > c ? "is" : "is not";
// console.log(`Number ${c} ${d} between ${a} and ${b}.`);
