// Mini Assignment (Practice)
// 1.	Create variables of all primitive types and print their types using typeof.
// 2.	Create an object with your name, age, and country.
// 3.	Create an array of your 3 favorite subjects and print the first subject.

// 1. Primitive data types
let name = "Raj"; // String
let age = 24; // Number
let isStudent = true; // Boolean
let x; // Undefined
let y = null;
let id = Symbol("id"); // Symbol
let bigNo = 9007199254740991n; // BigInt

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean
console.log(typeof x);
console.log(typeof y); // object (special case)
console.log(typeof id); // symbol
console.log(typeof bigNo); // bigint

// 2. Object
let person = { name: "Raj", age: 24, country: "Nepal" };
console.log(person);

// 3. Array
let subjects = ["Math", "Science", "History"];
console.log(subjects[0]); // prints the first subject
