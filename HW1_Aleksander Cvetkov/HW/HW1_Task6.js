var a1 = 13; //should be 26
var a2 = 26; //should be 41
var a3 = 41; //should be 13
//a1 should be equal to old a2, a2 should be equal to old a3, a3 should be equal to a1

//without additional variable
a1 = a1 + a2 + a3;
a3 = a1 - a2 - a3;
a2 = a1 - a3 - a2;
a1 = a1 - a3 - a2;
console.log(a1, a2, a3);
