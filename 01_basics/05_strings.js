const name = "Karthik"
const repoCount = 7

// console.log(name + repoCount + "Sajwan") not used nowadays

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const getName = new String('Karthik')

console.log(getName[0])

console.log(getName.charAt(2))

console.log(getName.indexOf('k'));

const newString = getName.substring(0,3);
console.log(newString);

const anotherString = getName.slice(-8,3);  // obey -ve
console.log(anotherString);

const newStringOne = "    karthik   "
console.log(newStringOne);
console.log(newStringOne.trim());  // removes the extra spaces