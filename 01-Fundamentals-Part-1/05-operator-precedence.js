// Operator precedence determines how operators are parsed concerning each other
// Operators with higher precedence become the operands of operators with lower precedence
// MDN → https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
const now = 2023;
const ageDean = now - 1990;
const ageHelen = now - 1988;
console.log(now - 1990 > now - 1988); // subtraction has higher precedence

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10 (right to left associativity for assignments)
console.log(x, y);

const averageAge = (ageDean + ageHelen) / 2; // use grouping to control order
console.log(ageDean, ageHelen, averageAge);
