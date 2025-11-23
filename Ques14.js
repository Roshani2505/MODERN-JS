/////L1 - Merging and Updating Nested Objects with Spread Operator
const profile = {
  name: "Roshani",
  age: 20,
  address: {
    city: "New Delhi",
    zipcode: "110080"
  }
};

const updates = {
  name: "Mahalaxmi",
  age: 21,
  address: {
    city: "Kerala, Palakkad",
    zipcode: "678001"
  }
};

///////// merging objects 
const mergedProfile = {
  ...profile,
  ...updates,
  address: {
    ...profile.address,
    ...updates.address
  }
};

console.log(mergedProfile);
