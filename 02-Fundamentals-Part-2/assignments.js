'use strict';

/*
LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
*/

function describeCountry(country, population, capitalCity) {
  const summary = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return summary;
}

const introEngland = describeCountry("England", "59", "London");
console.log(introEngland);

const introSpain = describeCountry("Spain", "45", "Madrid");
console.log(introSpain);

const introIreland = describeCountry("Ireland", "16", "Dublin");
console.log(introIreland);

/*
LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)
*/

function percentageOfWorld1(population) {
  return (population / 7900) * 100
}

const percentileSpain = percentageOfWorld1(47);
const percentileItaly = percentageOfWorld1(59);
const percentileEngland = percentageOfWorld1(56);
console.log(percentileSpain, percentileItaly, percentileEngland);


const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100
}

const percentileSpain2 = percentageOfWorld2(47);
const percentileItaly2 = percentageOfWorld2(59);
const percentileEngland2 = percentageOfWorld2(56);
console.log(percentileSpain2, percentileItaly2, percentileEngland2);

// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'

const percentageOfWorld3 = population => (population / 7900) * 100
const percentileSpain3 = percentageOfWorld3(47);
const percentileItaly3 = percentageOfWorld3(59);
const percentileEngland3 = percentageOfWorld2(56);
console.log(percentileSpain3, percentileItaly3, percentileEngland3);

/*
  LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
*/

const describePopulation = function (country, population) {
  const percentilePopulation = percentageOfWorld1(population);
  return `${country} has ${population} million people,
  which is about ${percentilePopulation}% of the world.`
}

console.log(describePopulation("Japan", 125));
console.log(describePopulation("Finland", 5.5));
console.log(describePopulation("Thailand", 71.5));
