'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output); // Mark,you are 32, born in 1991

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // creating NEW variable with the same name as outer scope's variable
      const firstName = 'Steven'
      // reassigning outer scope's variable
      output = 'NEW Output!'
      const str = `Oh, and you're a millenial, ${firstName}`; // firstName will be Steven here because Steven is in the current scope so the variable lookup stops here.
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); -> error: let and const are block scoped
    console.log(millenial); // -> true because var is not block scoped but function scoped
    // add(2, 3); // -> Error due to functions being block scoped in strict mode
    console.log(output); // -> NEW Output!
  }
  printAge();
  return age;
}

const firstName = "Mark";
calcAge(1991);
