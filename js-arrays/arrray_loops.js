
const array = [1 , 23, 4, 5, 6, 8, 9];

/** --- traditional for loop
for (let i = 0; i < array.length; i++)
    console.log(array[i]);
 **/

// This is only used in cases where the array is not needed
for (const value of array)
    console.log(array[value]);

console.log("-----------------------------------------");
array.forEach(function(value, index){
    console.log(value, index)
    })