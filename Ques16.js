// Q16 - Arrow Functions & Ternary Operator
const isEven = (n) => n % 2 === 0;
console.log(isEven(10)); 
console.log(isEven(7)); 
let marks = 40;
let result = marks >= 35 ? "Pass" : "Fail";

console.log(result);

const greet = (name) => `Hello, ${name ? name : "Guest"}`;

console.log(greet("Roshani")); 
console.log(greet()); 
