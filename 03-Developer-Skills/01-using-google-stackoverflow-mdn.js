'use strict';
// Problem 1:
/* We work for a company building a smart home thermometer. Our most recent task
is this: "Given an array of temperatures of one day, calculate the temperature
amplitude. Keep in mind that sometimes there might be a sensor error."
 */

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) understanding the problem
// - what is temp amplitude? answer: difference between highest and lowest temp
// - how to compute max and min temperatures?
// - what's a sensor error and what to do with that error?

// 2) breaking up into sub-problems
// - how to ignore errors?
// find max value in temp array
// find min value in temp array
// substract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2:
// Function should npow receive 2 arrays of temperatures

// 1) Understanind the problem
// - with 2 array, should we implement functionality twice? A: No! Just merge!

// 2) Breaking up into sub-problems
// - Merge 2 arrays and how to

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log('Amplitude new', amplitudeNew);
