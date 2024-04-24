//scope
if (true) {
    let a = 20;  // cant print outside 
    const b = 10; // cant print outside 
    var c = 30; //this will be printed outside which is a VAR problem
}

function one() {
    const username = "Karthik"

    function two(){
        const website = "YouTube"
        console.log(username);
    }
    //console.log(website);     // chil can ask for icecream from parent but parent cant ask from child
    
    two()
}
//one()

if (true) {
    const username = "Karthik"
    if (username === "Karthik") {
        const web = "Youtube"
        console.log(username + web);
    }
}

//++++++++++++++++++++++INTERESTING(HOISTING concept)+++++++++++++++++++++++++++

console.log(addone(5));  // can be accessed anywhere 
function addone(num){
    return num+1
}

const addTwo = function(num){
    return num+2
}
console.log(addTwo(5));  // only accessible after the fun decalrationn as it is stored in const