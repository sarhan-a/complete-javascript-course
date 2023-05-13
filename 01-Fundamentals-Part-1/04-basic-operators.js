// An operator allows us to transform or combine values

// Arithmetic operators
const now = 2023;
const ageDean = now - 1990;
const ageHelen = now - 1988;
console.log(ageDean, ageHelen);

console.log(ageDean * 2, ageHelen / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 (exponentiation operator)

const firstName = "John";
const lastName = "Doe";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison operators
// >, <, >=, <=,
console.log(ageDean > ageHelen);
console.log(ageHelen >= 18);

const isAdultAge = ageHelen >= 18;
console.log(isAdultAge);
console.log(typeof isAdultAge); // comparison operators will return a boolean
