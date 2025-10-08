// Looping in JavaScript

// Loops are used to execute a block of code repeatedly as long as a specified condition is true.
// Common loops in JavaScript include for, while, and do...while loops.

// 1. for loop
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

// 2. while loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// 3. do...while loop
let k = 1;
do {
    console.log("Value:", k);
    k++;
} while (k <= 5);

// 4. for...in loop (for objects)
let person = { name: "Raj", age: 24, country: "Nepal" };
for (let key in person) {
  console.log(key + ": " + person[key]); 
}

// 5. for...of loop (for arrays)
let fruits = ["apple", "banana", "mango"];  
for (let fruit of fruits) {  
  console.log(fruit);  
}

// 6. forEach loop (for arrays)
fruits.forEach((fruit) => console.log(fruit));

// break and continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // exits the loop when i is 5
    }
    console.log(i); // o/p: 1, 2
}
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // skips the iteration when i is 5
    }
    console.log(i);  // o/p: 1, 2, 4, 5
}
// Nested loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {  
        console.log(`i: ${i}, j: ${j}`);
    }
}
// Note: Be cautious with loops to avoid infinite loops, which can crash your program or browser.

