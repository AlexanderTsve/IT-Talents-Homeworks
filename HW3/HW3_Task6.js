//Test cases
var firstArray = [13, 2, 7];
var secondArray = [13, 2, 1];
// firstArray = "a";
// firstArray = ["a", "b", "c", "d"];
// secondArray = ["a", "b", "c", "d"];

var result;
if (!Array.isArray(firstArray) || !Array.isArray(secondArray)) {
  result = "Invalid data! At least one of the inputs is not an array!";
} else {
  if (firstArray.length === secondArray.length) {
    for (var i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        result =
          "The arrays contain different elements. The arrays have the same length.";
        break;
      } else {
        result =
          "The arrays contain same elements. The arrays have the same length.";
      }
    }
  } else {
    result = "One of the arrays is longer than the other.";
  }
}
console.log(result);
