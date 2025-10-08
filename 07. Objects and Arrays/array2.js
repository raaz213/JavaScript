// Create an initial array
let arr = [1, 2, 3, 4, 5];

console.log("Original array:", arr);

// 1. push() → add to end
arr.push(6);
console.log("After push(6):", arr); // [1,2,3,4,5,6]

// 2. pop() → remove last
arr.pop();
console.log("After pop():", arr); // [1,2,3,4,5]

// 3. shift() → remove first
arr.shift();
console.log("After shift():", arr); // [2,3,4,5]

// 4. unshift() → add to start
arr.unshift(1);
console.log("After unshift(1):", arr); // [1,2,3,4,5]

// 5. indexOf() → find index of an element
console.log("Index of 3:", arr.indexOf(3)); // 2

// 6. includes() → check if element exists
console.log("Includes 4?", arr.includes(4)); // true
console.log("Includes 10?", arr.includes(10)); // false

// 7. slice(start, end) → copy part of array (non-destructive)
let sliced = arr.slice(1, 4); // from index 1 to 3
console.log("Sliced part (1,4):", sliced); // [2,3,4]
console.log("Original array still:", arr); // [1,2,3,4,5]

// 8. splice(index, count) → remove/change elements (destructive)
arr.splice(2, 1); // remove 1 element at index 2
console.log("After splice(2,1):", arr); // [1,2,4,5]

// 9. map() → transform each element
let doubled = arr.map((x) => x * 2);
console.log("After map(x=>x*2):", doubled); // [2,4,8,10]

// 10. filter() → select items based on condition
let greaterThan3 = arr.filter((x) => x > 3);
console.log("After filter(x>3):", greaterThan3); // [4,5]

// 11. reduce() → combine all into one value
let sum = arr.reduce((a, b) => a + b);
console.log("After reduce(sum):", sum); // 12 (1+2+4+5)

// 12. concat() → merge arrays
let newArr = arr.concat([6, 7, 8]);
console.log("After concat([6,7,8]):", newArr); // [1,2,4,5,6,7,8]

// 13. sort() → sorts array alphabetically
arr.sort((a, b) => a - b); // Ascending
arr.sort((a, b) => b - a); // Descending

console.log("Final array:", arr);
