let score = "Abinah";
console.log(typeof score);

let valueinNumber = Number(score);        
 /*try avoiding number cuz if, score = "33" then using Number will give number,
  but if score = "33abc" something like this, then Number is not the right way to convert
  and if score = NULL, then it will show 0*/
console.log(typeof valueinNumber);     
console.log(valueinNumber);

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let someNumber = 23;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);





