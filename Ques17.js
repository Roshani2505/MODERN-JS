// Q17 - Spread, Rest & Destructuring
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);  

const sum = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum(1, 2, 3, 4));  
console.log(sum(10, 20));      

const user = {
  name: "Roshani",
  age: 20,
  address: {
    city: "New Delhi",
    street: "South Delhi",
    pin: 628
  }
};

const {
  name,
  address: { city, pin }
} = user;

console.log(name); 
console.log(city); 
console.log(pin);  
