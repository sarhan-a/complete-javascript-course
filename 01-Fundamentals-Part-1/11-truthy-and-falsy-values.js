// falsy values are values that are not exactly false but will become false
// if we try to convert them to a boolean
// 5 falsy values: 0, "", undefined, null, NaN
// any other values will convert to True if convered to Boolean (Truthy)

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Joe"));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean(NaN));

// conversion to Boolean is always implicit / not explicit - via Coercion

const money = 150;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
