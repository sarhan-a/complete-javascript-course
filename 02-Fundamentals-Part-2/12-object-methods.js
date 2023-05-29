'use strict';
// objects can contain function expressions

const misterBond = {
  firstName: "James",
  lastName: "Bond",
  department: "Secret Service",
  codeNumber: "007",
  rank: "Royal Naval Reserve Commander",
  birthYear: 1968,
  allies: ["M", "Moneypenny", "Q"],
  isRetired: true,

  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // }

  // refactor the above to use the birtYear property already defined in object
  // with the help of 'this' keyword pointing to the object which calls the function

  // calcAge: function () {
  //   return 2023 - this.birthYear;
  // }

  // refactor to store the calcAge function result via 'this' and 'age' wihich is
  // a new poperty of the object
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${this.rank}
    and ${this.isRetired ? `he is retired` : "he is active"}.`
  }
};

// any function that is attached to an object, is called a method

// console.log(misterBond.calcAge(1968));
// console.log(misterBond["calcAge"](1968));
console.log(misterBond.calcAge());

console.log(misterBond.age);
console.log(misterBond.age);
console.log(misterBond.age);

// challenge
// "James is a 55 years old Royal Naval Reserve Commander and he is retired."

// via template literals
console.log(`${misterBond.firstName} is a ${misterBond.age} years old ${misterBond.rank}
and ${misterBond.isRetired ? `he is retired` : "he is active"}.`);
// via method inside the object
console.log(misterBond.getSummary());
