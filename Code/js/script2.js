let user = {
    name: "ali",
    age: 30,
    address: "tanta"
};

// destructing
// let name = user.name
// let age = user.age
// let address = user.address

// let { name, age, address } = user;
// console.log(name);

// Spreed Operator
let copy = { ...user, jobTitle: "front end" };
console.log(copy);

// Rest Operator
let { age, ...restObject } = user;
console.log(restObject)


let friends = ["ali", "ahmed", "gamal"];

// destructing
let [friend1, friend2] = friends;
console.log(friend2);

// Spreed Operator
let copyArr = [...friends, "medhat"];
console.log(copyArr)

// Rest Operator
let [fr1, ...restArr] = friends;
console.log(restArr);