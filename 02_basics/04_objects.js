// Uncommented Object Creation
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Karthik"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullName: {
            firstname: "Karthik",
            lastname: "Sajwan"
        }
    }
}
console.log(regularUser.fullName);


//combine 2 objects 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

// Corrected array declaration
const users = [
    {
        id: 1,
        email: "h@gmail.com",

    },
    {
        id: 2,
        email: "qfj@gmail.com"
    }
]

console.log(users[1].email); // Accessing email of the second user in the array

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));


console.log("NEW LECTURE:");

const course= {
    courseName: "js yt",
    price: "99",
    couseInstructor: "Karthik"
}

const {couseInstructor} = course
console.log(couseInstructor);

//Destructuring instead of couseInstructor we can destructe it to instructor
const{couseInstructor: instructor} = course
console.log(instructor);