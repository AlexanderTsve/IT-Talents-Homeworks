var card = 35;
card = 52;
card = 0;
card = 1;
var result = "";
var suit = "";
var cardNum = "";
if (card > 52 || card < 1) console.log("Invalid card number.");
else {
  while (card <= 52) {
    //for determining the suit
    if (card % 2 !== 0) {
      if ((card - 1) % 4 === 0) suit = "♣";
      else suit = "♥";
    } else {
      if (card % 4 === 0) suit = "♠";
      else suit = "♦";
    }

    //for the card number
    switch (card) {
      case 1:
      case 2:
      case 3:
      case 4:
        cardNum = "2";
        break;
      case 5:
      case 6:
      case 7:
      case 8:
        cardNum = "3";
        break;
      case 9:
      case 10:
      case 11:
      case 12:
        cardNum = "4";
        break;
      case 13:
      case 14:
      case 15:
      case 16:
        cardNum = "5";
        break;
      case 17:
      case 18:
      case 19:
      case 20:
        cardNum = "6";
        break;
      case 21:
      case 22:
      case 23:
      case 24:
        cardNum = "7";
        break;
      case 25:
      case 26:
      case 27:
      case 28:
        cardNum = "8";
        break;
      case 29:
      case 30:
      case 31:
      case 32:
        cardNum = "9";
        break;
      case 33:
      case 34:
      case 35:
      case 36:
        cardNum = "10";
        break;
      case 37:
      case 38:
      case 39:
      case 40:
        cardNum = "J";
        break;
      case 41:
      case 42:
      case 43:
      case 44:
        cardNum = "Q";
        break;
      case 45:
      case 46:
      case 47:
      case 48:
        cardNum = "K";
        break;
      default:
        cardNum = "A";
        break;
    }
    result += cardNum + " " + suit + "\n";
    card++;
  }
  console.log(result);
}
