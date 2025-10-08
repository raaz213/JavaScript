// Array Example
const fruits = ["apple", "banana", "mango"];

// Accessing elements
console.log(fruits[0]); // first item
console.log(fruits.length); // array size

// Modifying elements
fruits[1] = "kiwi"; // change second item

// Array methods
fruits.push("orange","pear"); // add at end
fruits.pop(); // remove last
fruits.unshift("grape"); // add at start
fruits.shift(); // remove first
fruits.splice(1, 1); // remove 1 item at index 1
fruits.splice(1, 0, "blueberry"); // add at index 1
fruits.splice(2, 1, "strawberry"); // replace 1 item at index 2

console.log(fruits);

const slicedFruits = fruits.slice(1, 3); // copy from index 1 to 2
console.log(slicedFruits);

// Finding elements
console.log(fruits.indexOf("apple")); // index of apple
console.log(fruits.includes("banana")); // check if banana exists


// Looping through array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Using forEach
fruits.forEach((fruit) => console.log(fruit));

// Using for...of
for (let fruit of fruits) {
  console.log(fruit);
}

// sorting and reversing
console.log(fruits.sort()); // ascending
console.log(fruits.reverse()); // descending