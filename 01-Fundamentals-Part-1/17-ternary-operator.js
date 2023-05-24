// the ternary (conditional) operator is similar to if/else statement but on only 1 line

const age = 23;
age >= 18 ? console.log("I like pina colada 🍸") :
  console.log("I like to drink water 🥛");

//using ternary to conditionally declare a variable
const drink = age >= 18 ? "pina colada 🍸" : "water 🥛";
console.log(drink);

// compared with if/ else statment

let drink2;
if (age >= 18) {
  drink2 = "pina colada 🍸";
} else {
  drink2 = "water 🥛";
}
console.log(drink2);

// it also is an expression (produces a value) (so we can use it inside template literals)
console.log(`I like to drink ${age >= 18 ? "pina colada 🍸" : "water 🥛"}`);
