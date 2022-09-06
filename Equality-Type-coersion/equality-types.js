

/** LOOSE EQUALITY VS STRICT EQUALITY */

// Loose equality - checks for value only, not type
console.log(5 == '5') ;  // returns true
// Strict equality - checks for both type and value
console.log(5 ===' 5');  // returns false

/** TYPE CASTING */
// Casts a boolean type to number
const example = Number(false);      // returns 0
const example1 = Number(true);      // returns 1
const example2 = Number(false);     // returns 0

const bool1  = Boolean(1);      // returns true
const bool2 = Boolean(12);      // returns true
const bool3 = Boolean(0);       // returns false
console.log(bool3);

const string1 = String(10);       // returns '10'
const string2 = String(false);    // returns 'false'
console.log ( typeof string1);


/** Checking for null values */
const x = 5;

if (x === undefined || x === null)
    console.log(true);
// A neater way of achieving the same objective
if (x == null);