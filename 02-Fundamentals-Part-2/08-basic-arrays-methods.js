'use strict';

const friends = ["Mike", "Peter", "Jim"];
// add elements

// push - adds element(s) to the end of the array
// as a function, push, returns the new length of the array as per below
const newLength = friends.push("Helen");
console.log(friends); // -> ["Mike", "Peter", "Jim", "Helen"]
console.log(newLength); // -> 4

// unshift - adds element(s) to the start of the array
friends.unshift("Paul");
console.log(friends);

// remove elements
// pop - removes last element from an array.
// unlike push, pop returned value is the removed element
friends.pop(); // removes last element in the array
const popped = friends.pop();
console.log(popped);
console.log(friends);

// shift - removes element from the start of the array
// returns the element that was removed
friends.shift(); // first
console.log(friends);

// indexOf - to find the index number of an element in the array
console.log(friends.indexOf("Mike"));
console.log(friends.indexOf("Nat")); // -> not in array so it will log -1

// includes - will simpley return True if the element is in the array or False
console.log(friends.includes("Mike")); // -> true - uses strict equality!

if (friends.includes("Mike")) {
  console.log("You have a buddy called Mike");
}
