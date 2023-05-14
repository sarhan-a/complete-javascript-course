// template literals help to build strings & a better altenative to concatenation
const firstName = "John";
const job = "programmer";
const birthYear = 1988;
const year = 2023;
// concatenating strings & variables
const john = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(john);

// refactor with template literals
const johnNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(johnNew);

// multi-line string before ES6
console.log('This is a \n\
string with \n\
multiple \n\
lines')

// multi-line string with template literals
console.log(`This is a
string with
multiple
lines`);
