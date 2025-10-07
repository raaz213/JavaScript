// Mini Assignment (Practice)
// 1.	Create two variables a and b with any numbers.
// 2.	Perform all arithmetic and comparison operations and print results.
// 3.	Join two strings with +.
// 4.	Use a ternary operator to check if a number is positive or negative.
// 5.	Use nested ternary to grade marks: (marks >= 90 → A+, marks >= 80 → A, marks >= 70 → B, otherwise → Fail )

// 1. Variables
let a = 10;
let b = 3;
console.log("a =", a);
console.log("b =", b);
// 2. Arithmetic Operations
console.log("Arithmetic Operations:");
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b);
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b);
console.log("a % b =", a % b); // Modulus
console.log("a ** b =", a ** b); // Exponentiation
console.log("++a =", ++a); // Increment
console.log("--b =", --b); // Decrement

// Comparison Operations
console.log("Comparison Operations:");
console.log("a == b:", a == b);
console.log("a === b:", a === b);
console.log("a != b:", a != b);
console.log("a !== b:", a !== b);
console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a >= b:", a >= b);
console.log("a <= b:", a <= b);

// 3. String Concatenation
let str1 = "Hello, ";
let str2 = "World!";
let combinedStr = str1 + str2;
console.log("Combined String:", combinedStr);

// 4. Ternary Operator for Positive/Negative Check
let num = -5;
let posNeg = num >= 0 ? "Positive" : "Negative";
console.log(`The number ${num} is ${posNeg}.`);

// 5. Nested Ternary for Grading
let marks = 85;
let grade = marks >= 90 ? "A+" : marks >= 80 ? "A" : marks >= 70 ? "B" : "Fail";
console.log(`Marks: ${marks}, Grade: ${grade}`);
