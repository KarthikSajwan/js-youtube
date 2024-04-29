let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index +2
}

let heroes = ['Flash', 'Batman']
let arr = 0
while (arr < heroes.length) {
    console.log(`Value is ${heroes[arr]}`);
    arr++
}

let score = 1
do{
    console.log(`Score is ${score}`);
    score++
} while (score <= 5);


//SPECIAL CASE OF (DO-WHILE)
let marks = 11
do{
    console.log(`Marks are ${marks}`);   //11 printed even before checkin condition
    marks++
} while (marks <= 10);