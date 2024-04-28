// for

for (let index = 0; index < 10; index++) {
    const element = index
    console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);

   for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop value: ${j}`);
    console.log(`${i} * ${j} = ${i * j}`);
   }
    
}

let heroes = ["flash", "batman"]
for (let index = 0; index < heroes.length; index++) {
    const element = heroes[index];
    console.log(element);
}

for (let index = 0; index < 10; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue
    }
    console.log(`Value of i is ${index}`);
    
}