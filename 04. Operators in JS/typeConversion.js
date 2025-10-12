// Type Conversion in JavaScript
// Type conversion is the process of converting a value from one data type to another.

// 1. Implicit Conversion (Type Coercion) → done automatically by JavaScript.
console.log("5" + 2);     // "52"  → number 2 is converted to string
console.log("5" - 2);     // 3    → string "5" is converted to number
console.log("10" * "2");  // 20   → both converted to numbers
console.log("10" + "2");  // 102   → both remain strings and concatenated
console.log(5 + true);    // 6    → true = 1 (so 5 + 1 = 6)
console.log(5 + false);   // 5    → false = 0 (so 5 + 0 = 5)
console.log(null + 5);    // 5    → null = 0
console.log(undefined + 5); // NaN  → undefined cannot be converted to a number
console.log("Hello" - 2); // NaN  → cannot convert "Hello" to number

/**Rule of thumb:
If there’s a string with +, JS concatenates (joins).
With other operators (-, *, /), it tries to convert to numbers.**/

// 2. Explicit Conversion (Manual Type Casting) → done manually by the programmer using functions.
// String conversion
let num = 42;
let strNum1 = String(num);     //  Using String() function
let strNum2 = num.toString();  // Using toString() method
console.log(strNum2); // "42"
console.log(typeof strNum2); // "string"

// Number conversion
let str = "123";
let convertedNum1 = Number(str);   // Using Number() function
let convertedNum2 = parseInt(str); // Parsing integer
let convertedFloat = parseFloat(str); // Parsing float
console.log(convertedNum1); // 123
console.log(typeof convertedNum1); // "number"
//More examples of number conversion
console.log(Number("123"));   // 123
console.log(Number("123abc")); // NaN
console.log(parseInt("50px")); // 50
console.log(parseFloat("3.14")); // 3.14
console.log(Number(true));  // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN


// Boolean conversion
console.log(Boolean(1));     // true
console.log(Boolean(0));     // false
console.log(Boolean(""));    // false
console.log(Boolean("Hi"));  // true
console.log(Boolean(null));  // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));   // false
console.log(Boolean([]));    // true (empty array is truthy)
console.log(Boolean({}));    // true (empty object is truthy)
console.log(Boolean(function(){})); // true (function is truthy)
console.log(Boolean(!!0));   // false (double negation)
console.log(Boolean(!!"Hello")); // true (double negation)

// 3. Converting to Different Types
let value = "100";
let toNumber = Number(value); // Converts to number
let toString = String(toNumber); // Converts back to string
let toBoolean = Boolean(toNumber); // Converts to boolean
console.log(toNumber, typeof toNumber); // 100 "number"
console.log(toString, typeof toString); // "100" "string"
console.log(toBoolean, typeof toBoolean); // true "boolean"
// Note: Always be cautious with type conversion as it can lead to unexpected results.
// It's a good practice to explicitly convert types when necessary to avoid confusion.



