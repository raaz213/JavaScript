// Template Literals (Template Strings)
let name = "Raj";
let Age = 24;

console.log(`My name is ${name} and I am ${Age} years old.`); // My name is Raj and I am 24 years old.
 // Example of expression inside template literal
let num1 = 10;
let num2 = 5;
 
console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}.`); // The sum of 10 and 5 is 15.

// Example with object
let user = { name: "Aarav", country: "Nepal" };
console.log(`User ${user.name} is from ${user.country}.`); // User Aarav is from Nepal.

// Multi-line string
let message = `
Hello everyone,
This is a multi-line string
using template literals.
`;

console.log(message);