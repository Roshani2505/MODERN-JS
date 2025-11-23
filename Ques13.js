const people = [
  {
    name: "Roshani",
    address: {
      city: "New Delhi",
      street: { name: "South Delhi", number: 628 }
    }
  },
  {
    name: "Ashish",
    address: {
      city: "New Delhi",
      street: { name: "Rohini", number: 162 }
    }
  }
];

const result = people.map(({ name, address: { city, street: { name: streetName } } }) => {
  return `${name} lives in ${city} on ${streetName}`;
});

console.log(result);
