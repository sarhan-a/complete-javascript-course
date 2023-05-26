'use strict';
// arrow functions - introduced with ES6
// a special form of function expression that is shorter therefore faster to write

const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1989);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1983, "Hans"));
console.log(yearsUntilRetirement(1995, "Bob"));

// one main difference between arrow functions and declaration / expression functions
// is: the arrow functions do not get a 'this' keyword.
