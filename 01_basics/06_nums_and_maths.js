const score = 400
console.log(score);

const balance = new Number(100) // now surety that it will be a number
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.45
console.log(otherNumber.toPrecision(3)); // precision round off (from LEFT side)

const hundreds = 10000
console.log(hundreds.toLocaleString()); // US standrad ,


// +++++++++++++++++MATHS++++++++++++++++++++
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // IMP note it down