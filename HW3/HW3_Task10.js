//Test cases
var arr = [1, 2, 3, 4, 5, 6, 7];
// arr = [6, 2, 3, 2, 3, 6, 7];
// arr = ["a", 2, 3, 2, 3, 6, 7];
// arr = "b";
arr = [1, 1, 1, 3, 4, 3, 4];

var result;
var sum = 0;
var dif;
var minDif = Number.MAX_SAFE_INTEGER;
var searchedClosestNum;

if (!Array.isArray(arr)) {
  result = "Invalid input! The input should be an array!";
} else {
  for (var i = 0; i < arr.length; i++) {
    if (!Number.isInteger(arr[i])) {
      result = "Invalid input! At least one of the elements is not an integer!";
      break;
    } else {
      sum += arr[i];
      var average = sum / arr.length;
      if (i === arr.length - 1) {
        for (var l = 0; l < arr.length; l++) {
          dif = Math.abs(arr[l] - average);
          if (dif < minDif) {
            minDif = dif;
            searchedClosestNum = arr[l];
          }
          result =
            "Average: " + average + " Closest number: " + searchedClosestNum;
        }
      }
    }
  }
}
console.log(result);
