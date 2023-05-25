// helps us to debug by highlighting "bad syntax" as errors as opposed to the code
// failing silently
// should be used globally at the begining of each script file
// forbids us to do some things (enforces the reserved jS keywords like 'interface' or 'private')
'use strict';
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // notice the missing 's'
// -> Uncaught ReferenceError: hasDriverLicense is not defined
if (hasDriversLicense) console.log("I can drive :)");

const interface = "Video";
// -> Uncaught SyntaxError: Unexpected strict mode reserved word

const private = "Ryan";
// -> Uncaught SyntaxError: Unexpected strict mode reserved word

// if we do not use strict mode as per above, we won't get the errors above
