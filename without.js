
const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😭😭😭Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual(1, 1);


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


// return new array with only those elements from source
// that are not present in itemsToRemove

const without = function(source, itemToRemove) {
  // source is 1,2,3
  // item to remove is 1,2
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemToRemove.length; j++) {
      if (source[i] !== itemToRemove[j]) {
        newArray.push(source[i]);
      }
    }
  }
  return newArray;
};
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
console.log(without([1, 2, 3], [1])); // => [2, 3]

    
