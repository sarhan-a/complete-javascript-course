const age = 18;
if (age === 18) console.log("You are an adult"); // strict equality operator

// == loose equality operator - does perform type coercion

const age1 = "18"
if (age1 == 18) console.log("You are an adult") // will still be true
// avoid to use this one and use strict equality instead

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite); // string

if (favourite === 23) {
  console.log("Nice one, 23 is a nice number!")
} else if (favourite === 7) {
  console.log("7 is a lucky number")
} else {
  console.log("Number is not 23 or 7")
}

// strict inequality operator
if (favourite !== 23) console.log("Why not 23?");
