// Q19: Complete JS Practice

// 1. Template Literals + Expressions
console.log("1. Template Literals + Expressions");

console.log(`5 + 7 = ${5 + 7}`); 

const multiLine = `This is line 1
This is line 2
This is line 3`;
console.log(multiLine); 

const firstName = "Ashih";
const lastName = "Bhumi";
console.log(`Full name: ${firstName} ${lastName}`); 


// 2. Arrow Functions & this
console.log("\n2. Arrow Functions & this");

// a) Arrow function
const square = n => n * n;
console.log(square(5)); 

// b) Why undefined
const obj1 = {
  value: 50,
  test: () => console.log(this.value)
};
obj1.test(); 
// c) Normal function
const obj2 = {
  value: 50,
  test: function() { console.log(this.value); }
};
obj2.test(); 


// 3. Rest, Spread & Copying Objects
console.log("\n3. Rest, Spread & Copying Objects");

const product = { name: "Pen", price: 10 };
const productCopy = { ...product };
console.log(productCopy); 

const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged); 

const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(10, 20, 5, 30));


// 4. Destructuring & Optional Chaining
console.log("\n4. Destructuring & Optional Chaining");

const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1); 

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand); 

const info = {};
console.log(info?.user?.name); 

// 5. Scoping (let/var/const)
console.log("\n5. Scoping");

for (var i = 0; i < 3; i++) {}
console.log(i); 

for (let j = 0; j < 3; j++) {}
try { console.log(j); } catch(e) { console.log(e.message); } // ReferenceError


// 6. Ternary Operator
console.log("\n6. Ternary Operator");

let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

let age = 20;
console.log(age >= 18 ? "Adult" : "Minor");

let num = -5;
console.log(num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative");


// 7. Spread, Rest & Arrays
console.log("\n7. Spread, Rest & Arrays");

const nums = [1,2,3];
const newNums = [...nums, 4, 5];
console.log(newNums);

const arr1 = ["x","y"];
const arr2 = ["z"];
const combined = [...arr1, ...arr2];
console.log(combined);

const printNames = (...names) => names;
console.log(printNames("A","B","C"));


// 8. Object Destructuring & Shorthand
console.log("\n8. Object Destructuring & Shorthand");

const userObj = { id: 101, status: "active" };
const { id: userId, status } = userObj;
console.log(userId, status);

const id2 = 101;
const role = "admin";
const userShorthand = { id2, role };
console.log(userShorthand);

const objMethod = {
  name: "Ashih",
  greet() { console.log(`Hello, ${this.name}`); }
};
objMethod.greet();


// 9. Template Literals (More Practice)
console.log("\n9. Template Literals (More Practice)");

console.log(`Today's date: ${new Date().toDateString()}`);

const score = 85;
const name = "Bhumi";
console.log(`Hello ${name}, your score is ${score}/100`);


// 10. Arrow Function Shorthands
console.log("\n10. Arrow Function Shorthands");

const add = (a,b) => a + b;
console.log(add(5,7));

const isAdult = age => age >= 18;
console.log(isAdult(20));

const double = n => n * 2;
console.log(double(10));


// 11. Spread Operator (Arrays & Objects)
console.log("\n11. Spread Operator");

const arrOriginal = [1,2,3];
const arrClone = [...arrOriginal];
console.log(arrClone);

const arrWith100 = [100, ...arrOriginal];
console.log(arrWith100);

const obj1Merge = { a: 1, b: 2 };
const obj2Merge = { b: 5, c: 3 };
const objMerged = { ...obj1Merge, ...obj2Merge };
console.log(objMerged); 

// 12. Optional Chaining (More Practice)
console.log("\n12. Optional Chaining");

const userOptional = {
  name: "Bhumi",
  address: {
    state: "UP"
  }
};
console.log(userOptional.address?.state); 
console.log(userOptional.job?.title); 

const companyOptional = { address: { state: "Haryana" } };
console.log(companyOptional.mana);
