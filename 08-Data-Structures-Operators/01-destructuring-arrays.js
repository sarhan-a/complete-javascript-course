'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// retrieve each item in array without destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// destructuring
const [x, y, z] = arr;
console.log(x, y, z); // -> 2 3 4
console.log(arr); // [ 2, 3, 4 ] (destructuring won't affect the ortiginal array)

let [main, , secondary] = restaurant.categories; // notice we skipped the second element in the array
console.log(main, secondary); // Italian Vegetarian

// switching variables, we now want the main to be secondary and secondary main
// const temp = main; //  (temporarily store the main in temp)
// main = secondary; // (switch main as secondary)
// secondary = temp; // (secondary is now main via temp)
// console.log(main, secondary); // -> Vegetarian Italian

// easier way with destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary); // -> Vegetarian Italian

console.log(restaurant.order(2, 0)); // -> (2) ['Garlic Bread', 'Pizza']

// destructure and receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // -> Garlic Bread Pizza

// Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); //-> 2 [5, 6]

// destructuring inside destructuring

const nested2 = [2, 4, [5, 6]];
const [k, , [l, m]] = nested;
console.log(k, l, m); //-> 2 5 6

// Default values
const [p, q, r] = [8, 9];
console.log(p, q, r); // -> 8 9 undefined

// set default values to avoid undefined
const [t = 1, u = 1, v = 1] = [8, 9];
console.log(t, u, v); // -> 8 9 1
