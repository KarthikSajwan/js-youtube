const arr = [1, 2, 3, 4, 5]

for( const num of arr) {
    console.log(num);
} 

const grreetings = "Hello!"
for (const greet of grreetings){
    console.log(`Each char is ${greet}`);
}

//Maps


const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")
map.set('IN', "India")// will ignore this only takes unique value

console.log(map);