// type conversion - manually convert from one type to another
// convert a string number to number
const inputYear = "1991";
console.log(Number(inputYear)); // 1991 as number
console.log(inputYear + 18); // 199118 as string
console.log(Number(inputYear) + 18); // 19 as number

console.log(Number("Joe")); // NaN - 'invalid number'
console.log(typeof NaN); // number which means 👆

// convert a number to string
console.log(String(25), 25);

// can only convert to Number, String and to Boolean (not to Null or Undefined)

// type coercion - JavaScript automatically converts types behind the sccenes
console.log("I am " + 23 + " years old"); // I am 23 years old -> as string
console.log("23" - "10" - 3); // 10 -> strings converted to numbers
console.log("23" + "10" + 3); // 23103 -> numbers converted to strings and concat
console.log("23" * "2"); // 46 -> strings converted to numbers
console.log("26" / "2"); // 13 -> strings converted to numbers

let n = "1" + 1; // 11 -> as a string
n = n - 1; // 10 -> as a number
console.log(n); // 10 -> as a number
