'use strict';

// function declaration

function calcAge1(birthYear) {
  return 2023 - birthYear;
}

const age1 = calcAge1(1988);
console.log(age1);

// function expression

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
}

const age2 = calcAge2(1990);
console.log(age1, age2);

// the main difference between function declarions and expressions is that we
// can call the function before defining it in the case of declarations but we can't
// do this for function expression.
