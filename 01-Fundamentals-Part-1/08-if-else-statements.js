// we can take decisions in code by using if / else statements
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving licence 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years 😊`);
}

// if else controlled structure - allows more control over how code is executed

const birthYear = 1995;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
