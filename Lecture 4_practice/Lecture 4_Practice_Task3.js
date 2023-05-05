// var a = 99;
// var b = 99;
// if (a <= b) {
//   for (var i = a; i <= b; i++) if (i % 3 === 0) console.log(i);
// } else for (var j = b; j <= a; j++) if (j % 3 === 0) console.log(j);

var a = 201;
var b = 201;
var max = a >= b ? a : b;
var min = b <= a ? b : a;
for (var i = min; i <= max; i++) if (i % 3 === 0) console.log(i);
