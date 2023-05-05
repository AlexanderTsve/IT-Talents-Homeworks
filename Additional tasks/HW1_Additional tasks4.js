var year = 2022;
var month = 6;
var ourDate = 15;
var isLeapYear = false;
var previousDays;
// year = 1900;
// month = 3;

if (year % 4 === 0 && year % 100 !== 0) isLeapYear = true;
else {
  if (year % 400 === 0) isLeapYear = true;
}
if (month === 1) previousDays = ourDate;
else if (month === 2) previousDays = ourDate + 31;
else if (month === 3) previousDays = ourDate + 31 + 28;
else if (month === 4) previousDays = ourDate + 31 + 28 + 31;
else if (month === 5) previousDays = ourDate + 31 + 28 + 31 + 30;
else if (month === 6) previousDays = ourDate + 31 + 28 + 31 + 30 + 31;
else if (month === 7) previousDays = ourDate + 31 + 28 + 31 + 30 + 31 + 30;
else if (month === 8) previousDays = ourDate + 31 + 28 + 31 + 30 + 31 + 30 + 31;
else if (month === 9)
  previousDays = ourDate + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31;
else if (month === 10)
  previousDays = ourDate + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30;
else if (month === 11)
  previousDays = ourDate + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31;
else
  previousDays = ourDate + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30;

if (isLeapYear && month >= 3) previousDays++;

console.log(--previousDays);
