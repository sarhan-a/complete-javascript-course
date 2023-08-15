'use strict'

let age = 30;
let oldAge = age;
age = 31;
console.log(age); // -> 31
console.log(oldAge); // ->  30

const me = {
  name: 'John',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend', friend); // -> Friend { name: 'John', age: 27 }
console.log('Me', me); // -> Me { name: 'John', age: 27 }

// primitives vs objects in practice

// primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName); // ->Davis Williams

// reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica); // -> Before marriage { firstName: 'Jessica', lastName: 'Davis', age: 27 }
console.log('After marriage', marriedJessica);// -> After marriage { firstName: 'Jessica', lastName: 'Davis', age: 27 }

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2); // this only creates a shallow copy (one level max) so suitable for objects without other internal objects inside them.
jessicaCopy.lastName = 'Davis';
console.log('jessica2', jessica2); // jessica2 { firstName: 'Jessica', lastName: 'Williams', age: 27 }
console.log('jessicaCopy', jessicaCopy); // jessicaCopy { firstName: 'Jessica', lastName: 'Davis', age: 27 }

// Copying objects that have other objects nested
const jessica3 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};
const jessicaCopy3 = Object.assign({}, jessica3); // shallow copy, copies correctly only first level properties
jessicaCopy3.lastName = "Davis";
jessicaCopy3.family.push("Mary");
jessicaCopy3.family.push("John");
console.log("Before marriage:", jessica3);
// → Before marriage: {firstName: 'Jessica', lastName: 'Williams', age: 27, family: Array(4)} // same family array
console.log("After marriage: ", jessicaCopy3);
// → After marriage:  {firstName: 'Jessica', lastName: 'Davis', age: 27, family: Array(4)} // same family array
