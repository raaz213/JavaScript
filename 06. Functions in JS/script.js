// Functions in JavaScript

// Functions are reusable blocks of code that perform a specific task.
// They are defined using the function keyword, followed by a name, parentheses, and curly braces.

// Function declaration
function greet() {
  console.log("Hello, Raj!");
}
greet(); // Function call

// Function with parameters
function add(a, b) {
  console.log(a + b);
}
add(5, 10); // Output: 15

// Function with return value
function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 5);
console.log("Result:", result); // Output: 20

// Function with default parameters
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}
greet();         // Hello, Guest!
greet("Raj");    // Hello, Raj!


// Function expression
const square = function(num) {
  return num * num;
};
console.log(square(5)); // Output: 25

// Arrow function (ES6)
const sum = (a, b) => a + b;
console.log(sum(10, 20)); // Output: 30

//If the function has multiple lines:
const greeting = (name) => {
  console.log("Hello, " + name);
};
greeting("Raj");

// Recursive function       
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); // Output: 120

// Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("This function runs immediately!");
})();

// Function scope
function testScope() {
    let localVar = "I am local";
    console.log(localVar); // Accessible here
}
testScope();
//console.log(localVar); // Uncaught ReferenceError: localVar is not defined

// Note: Variables declared inside a function are not accessible outside the function.

// Global scope 
let globalVar = "I am global";
function showGlobal() {
    console.log(globalVar); // Accessible here
}
showGlobal();
console.log(globalVar); // Accessible here also
// Note: Variables declared outside any function are in the global scope and can be accessed from anywhere in the code.

// Nested function
function outer() {
  function inner() {
    console.log("Hello from inner function");
  }
  inner();
  console.log("Hello from outer function");
}
outer();


// Callback function
function fetchData(callback) {
    setTimeout(() => {
        const data = "Sample Data";
        callback(data);
    }, 5000);
}

function displayData(data) {
    console.log("Fetched Data:", data);
}
fetchData(displayData); // After 5 second, logs: Fetched Data: Sample Data
// Note: A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

