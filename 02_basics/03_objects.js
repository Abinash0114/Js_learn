// we can define objects in two ways 1. as literals & 2. as constructors
// singleton
// object is not a singleton when defined by literals

//object literals - declare krne ka tareeks
const mySym = Symbol("Key1");

const jsUser = {
    name: "Abinosh",
    "Full name": "Abiansh Mohapatra",
    [mySym]: "key1",  //symbol ko Sqaure bracket mai
    age : 21,
    location: "Bhonsor",
    email: "yaan@gmail.com",
    isLoggedIn: true,
    lastLogindays: ["Monday", "Tuesday"], 

}   // this is an object
    console.log(jsUser.age); 
    console.log(jsUser["age"]); // since the properties of the object are understood as strings
    console.log(jsUser["Full name"]);
    console.log(typeof jsUser[mySym]); // have a loook on how to access symbols

    jsUser.email = "burrah@gmail.com" //overriding values
    // Object.freeze(jsUser)
    jsUser.email = "yaand@gmail.com" // it wont update because we freezed it in previous line
    console.log(jsUser)

jsUser.greeting = function(){
    console.log("Greetings Panchoda")
}

console.log(jsUser.greeting)