/////////Template Literals & Shorthands
const username = "Roshani";
const course = "Modern JavaScript";
console.log(`Hello ${username}, welcome to the ${course} course!`);
const name = "Bhumika";
const age = 19;

const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};
console.log(student);
const getFullName = (first, last) => `${first} ${last}`;
console.log(getFullName("Roshani", "Kumari"));
