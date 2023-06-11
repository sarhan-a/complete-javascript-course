/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

// 1) understanding the problem
// array transformed to string, separated by ...
// // order of temps in array is important:
//   i.e.: first temp in array is the temp in 1 day, 2nd is temp in 2nd day

// 2) breaking up into subproblems
// create an array for each data set
// create the printForecast function which uses the array as parameter
// iterate through the temperatures in the array and print message for each
// use template literals to output as string
// call the function with the dataset array as argument

const tempData1 = [17, 21, 23];
const tempData2 = [12, 5, -5, 0, 4];

let printForecast = function (arr) {
  let str = '... ';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log(str);
};

printForecast(tempData1);
