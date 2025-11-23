/////(a)What is the output?

if (true) {
  let x = 10;
  var y = 20;
}

console.log(y); // 20
console.log(x); // ReferenceError: x is not defined


////(B) Access the following safely using optional chaining:
const profile = {
  user: {
    details: {
      email: "ROSHANI25@GMAIL.COM"
    }
  }
};

console.log(profile.user?.details?.email); // "ROSHANI25@GMAIL.COM"
console.log(profile.user?.details?.phone); // undefined, no error


////////(C)Create an example where optional chaining prevents a runtime error when accessing a missing nested property.
const company = {
  name: "Infosys",
  address: {
    city: "Delhi"
  }
};

console.log(company.address?.street?.name); // undefined, no error
