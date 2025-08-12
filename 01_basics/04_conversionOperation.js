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

/************************************ Operations ***************************************** */
let value= 3;
let negValue = -value;
console.log(negValue);
console.log(2+2);
console.log(2-2);
console.log(2/2);
console.log(2%3);
console.log(2**2);

let str = "hello"
let str2 = "Abinosh"
let str3 = str + " " + str2;
console.log(str3);
console.log("1" + 2);
console.log(1 + "2");
let str4 = "1" + 2 + 2;
console.log("1" + 2 + 2); // ye to theek hai ------1
console.log(typeof str4);
console.log(1 + 2 + "2"); // are bensot // dekh isme (1,2) hota ye hai ki jo datatype pehle hota hai wahi wale mai baaki sab convert hojaate hain
// refer ecma script ------2

/* ye tu dekh na 1 and 2 mai kaisa confusing cheezen hua, to sun jab value hi necessary ho to
parenthesis wagera use kar, itna complex code kyun likhna*/

console.log(+true); //ye possible hai
// console.log(true+); //kya cheeda bhosdi
console.log(+""); // maat cheddo bhosdi
// priority wagera padh lena 

let num1, num2, num3; // avoid these
num1 = num2 = num3 = 2+2; // avoid these 

let gameCounter = 100;
gameCounter++;
++gameCounter;
// read about prefix and postfix operator [read from MDN]
console.log(gameCounter);







