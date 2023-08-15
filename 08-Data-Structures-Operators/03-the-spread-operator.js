'use strict';

const arr = [7, 8, 9];
// suppose we want expand this array
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // -> [1, 2, 7, 8, 9]
// better way of doing it with spread operator
const newArr = [1, 2, ...arr]; // without the spread operator it would be one array inside the other
console.log(newArr); // -> [1, 2, 7, 8, 9]
// also used to log the individual elem of an array
console.log(...newArr); // = 1 2 7 8 9

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
    will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
};

const newMenu = [...restaurant.mainMenu, 'Arancini'];
console.log(newMenu);

// 2 Important use cases for spread operator

// Copy array (shallow)
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy); // -> ['Pizza', 'Pasta', 'Risotto']

// Join 2 arrays together
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); // -> ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

// the spread operator works on all iterable data structures like:
// - arrays, strings, maps, sets and even objects

const str = 'Zlatan';
const letters = [...str, '', 'I.'];
console.log(letters); // ['Z', 'l', 'a', 't', 'a', 'n', '', 'I.']
console.log(...str); // -> Zlatan

// real world example

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),  // Uncoment these 3 for functionality
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?")
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // not the best way
restaurant.orderPasta(...ingredients); // better with spread operator

// using spread op on objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Gino' };
console.log(newRestaurant); // original object data plus new data above

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // -> Ristorante Roma
console.log(restaurant.name); // -> Classico Italiano
