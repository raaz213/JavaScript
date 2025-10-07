// Conditional Statements in JavaScript

// Conditional statements are used to perform different actions based on different conditions.
// The most common conditional statements are if, else if, else, and switch.

// 1. if statement
let age = 18;

if (age >= 18) {
  console.log("You are an adult");
}

// 2. if...else statement
if (age < 18) {
  console.log("You are a minor");
} else {
  console.log("You are an adult");
}
// 3. if...else if...else statement
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// 4. switch statement
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}
// Note: The break statement is used to exit the switch statement. If break is omitted, the next case will be executed even if the condition does not match.

// 5. Nested if statement
let num = 10;
if (num > 0) {
  if (num % 2 === 0) {
    console.log("The number is positive and even");
  } else {
    console.log("The number is positive and odd");
  }
} else {
  console.log("The number is not positive");
}
// Note: Nested if statements are if statements inside another if statement. They are used to check multiple conditions.

