'use strict';

// if you use var below, than the Window object (global scope)
// will have a property 'firstName' - this can cause bugs when using 'this' kw
// var firstName = "Matilda"

const mark = {
  firstName: 'Mark',
  year: 1991,
  calcAge: function () {
    console.log(this); // the mark object
    console.log(2037 - this.year);

    // the below is a regular function call so 'this' will always be undefined
    // const isMillenial = function () {
    //   console.log(this); // undefined
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };
    // isMillenial();

    // solution 1 (pre ES6) we use a self variable that points to this kw before
    // the regular function
    // const self = this;   // self or that
    // const isMillenial = function () {
    // console.log(this);
    // console.log(this.year >= 1981 && this.year <= 1996);
    // };
    // isMillenial();

    // Solution 2 (ES6) -> use arrow function, here, this will look up to parent scope
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial(); // true
  },

  greet: () => console.log(`Hey, ${this.firstName}`),
};

mark.greet(); // -> Hey, undefined (arrow functions don't have 'this' keyword so
// in this case, 'this' refers to the Window object which is in the global scope

// to make this work, use a regular function
// greet: function() { console.log(`Hey, ${this.firstName}`)},

// Best Practice: never use an arrow function as a method, even when not using 'this' kw
mark.calcAge();

// arguments keyword - only available in regular functions
const addExpr = function (a, b) {
  console.log(arguments); // [Arguments] { '0': 2, '1': 5 }  [Arguments] { '0': 2, '1': 5, '2': 8, '3': 12 }
  return (a + b);
};

addExpr(2, 5);
addExpr(2, 5, 8, 12); // you can add more arguments than specified initially in fn

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8); // -> Uncaught ReferenceError: arguments is not defined
