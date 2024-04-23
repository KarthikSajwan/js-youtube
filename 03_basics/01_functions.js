function sayMyName(){
    console.log("Walter White");
}

sayMyName()

function addNumbers(num1, num2) {
    console.log(num1+num2);
}
addNumbers(2,3)

function loginUserName(userName){
    return `${userName} just logged in!`
}
console.log(loginUserName("Karthik"));


//REST OPERATOR
function clacCartPrice(...num){
    return num
}
console.log(clacCartPrice(200,400,600));


const user = {
    userName: "Karthik",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}

handleObject(user)
