'use strict';

// an arrauy is a form of data structure that acts like a big container which contains
// variables which can be referenced later

// without array, we would have the tedious form of adding data as per below
const friend1 = "Mike";
const friend2 = "Peter";
const friend3 = "Jim";

// refactor by creating an array (literal syntax)
const friends = ["Mike", "Peter", "Jim"];
console.log(friends);

// alternative syntax for creating an array (based on Array function)
const years = new Array(1991, 1984, 2008, 2020);

// an array can hold as many values as we want and any value type

// extracting data from an array - via index / arrays are 0 based
console.log(friends[0]); // first element of the array is at index 0
console.log(friends[2]); // -> Jim

// finding the number of elements in an array
console.log(friends.length); // -> 3
// using the above to get the last element of the array
console.log(friends[friends.length - 1]); // -> Jim

// mutating data in an array - (replace element)
friends[2] = "Jay";
console.log(friends); // Replaces Jim with Jay

// Arrays can be mutated due to not being primitive value type
// However an array can't be replaced entirely
// friends =n ["Bob", "Alice"]; -> TyoeError - Assignment to constat var

// an array can hold different types of values and even an array inside of it

const firstName = "John"
const student = [firstName, "Doe", 2023 - 1984, "student", friends]
console.log(student);
console.log(student.length);

// Exercise
const calcAge = function (birthYear) {
  return 2023 - birthYear;
}

const birthYears = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[1]);
const age3 = calcAge(birthYears[2]);
const age4 = calcAge(birthYears[birthYears.length - 1]);
console.log(age1, age2, age3, age4);

const ages = [calcAge(birthYears[0]), calcAge(birthYears[1]),
calcAge(birthYears[birthYears.length - 1])];
console.log(ages);
