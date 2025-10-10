//inheritance.js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  } 
    greet() {   
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  } 
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age); // Call the parent class constructor
    this.studentId = studentId;
  } 
    study() {   
    console.log(`${this.name} is studying.`);
  }
}

// Creating objects
const student1 = new Student("Maya", 20, "S12345");
const student2 = new Student("Arun", 22, "S67890");

student1.greet(); // Hello, my name is Maya and I am 20 years old.
student1.study(); // Maya is studying.
student2.greet(); // Hello, my name is Arun and I am 22 years old.
student2.study(); // Arun is studying.
