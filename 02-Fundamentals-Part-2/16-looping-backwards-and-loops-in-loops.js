'use strict';

const mrBond = [
  "James",
  "Bond",
  "Secret Service",
  "007",
  "Royal Navy Reserve Commander",
  2023 - 1960,
  ["M", "MoneyPenny", "Q"],
  true
];

// looping backwards from index 6 -> index 0

for (let i = mrBond.length - 1; i >= 0; i--) {
  console.log(mrBond[i]);
}

// loop within a loop

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`-----Starting exercise ${exercise}`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️‍♀️`);
  }
}
