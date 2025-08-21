const score = 400 // normal declaration
//but we can also set the data_type using new
console.log(score)
const balance = new Number(400)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.876;
console.log(otherNumber.toPrecision(4));

const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN'));

//////////////////////++++++++++++++++ Maths ++++++++++++++++++++////////////////////////
console.log(Math)
console.log(Math.abs(-1937));
console.log(Math.round(746.3736));
console.log(Math.floor(3.1));
console.log(Math.max(3,3,4,5,3,1));
console.log(Math.min(3,3,4,5,3,1));
console.log(Math.random()*10 + 1);

const max=10;
const min=5;

console.log(Math.floor(Math.random() * (max-min + 1)));