// in JS every value is either an object or a primitive value
let javaScriptIsFun = true;
console.log(true);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 20);
console.log(typeof "Mike");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1990;
console.log(typeof year);

console.log(typeof null); // will return object but this is known bug

/*
  there are 7 primitive data types
    1. Number - floating point numbers - used for decimals and integers
    2. String - a sequence of characters - used for text (use quotes)
    3. Boolean - logical type that can only be true or false.
    4. Undefined - value taken by a varuavke that is not yet defined (empty)
    5. Null - also means 'empty value'
    6. Symbol - from ES2015 - value that is unique anc can't be changed
    7. BigInt - from ES2020 - larger integers than the Number type can hold
*/

/*
  JS is dinamically typed
    i.e. when creating a new variable we do not have to manually define data type
    of the value stored in a variable. Data types are determined automatically
  Distinction between variable and value:
    - in JS it's the value that has a type not the variable
      so that means that var just store values that have a type
*/
