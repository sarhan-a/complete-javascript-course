// basic boolean logic - AND, OR, NOT -> && || !

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision); // false
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense) // false

if (hasDriversLicense && hasGoodVision) {
  console.log("Jean is able to drive!");
} else {
  console.log("Someone else should drive...")
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Jean is able to drive!");
} else {
  console.log("Someone else should drive...")
}
