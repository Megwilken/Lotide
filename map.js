/*

Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the
results of the callback function.

copy eqArrays and assertArraysEqual functions
*/

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

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(eqArrays(results1, [ 'g', 'c', 't', 'm', 't' ]), true);

const results2 = map(words, word => word[1]);
console.log(results2);
assertArraysEqual(eqArrays(results2, [ 'r', 'o', 'o', 'a', 'o' ]), true);

const results3 = map(words, word => word[2]);
console.log(results3);
assertArraysEqual(eqArrays(results3, [ 'o', 'n', undefined, 'j', 'm' ]), true);