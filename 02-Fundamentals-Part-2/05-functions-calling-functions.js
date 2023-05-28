// calling one function from inside another function

'use strict';

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);


  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
// -> Juice with 8 pieces of apple and 12 pieces of orange


// REVIEW

const calcAge = function (birthYear) {
  return 2023 - birthYear;
}

const yearsUntilPension = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;

  } else {
    console.log(`${firstName} has already retired 🥳`)
    return -1;
  }

}

console.log(yearsUntilPension(1990, "Max"));
console.log(yearsUntilPension(1950, "John"));
