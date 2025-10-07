// Data Types in JavaScript

// In JavaScript, data types are divided into two main categories: 
// 1. Primitive data types
// 2. Non-primitive (or reference) data types

      //1. Premitive datatypes

      // String → text
      let name = "Raj";
      console.log(typeof name); // string
      // Number → integers, decimals
      let age = 24;
      let pi = 3.14;
      console.log(typeof age); // number
      console.log(typeof pi); // number
      // Boolean → true or false
      let isStudent = true;
      console.log(typeof isStudent); // boolean
      //Undefined → variable declared but no value
      let x;
      console.log(typeof x); // undefined
      // Null → intentional empty value
      let y = null;
      console.log(typeof y); // object (special case)
      //  Symbol (advanced, rarely used for unique values)
      let id = Symbol("id");
      console.log(typeof id); // symbol
      // BigInt → for very large numbers
      let bigNo = 9007199254740991n;
      console.log(typeof bigNo); // bigint

      //2. Non-premitive datatypes

      //object → key:value
      let person = { name: "Raj", age: 24 };
      console.log(typeof person); // object
      //Array → collection of value
      let fruits = ["apple", "banana", "mango"];
      console.log(typeof fruits); // object (array is a special object)
      //function → reusable blocks of code
      function greet(name) {
        //code to be executed
      }
      console.log(typeof greet); //function
    