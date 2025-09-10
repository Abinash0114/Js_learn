

// var was pehle se tha, what was the need to introduce let and const
// it is because it was not working as a block as it should be 
// console.log(a);
// console.log(b);
// console.log(c);

// {} // is a curly brace when used for object declaration, but is called a scope when used with a function or if, else type conditions its called a scope

// var c =500 
let a = 300   // to now when i print "a" as let ye block ke bahar print hojayega aaram se
if(true){   // so this is a local scope in a block and iske bahar jo bhi declare hoga that is a global scope
    let a = 10
    const b = 20
    var c = 50
    console.log("INNER a:", a); // this will print the andar wla "a"
    
    // c =50 this problem will still arise if i do this, that's the reason we ignore var
}

// console.log(a);  //when i tried running these outside the condition it didnt 
// console.log(b);  // ye bhi run nahi hua
console.log(c);   // par bhai ye chal gya
console.log(a)  
 
// lets say ab mai condition se pehle var c ka value declare karunga alag value deke, to value 50 hi print ho rha hai 

// last but not the least when checking global scope in console its different and when checking with node in code environment its different

//Nested Scope
function one(){
    const username = "Abinash"

    function two(){
        const website = "Youtube"
        console.log(username);
        
    }
    // console.log(website)
    two()

}
// one()
if(true){
    const username = "Abinash"
    if(username === "Abinash"){
        const website = "Youtube"
        console.log(username + " " + website)
    }
    // console.log(website);
    
}
// console.log(username)

//++++++++++++++++++++++++++++++++++ INteresting +++++++++++++++++++++++++//
addone(3)

function addone(num){ // see here if i call a fucntion before declaring it thenn it will work all fine
    return num + 1    
}

addTwo(5)   // but here it wont happen because it has be to be stored in const addTwo

const addTwo = function(num){
    return num + 2
}