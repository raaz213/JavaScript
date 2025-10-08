// Mini Assignment (Practice)
// 1.	Create a function greetUser(name) that prints “Hello, [name]!”.
// 2.	Create a function square(num) that returns the square of a number.
// 3.	Use an arrow function to multiply two numbers.
// 4.	Create a function calculateAge(birthYear) that returns your current age.

// 1.	Create a function greetUser(name) that prints “Hello, [name]!”.
function greetUser(name) {
  document.write("Hello ", name + "!");
}
greetUser("Raj");

// 2.	Create a function square(num) that returns the square of a number.
function square(num) {
  document.write(`<br>The square of ${num} is ${num * num}`);
}
square(5);

// 3.	Use an arrow function to multiply two numbers.
const multiply = (a, b) => a * b;
document.write("<br> Product =", multiply(4, 5));

//For multiple line
const mul = (a, b) => {
  document.write(`<br> ${a} x ${b} = ${a * b}`);
};
mul(4, 5);

// 4.	Create a function calculateAge(birthYear) that returns your current age.
function calculateAge(birthYear) {
    let currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}
document.write("<br>Your age is: " + calculateAge(2000) + " years.");

