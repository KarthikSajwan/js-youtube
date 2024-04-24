const user = {
    username: "Karthik",
    price: 99,
    welcomeMsg: function(){
        console.log(`${this.username}! welcome to the website`);   //this refer to current context
    }
}

user.welcomeMsg()
user.username = "Sajwan"   //username will be updated as we used this and it refers to current context not hard coded
user.welcomeMsg()


//This will be undefined
// function chai(){
//     let username = "Karthik"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "Karthik"
    console.log(this);
}

//+++++++++++++++++++(ARROW FUNCTION)++++++++++++++++++++++++

//EXPLICIT RETURN
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4))

//IMPLICIT RETURN METHOD
const add = (num1, num2) => num1 + num2
console.log(add(2,2));

