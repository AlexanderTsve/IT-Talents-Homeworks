//Test cases
let n = 6;
// n = "a";
// n = 0;
// n = 1;
// n = 2;

//code
function returnFactorial(num) {
  if (typeof n !== "number") {
    return "Invalid input! The input should be a number!";
  } else if (n === 0) {
    return 1;
  } else {
    let factorial = 1;
    while (n >= 1) {
      factorial *= n;
      n--;
    }
    return factorial;
  }
}
//Function invoking
console.log(returnFactorial(n));
