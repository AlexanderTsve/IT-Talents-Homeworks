for (var i = 100; i < 1000; i++) {
  var firstDigit = Math.floor(i / 100);
  var secondDigit = Math.floor((i % 100) / 10);
  var thirdDigit = i % 10;
  if (
    firstDigit !== secondDigit &&
    secondDigit !== thirdDigit &&
    thirdDigit !== firstDigit
  )
    console.log(i);
}
