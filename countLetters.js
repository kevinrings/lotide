const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function (sentence) {
  const counts = {}; // Create an empty object to store the counts
  // Loop through each character in the sentence
  for (const char of sentence) {  
    // Skip spaces
    if (char === ' ') {
      continue;
    }
    // If the character is already in the object, increment its count
    if (counts[char]) {
      counts[char] += 1;
    // Otherwise, add it to the object with a count of 1
    } else {
      counts[char] = 1;
    }
  }
  return counts; // Return the object of counts
}

console.log(countLetters("lighthouse in the house"));
