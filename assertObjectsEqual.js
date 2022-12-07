// Implement eqObjects function
const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1).length;     // compare Object.keys
  const key2 = Object.keys(object2).length;
  if (key1 !== key2) {                          // if keys don't match return false
    return false;
  } else {
    for (let i = 0; i < key1.length; i++) {     // for loop to compare option values, return false if no match
      if (key1[i] !== key2[i]) {
        return false;
      }
    }
  }
  return true;                                  // else return true
};
// implement assertObjectsEqual function
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (actual === expected) {
    console.log("😍😍😍Assertion Passed: " + actual + " === " + expected);
  } else if (actual !== expected) {
    console.log("😭😭😭Assertion Failed: " + actual + " !== " + expected);
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true);  // =>true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false);  // => false

module.exports = assertObjectsEqual;