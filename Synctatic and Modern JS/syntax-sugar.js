/**
 * This module is about utilizing some unique features of Javascript to write more elegant Javascript code
 */

/** Example 1 - Inelegant syntax*/
const arr = [10, 20 ,30, 40];

const doubled = arr.map(double);
function double(num){
    return num*2;
}

console.log(doubled);

// Method 1 - Using anonymous functions
const doubled_ver1 = arr.map(function(num){ return num*2});
console.log(doubled_ver1);

// Method 2 - Using fat arrow functions
const doubled_ver2 = arr.map((num) => num * 2);
console.log(doubled_ver2);
console.log("---------------------------------------");

/** Example 2 - DESTRUCTURING ASSIGNMENT*/
// The idea is to get each array item into separate variables
const example_arr = [1, 2, 3, 4, 5];

// Non-sugar syntax - inelegant
const first = example_arr[0];
const second = example_arr[1];

// Sugar syntax
const [item1, item2, ...rest] = example_arr;
console.log(item1, item2);
console.log(example_arr);


console.log("............................");
console.log(" :=)Object destructuring assignment")
// Destructuring assignment using objects
const car = {
    manufacturer : "Ford",
    model : "Raptor",
    year : 2010
}

const { model } = car;
console.log(model)
// renaming one of the object keys and values, using destructuring assignment
const { year: year_made } = car;
console.log(year_made);


