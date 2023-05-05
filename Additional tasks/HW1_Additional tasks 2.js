var a = 2367;
a = 4678;
a = 9701;
console.log(Math.floor(a / 1000));
console.log(Math.floor(Math.floor(a % 1000) / 100));
console.log(Math.floor(Math.floor(a % 100) / 10));
console.log(a % 10);
