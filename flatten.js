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

const flatten = function(source) {
  let flatt = [];
  for (let element of source) {
    if (Array.isArray(element)) {
      for (let item of element) {
        flatt.push(item);
      }
      continue;
    }
    flatt.push(element);
  }
  return flatt;
};

module.exports = flatten;

console.log(flatten([1, 2, [3, 4], 5, [6]])); // [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])

// const flatten = function(source) {
//   let flatt = [];
//   for (i = 0; i < source.length; i++) {
//     if (Array.isArray(source[i])) {
//       flatt = flatt.concat(flatten(source[i]));
//     } else {
//       flatt.push(source[i]);
//     }
//   }
//   return flatt;
// }

// console.log(flatten([1, 2, [3, 4], 5, [6]])); // [1, 2, 3, 4, 5, 6]