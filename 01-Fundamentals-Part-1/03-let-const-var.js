// use let to declare variables that would change later
let age = 30;
age = 31; // reassigning a value to the age variable / mutate age variable

// we can also declare empty variables with let
let year;
year = 2023;

// use const to declare variables that are not supposed to change at any time
const birthYear = 1991;

// 👇 will return a TypeError as const creates an immutable variable
// birthYear = 1990;

// 👇 can't use const to declare empty variables
// const job; ->  will throw SyntaxError as const variables must be initialized in decl.

// var should not be used but we must be aware how it works for legacy reasons
var job = "programmer"; // var keyword is the old way of declaring variables
job = "engineer";
//Difference between let and var is that let is block scoped while var is function scoped

// 👇❌ Assigning values to variables without declaring them is not recommended
// because JS will create a property on the global object as opposed to current scope
lastName = "Doe";
console.log(lastName);

// best practice: use const by default and let only if you are 100% sure it would change
// aim to have as little variable mutations as possible.
