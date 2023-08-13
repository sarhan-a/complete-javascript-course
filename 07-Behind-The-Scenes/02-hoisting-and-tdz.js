'use strict'
// Hoisting examples for variables

console.log(person); // -> undefined (var are hoisted as undefined)
// console.log(job); // -> ReferenceError: Cannot access 'job' before initialization (this was called in tdz)
// console.log(year); // -> ReferenceError: Cannot access 'year' before initialization

var person = 'Drake';
let job = 'teacher';
const year = 1991;

// Hoisting examples for functions
console.log(addDecl(2, 3)); // -> 5 -> Only function declarations can be hoisted
// console.log(addExpr(2, 3)); -> Cannot access 'addExpr' before initialization (same as per variables examples, tdz error)
// console.log(addArrow(2, 3)); -> TypeError: addArrow is not a function (because var will always host as undefined, hence why 'undefined(2, 3) = not a function

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;
