const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// The message will be similar to that of assertEqual. In fact, you could refer to the code for assertEqual to help you implement this. Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison.

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // Output: ✅ Assertion Passed: 1,2,3 === 1,2,3
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // Output: 🛑 Assertion Failed: 1,2,3 !== 3,2,1
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Output: ✅ Assertion Passed: 1,2,3 === 1,2,3
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Output: 🛑 Assertion Failed: 1,2,3 !== 1,2,3