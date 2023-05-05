var n = 1;
n = 17571;
n = 1000;
n = 11;
var reversed = 0;
var temp = n;
var isPalindrome = false;
if (n >= 0 && n < 10) isPalindrome = true;
else {
  do {
    reversed = reversed * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  } while (temp > 0);
}

if (n === reversed) isPalindrome = true;
isPalindrome
  ? console.log("Number " + n + " is a palindrome.")
  : console.log("Number " + n + " is not a palindrome.");
