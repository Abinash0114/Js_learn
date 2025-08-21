let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

let myCreateDate = new Date(2023, 0, 23);
console.log(myCreateDate);
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleDateString());

let reateDate = new Date("2023-01-23");
console.log(reateDate.toLocaleString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);
// console.log(myTimeStamp.getTime());bhulachi
let newDate = new Date();
console.log(newDate().getDay());

