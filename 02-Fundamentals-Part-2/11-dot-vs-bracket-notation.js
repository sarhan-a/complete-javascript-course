'use strict';

const misterBond = {
  firstName: "James",
  lastName: "Bond",
  department: "Secret Service",
  codeNumber: "007",
  rank: "Royal Naval Reserve Commander",
  age: 2023 - 1968,
  allies: ["M", "Moneypenny", "Q"]
};

// retrieving a property from an object via 'dot notation'
console.log(misterBond.lastName); // -> "Bond"

// doing the same as above this time with 'bracket notation'
console.log(misterBond["lastName"]); // -> -> "Bond"
// has the advantage of being able to contain expressions inside the brackets.

// the below won't work with dot-notation, only with bracket notation
const nameKey = "Name";
console.log(misterBond["first" + nameKey]); // -> "James"
console.log(misterBond["last" + nameKey]); // -> "Bond"

const interestedIn = prompt(`What do you want to know about James Bond? Choose between firstName,
lastName, department, codeNumber, rank, age and allies`);
// console.log(misterBond.interestedIn); -> this will be 'Undefined' because interestedIn is not defined as a property
// console.log(misterBond[interestedIn]); // -> this will log the value "Royal Naval Reserve Commander"

if (misterBond[interestedIn]) {
  console.log(misterBond[interestedIn]);
} else {
  console.log(`Wrong request! Choose between firstName,
  lastName, department, codeNumber, rank, age and allies`);
}

// adding new properties to the object via dot-notation and bracket-notation
misterBond.location = "UK";
misterBond["nationality"] = "British";
console.log(misterBond);

// challenge - write the sentence below without hard cording the values
// "James has 3 allies, and his best ally is called Q"

console.log(`${misterBond.firstName} has ${misterBond.allies.length} allies,
 and his best ally is called ${misterBond.allies[2]}`);
