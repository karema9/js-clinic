/**
 * Helper functions
 * Iterates through array
 * @param array - an array of given number of elements
 */
var getElements = function iterate(array) {
    for (let i of array)
        console.log(i);
}

var display = (item) => console.log(item);

const nums = [12, 23, 34, 45, 54, 67 , 78];

// ============= SPLICING AND SLICING =======================
console.log(" Splicing elements");

getElements(nums.splice(2, 3));
nums.splice(1, 3);

// ==================== OTHER METHODS =======================
const subArray = nums.slice(0, 3)
display("Sliced elements :");
getElements(subArray);

// ================ CONCAT  ==========================
const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];
const newArr = num1.concat(num2);
display("Concatenated elements ||>");
getElements(newArr);

// ===================== = = = = = = = = = = = = = = = = = = = =
display("Reversed in an array ")
newArr.reverse();
getElements(newArr);