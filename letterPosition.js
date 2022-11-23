const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😭😭😭Assertion Failed: ${actual} !== ${expected}`);
  }
};
// TEST CODE

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);




// Implement letterPositions function
const letterPositions = function(sentence) {
//create empty variable to store results
  const results = {};
  //For.. Let Loop
  for (let i = 0; i < sentence.length; i++) {
//for multiple characters - push characters instead of writing over them
    if (results[sentence[i]] && results[sentence[i]].length) {
      results[sentence[i]].push[i];
// for single characters
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};
//TEST CODE
console.log(letterPositions("Hello"));
assertArraysEqual(letterPositions("Hello").e, [1]);