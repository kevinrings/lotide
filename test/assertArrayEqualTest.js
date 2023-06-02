const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual([1, 2, 3], [1, 2, 3]); // Output: ✅ Assertion Passed: 1,2,3 === 1,2,3
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Output: 🛑 Assertion Failed: 1,2,3 !== 3,2,1
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Output: ✅ Assertion Passed: 1,2,3 === 1,2,3
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Output: 🛑 Assertion Failed: 1,2,3 !== 1,2,3
