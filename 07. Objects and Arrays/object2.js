// Creating an object with properties and methods
const car = {
  brand: "Tesla",
  model: "Model 3",
  start: function() {
    console.log("Car started!");
  }
};

car.start(); // call method
console.log(car.brand); // access property

// Adding a new method
car.stop = function() {
  console.log("Car stopped!");
};
car.stop(); // call new method

// Modifying an existing property
car.model = "Model S";
console.log(car.model); // access modified property
// Deleting a property
delete car.brand;
console.log(car.brand); // undefined

//Shortcut syntax (modern way):

const user = {
  name: "Raj",
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
};

user.greet();

//👉 this refers to the object itself.

// Nested Objects
const person = {
  name: "Raj",
  age: 24,
  address: {
    city: "Kathmandu",
    country: "Nepal"
  }
};

console.log(person.name);           // Raj
console.log(person["address"]["city"]);   // Kathmandu
console.log(person.address.country); // Nepal
console.log(JSON.stringify(person)); // Convert object to string for better visualization
console.log(JSON.stringify(person, null, 2)); // Pretty print with indentation

// Looping through object properties with nested object
for (let key in person) {
  if (typeof person[key] === 'object') {
    for (let nestedKey in person[key]) {
      console.log(`${nestedKey}: ${person[key][nestedKey]}`);
    }
  } else {
    console.log(`${key}: ${person[key]}`);
  }
}

// Deep nested object
const company = {
    name: "Tech Corp",
    employees: {
        developer: {
            name: "Alice",  
            skills: ["JavaScript", "React"]
        },
        designer: { 
            name: "Bob",
            skills: ["Photoshop", "Illustrator"]
        }
    }
};
console.log(company.employees.developer.skills[0]); // JavaScript
console.log(company.employees.designer.name); // Bob

// Looping through deep nested object
for (let role in company.employees) {
    console.log(role + ": " + company.employees[role].name);
    console.log("Skills: " + company.employees[role].skills.join(", "));
}
