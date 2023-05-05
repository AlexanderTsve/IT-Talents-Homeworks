//Test cases
let n = 21;
// n = 1;
// n = 0;
// n = "a";

//Code
function printArr(num) {
  if (typeof num !== "number" || n === 0) {
    console.log(
      "Invalid input! The input should be a number, and it could not be equal to zero!"
    );
  } else {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    console.log(arr);
  }
}

//Function invoking
printArr(n);
