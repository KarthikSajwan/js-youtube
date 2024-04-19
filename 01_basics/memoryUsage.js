
// Stack (Primitive) Heap (Non-Primitive)

// Stack copy is given. In Heap reference to the actual value is given

let myName = "karthik"

let anotherName = myName  //copy of myName is given

console.log(anotherName)    

let userOne = { 
    email: "abc@gmail.com",
    id : 2121
}

let userTwo = userOne  //actual reference to userOne is given

userTwo.email = "karthik@gmail.com"

console.log(userOne.email) //same value for both bcz change is done in the actual refernce not copy
console.log(userTwo.email)