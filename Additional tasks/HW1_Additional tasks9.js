var a = 17;
var b = 18;
var c = 19;
c = 200;
a + b > c && a + c > b && b + c > a
  ? console.log(
      "Variables a, b and c (with the current values) could be sides in a triangle."
    )
  : console.log(
      "Variables a, b and c (with the current values) could not be sides in a triangle."
    );
