var card = 52;
var suit;

//for suits - correction
if (card % 2 !== 0) {
  if ((card - 1) % 4 === 0) suit = "♣";
  else suit = "♥";
} else {
  if (card % 4 === 0) suit = "♠";
  else suit = "♦";
}

//for numbers
if (card > 52 || card < 1) console.log("Invalid number.");
else {
  if (card >= 1 && card <= 4) console.log("2" + " " + suit);
  else if (card >= 5 && card <= 8) console.log("3" + " " + suit);
  else if (card >= 9 && card <= 12) console.log("4" + " " + suit);
  else if (card >= 13 && card <= 16) console.log("5" + " " + suit);
  else if (card >= 17 && card <= 20) console.log("6" + " " + suit);
  else if (card >= 21 && card <= 24) console.log("7" + " " + suit);
  else if (card >= 25 && card <= 28) console.log("8" + " " + suit);
  else if (card >= 29 && card <= 32) console.log("9" + " " + suit);
  else if (card >= 33 && card <= 36) console.log("10" + " " + suit);
  else if (card >= 37 && card <= 40) console.log("J" + " " + suit);
  else if (card >= 41 && card <= 44) console.log("Q" + " " + suit);
  else if (card >= 45 && card <= 48) console.log("K" + " " + suit);
  else console.log("A" + " " + suit);
}
