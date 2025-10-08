// Advanced JavaScript Objects
// Objects can contain nested objects and arrays, and they can also have methods (functions as values).
let student = {
    name: "Alice",      
    age: 22,
    courses: ["Math", "Science", "History"], // Array as a value
    address: {          // Nested object
        street: "123 Main St",
        city: "Wonderland",
        zip: "12345"    
    },
    greet: function() { // Method
        console.log("Hello, " + this.name);
    }
};
console.log(student.name);               // Accessing property
console.log(student.courses[1]);         // Accessing array element
console.log(student.address.city);  // Accessing nested object property
student.greet();                        // Calling method   

// Looping through object properties
for (let key in student) {
    console.log(key + ": " + student[key]);
    
}
// accessing nested object properties in loop
for (let key in student.address) {
    console.log( key + ": " + student.address[key]);
}

// Object methods
console.log(Object.keys(student));   // Get all keys
console.log(Object.values(student)); // Get all values
console.log(Object.entries(student)); // Get all key-value pairs

// Merging objects
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let mergedObj = { ...obj1, ...obj2 }; // Using spread operator
console.log(mergedObj);
// Output: { a: 1, b: 3, c: 4 } (note that 'b' from obj2 overwrites 'b' from obj1)

// Cloning objects
let cloneObj = { ...student }; // Shallow copy using spread operator
console.log(cloneObj);             // Cloned object

