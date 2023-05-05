//Test cases
var arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
arr = "a";
arr = ["d", "a", "a", "b", "b", "b", "c", "c", "c", "c"];
arr = ["d", "b", "b", "b", "b", "b", "c", "c", "c", "c"];

var maxSequence = 0;
var currentSequence = 1;
var result;

if (!Array.isArray(arr)) {
  result = "Invalid data! The input is not an array!";
} else {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      currentSequence++;
      if (currentSequence >= maxSequence) {
        maxSequence = currentSequence;
      }
    } else {
      currentSequence = 1;
    }
  }
  result = maxSequence;
}
console.log(result);
