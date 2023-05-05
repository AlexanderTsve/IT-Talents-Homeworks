//Code
function printArray() {
  //Test cases
  let array = [1, 2, 3, 45];
  // array = true;
  // // array = [];
  !Array.isArray(array)
    ? console.log("Invalid input! The input should be an array!")
    : console.log(array);
}

//Function invoking
printArray();
