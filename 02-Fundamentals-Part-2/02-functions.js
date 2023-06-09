// a function in jS is a piece of code which can be re-used
// a function can hold one or more complete lines of code
// fundamental building blocks in jS programming
'use strict';
function logger() {
  console.log("My name is...Slim Shady");
}

logger(); // calling, running or invoking the function
logger();

// usuallt when we write functions we pass data onto the function (receive data)
// a function can alos return data

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
