var hour = 13;
var money = 101.01;
var amIHealthy = false;
amIHealthy = true;
money = 1.01;
if (!amIHealthy) {
  money > 0
    ? console.log("I will go to the pharmacy for some pills!")
    : console.log("Empty pockets... I will drink some tea with rum..");
} else {
  if (money > 10)
    console.log("I am so rich! I will play computer games all day!");
  else if (money < 10 && money > 0) console.log("I will go to the cafe.");
  else console.log("I'm so poor..");
}
