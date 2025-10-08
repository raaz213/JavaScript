// Operators in JS
//1.	Arithmetic Operators
let a = 10,
  b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333..
console.log(a % b); // 1 (remainder)
console.log(a ** b); // 1000 (10^3)
console.log(++a); // 11
console.log(--b); // 2

// 2.	Comparison Operators
console.log(5 == "5"); // true  (value only)
console.log(5 === "5"); // false (value + type)
console.log(5 != "5"); // false
console.log(5 !== "5"); // true
console.log(10 > 5); // true
console.log(10 <= 5); // false

//  3.	Logical Operators
let x = true,
  y = false;
console.log(x && y); // false (AND)
console.log(x || y); // true  (OR)
console.log(!x); // false (NOT)

// 4.	Assignment Operators
let num = 10;

num += 5; // num = 15
num -= 3; // num = 12
num *= 2; // num = 24
num /= 4; // num = 6
num **= 2; // num = 36

console.log(num);

// 5.	String Operators
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Concatenation
console.log(fullName); // John Doe
fullName += " Jr."; // Append
console.log(fullName); // John Doe Jr.

// 6.	Ternary Operator
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Yes

//nested ternary
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade); // B


