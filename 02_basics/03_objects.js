// singleton: Object.create <- this method is used then singleton created

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Karthik",
    "full name": "Karthik Sajwan",
    age: 20,
    location: "Chandigarh",
    isLoggedIn: false,
    lastLoggedDays: ["Monday", "Friday"],

    [mySym]: "mykey1"
}

//Access Method
//1st method
console.log(JsUser.name);

//2nd method
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

// value change
JsUser.age = 21

//Object.freeze(JsUser)  // now no change can be done

JsUser.greeting = function(){
    console.log("Hello");
}

console.log(JsUser.greeting());