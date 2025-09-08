const tinderUser = new Object()   // this is one way, called Singleton Object
const tinderUser2 = {}  //non-singleton object

tinderUser2.id=124;
tinderUser2.name = "Abinosh";
tinderUser2.isloggedIn = false;


const regularUser = {     //nesting of objects
    email: "tor@gmail.com",
    fullname: {
        userFullname: {
            firstName:"Abinash",
            lastName:"Mohapatra"
        }
    }
}

console.log(regularUser.fullname);

const obj = {
    1: "A",
    2: "B"
}

const obj2 = {
    3: "A",
    4: "B"
}

const obj3 = {obj, obj2};
const onj3 = Object.assign({}, obj, obj2);
console.log(onj3);

const users = [
    {
        id: 102,
        name: "Abiansh",
        email: "a@gmail.com"
    }
]

// users[1].email // acess email of 1st user of database
console.log(tinderUser2);

console.log(Object.keys(tinderUser2));
console.log(Object.values(tinderUser2));
console.log(Object.entries(tinderUser2));
console.log(Object.hasOwnProperty('isloggedIn'));

const course = {
    coursename: "Btech",
    courseinstructor: "Abinash"
}

course.courseinstructor;  // abhi isko bar bar course ke naam se nahi bulana to we will do this

const {courseinstructor} = course;
// i can even make this name short by doing this
const {courseinstructor: ins} = course;

console.log(ins);

// till this is called Destructuring Object
// JSON file mai API hota HTMLDetailsElement, either in array form or object form
