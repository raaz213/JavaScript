// JavaScript Objects 
// Objects are collections of key-value pairs, where keys are strings (or Symbols) and values can be any data type, including other objects or functions.
// Objects are defined using curly braces {}.

// Creating an object

const person = {
  name: "Raj",
  age: 24,
  country: "Nepal"
};
// Access values
console.log(person.name);       // Dot notation
console.log(person["country"]); // Bracket notation

// Add new property
person.hobby = "Coding";

// Update property
person.age = 25;

// Delete property
delete person.country;

console.log(person);

// Loop through properties
for (let key in person) {
  console.log(key + ": " + person[key]);
}
