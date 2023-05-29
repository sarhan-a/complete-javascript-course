'use strict';

// an object is a data structure which has the benefit of defining key - value pairs
// unlike an array, where elements can be referenced only by their position in
// array (index), elements of an object can be referenced by their keys
// keys are aslo called 'properties'

// array -  the order of elements matter because that's how we access the elements
const mrBondArray = [
  "James",
  "Bond",
  "Secret Service",
  "007",
  "Royal Navy Reserve Commander",
  2023 - 1960,
  ["M", "MoneyPenny", "Q"]
];

// object - the order does not matter here as we define the object with key-value pairs
const mrBond = {
  firstName: "James",
  lastName: "Bond",
  department: "Secret Service",
  codeNumber: "007",
  rank: "Royal Naval Reserve Commander",
  age: 2023 - 1960,
  allies: ["M", "Moneypenny", "Q"]
};

console.log(mrBond);

// we should use arrays for more ordered data and objects for more unstructured
// data which we want to name and retrieve from the object based on that name
