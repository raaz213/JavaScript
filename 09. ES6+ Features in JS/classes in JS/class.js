class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating objects
const person1 = new Person("Raj", 24);
const person2 = new Person("Asha", 22);

person1.greet(); // Hello, my name is Raj and I am 24 years old.
person2.greet(); // Hello, my name is Asha and I am 22 years old.


