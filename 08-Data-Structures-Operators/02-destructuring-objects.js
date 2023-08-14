"use strict";

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
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})

// Order received! Garlic Bread and Risotto
// will be delivered to Via del Sole, 21 at 22:30

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
})

// Order received! Bruschetta and Pizza
// will be delivered to Via del Sole, 21 at 20:00 (differences from defaults value and lack of arguments)

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// in case we want the variable names to be diff than the obj property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

// setting default values in case we tried to read a property that does not exist on the object
// example: restaurant.menu -> undefined because there is no such property

const { menu = [], starterMenu: starters = [] } = restaurant
console.log(menu, starters);
// []
// (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// destructuring nested objects
const { fri: { open, close } } = openingHours;
console.log(open, close); // -> 11 23
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c); // -> 11, 23
