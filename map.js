const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

// Testing
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

const results2 = map(words, word => word[0]);
assertArraysEqual(results2, ['g', 'c', 't', 'm', 't']); // should pass

const results3 = map(words, word => word.length);
assertArraysEqual(results3, [6, 7, 2, 5, 3]); // should pass

const results4 = map(words, word => word.toUpperCase());
assertArraysEqual(results4, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']); // should pass




