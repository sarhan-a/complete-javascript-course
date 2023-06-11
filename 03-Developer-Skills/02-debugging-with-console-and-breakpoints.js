const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) FIX the bug
    //value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // B) Find the bug
  console.log(measurement); // or 👇
  console.table(measurement); // -> same as above but represented in a table

  // console.log(measurement.value); or 👇
  // console.error(measurement.value);  -> similar to cl but highlighted in red

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) Identify the problems
console.log(measureKelvin());

// Troubleshoot via breabpoints in the browser
// switch to the 'Sources' tab
// select the .js file that has the bug
// enter a breakpoint by clicking on the line number on the left side of code or
// or type 'debugger;' in the code itself to set the breakpoint
// reload and check the 3rd column on the right

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = 0;
  let min = 0; // -> the cause of the bug - min temperature is hardcoded
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY BUG
console.log(amplitudeBug);
