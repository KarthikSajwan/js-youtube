// array

const myArr = [0, 1, 2, 3, 4, 5];
const myName = ["karthik", "sajwan"]

const Arr2 = new Array (1,2,3,4)
console.log(myArr[1]);

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr)  //it is of type object

const newArr = myArr.join()
console.log(newArr) // it is of type string


//slice splice

console.log("SLICE, SPLICE : ");
console.log("A", myArr);

const myn1 = myArr.slice(1, 3) // slice : creates new array with given subset
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)  // splice: modify the orginal array and remove given subset
console.log("C", myArr); 
console.log(myn2)