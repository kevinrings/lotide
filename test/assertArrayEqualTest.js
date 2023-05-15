const assertArraysEqual = require('../assertArraysEqual')


// The message will be similar to that of assertEqual. In fact, you could refer to the code for assertEqual to help you implement this. Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison.

assertArraysEqual([1, 2, 3], [1, 2, 3]); // Output: ✅ Assertion Passed: 1,2,3 === 1,2,3
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Output: 🛑 Assertion Failed: 1,2,3 !== 3,2,1
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Output: ✅ Assertion Passed: 1,2,3 === 1,2,3
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Output: 🛑 Assertion Failed: 1,2,3 !== 1,2,3

// const assertArraysEqual = function(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// This function takes two arrays as arguments and compares them using JSON.stringify() method. If the arrays are equal, it logs a message that says “Assertion Passed” and if they are not equal, it logs a message that says “Assertion Failed”.