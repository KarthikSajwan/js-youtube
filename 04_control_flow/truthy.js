const userEmail = "karthik.ai" // automatically takes it as true but WONT WORK WHEN ""(empty) then else condition

if (userEmail) {                     //we didnt intialize it as == true but still works
    console.log("Got the mail");
}else{
    console.log("Not Found");
}


// falsy value
// false, 0 , -0, null, undefined, NaN

// truthy value
//"0", "false", " ", [], {}, function(){}

const emptyObj = {}
if (Object.keys(emptyObj).length == 0) {
    console.log("Object is empty");
}

//Nullish Coallescing Operator (??) : null undefined

let val1;
val1 = 5?? 10
console.log(val1);

val2 = null ?? 10  // gives the best which is not null or undefined
console.log(val2);

//Terniary Operator 
// condition ? true : false

const teaPrice = 100
teaPrice <= 80 ? console.log("less than 80") : console.log("More than 80")

