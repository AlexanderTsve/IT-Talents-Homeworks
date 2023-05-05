let firstWord = "hat";
let secondWord = "machine";
// firstWord = "";
// firstWord = 7;

let result = "";
let secondWordVertical = "";
let crossword = "";
let isThereCommonChar = false;

if (
  typeof firstWord !== "string" ||
  typeof secondWord !== "string" ||
  firstWord.length === 0 ||
  secondWord.length === 0
) {
  result = "Invalid input! The initial input should be two strings!";
} else {
  for (let i = 0; i < secondWord.length; i++) {
    secondWordVertical += secondWord[i] + "\n";
  }
  for (let j = 0; j < firstWord.length; j++) {
    for (let l = 0; l < secondWordVertical.length; l++) {
      crossword += secondWordVertical[l];
      if (firstWord[j] === secondWordVertical[l]) {
        isThereCommonChar = true;
        if (j === 0) {
          crossword += firstWord.slice(1);
        } else if (j === firstWord.length - 1) {
          crossword += firstWord.slice(0, firstWord.length - 1);
        }
      }
    }
    if (isThereCommonChar) {
      break;
    }
  }
  result = crossword;
}
console.log(result);
