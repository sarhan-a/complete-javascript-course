'use strict';
// for loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`FOR: Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// while loop
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

// while loop executes the code while only one condition is true
// more versatile, the counter is optional, the condition can be anything
// while loop only needs a condition

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
