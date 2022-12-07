const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😭😭😭Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);


const flatten = function(firstArray) {
  let result = [];
  for (let i = 0; i < firstArray.length; i++) {
    if (Array.isArray(firstArray[i])) {
      result = result.concat(flatten(firstArray[i]));
    } else {
      result.push(firstArray[i]);
    }
  }
  return result;
};
// TEST CODE
console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;