'use strict'
console.log(this); //-> Window global object (only visible in browser console)

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined
};
calcAge(1990);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // Window global object (only visible in browser console) because arrow functions don't have 'this' keyword so 'this' here links to the lexical context (the parent element which is the global scope)
};
calcAgeArrow(1980);

const mark = {
  year: 1991,
  calcAge: function () {
    console.log(this); // Points to Jonas object
    console.log(2037 - this.year);
  },
};
mark.calcAge(); // because the object mark called the function, 'this' points to mark

const matilda = {
  year: 2017,
};
// Method borrowing
matilda.calcAge = mark.calcAge;
matilda.calcAge(); // → It will calculate with the birth year of Matilda

const f = mark.calcAge();
f(); // → Regular function calling there is no owner and 'this' keyword is undefined
