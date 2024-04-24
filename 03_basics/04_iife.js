// Immediately Invoked Function Expressions (IIFE)

// Used to reduce pollution from Global Scope

// Example 1: Basic IIFE
(function chai() {
    console.log("DB connected");
})(); // <- Invocation

// Example 2: IIFE with Arrow Function
(() => {
    console.log("DB connected (Arrow)");
})(); // <- Invocation

// Example 3: IIFE with Parameter
((name) => {
    console.log(`My name is ${name}`);
})("Karthik"); // <- Invocation
