var a = 11;
var b = 15;
var c = 16;
var perimeter = a + b + c;
var s = perimeter / 2;
var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(perimeter, area);
