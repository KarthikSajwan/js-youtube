// Dates 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());


// console.log("New Date:");

// let myCreatedDate = new Date (2024, 8, 26) // Month Start from 0
// console.log(myCreatedDate.toDateString());

// let myCreatedDate2 = new Date("2023-01-14")
// console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime()); // these are in MILLISECONDS

// //IN SECONDS
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday: "long",
})
