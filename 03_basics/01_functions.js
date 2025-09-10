function saymyName(){
    console.log("A");
    console.log("B");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("S");
    console.log("H");
}

saymyName()

function add2nums(num1, num2){  // these are called parameters
    console.log(num1 + num2);   // this will return NaN cuz no values has been given yet

}
// add2nums(3,4) // int hi print haba,  these are called Arguments
// add2nums(3,"4") // assumes both as strings
// add2nums(3,"a") // string mani naba
// add2nums(3,null)

// const result = add2nums(3,4);
// console.log(result); // return type nahi na, ta undefined daba

function add2nums(num1, num2){  // these are called parameters
    let result = num1 + num2;
    // return result;
    // console.log("kuch bhi print karucnga to nahi hoga")   kyunki return sirf result hi karega
    return num1 + num2;
}
const result = add2nums(3,4);
// console.log("RESULT :", result);

function userloginmsg(username = "Abinash"){ // if you want to make it default, pass a value here
    if(username === undefined){ // can also be written as if(!username)
        console.log("PLEASE ENTER A USERNAME");
        return
    }
    return `${username} just logged in`
}

// console.log(userloginmsg("Abinash"));
// console.log(userloginmsg());  // kichi pass na kale undefined asiba

function calculateCartPrice(val1, val2, ...num1){  // ... rest/spread{they are named as rest and spread according to the usecase} operator to add to array
    // function calculateCartPrice(val1, val2, ...num1){ // now if i do this to, 1st two numbers will be stored in val1 and val2 and the rest will be stored in the ...num1 array 
    return num1
}

console.log(calculateCartPrice(2, 200,1039,13,456,12,4,52,24,5)) // ek value to pass horha hai multiple addition re kan kariba


const obu = {
    username:  "AQbians",
    price: 70000000
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleobject(obu)  // Obu is a user, this was one of the way, but we can also pass object directly

handleobject({
    username: "sam",
    price: 499
})

const mynewarray = [200,2000,500,1]

function returnSeconfValue(getArray) {
    return getArray[3]

}

console.log(returnSeconfValue(mynewarray));
