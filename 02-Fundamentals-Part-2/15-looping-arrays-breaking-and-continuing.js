'use strict';

const mrBond = [
  "James",
  "Bond",
  "Secret Service",
  "007",
  "Royal Navy Reserve Commander",
  2023 - 1960,
  ["M", "MoneyPenny", "Q"],
  true
];

const types = [];

for (let i = 0; i < mrBond.length; i++) {
  // reading from mrBond array
  console.log(mrBond[i], typeof mrBond[i]);
  // filling types array
  // types[i] = typeof mrBond[i]; // or 👇
  types.push(typeof mrBond[i]);
}

console.log(types);

// looping through years array and calculating the age for each year and pusing it to ages array
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}

console.log(ages);

// continue and break statements
console.log("----ONLY STRINGS----")
for (let i = 0; i < mrBond.length; i++) {
  if (typeof mrBond[i] !== "string") continue; // if true, continue will skip and go to next iteration
  console.log(mrBond[i], typeof mrBond[i]);
}

console.log("---BREAK WITH NUMBER");
for (let i = 0; i < mrBond.length; i++) {
  if (typeof mrBond[i] === "number") break; // if true, end the loop with break
  console.log(mrBond[i], typeof mrBond[i]);
}
